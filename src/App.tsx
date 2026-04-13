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
  Bell
} from 'lucide-react';
import { motion } from 'framer-motion';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell,
  AreaChart,
  Area
} from 'recharts';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for tailwind classes
function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

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

const Card = ({ children, className, ...props }: { children: React.ReactNode, className?: string, [key: string]: any }) => (
  <div className={cn("tech-card", className)} {...props}>
    {children}
  </div>
);

const PhoneFrame = ({ children, className, title }: { children: React.ReactNode, className?: string, title?: string }) => (
  <div className={cn("relative mx-auto border-slate-900 bg-slate-900 border-[12px] rounded-[3.5rem] h-[600px] w-[300px] shadow-2xl overflow-hidden group", className)}>
    {/* Notch */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-slate-900 rounded-b-3xl z-20 flex items-center justify-center">
      <div className="w-14 h-1.5 bg-slate-800 rounded-full" />
    </div>
    {/* Screen Content */}
    <div className="relative w-full h-full bg-slate-50 overflow-hidden">
      {children}
      {title && (
        <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 via-black/40 to-transparent text-white">
          <div className="text-[10px] font-bold opacity-70 uppercase tracking-widest mb-1">Live Preview</div>
          <div className="text-sm font-bold leading-tight">{title}</div>
        </div>
      )}
    </div>
    {/* Reflection Overlay */}
    <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 to-transparent opacity-40" />
  </div>
);

// --- Data ---

const growthData = [
  { name: '2026 Q2', merchants: 1, label: '贵州试点' },
  { name: '2026 Q3', merchants: 5, label: '西南5省' },
  { name: '2026 Q4', merchants: 10, label: '规模扩展' },
  { name: '2027 Q1', merchants: 30, label: '全国覆盖' },
  { name: '2027 Q2', merchants: 60, label: '生态爆发' },
  { name: '2027 Q4', merchants: 100, label: '百万目标' },
];

const revenueData = [
  { name: '基础订阅', value: 10, color: '#2563eb' },
  { name: '增值服务', value: 8, color: '#0d9488' },
];

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeDataSubTab, setActiveDataSubTab] = useState(0);
  const [activeContentTab, setActiveContentTab] = useState(0);
  const [activeMapStep, setActiveMapStep] = useState(0);
  const [activeCoopTab, setActiveCoopTab] = useState(0);
  const [activeEntrySubTab, setActiveEntrySubTab] = useState(0);
  const [activeBusinessTab, setActiveBusinessTab] = useState(0);
  const [activePilotTab, setActivePilotTab] = useState(0);

  const liveMapSteps = [
    { title: '开启活点模式', desc: '高德地图首页支持一键开启“活点地图”模式', image: './assets/4-2-1.png' },
    { title: '查看扫街榜', desc: '进入活点模式后查看“扫街榜”头部商户和达人', image: './assets/4-2-2.png' },
    { title: 'Pin 感兴趣活点', desc: '在地图上直接 Pin 住感兴趣的活点位置', image: './assets/4-2-3.png' },
    { title: '形成旅程清单', desc: '自动将已 Pin 的活点汇总形成初步旅程清单', image: './assets/4-2-4.png' },
    { title: '规划行程目的地', desc: '按照时间先后顺序智能规划清单中的行程目的地，并可放大每个目的地展示关联的活动、达人和打卡点', image: './assets/4-2-5-1.png', image2: './assets/4-2-5-2.png' },
    { title: '召唤黄小西', desc: '在行程页点“黄小西妙招”，进入智能体询价', image: './assets/4-2-6.png' },
    { title: '智能体询价', desc: '智能体依据行程实时推送相关优惠套餐', image: './assets/4-2-7.png' },
    { title: '打包购买', desc: '一键打包购买行程中的所有旅游产品并下单', image: './assets/4-2-8.png' },
    { title: '完成支付', desc: '完成支付并生成订单，支持一键导航前往', image: './assets/4-2-9.png' },
  ];

  const ecosystemTabs = [
    { id: 0, label: '商户层 (智能体部署)' },
    { id: 1, label: '服务层 (陪伴式服务)' },
    { id: 2, label: '数据层 (数据融合产品)' },
  ];

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
              <a href="#goals" className="hover:text-blue-600 transition-colors">合作背景</a>
              <a href="#ecosystem" className="hover:text-blue-600 transition-colors">智能体生态</a>
              <a href="#business" className="hover:text-blue-600 transition-colors">商业模式</a>
              <a href="#innovative" className="hover:text-blue-600 transition-colors">合作内容</a>
              <a href="#cooperation" className="hover:text-blue-600 transition-colors">合作模式</a>
              <a href="#pilot" className="hover:text-blue-600 transition-colors">试点计划</a>
              <a href="#roadmap" className="hover:text-blue-600 transition-colors">后续计划</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="./assets/1-1.png" 
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
              <a href="#pilot" className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-3 hover:bg-blue-500 transition-all shadow-[0_20px_50px_rgba(37,99,235,0.3)] hover:scale-105 active:scale-95">
                查看试点计划 <ArrowRight className="w-6 h-6" />
              </a>
              <div className="flex items-center gap-5 px-8 py-5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md shadow-xl">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white/20 bg-slate-800 overflow-hidden shadow-sm">
                      <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="user" referrerPolicy="no-referrer" />
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
        
        {/* Scroll Indicator */}
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

      {/* 一、合作背景与目标 */}
      <section id="goals" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="一、合作背景与目标" 
            subtitle="高德流量入口与华创深度服务的深度耦合，构建从导航到经营的闭环生态。"
          />
          
          <div className="grid md:grid-cols-2 gap-10 mb-20">
            <Card className="bg-slate-50 border-none p-10 hover:bg-blue-50 transition-colors group">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                  <Navigation className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">高德：从工具到伙伴</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    补齐B端深度服务，突破“商户通”广告位售卖的局限，触及经营决策、内部协同与客户维系，成为商户信赖的经营伙伴。
                  </p>
                </div>
              </div>
            </Card>
            <Card className="bg-slate-50 border-none p-10 hover:bg-teal-50 transition-colors group">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-teal-600 rounded-2xl text-white shadow-lg shadow-teal-500/20 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">华创：从样板到规模</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    接入高德海量公域流量，将多角色智能体组网技术从“项目样板间”推向规模化市场。
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 hidden md:block" />
            <div className="grid md:grid-cols-3 gap-10 relative z-10">
              {[
                { phase: '试点期', time: '2026 Q2', target: '1万家商户', region: '贵州试点', icon: Target, color: 'blue' },
                { phase: '扩展期', time: '2026 Q3-Q4', target: '10万家商户', region: '西南5省', icon: Globe, color: 'teal' },
                { phase: '全国推广期', time: '2027', target: '100万+商户', region: '全国覆盖', icon: TrendingUp, color: 'indigo' },
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl text-center hover:shadow-2xl transition-shadow"
                >
                  <div className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-xl",
                    item.color === 'blue' ? "bg-blue-600 shadow-blue-500/30" : 
                    item.color === 'teal' ? "bg-teal-600 shadow-teal-500/30" : "bg-indigo-600 shadow-indigo-500/30"
                  )}>
                    <item.icon className="w-8 h-8" />
                  </div>
                  <div className={cn("font-bold text-xs mb-2 uppercase tracking-widest", 
                    item.color === 'blue' ? "text-blue-600" : 
                    item.color === 'teal' ? "text-teal-600" : "text-indigo-600"
                  )}>{item.phase}</div>
                  <div className="text-3xl font-black text-slate-900 mb-3">{item.target}</div>
                  <div className="text-slate-500 font-medium">{item.time} · {item.region}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 二、“百万商户智能体生态”介绍 */}
      <section id="ecosystem" className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle 
            title="二、“百万商户智能体生态”介绍" 
            subtitle="构建商户部署、服务革新与数据融合的完整生态体系。"
          />

          {/* Tab Navigation */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex p-1.5 bg-slate-100 rounded-full shadow-inner">
              {ecosystemTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "px-8 py-3 rounded-full text-sm font-bold transition-all duration-300",
                    activeTab === tab.id 
                      ? "bg-white text-blue-600 shadow-md" 
                      : "text-slate-500 hover:text-slate-700"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {activeTab === 0 && (
              <div className="space-y-16">
                <div className="bg-white rounded-[3rem] p-12 shadow-xl border border-slate-100">
                  <h3 className="text-3xl font-black text-slate-900 mb-8">商户智能体核心能力模块</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                      { t: '前台接待模块', d: '7×24小时自动应答，处理预订咨询、营业时间、路线指引等高频问题' },
                      { t: '经营分析模块', d: '实时展示客流、订单、营收数据，提供经营健康度诊断' },
                      { t: '客户管理模块', d: '记录客户偏好、消费历史，支持会员管理和精准召回' },
                      { t: '营销推送模块', d: '基于场景自动触发优惠推送、活动提醒' }
                    ].map((m, i) => (
                      <div key={i} className="space-y-3">
                        <div className="font-black text-blue-600 flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-blue-600" />
                          {m.t}
                        </div>
                        <p className="text-slate-500 text-sm font-medium leading-relaxed">{m.d}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: '景区智能体',
                    icon: MapPin,
                    items: ['智能导览与讲解', '票务分时预约', '客流预警引导'],
                    image: './assets/景区智能体.png'
                  },
                  {
                    title: '酒店智能体',
                    icon: Hotel,
                    items: ['入住咨询与房型介绍', '智能推荐与周边服务', '客户关怀与满意度调查'],
                    image: './assets/酒店智能体.jpg'
                  },
                  {
                    title: '餐饮智能体',
                    icon: UtensilsCrossed,
                    items: ['菜单推荐与口味偏好', '排队预约与在线取号', '优惠推送与食材溯源'],
                    image: './assets/餐饮智能体.jpg'
                  },
                  {
                    title: '个人智能体',
                    icon: UserCircle,
                    items: ['AI帮讲故事', '24h在线接待', '咨询秒回撮合'],
                    image: './assets/个人智能体.png'
                  },
                  {
                    title: '诊所/药店智能体',
                    icon: Activity,
                    items: ['预约挂号与候诊提醒', '健康咨询与用药指导', '院内导航与位置指引'],
                    image: './assets/f1efe81fedc99b52ae2b2b70ce91be1e.png',
                    isPC: true
                  },
                  {
                    title: 'B端工作台',
                    icon: LayoutDashboard,
                    items: ['经营数据看板', '客户画像管理', '营销工具配置'],
                    image: './assets/B端工作台.png',
                    isPC: false
                  }
                ].map((card, idx) => (
                  <div key={idx} className="bg-slate-50/50 rounded-[2.5rem] p-10 border border-slate-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm mb-8 group-hover:scale-110 transition-transform">
                      <card.icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-2xl font-black text-slate-900 mb-8">{card.title}</h4>
                    <div className="space-y-4 mb-12 text-left w-full">
                      {card.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-slate-600 font-medium text-sm">
                          <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                          </div>
                          {item}
                        </div>
                      ))}
                    </div>
                    <div className={cn(
                      "w-full bg-slate-900 overflow-hidden shadow-2xl relative group-hover:scale-105 transition-transform duration-500",
                      card.isPC 
                        ? "aspect-video rounded-xl border-[4px] border-slate-800" 
                        : "max-w-[200px] aspect-[9/18] rounded-[2.5rem] border-[6px] border-slate-900"
                    )}>
                      <img src={card.image} alt={card.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                  </div>
                ))}
                </div>
              </div>
            )}

            {activeTab === 1 && (
              <div className="grid lg:grid-cols-3 gap-16 items-start">
                <div className="space-y-10">
                  <div>
                    <h3 className="text-4xl font-black text-slate-900 mb-6">C端服务形态革新</h3>
                    <div className="space-y-4">
                      <p className="text-slate-900 font-black text-xl">从"被动搜索"变为"主动陪伴式服务"：</p>
                      <p className="text-slate-600 text-lg leading-relaxed">用户无需主动搜索，智能体基于用户位置和行程主动推送服务。</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {['全域欢迎推送', '行程智能规划', '节点主动连接', '全程陪伴服务'].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-white hover:shadow-lg transition-all">
                        <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-6 h-6 text-teal-500" />
                        </div>
                        <span className="text-slate-700 font-bold">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <div className="w-full aspect-video rounded-[3rem] bg-slate-900 overflow-hidden shadow-2xl border-[12px] border-slate-900 relative group">
                    <img src="https://picsum.photos/seed/service-169/1280/720" alt="Service Visualization" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-10 left-10 right-10">
                      <div className="text-white font-black text-3xl mb-3">主动陪伴式服务界面</div>
                      <p className="text-teal-300 text-lg font-medium max-w-xl">
                        实时感知用户行程节点，在关键时刻提供精准的导览、预订与管家服务，将导航升级为全方位的旅程陪伴。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 2 && (
              <div className="grid lg:grid-cols-3 gap-16 items-start">
                <div className="space-y-10">
                  <div>
                    <h3 className="text-4xl font-black text-slate-900 mb-6">数据融合产品</h3>
                    <p className="text-slate-900 font-black text-lg mb-4">融合高德交通数据+我方消费数据，产出以下数据产品，提供精准洞察：</p>
                    <div className="space-y-4">
                      {[
                        { t: '商户选址报告', d: '基于客流热力、竞品分布、消费能力等数据，为新开店提供选址建议' },
                        { t: '客流分析看板', d: '预测未来7天客流趋势，帮助商户提前调配人力和库存' },
                        { t: '消费偏好画像', d: '分析到店用户的来源地、车型、消费习惯，指导产品设计和定价' },
                        { t: '精准营销建议', d: '基于用户画像，推荐最佳营销时机和触达方式' }
                      ].map((item, i) => (
                        <div key={i} className="flex gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 shrink-0" />
                          <div>
                            <div className="font-black text-slate-900 text-sm">{item.t}</div>
                            <div className="text-slate-500 text-xs font-medium">{item.d}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      { id: 0, label: '丰富的数据产品' },
                      { id: 1, label: '餐厅精准营销' },
                      { id: 2, label: '酒店定价建议' },
                      { id: 3, label: '景区错峰引导' }
                    ].map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => setActiveDataSubTab(sub.id)}
                        className={cn(
                          "w-full text-left px-6 py-4 rounded-2xl font-bold transition-all flex items-center justify-between group",
                          activeDataSubTab === sub.id 
                            ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20" 
                            : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                        )}
                      >
                        {sub.label}
                        <ChevronRight className={cn("w-5 h-5 transition-transform", activeDataSubTab === sub.id ? "translate-x-1" : "opacity-0")} />
                      </button>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-slate-100">
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">点击上方按钮切换详情展示</p>
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <motion.div
                    key={activeDataSubTab}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full aspect-video rounded-[3rem] bg-slate-900 overflow-hidden shadow-2xl border-[12px] border-slate-900 relative group"
                  >
                    <img 
                      src={
                        activeDataSubTab === 0 ? "https://picsum.photos/seed/data-products/1280/720" :
                        activeDataSubTab === 1 ? "https://picsum.photos/seed/rest-marketing/1280/720" :
                        activeDataSubTab === 2 ? "https://picsum.photos/seed/hotel-pricing/1280/720" :
                        "https://picsum.photos/seed/scenic-flow/1280/720"
                      } 
                      alt="Data Visualization" 
                      className="w-full h-full object-cover opacity-80" 
                      referrerPolicy="no-referrer" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-10 left-10 right-10">
                      <div className="text-white font-black text-3xl mb-3">
                        {activeDataSubTab === 0 ? '全域数据产品矩阵' :
                         activeDataSubTab === 1 ? '餐厅精准营销看板' : 
                         activeDataSubTab === 2 ? '酒店定价建议系统' : '景区错峰引导平台'}
                      </div>
                      <p className="text-indigo-300 text-lg font-medium max-w-xl">
                        {activeDataSubTab === 0 ? '整合交通热力、消费偏好、职住分布等多维数据，为企业提供全方位的数字化决策支持。' :
                         activeDataSubTab === 1 ? '基于周边客流画像，为餐厅提供精准的优惠券发放与菜品推荐建议。' : 
                         activeDataSubTab === 2 ? '结合区域交通热度与竞争对手动态，智能生成最优房价调整策略。' : 
                         '实时监控景区饱和度，通过高德导航主动引导游客错峰游览，提升体验。'}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* 三、商业模式 */}
      <section id="business" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="三、商业模式" 
            subtitle="“先服务再卖货”，建立信任后再推荐付费服务，转化率提升3-5倍。"
          />

          <div className="flex justify-center mb-16">
            <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl">
              {[
                { id: 0, label: '旅拍服务场景', icon: Camera },
                { id: 1, label: '餐饮套餐场景', icon: Coffee },
                { id: 2, label: '酒店升级场景', icon: Hotel }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveBusinessTab(tab.id)}
                  className={cn(
                    "px-6 py-3 rounded-xl text-sm font-black transition-all flex items-center gap-2",
                    activeBusinessTab === tab.id 
                      ? "bg-white text-blue-600 shadow-sm" 
                      : "text-slate-500 hover:text-slate-900"
                  )}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            key={activeBusinessTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {[
              {
                title: '旅拍服务场景',
                steps: [
                  { t: '服务', d: '推送“免费智能旅拍助手”，提供AI构图指导。' },
                  { t: '互动', d: '用户使用助手拍摄，AI生成打卡建议。' },
                  { t: '转化', d: '拍摄完成后，推送“专业旅拍服务”套餐。' }
                ],
                icon: Camera,
                color: 'blue',
                image: './assets/3-1旅拍.png',
                displayTitle: 'AI 旅拍助手界面',
                displayDesc: '实时构图指导、光影优化建议，让普通游客也能拍出专业级大片，通过高价值服务建立品牌信任。'
              },
              {
                title: '餐饮套餐场景',
                steps: [
                  { t: '服务', d: '到达停车场，推送“智能停车导航”。' },
                  { t: '互动', d: '停车后推送“附近餐厅优惠套餐”含停车抵扣。' },
                  { t: '转化', d: '进入智能体查看评价，推送“今日特惠套餐”。' }
                ],
                icon: Coffee,
                color: 'teal',
                image: './assets/3-2餐饮.png',
                displayTitle: '智能餐饮转化界面',
                displayDesc: '结合停车状态与地理位置，在用户最需要休息与用餐的时刻，精准推送周边餐厅的场景化优惠。'
              },
              {
                title: '酒店升级场景',
                steps: [
                  { t: '服务', d: '到达酒店，主动提供“入住指南+周边地图”。' },
                  { t: '互动', d: '办理入住后，智能体进行入住关怀。' },
                  { t: '转化', d: '推送“江景房限时升级优惠”，实现二消。' }
                ],
                icon: Hotel,
                color: 'orange',
                image: './assets/3-3酒店.png',
                displayTitle: '酒店二次消费转化',
                displayDesc: '在办理入住后的黄金服务时刻，通过智能体主动推送房型升级、特色餐饮或SPA优惠，提升客单价。'
              }
            ].filter((_, i) => i === activeBusinessTab).map((scene, idx) => (
              <div key={idx} className="grid lg:grid-cols-4 gap-16 items-start">
                <div className="space-y-6">
                  <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-slate-100 relative overflow-hidden group">
                    <div className={cn(
                      "absolute top-0 right-0 w-32 h-32 blur-3xl opacity-10 -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700",
                      scene.color === 'blue' ? "bg-blue-600" :
                      scene.color === 'teal' ? "bg-teal-600" : "bg-orange-600"
                    )} />
                    
                    <div className="flex items-center gap-4 mb-10 relative z-10">
                      <div className={cn("p-3 rounded-2xl shadow-lg", 
                        scene.color === 'blue' ? "bg-blue-600 text-white" :
                        scene.color === 'teal' ? "bg-teal-600 text-white" : "bg-orange-600 text-white"
                      )}>
                        <scene.icon className="w-6 h-6" />
                      </div>
                      <h4 className="font-black text-2xl text-slate-900 tracking-tight">{scene.title}</h4>
                    </div>

                    <div className="space-y-12 relative">
                      <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-slate-100" />
                      {scene.steps.map((step, i) => (
                        <div key={i} className="flex gap-6 relative z-10">
                          <div className={cn(
                            "w-12 h-12 rounded-2xl flex items-center justify-center text-sm font-black shrink-0 shadow-xl transition-transform hover:scale-110",
                            step.t === '服务' ? "bg-blue-50 text-blue-600 border border-blue-100" : 
                            step.t === '互动' ? "bg-teal-50 text-teal-600 border border-teal-100" : "bg-orange-50 text-orange-600 border border-orange-100"
                          )}>
                            {i + 1}
                          </div>
                          <div className="pt-1">
                            <div className={cn("text-[12px] font-black uppercase tracking-[0.2em] mb-2 px-3 py-1 rounded-md inline-block",
                              step.t === '服务' ? "bg-blue-50 text-blue-600" : 
                              step.t === '互动' ? "bg-teal-50 text-teal-600" : "bg-orange-50 text-orange-600"
                            )}>{step.t}</div>
                            <p className="text-slate-600 font-bold leading-relaxed text-sm">{step.d}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="px-8 py-4 bg-slate-900/5 rounded-2xl border border-slate-200/50 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-black text-slate-500 uppercase tracking-widest">场景化实时转化中</span>
                  </div>
                </div>

                <div className="lg:col-span-3">
                  <div className="w-full aspect-video rounded-[3rem] bg-slate-900 overflow-hidden shadow-2xl border-[12px] border-slate-900 relative group">
                    <img src={scene.image} alt={scene.displayTitle} className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-10 left-10 right-10">
                      <div className="text-white font-black text-3xl mb-3">{scene.displayTitle}</div>
                      <p className={cn("text-lg font-medium max-w-xl", 
                        scene.color === 'blue' ? "text-blue-300" :
                        scene.color === 'teal' ? "text-teal-300" : "text-orange-300"
                      )}>
                        {scene.displayDesc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 四、合作内容 */}
      <section id="innovative" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="四、合作内容" 
            subtitle="依托高德空间智能技术与云信B端生态，共建数字化文旅新体验。"
          />

          <div className="flex justify-center mb-16">
            <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl">
              {[
                { id: 0, label: '节点智能推送' },
                { id: 1, label: '超时空活点地图' },
                { id: 2, label: 'AI 名片展示' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveContentTab(tab.id)}
                  className={cn(
                    "px-8 py-3 rounded-xl text-sm font-black transition-all",
                    activeContentTab === tab.id 
                      ? "bg-white text-blue-600 shadow-sm" 
                      : "text-slate-500 hover:text-slate-900"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            key={activeContentTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {activeContentTab === 0 && (
              <div className="grid lg:grid-cols-2 gap-24 items-center">
                <div className="space-y-10">
                  <div className="group">
                    <div className="flex items-center gap-5 mb-8">
                      <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-orange-500/20">
                        <Bell className="w-8 h-8" />
                      </div>
                      <h3 className="text-3xl font-black text-slate-900">节点智能推送</h3>
                    </div>
                    <p className="text-slate-600 mb-10 text-xl leading-relaxed">
                      基于 LBS 地理围栏技术，在用户旅程的关键节点（到达景区、进入酒店、停车就餐）主动推送智能体服务。
                    </p>
                    <div className="grid grid-cols-2 gap-5">
                      {[
                        '到达触发：欢迎语+导览',
                        '驻留触发：深度体验推荐',
                        '离开触发：评价邀请+返程建议',
                        '跨端同步：高德App实时推送'
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-200 text-sm font-bold text-slate-700 shadow-sm hover:border-orange-300 transition-colors">
                          <div className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden w-full max-w-lg">
                    <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
                      <h4 className="text-lg font-black text-slate-900">推送策略-服务场景匹配</h4>
                    </div>
                    <div className="divide-y divide-slate-100">
                      {[
                        { type: '全域级推送', trigger: '飞机/高铁落地贵州后首次打开高德', content: '黄小西欢迎页+行程规划服务+消费券领取', target: '建立服务入口认知' },
                        { type: '目的地级推送', trigger: '到达黄果树停车场/酒店周边', content: '对应场景智能体（景区/酒店智能体）', target: '提供即时服务' },
                        { type: '行程级推送', trigger: '根据用户已规划行程，在对应时间节点', content: '下一站提醒+预约服务+交通建议', target: '行程串联服务' },
                        { type: '行为级推送', trigger: '搜索"贵州攻略"/"黄果树门票"/“贵州饭店”等', content: '相关产品包+智能体入口', target: '需求即时响应' }
                      ].map((item, idx) => (
                        <div key={idx} className="p-6 hover:bg-slate-50 transition-colors">
                          <div className="flex items-center justify-between mb-3">
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold">
                              {item.type}
                            </span>
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-2 py-1 rounded-md">
                              {item.target}
                            </span>
                          </div>
                          <div className="space-y-2">
                            <div>
                              <span className="text-xs font-bold text-slate-400 block mb-1">触发条件</span>
                              <div className="text-sm font-medium text-slate-700">{item.trigger}</div>
                            </div>
                            <div>
                              <span className="text-xs font-bold text-slate-400 block mb-1">推送内容</span>
                              <div className="text-sm font-bold text-slate-900">{item.content}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeContentTab === 1 && (
              <div className="grid lg:grid-cols-2 gap-24 items-center">
                <div className="space-y-10">
                  <div className="group">
                    <div className="flex items-center gap-5 mb-8">
                      <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-500/20">
                        <MapPin className="w-8 h-8" />
                      </div>
                      <h3 className="text-3xl font-black text-slate-900">超时空活点地图</h3>
                    </div>
                    <p className="text-slate-600 mb-10 text-xl leading-relaxed">
                      从单纯的地理位置导航，延展为包含时间、活动与人群的旅程体验设计。促使用户“多去一地、多见一人、多留一天”。
                    </p>
                    
                    <div className="space-y-3">
                      {liveMapSteps.map((step, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveMapStep(i)}
                          className={cn(
                            "w-full text-left px-6 py-4 rounded-2xl font-bold transition-all flex items-center gap-4 group",
                            activeMapStep === i 
                              ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20" 
                              : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                          )}
                        >
                          <div className={cn(
                            "w-8 h-8 rounded-full flex items-center justify-center text-xs shrink-0",
                            activeMapStep === i ? "bg-white/20 text-white" : "bg-slate-200 text-slate-500"
                          )}>
                            {i + 1}
                          </div>
                          <div className="flex-grow">
                            <div className="text-sm">{step.title}</div>
                          </div>
                          <ChevronRight className={cn("w-4 h-4 transition-transform", activeMapStep === i ? "translate-x-1" : "opacity-0")} />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <motion.div
                    key={activeMapStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex gap-8"
                  >
                    <PhoneFrame title={liveMapSteps[activeMapStep].title}>
                      <img src={liveMapSteps[activeMapStep].image} alt={liveMapSteps[activeMapStep].title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      <div className="absolute bottom-24 left-4 right-4 p-5 glass rounded-3xl border-white/30 text-slate-900">
                        <div className="text-[10px] font-black text-blue-600 mb-1 uppercase tracking-widest">Step {activeMapStep + 1}</div>
                        <div className="text-xs font-bold leading-relaxed">{liveMapSteps[activeMapStep].desc}</div>
                      </div>
                    </PhoneFrame>
                    {liveMapSteps[activeMapStep].image2 && (
                      <PhoneFrame title={liveMapSteps[activeMapStep].title}>
                        <img src={liveMapSteps[activeMapStep].image2} alt={liveMapSteps[activeMapStep].title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        <div className="absolute bottom-24 left-4 right-4 p-5 glass rounded-3xl border-white/30 text-slate-900">
                          <div className="text-[10px] font-black text-blue-600 mb-1 uppercase tracking-widest">Step {activeMapStep + 1} (详情)</div>
                          <div className="text-xs font-bold leading-relaxed">放大每个目的地可展示关联的活动、达人和打卡点</div>
                        </div>
                      </PhoneFrame>
                    )}
                  </motion.div>
                </div>
              </div>
            )}

            {activeContentTab === 2 && (
              <div className="grid lg:grid-cols-2 gap-24 items-center">
                <div className="space-y-10">
                  <div className="group">
                    <div className="flex items-center gap-5 mb-8">
                      <div className="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-teal-500/20">
                        <UserCircle className="w-8 h-8" />
                      </div>
                      <h3 className="text-3xl font-black text-slate-900">AI 名片展示</h3>
                    </div>
                    <p className="text-slate-600 mb-10 text-xl leading-relaxed">
                      赋能超级个体（达人）的抓手，由对客名片和AI工作台组成。支持服务订阅，未来可集成高德广告服务。
                    </p>
                    <div className="flex gap-6">
                      <div className="flex-1 p-6 bg-teal-50 rounded-3xl border border-teal-100">
                        <div className="text-teal-700 font-black text-lg mb-2">对客名片</div>
                        <div className="text-sm text-teal-600 font-medium">展示个人品牌与服务</div>
                      </div>
                      <div className="flex-1 p-6 bg-slate-900 rounded-3xl shadow-xl">
                        <div className="text-white font-black text-lg mb-2">AI 工作台</div>
                        <div className="text-sm text-slate-400 font-medium">高效管理私域客户</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-8">
                  <PhoneFrame title="对客名片 (虾片)">
                    <img src="./assets/4-3-1.png" alt="对客名片" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </PhoneFrame>
                  <PhoneFrame title="AI 工作台">
                    <img src="./assets/4-3-2.png" alt="AI 工作台" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </PhoneFrame>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* 五、合作模式 */}
      <section id="cooperation" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="五、合作模式" 
            subtitle="灵活的B端合作路径与深度的接口开放，确保生态快速落地。"
          />

          <div className="flex justify-center mb-16">
            <div className="inline-flex p-1.5 bg-slate-200 rounded-2xl">
              {[
                { id: 0, label: '双入口模式详解' },
                { id: 1, label: 'B端合作路径' },
                { id: 2, label: '需高德开放的接口' },
                { id: 3, label: '收费模式设计' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCoopTab(tab.id)}
                  className={cn(
                    "px-6 py-3 rounded-xl text-sm font-black transition-all",
                    activeCoopTab === tab.id 
                      ? "bg-white text-blue-600 shadow-sm" 
                      : "text-slate-600 hover:text-slate-900"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            key={activeCoopTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {activeCoopTab === 0 && (
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <button 
                    onClick={() => setActiveEntrySubTab(0)}
                    className={cn(
                      "w-full p-10 rounded-[2.5rem] shadow-xl border transition-all text-left group",
                      activeEntrySubTab === 0 
                        ? "bg-white border-blue-600 ring-2 ring-blue-600/20" 
                        : "bg-slate-50 border-transparent hover:bg-white hover:border-slate-200"
                    )}
                  >
                    <h4 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                      <Smartphone className={cn("w-8 h-8", activeEntrySubTab === 0 ? "text-blue-600" : "text-slate-400")} /> 入口一：高德 POI 详情页
                    </h4>
                    <p className="text-slate-600 text-lg leading-relaxed mb-8">
                      在景区、酒店、餐厅的 POI 详情页显著位置嵌入“智能体助手”入口。用户在搜索、导航至目的地时即可一键唤起服务。
                    </p>
                    <ul className="space-y-4">
                      {['POI 详情页原生按钮', '搜索结果页快捷入口', '导航到达页自动弹窗'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700 font-bold">
                          <CheckCircle2 className={cn("w-5 h-5", activeEntrySubTab === 0 ? "text-blue-500" : "text-slate-300")} /> {item}
                        </li>
                      ))}
                    </ul>
                  </button>
                  <button 
                    onClick={() => setActiveEntrySubTab(1)}
                    className={cn(
                      "w-full p-10 rounded-[2.5rem] shadow-xl border transition-all text-left group",
                      activeEntrySubTab === 1 
                        ? "bg-white border-teal-600 ring-2 ring-teal-600/20" 
                        : "bg-slate-50 border-transparent hover:bg-white hover:border-slate-200"
                    )}
                  >
                    <h4 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                      <MapPin className={cn("w-8 h-8", activeEntrySubTab === 1 ? "text-teal-600" : "text-slate-400")} /> 入口二：活点地图动态节点
                    </h4>
                    <p className="text-slate-600 text-lg leading-relaxed mb-8">
                      在“超时空活点地图”模式下，商户智能体作为动态节点展示。基于 LBS 围栏，当用户进入商圈或景区时，智能体主动“浮现”。
                    </p>
                    <ul className="space-y-4">
                      {['地图动态气泡入口', 'LBS 围栏主动推送', '扫街榜单推荐位'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700 font-bold">
                          <CheckCircle2 className={cn("w-5 h-5", activeEntrySubTab === 1 ? "text-teal-500" : "text-slate-300")} /> {item}
                        </li>
                      ))}
                    </ul>
                  </button>
                </div>
                <div className="flex justify-center w-full">
                  <motion.div
                    key={activeEntrySubTab}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative w-full max-w-[400px] h-[800px]"
                  >
                    <div className={cn(
                      "absolute -inset-4 blur-3xl rounded-full transition-colors duration-500",
                      activeEntrySubTab === 0 ? "bg-blue-500/10" : "bg-teal-500/10"
                    )} />
                    <div className="relative w-full h-full bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-12 bg-slate-100 border-b border-slate-200 flex items-center justify-center z-10">
                        <div className="text-sm font-bold text-slate-600">
                          {activeEntrySubTab === 0 ? "POI 详情页入口" : "活点地图入口"}
                        </div>
                      </div>
                      <iframe 
                        src="https://arifinfirman788-blip.github.io/413gaode/" 
                        className="w-full h-full pt-12 border-0 bg-white"
                        title="Live Preview"
                        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            )}

            {activeCoopTab === 1 && (
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="p-10 bg-blue-600 rounded-[2.5rem] text-white shadow-2xl shadow-blue-500/30 relative overflow-hidden group">
                  <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                  <h4 className="font-black text-3xl mb-6">路径 A：中小商户</h4>
                  <p className="text-blue-100 text-xl mb-8 leading-relaxed">我方B端工作台嵌入高德。商户通过高德商户通入口，直接接入标准化智能体服务。实现“一键开店，全网分发”。</p>
                  <div className="space-y-4 mb-10">
                    {['标准化模板接入', '零代码智能体生成', '高德流量自动承接'].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 font-bold">
                        <CheckCircle2 className="w-6 h-6 text-blue-300" /> {item}
                      </div>
                    ))}
                  </div>
                  <div className="text-xs font-black uppercase tracking-[0.2em] bg-white/20 inline-block px-4 py-2 rounded-xl">低成本 · 快速接入</div>
                </div>
                <div className="p-10 bg-slate-900 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
                  <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                  <h4 className="font-black text-3xl mb-6">路径 B：大型商户</h4>
                  <p className="text-slate-400 text-xl mb-8 leading-relaxed">高德能力武装我方智能体。为大商户定制开发，集成LBS、支付、画像等深度能力。打造品牌专属数字化空间。</p>
                  <div className="space-y-4 mb-10">
                    {['深度定制化开发', '私有化数据隔离', '全链路接口开放'].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 font-bold">
                        <CheckCircle2 className="w-6 h-6 text-blue-500" /> {item}
                      </div>
                    ))}
                  </div>
                  <div className="text-xs font-black uppercase tracking-[0.2em] bg-white/10 inline-block px-4 py-2 rounded-xl">深度定制 · 功能丰富</div>
                </div>
              </div>
            )}

            {activeCoopTab === 2 && (
              <Card className="p-10 bg-white border-none shadow-xl">
                <h4 className="text-2xl font-black mb-10 flex items-center gap-4 text-slate-900">
                  <CheckCircle2 className="w-8 h-8 text-blue-600" /> 需高德开放的核心接口
                </h4>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { t: 'POI 页面嵌入', d: '允许在景区/酒店/餐厅POI页面嵌入智能体入口' },
                    { t: 'LBS 推送能力', d: '基于用户实时位置触发智能体推送（到达、离开、驻留）' },
                    { t: '用户画像接口', d: '提供匿名化用户标签（来源地、车型、消费水平等）' },
                    { t: '支付/交易接口', d: '支持智能体内完成交易闭环，实现一站式购票预约' },
                    { t: '消息触达通道', d: '支持通过高德App推送服务消息，提升用户粘性' },
                    { t: '地图渲染接口', d: '支持在地图层定制化展示活点节点与路线规划' }
                  ].map((item, i) => (
                    <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:border-blue-200 transition-colors">
                      <div className="font-black text-slate-900 mb-2 text-lg">{item.t}</div>
                      <div className="text-slate-500 font-medium leading-relaxed">{item.d}</div>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {activeCoopTab === 3 && (
              <div className="space-y-12">
                <div className="grid lg:grid-cols-3 gap-8">
                  {[
                    {
                      title: '基础订阅费',
                      price: '¥ 1,000 /商户/年',
                      desc: '面向全量商户，提供标准智能体服务与高德入口挂载。',
                      features: [],
                      color: 'slate',
                      isHero: true
                    },
                    {
                      title: '增值服务收费',
                      price: '多维变现',
                      desc: '提供深度数据洞察与精准营销工具，助力商户业绩增长。',
                      features: [
                        '数据分析报告：500元/份',
                        '精准营销推广：5%-10% 佣金',
                        '数据融合产品：3000元/年'
                      ],
                      color: 'indigo'
                    },
                    {
                      title: '定制化开发费',
                      price: '¥ 5-20 万 /项目',
                      desc: '面向大型连锁商户，提供深度功能定制与私有化部署。',
                      features: ['专属功能定制', '深度接口集成', '1对1技术支持'],
                      color: 'indigo'
                    }
                  ].map((plan, i) => (
                    <Card key={i} className={cn(
                      "p-10 border-none shadow-xl flex flex-col transition-all hover:scale-[1.02]",
                      plan.color === 'blue' ? "bg-blue-600 text-white" : "bg-white",
                      plan.isHero && "ring-2 ring-blue-600/20"
                    )}>
                      <h4 className={cn("font-black text-2xl mb-2", plan.color === 'blue' ? "text-white" : "text-slate-900")}>{plan.title}</h4>
                      <div className={cn(
                        "text-3xl font-black mb-6", 
                        plan.color === 'blue' ? "text-white" : 
                        plan.color === 'indigo' ? "text-indigo-600" : "text-blue-600"
                      )}>{plan.price}</div>
                      <p className={cn("mb-8 font-medium leading-relaxed", plan.color === 'blue' ? "text-blue-100" : "text-slate-500")}>{plan.desc}</p>
                      
                      {plan.features.length > 0 ? (
                        <div className="space-y-4 mt-auto">
                          {plan.features.map((f, j) => (
                            <div key={j} className="flex items-center gap-3 font-bold text-sm">
                              <CheckCircle2 className={cn(
                                "w-5 h-5", 
                                plan.color === 'blue' ? "text-blue-300" : 
                                plan.color === 'indigo' ? "text-indigo-500" : "text-blue-500"
                              )} /> {f}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="mt-auto pt-8 border-t border-slate-100">
                          <div className="flex items-center justify-between">
                            <div className="space-y-1">
                              <div className="text-slate-900 font-black">全量覆盖</div>
                              <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">Standard Agent</div>
                            </div>
                            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center">
                              <Zap className="w-7 h-7 text-blue-600" />
                            </div>
                          </div>
                        </div>
                      )}
                    </Card>
                  ))}
                </div>

                <div className="p-10 bg-slate-900 rounded-[3rem] text-white relative overflow-hidden">
                  <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-blue-500/10 to-transparent" />
                  <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="max-w-2xl">
                      <h4 className="text-3xl font-black mb-4 flex items-center gap-4">
                        <TrendingUp className="w-10 h-10 text-blue-400" /> 收入测算 (100万商户规模)
                      </h4>
                      <p className="text-slate-400 text-lg font-medium leading-relaxed">
                        基于百万级商户生态，通过“基础订阅+增值服务”的双轮驱动模式，实现可持续的规模化营收。
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 shrink-0">
                      <div className="text-center">
                        <div className="text-blue-400 text-sm font-black uppercase tracking-widest mb-2">基础订阅年收入</div>
                        <div className="text-4xl font-black">10 亿元</div>
                      </div>
                      <div className="text-center">
                        <div className="text-teal-400 text-sm font-black uppercase tracking-widest mb-2">增值服务年收入</div>
                        <div className="text-4xl font-black">5-8 亿元</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* 六、试点计划 */}
      <section id="pilot" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="六、试点计划" 
            subtitle="以贵州为核心，明确里程碑与资源投入，确保试点快速取得成效。"
          />

          <div className="flex justify-center mb-16">
            <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl">
              {[
                { id: 0, label: '贵州试点范围' },
                { id: 1, label: '5月底前里程碑' },
                { id: 2, label: '需高德拿出的资源' },
                { id: 3, label: '用户侧推广方式' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActivePilotTab(tab.id)}
                  className={cn(
                    "px-6 py-3 rounded-xl text-sm font-black transition-all",
                    activePilotTab === tab.id 
                      ? "bg-white text-blue-600 shadow-sm" 
                      : "text-slate-500 hover:text-slate-900"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            key={activePilotTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {activePilotTab === 0 && (
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                  <h3 className="text-4xl font-black text-slate-900 mb-6">贵州试点范围</h3>
                  <p className="text-slate-600 text-xl leading-relaxed max-w-3xl mx-auto">
                    试点区域：<span className="text-blue-600 font-black">贵阳（城市枢纽）</span> + <span className="text-blue-600 font-black">安顺黄果树（头部景区）</span> + <span className="text-blue-600 font-black">荔波小七孔（特色景区）</span>。通过“点-线-面”结合，打造全域智慧旅游标杆。
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                  {[
                    { t: '景区', d: '黄果树瀑布、小七孔、青岩古镇等5-8个头部景区', icon: Globe, color: 'blue' },
                    { t: '酒店', d: '贵阳高星酒店20家+景区周边特色民宿30家', icon: Hotel, color: 'teal' },
                    { t: '餐厅', d: '贵阳、安顺、荔波三地特色餐厅100家', icon: Utensils, color: 'orange' },
                    { t: '其他', d: '诊所、药店、便利店等生活服务商户50家', icon: ShoppingBag, color: 'purple' }
                  ].map((item, i) => (
                    <div key={i} className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                      <div className={cn(
                        "w-12 h-12 rounded-2xl flex items-center justify-center mb-6",
                        item.color === 'blue' ? "bg-blue-50 text-blue-600" :
                        item.color === 'teal' ? "bg-teal-50 text-teal-600" :
                        item.color === 'orange' ? "bg-orange-50 text-orange-600" : "bg-purple-50 text-purple-600"
                      )}>
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div className="font-black text-slate-900 text-xl mb-3">{item.t}</div>
                      <div className="text-slate-500 text-sm font-medium leading-relaxed">{item.d}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                  {['贵阳：核心交通枢纽与餐饮商圈', '安顺：黄果树瀑布等头部景区', '荔波：小七孔等自然遗产地'].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 px-6 py-3 bg-slate-50 rounded-2xl text-slate-700 font-bold border border-slate-100">
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activePilotTab === 1 && (
              <div className="w-full overflow-x-auto pb-12">
                <div className="min-w-[1200px] px-4">
                  <h3 className="text-3xl font-black text-slate-900 mb-20 text-center">5月底前关键里程碑</h3>
                  <div className="relative">
                    {/* Horizontal Line */}
                    <div className="absolute top-8 left-0 right-0 h-1 bg-slate-100" />
                    
                    <div className="grid grid-cols-6 gap-4">
                      {[
                        { date: '4月15日前', title: '与高德AI负责人技术沟通', desc: '技术对接方案V1.0' },
                        { date: '4月20日', title: '完成接口规范确认', desc: '接口文档+联调计划' },
                        { date: '4月底前', title: '完成首批商户签约', desc: '50家商户合作协议' },
                        { date: '5月10日前', title: '完成首批智能体上线', desc: '黄果树+贵阳试点上线' },
                        { date: '5月20日前', title: '完成全部试点商户上线', desc: '200家商户全量上线' },
                        { date: '5月底前', title: '试点验收', desc: '总结报告+可复制模式' }
                      ].map((item, i) => (
                        <div key={i} className="relative flex flex-col items-center text-center px-4">
                          {/* Dot on line */}
                          <div className="w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-md mb-8 relative z-10" />
                          
                          <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 w-full hover:border-blue-200 transition-colors">
                            <div className="text-xs font-black text-blue-600 uppercase tracking-widest mb-2">{item.date}</div>
                            <h4 className="text-sm font-black text-slate-900 mb-3 h-10 flex items-center justify-center">{item.title}</h4>
                            <div className="text-[10px] font-bold text-slate-500 bg-slate-50 px-3 py-2 rounded-xl line-clamp-2">
                              {item.desc}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activePilotTab === 2 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { title: '流量入口开放', desc: '开放 POI 详情页、搜索结果页等核心位置的智能体挂载权限。', icon: Zap },
                  { title: 'LBS 推送支持', desc: '提供基于用户实时位置的精准消息推送通道。', icon: Navigation },
                  { title: '数据脱敏共享', desc: '共享匿名化用户画像数据，辅助智能体进行精准营销。', icon: Database },
                  { title: '品牌背书支持', desc: '在高德 App 内给予“高德官方推荐”或“智慧旅游合作伙伴”标识。', icon: ShieldCheck }
                ].map((item, i) => (
                  <Card key={i} className="p-8 border-none shadow-xl hover:bg-blue-600 hover:text-white transition-all group">
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                      <item.icon className="w-7 h-7 text-blue-600 group-hover:text-white" />
                    </div>
                    <h4 className="text-xl font-black mb-4">{item.title}</h4>
                    <p className="text-sm font-medium leading-relaxed opacity-80">{item.desc}</p>
                  </Card>
                ))}
              </div>
            )}

            {activePilotTab === 3 && (
              <div className="max-w-4xl mx-auto items-center">
                <div className="space-y-10">
                  <h3 className="text-3xl font-black text-slate-900 text-center">用户侧推广具体方式</h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {[
                      { title: '高德 App 站内导流', desc: '通过开屏广告、消息中心、搜索发现等位置进行精准引流。', icon: Smartphone },
                      { title: '线下扫码联动', desc: '在试点景区、酒店前台布置“智能管家”二维码，引导用户入会。', icon: Globe },
                      { title: '社交达人种草', desc: '联动贵州本地旅游达人，通过“AI 名片”进行社交化裂变传播。', icon: Users },
                      { title: '权益激励转化', desc: '通过“智能体专属优惠券”、“首单立减”等手段提升用户转化率。', icon: Target }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6 p-6 bg-slate-50 rounded-[2rem] border border-transparent hover:border-blue-200 hover:bg-white transition-all">
                        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shrink-0">
                          <item.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-black text-slate-900 mb-1">{item.title}</h4>
                          <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>
      <section id="roadmap" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="七、后续工作计划" subtitle="明确里程碑，快速推进试点落地。" />
          
          <div className="space-y-6">
            {[
              { date: '本周', task: '完成合作方案大纲定稿', owner: '马榕牵头', status: '进行中' },
              { date: '4月15日前', task: '与高德AI负责人沟通技术对接', owner: '技术负责人', status: '待启动' },
              { date: '4月20日前', task: '完成接口规范和联调方案', owner: '技术团队', status: '待启动' },
              { date: '4月底前', task: '完成50家首批商户签约', owner: '商务团队', status: '待启动' },
              { date: '5月10日前', task: '首批商户智能体上线 (黄果树+贵阳)', owner: '产品+技术', status: '待启动' },
              { date: '5月20日前', task: '完成200家试点商户全量上线', owner: '运营团队', status: '待启动' },
              { date: '5月底前', task: '试点验收，输出可复制模式', owner: '项目组', status: '待启动' },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col md:flex-row md:items-center gap-6 p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-300 hover:bg-blue-50/30 transition-all group"
              >
                <div className="w-32 shrink-0 text-lg font-black text-blue-600">{item.date}</div>
                <div className="flex-grow font-bold text-xl text-slate-900 group-hover:text-blue-700 transition-colors">{item.task}</div>
                <div className="flex items-center gap-8">
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">{item.owner}</div>
                  <div className={cn(
                    "px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] shadow-sm",
                    item.status === '进行中' ? "bg-blue-600 text-white shadow-blue-500/20" : "bg-slate-200 text-slate-500"
                  )}>
                    {item.status}
                  </div>
                </div>
              </motion.div>
            ))}
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
