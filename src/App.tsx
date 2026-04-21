/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  Users, 
  Database, 
  TrendingUp, 
  Zap, 
  Smartphone, 
  LayoutDashboard, 
  Camera, 
  Coffee, 
  Hotel, 
  Stethoscope, 
  UserCircle,
  ArrowRight,
  CheckCircle2,
  Target,
  Globe,
  PieChart,
  MessageSquare,
  ChevronRight,
  ShieldCheck,
  Utensils,
  ShoppingBag,
  UtensilsCrossed,
  Activity,
  Bell,
  Layers,
  Building2,
  User,
  Bot,
  Sparkles,
  PlayCircle,
  Compass,
  Rocket
} from 'lucide-react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

const SectionTitle = ({ title, subtitle, light = false }: { title: string, subtitle?: string, light?: boolean }) => (
  <div className="mb-16 text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "text-3xl md:text-5xl font-bold tracking-tight mb-6",
        light ? "text-white" : "text-slate-900"
      )}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={cn(
          "text-lg md:text-xl max-w-3xl mx-auto leading-relaxed",
          light ? "text-slate-400" : "text-slate-600"
        )}
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="h-1.5 w-24 bg-blue-600 mx-auto mt-8 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)]"
    />
  </div>
);


const SectionHeading = ({ number, title, color = "blue" }: any) => {
  const colors = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100', line: 'bg-blue-500' },
    indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-100', line: 'bg-indigo-500' },
    fuchsia: { bg: 'bg-fuchsia-50', text: 'text-fuchsia-600', border: 'border-fuchsia-100', line: 'bg-fuchsia-500' },
    teal: { bg: 'bg-teal-50', text: 'text-teal-600', border: 'border-teal-100', line: 'bg-teal-500' },
  };
  const c = colors[color as keyof typeof colors] || colors.blue;
  return (
    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col md:flex-row items-start gap-6 mb-12 group"
    >
      <div className={cn("w-16 h-16 shrink-0 rounded-[1.25rem] flex items-center justify-center border shadow-sm group-hover:scale-110 transition-transform duration-500", c.bg, c.border)}>
        <span className={cn("text-3xl font-black", c.text)}>{number}</span>
      </div>
      <div>
        <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-relaxed tracking-tight group-hover:text-slate-700 transition-colors duration-300">
          {title}
        </h3>
        <div className={cn("h-1.5 w-12 mt-6 rounded-full opacity-80 transition-all duration-500 group-hover:w-24", c.line)} />
      </div>
    </motion.div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full glass border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/20">A</div>
              <span className="text-2xl font-bold tracking-tight text-slate-900">高德 <span className="text-blue-600">x</span> 华创云信</span>
            </div>
            <div className="hidden lg:flex items-center gap-10 text-sm font-bold text-slate-600 uppercase tracking-widest">
              <a href="#main-practice" className="hover:text-blue-600 transition-colors">主要做法</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={import.meta.env.BASE_URL + 'assets/1-1.jpg'} 
            alt="Hero Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-transparent to-slate-900/70" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-[0.3em] mb-8 backdrop-blur-md">
              <Zap className="w-4 h-4" /> 2026 战略合作方案
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tight text-white mb-8 leading-[1.1]">
              共建百万商户 <br />
              <span className="text-blue-400 drop-shadow-[0_0_30px_rgba(96,165,250,0.5)]">智能体生态</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
              将高德从导航入口升级为目的地消费入口。依托华创云信智能体组网技术，补齐B端深度服务短板，实现流量、数据与商业价值的全面共赢。
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-5 px-8 py-5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md shadow-xl">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white/20 bg-slate-800 overflow-hidden shadow-sm">
                      <img loading="lazy" src={`https://picsum.photos/seed/user${i}/100/100`} alt="user" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <div className="text-sm text-left">
                  <div className="font-black text-white text-lg">1,000,000+</div>
                  <div className="text-slate-300 font-medium">目标覆盖商户</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest">Scroll Down</span>
            <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
          </div>
        </motion.div>
      </section>

      {/* 主要做法 */}
      <section id="main-practice" className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle 
            title="主要做法--构建贵州全域智能体组网生态" 
          />

          <div className="space-y-32">
            {/* 1、 政府端 */}
            <div>
              <SectionHeading number="01" color="indigo" title="依托大模型技术，通过接入数据和调整算法打造出一套省市区通用的文旅部门智能平台。" />
              <div className="bg-white text-slate-900 rounded-[48px] p-12 relative overflow-hidden shadow-xl border border-slate-100">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[80px] opacity-70 -mr-20 -mt-20 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[80px] opacity-60 -ml-20 -mb-20 pointer-events-none"></div>
                
                <div className="grid lg:grid-cols-12 gap-16 relative z-10">
                  {/* 左侧文字描述区 */}
                  <div className="lg:col-span-5 space-y-12 flex flex-col justify-center">
                    <div>
                      <h4 className="text-2xl font-black text-indigo-600 mb-4 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-indigo-600"></div>从“看数据”到“能调度”</h4>
                      <ul className="space-y-3 text-slate-600 font-medium">
                        <li className="flex gap-3"><div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2.5 shrink-0"/> 客流、消费、产业数据统一汇聚</li>
                        <li className="flex gap-3"><div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2.5 shrink-0"/> 自动分析变化、主动预警，支持自然语言追问分析</li>
                        <li className="flex gap-3"><div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2.5 shrink-0"/> 移动端驾驶舱，实现“掌上决策”</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-2xl font-black text-indigo-600 mb-4 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-indigo-600"></div>多源数据深度整合</h4>
                      <p className="text-slate-600 font-medium leading-relaxed pl-5 border-l-2 border-indigo-100">
                        地图、运营商、OTA、公共数据等多源数据交叉验证，确保数据真实准确。
                      </p>
                    </div>

                    <div>
                      <h4 className="text-2xl font-black text-indigo-600 mb-4 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-indigo-600"></div>可层层穿透，协同推进</h4>
                      <ul className="space-y-3 text-slate-600 font-medium">
                        <li className="flex gap-3"><div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2.5 shrink-0"/> 省级 + 市州同步适配，从省一路点到具体景区</li>
                        <li className="flex gap-3"><div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2.5 shrink-0"/> 同步推进应急指挥调度平台</li>
                      </ul>
                    </div>

                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                      <h4 className="text-lg font-black text-slate-900 mb-2">真正给基层减负的“智能问策”</h4>
                      <p className="text-slate-500 mb-3 font-medium text-sm">让 AI 帮基层查资料、找政策、做整理</p>
                      <ul className="flex gap-4 text-indigo-600 text-sm font-bold">
                        <li className="bg-indigo-50 px-3 py-1 rounded-full">内部知识库快速应答</li>
                        <li className="bg-indigo-50 px-3 py-1 rounded-full">自动标注来源</li>
                      </ul>
                    </div>
                  </div>

                  {/* 右侧视觉展示区 */}
                  <div className="lg:col-span-7 relative flex items-center justify-center">
                    <div className="relative w-full max-w-[800px] h-[600px]">
                      
                      {/* PC端展示卡片 (背景层) */}
                      <div className="absolute top-4 right-0 w-[85%] group z-10">
                        <a href="https://glsw-provincescreen.aihuangxiaoxi.com/admin/#/index" target="_blank" rel="noopener noreferrer" className="block bg-white/80 backdrop-blur-xl rounded-2xl p-2 pb-6 border border-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] transition-transform duration-500 group-hover:-translate-y-2 hover:cursor-pointer">
                          <div className="flex gap-1.5 px-3 pt-1 pb-3">
                            <div className="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                          </div>
                          <div className="aspect-[16/10] bg-slate-100 rounded-xl overflow-hidden border border-slate-100/50">
                            <img src={import.meta.env.BASE_URL + "assets/gov-pc.png"} alt="PC端驾驶舱" className="w-full h-full object-cover" />
                          </div>
                        </a>
                        <div className="absolute -bottom-6 right-8 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-slate-100 flex items-center gap-2 text-indigo-600 font-bold text-sm">
                          <LayoutDashboard size={16} /> PC端管理后台
                        </div>
                      </div>

                      {/* 移动端展示卡片 (前景层) */}
                      <div className="absolute bottom-4 left-4 w-[35%] group z-20">
                        <a href="https://glsw-provincescreen.aihuangxiaoxi.com/h5/#/dashboard" target="_blank" rel="noopener noreferrer" className="block bg-slate-900 rounded-[3rem] p-2 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-4 border-slate-800 transition-transform duration-500 group-hover:-translate-y-4 group-hover:rotate-2 hover:cursor-pointer">
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-900 rounded-b-2xl z-30 flex justify-center items-center">
                             <div className="w-8 h-1 bg-slate-800 rounded-full"></div>
                          </div>
                          <div className="aspect-[9/19.5] bg-white rounded-[2.5rem] overflow-hidden border-4 border-black relative">
                            <img src={import.meta.env.BASE_URL + "assets/gov-mobile.png"} alt="移动端驾驶舱" loading="lazy" className="w-full h-full object-cover" />
                          </div>
                        </a>
                        <div className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-xl border border-slate-100 flex items-center gap-2 text-indigo-600 font-bold text-sm -rotate-12 group-hover:rotate-0 transition-transform">
                          <Rocket size={16} /> 移动端驾驶舱
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2、 企业端 */}
            <div>
              <SectionHeading number="02" color="blue" title="形成了一套技术领先的面向旅游行业多角色、可组网的智能体工具。" />
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: '景区智能体',
                    icon: MapPin,
                    items: ['智能导览与讲解', '票务分时预约', '客流预警引导'],
                    image: import.meta.env.BASE_URL + 'assets/景区智能体.png',
                    link: 'https://marsnowine-create.github.io/JQ-3.1/'
                  },
                  {
                    title: '酒店智能体',
                    icon: Hotel,
                    items: ['入住咨询与房型介绍', '智能推荐与周边服务', '客户关怀与满意度调查'],
                    image: import.meta.env.BASE_URL + 'assets/酒店智能体.jpg'
                  },
                  {
                    title: '餐饮智能体',
                    icon: UtensilsCrossed,
                    items: ['菜单推荐与口味偏好', '排队预约与在线取号', '优惠推送与食材溯源'],
                    image: import.meta.env.BASE_URL + 'assets/餐饮智能体.jpg'
                  },
                  {
                    title: '企业级自动驾驶智能体',
                    icon: LayoutDashboard,
                    items: ['AI主动干活，任务驱动人机协同', '简化数字角色，封装实用技能', '打破组织壁垒，以业务事件圆桌响应'],
                    image: import.meta.env.BASE_URL + 'assets/B端工作台.png',
                    isPC: false
                  }
                ].map((card, idx) => (
                  <div key={idx} className="bg-white rounded-[2.5rem] p-8 border border-slate-200 flex flex-col items-center text-center group hover:shadow-2xl transition-all duration-500">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shadow-sm mb-6 group-hover:scale-110 transition-transform">
                      <card.icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-black text-slate-900 mb-6">{card.title}</h4>
                    <div className="space-y-3 mb-8 text-left w-full flex-grow">
                      {card.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-slate-600 font-medium text-sm">
                          <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className={cn(
                      "w-full bg-slate-900 overflow-hidden shadow-xl relative rounded-[2rem] border-[4px] border-slate-900 group-hover:scale-105 transition-transform duration-500",
                      "aspect-[9/18]"
                    )}>
                      {card.title === '企业级自动驾驶智能体' ? (
                        <video 
                          src={import.meta.env.BASE_URL + 'assets/039d91d7bd61fab6c2525a87493d9d04.mp4'} 
                          className="w-full h-full object-cover"
                          autoPlay loop muted playsInline
                        />
                      ) : (
                        {card.link ? (
                          <a href={card.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full hover:opacity-90 transition-opacity">
                            <img loading="lazy" src={card.image} alt={card.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                          </a>
                        ) : (
                          <img loading="lazy" src={card.image} alt={card.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        )}
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3、 游客端 */}
            <div>
              <SectionHeading number="03" color="fuchsia" title="围绕游客服务需求，以“行程”为核心开发“黄小西”游客服务智能体。" />
              <div className="grid lg:grid-cols-12 gap-12 items-start bg-white p-12 rounded-[3rem] shadow-xl border border-slate-100">
                <div className="lg:col-span-7 space-y-12">
                  <div className="flex flex-col gap-y-12 justify-center h-full">
                    <div className="space-y-2">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="w-12 h-12 bg-violet-50 text-violet-600 rounded-xl flex items-center justify-center shrink-0">
                          <PlayCircle size={24} />
                        </div>
                        <h5 className="text-xl font-black text-slate-900">新首页 = 超级门户</h5>
                      </div>
                      <p className="text-slate-500 font-medium text-base pl-[64px]">用智能体替代传统功能入口</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shrink-0">
                          <Layers size={24} />
                        </div>
                        <h5 className="text-xl font-black text-slate-900">多智能体协同</h5>
                      </div>
                      <p className="text-slate-500 font-medium text-base pl-[64px]">不再是“一个机器人回答所有问题”</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="w-12 h-12 bg-fuchsia-50 text-fuchsia-600 rounded-xl flex items-center justify-center shrink-0">
                          <UserCircle size={24} />
                        </div>
                        <h5 className="text-xl font-black text-slate-900">个人专属智能体</h5>
                      </div>
                      <p className="text-slate-500 font-medium text-base pl-[64px]">“人人可参与”的服务生态</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center shrink-0">
                          <Compass size={24} />
                        </div>
                        <h5 className="text-xl font-black text-slate-900">主动预判需求</h5>
                      </div>
                      <p className="text-slate-500 font-medium text-base pl-[64px]">从“响应”转向“预判”</p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative w-[360px] h-[720px] rounded-[40px] overflow-hidden shadow-2xl border-[8px] border-slate-900 bg-white group">
                    <iframe 
                      src="https://arifinfirman788-blip.github.io/HuangxiaoxiV4.0/" 
                      className="w-full h-full border-0"
                      title="新版首页舞台"
                      scrolling="no"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; geolocation; microphone"
                      allowFullScreen
                    />
                    <div className="absolute inset-0 bg-slate-900/5 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm text-xs font-bold text-slate-500 flex items-center gap-2">
                        <PlayCircle size={14} /> 可交互演示
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4、 迭代升级 */}
            <div>
              <SectionHeading number="04" color="teal" title="以“统一迭代”思维代替“分散建设”思维，不断根据用户需求、数据反馈升级调整功能。" />
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { img: 'v1.png', title: '1.0 表单式提示词', desc: '功能清晰，偏工具被动响应' },
                  { img: 'v2.png', title: '2.0 预设问题引导', desc: '从工具逻辑向对话逻辑转变' },
                  { img: 'v3.png', title: '3.0 多数字分身卡片', desc: '角色化、人格化、服务分层' },
                  { img: 'v4.png', title: '4.0 能力直接前置', desc: '根据状态动态推荐智能体能力' }
                ].map((v, i) => (
                  <div key={i} className="bg-white rounded-[2rem] p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
                    <div className="aspect-[9/18] bg-slate-100 rounded-2xl overflow-hidden mb-6 relative border border-slate-200">
                      <img src={import.meta.env.BASE_URL + 'assets/' + v.img} alt={v.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="text-center">
                      <div className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold mb-3">
                        Version {i + 1}.0
                      </div>
                      <h4 className="text-lg font-black text-slate-900 mb-2">{v.title}</h4>
                      <p className="text-slate-500 text-sm font-medium">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-20 text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-16 items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-500/20">A</div>
              <span className="text-3xl font-black tracking-tight">高德 <span className="text-blue-600">x</span> 华创云信</span>
            </div>
            <div className="text-slate-500 text-sm font-medium text-center">
              © 2026 华创云信 & 高德地图 <br /> 战略合作项目组 · 联合发布
            </div>
            <div className="flex justify-center md:justify-end gap-10">
              <Globe className="w-6 h-6 text-slate-500 hover:text-white transition-colors cursor-pointer" />
              <Smartphone className="w-6 h-6 text-slate-500 hover:text-white transition-colors cursor-pointer" />
              <MessageSquare className="w-6 h-6 text-slate-500 hover:text-white transition-colors cursor-pointer" />
              <ShieldCheck className="w-6 h-6 text-slate-500 hover:text-white transition-colors cursor-pointer" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
