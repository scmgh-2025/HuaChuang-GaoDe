'use strict';
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const BASE_URL = process.env.QA_BASE_URL || 'http://localhost:3000/421/';
const VIDEO_DIR = path.join(__dirname, 'screenshots');
const OUTPUT_NAME = 'demo-headings.webm';

if (!fs.existsSync(VIDEO_DIR)) {
  fs.mkdirSync(VIDEO_DIR);
}

async function injectCursor(page) {
  await page.evaluate(() => {
    if (document.getElementById('demo-cursor')) return;
    const cursor = document.createElement('div');
    cursor.id = 'demo-cursor';
    cursor.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 3L19 12L12 13L9 20L5 3Z" fill="white" stroke="black" stroke-width="1.5" stroke-linejoin="round"/>
    </svg>`;
    cursor.style.cssText = `
      position: fixed; z-index: 999999; pointer-events: none;
      width: 24px; height: 24px;
      transition: left 0.1s, top 0.1s;
      filter: drop-shadow(1px 1px 2px rgba(0,0,0,0.3));
    `;
    cursor.style.left = '0px';
    cursor.style.top = '0px';
    document.body.appendChild(cursor);
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });
  });
}

async function injectSubtitleBar(page) {
  await page.evaluate(() => {
    if (document.getElementById('demo-subtitle')) return;
    const bar = document.createElement('div');
    bar.id = 'demo-subtitle';
    bar.style.cssText = `
      position: fixed; bottom: 0; left: 0; right: 0; z-index: 999998;
      text-align: center; padding: 12px 24px;
      background: rgba(0, 0, 0, 0.75);
      color: white; font-family: -apple-system, "Segoe UI", sans-serif;
      font-size: 16px; font-weight: 500; letter-spacing: 0.3px;
      transition: opacity 0.3s;
      pointer-events: none;
    `;
    bar.textContent = '';
    bar.style.opacity = '0';
    document.body.appendChild(bar);
  });
}

async function showSubtitle(page, text) {
  await page.evaluate((t) => {
    const bar = document.getElementById('demo-subtitle');
    if (!bar) return;
    if (t) {
      bar.textContent = t;
      bar.style.opacity = '1';
    } else {
      bar.style.opacity = '0';
    }
  }, text);
  if (text) await page.waitForTimeout(800);
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  
  const context = await browser.newContext({
    recordVideo: { dir: VIDEO_DIR, size: { width: 1280, height: 720 } },
    viewport: { width: 1280, height: 720 }
  });
  const page = await context.newPage();

  try {
    await page.goto(BASE_URL);
    await injectCursor(page);
    await injectSubtitleBar(page);

    await page.waitForTimeout(2000);
    await showSubtitle(page, 'Step 1 - Navigating to Main Practice section');
    
    // Scroll to the main practice section
    await page.evaluate(() => {
      const el = document.getElementById('main-practice');
      if(el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
    
    await page.waitForTimeout(2000);
    await showSubtitle(page, 'Step 2 - Showing Government Agent Heading (01)');
    
    // Hover over heading 1
    const heading1 = page.locator('text=01').locator('..');
    const box1 = await heading1.boundingBox();
    if(box1) {
      await page.mouse.move(box1.x + box1.width / 2, box1.y + box1.height / 2, { steps: 10 });
    }
    await page.waitForTimeout(2000);
    
    await showSubtitle(page, 'Step 3 - Showing Enterprise Agent Heading (02)');
    await page.evaluate(() => window.scrollBy({ top: 700, behavior: 'smooth' }));
    await page.waitForTimeout(1500);
    
    const heading2 = page.locator('text=02').locator('..');
    const box2 = await heading2.boundingBox();
    if(box2) {
      await page.mouse.move(box2.x + box2.width / 2, box2.y + box2.height / 2, { steps: 10 });
    }
    await page.waitForTimeout(2000);

    await showSubtitle(page, 'Step 4 - Showing Tourist Agent Heading (03)');
    await page.evaluate(() => window.scrollBy({ top: 800, behavior: 'smooth' }));
    await page.waitForTimeout(1500);
    
    const heading3 = page.locator('text=03').locator('..');
    const box3 = await heading3.boundingBox();
    if(box3) {
      await page.mouse.move(box3.x + box3.width / 2, box3.y + box3.height / 2, { steps: 10 });
    }
    await page.waitForTimeout(2000);

    await showSubtitle(page, 'Step 5 - Showing Iteration Heading (04)');
    await page.evaluate(() => window.scrollBy({ top: 700, behavior: 'smooth' }));
    await page.waitForTimeout(1500);
    
    const heading4 = page.locator('text=04').locator('..');
    const box4 = await heading4.boundingBox();
    if(box4) {
      await page.mouse.move(box4.x + box4.width / 2, box4.y + box4.height / 2, { steps: 10 });
    }
    await page.waitForTimeout(2500);

    await showSubtitle(page, 'Demo Complete');
    await page.waitForTimeout(1500);
    await showSubtitle(page, '');

  } catch (err) {
    console.error('DEMO ERROR:', err.message);
  } finally {
    await context.close();
    const video = page.video();
    if (video) {
      const src = await video.path();
      const dest = path.join(VIDEO_DIR, OUTPUT_NAME);
      try {
        fs.copyFileSync(src, dest);
        console.log('Video saved:', dest);
      } catch (e) {
        console.error('ERROR: Failed to copy video:', e.message);
      }
    }
    await browser.close();
  }
})();
