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
    { title: '开启活点模式', desc: '高德地图首页支持一键开启“活点地图”模式', image: import.meta.env.BASE_URL + 'assets/4-2-1.png' },
    { title: '查看扫街榜', desc: '进入活点模式后查看“扫街榜”头部商户和达人', image: import.meta.env.BASE_URL + 'assets/4-2-2.png' },
    { title: 'Pin 感兴趣活点', desc: '在地图上直接 Pin 住感兴趣的活点位置', image: import.meta.env.BASE_URL + 'assets/4-2-3.png' },
    { title: '形成旅程清单', desc: '自动将已 Pin 的活点汇总形成初步旅程清单', image: import.meta.env.BASE_URL + 'assets/4-2-4.png' },
    { title: '规划行程目的地', desc: '按照时间先后顺序智能规划清单中的行程目的地，并可放大每个目的地展示关联的活动、达人和打卡点', image: import.meta.env.BASE_URL + 'assets/4-2-5-1.png', image2: import.meta.env.BASE_URL + 'assets/4-2-5-2.png' },
    { title: '召唤黄小西', desc: '在行程页点“黄小西妙招”，进入智能体询价', image: import.meta.env.BASE_URL + 'assets/4-2-6.png' },
    { title: '智能体询价', desc: '智能体依据行程实时推送相关优惠套餐', image: import.meta.env.BASE_URL + 'assets/4-2-7.png' },
    { title: '打包购买', desc: '一键打包购买行程中的所有旅游产品并下单', image: import.meta.env.BASE_URL + 'assets/4-2-8.png' },
    { title: '完成支付', desc: '完成支付并生成订单，支持一键导航前往', image: import.meta.env.BASE_URL + 'assets/4-2-9.png' },
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
              <a href="#architecture" className="hover:text-blue-600 transition-colors">智能体架构</a>
              <a href="#ecosystem" className="hover:text-blue-600 transition-colors">智能体生态</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
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

      

      
      
      {/* 一、黄小西AI应用生态构建 */}
      <section id="architecture" className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle 
            title="一、黄小西AI应用生态构建" 
            subtitle="三层智能体组网架构与游客端服务革新"
          />

          <div className="mb-32">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-3xl font-black text-slate-900 tracking-tight">构建“三层智能体组网架构”</h3>
                <p className="text-slate-500 font-medium mt-1">我们在搭建的是一个“智能体组成的生产系统”</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-7 space-y-8">
                {[
                  {
                    title: "1. 调度级智能体",
                    desc: "在多智能体调度这一前沿方向上，我们不是停留在概念验证，而是已经在真实文旅场景中完成了体系化落地，整体进度在国内处于第一梯队，在文旅行业Ai应用层面具有绝对的先发优势。",
                  },
                  {
                    title: "2. 企业级 / 功能级服务智能体",
                    desc: "面向酒店、景区、餐饮等涉旅企业，赋能具体业务与服务场景。",
                  },
                  {
                    title: "3. 个人级 / 角色级数字分身智能体",
                    desc: "面向个人用户与从业者，构建数字世界的“第二分身”。",
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all">
                    <h4 className="text-2xl font-black text-indigo-600 mb-2">{item.title}</h4>
                    <p className="text-slate-900 font-bold mb-4 text-lg">{item.desc}</p>
                  </div>
                ))}
                
                <div className="p-8 bg-indigo-900 rounded-[32px] text-white text-center shadow-xl">
                  <p className="text-xl font-black">总结：“一个入口，调度多类智能体，覆盖文旅服务全链条”</p>
                </div>
              </div>
              
              <div className="lg:col-span-5 sticky top-32">
                <div className="bg-slate-50 rounded-[32px] p-6 border border-slate-200 shadow-xl cursor-pointer hover:shadow-2xl transition-all group">
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    {[
                      import.meta.env.BASE_URL + 'assets/f4bab413fd5144e5e01246d33823e5ce.jpg',
                      import.meta.env.BASE_URL + 'assets/2-1.png',
                      import.meta.env.BASE_URL + 'assets/2f0940dc11c58bf3a57634678ec7dee0.jpg',
                      import.meta.env.BASE_URL + 'assets/e8a91d5c8c3b6e0a9e53d83e7cc4d288.jpg'
                    ].map((src, index) => (
                      <div key={index} className="aspect-[9/19.5] bg-white rounded-lg border border-slate-100 flex items-center justify-center text-slate-300 text-[10px] font-bold shadow-sm overflow-hidden">
                        <img loading="lazy" src={src} alt={"展示图" + (index + 1)} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <div className="aspect-[16/10] bg-white rounded-xl border border-slate-100 flex items-center justify-center text-slate-400 text-xs font-bold shadow-sm overflow-hidden">
                    <img loading="lazy" src={import.meta.env.BASE_URL + "assets/4991f55ea85abc50aa6a75c6effb763f.png"} alt="PC端展示位" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="w-24 h-2 bg-slate-800/10 mx-auto mt-4 rounded-full blur-sm" />
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-fuchsia-100 text-fuchsia-600 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                <Rocket className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-3xl font-black text-slate-900 tracking-tight">新版「黄小西」游客端</h3>
                <p className="text-slate-500 font-medium mt-1">文旅智能服务超级入口</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-start">
              {/* 左侧内容区 */}
              <div className="lg:col-span-7 space-y-12">
                <div className="bg-white rounded-[48px] p-10 lg:p-16 border border-slate-100 shadow-sm lg:h-[800px] flex flex-col justify-center">
                  <div className="flex flex-col gap-y-16">
                    <div className="space-y-3">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="w-12 h-12 bg-violet-50 text-violet-600 rounded-xl flex items-center justify-center shrink-0">
                          <PlayCircle size={24} />
                        </div>
                        <h5 className="text-xl font-black text-slate-900">新首页 = 超级门户</h5>
                      </div>
                      <p className="text-slate-500 font-medium text-base pl-[64px]">用智能体替代传统功能入口</p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shrink-0">
                          <Layers size={24} />
                        </div>
                        <h5 className="text-xl font-black text-slate-900">多智能体协同</h5>
                      </div>
                      <p className="text-slate-500 font-medium text-base pl-[64px]">不再是“一个机器人回答所有问题”</p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="w-12 h-12 bg-fuchsia-50 text-fuchsia-600 rounded-xl flex items-center justify-center shrink-0">
                          <UserCircle size={24} />
                        </div>
                        <h5 className="text-xl font-black text-slate-900">个人专属智能体</h5>
                      </div>
                      <p className="text-slate-500 font-medium text-base pl-[64px]">“人人可参与”的服务生态</p>
                    </div>

                    <div className="space-y-3">
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
              </div>

              {/* 右侧手机展示区：Sticky */}
              <div className="lg:col-span-5 sticky top-32">
                <div className="relative mx-auto w-[400px] h-[800px] rounded-[40px] overflow-hidden shadow-xl border border-slate-200 bg-white group">
                  <div className="w-[400px] h-[824px] absolute -top-6 left-0 origin-top-left scale-100">
                    <iframe 
                      src="https://arifinfirman788-blip.github.io/HuangxiaoxiV4.0/" 
                      className="w-full h-full border-0"
                      title="新版首页舞台"
                      scrolling="no"
                      loading="lazy"
                      allow="accelerometer; autoplay; camera; clipboard-write; encrypted-media; fullscreen; geolocation; gyroscope; microphone; midi; payment; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  <div className="absolute inset-0 bg-slate-900/5 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm text-xs font-bold text-slate-500 flex items-center gap-2">
                      <PlayCircle size={14} /> 可交互演示
                    </div>
                  </div>
                </div>
              </div>
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
                    image: import.meta.env.BASE_URL + 'assets/景区智能体.png'
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
                    title: '个人智能体',
                    icon: UserCircle,
                    items: ['AI帮讲故事', '24h在线接待', '咨询秒回撮合'],
                    image: import.meta.env.BASE_URL + 'assets/个人智能体.png'
                  },
                  {
                    title: '诊所/药店智能体',
                    icon: Activity,
                    items: ['预约挂号与候诊提醒', '健康咨询与用药指导', '院内导航与位置指引'],
                    image: import.meta.env.BASE_URL + 'assets/f1efe81fedc99b52ae2b2b70ce91be1e.png',
                    isPC: true
                  },
                  {
                    title: 'B端工作台',
                    icon: LayoutDashboard,
                    items: ['智能主动分派，业务自动流转', '极简智能应用，上手简单高效', '全域协同联动，破除部门壁垒'],
                    image: import.meta.env.BASE_URL + 'assets/B端工作台.png',
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
                      <img loading="lazy" src={card.image} alt={card.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
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
                    <img loading="lazy" src="https://picsum.photos/seed/service-169/1280/720" alt="Service Visualization" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
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
                    <img loading="lazy" src={
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
