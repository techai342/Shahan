/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Instagram, 
  Facebook, 
  MessageCircle, 
  Globe, 
  Mail, 
  Phone,
  ArrowUpRight,
  Code,
  Video,
  PenTool,
  Sparkles,
  MonitorPlay,
  BrainCircuit,
  TrendingUp,
  Ghost,
  User,
  Search,
  Loader2,
  CheckCircle2,
  Terminal,
  Menu,
  X,
  Folder,
  ExternalLink,
  Lock,
  Github,
  Send,
  LockKeyhole,
  Database,
  BarChart,
  Layout,
  Server,
  Youtube,
  Store
} from 'lucide-react';
import InfoSection from './components/InfoSection';
import GallerySection from './components/GallerySection';
import WhatsAppWidget from './components/WhatsAppWidget';

const SOCIAL_LINKS = [
  { name: 'TikTok', url: 'https://tiktok.com/@itx_proboy', icon: MonitorPlay },
  { name: 'Instagram', url: 'https://instagram.com/itx___proboy', icon: Instagram },
  { name: 'GitHub', url: 'https://github.com/ProBoy315', icon: Github },
  { name: 'WhatsApp', url: 'https://wa.me/923261684315', icon: MessageCircle },
  { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100093176537267', icon: Facebook },
  { name: 'Telegram', url: 'https://t.me/itx_proboy', icon: Send },
];

const SKILLS = [
  { name: 'HTML & Web Design', icon: Layout },
  { name: 'JavaScript & Python', icon: Code },
  { name: 'AI & Bots', icon: BrainCircuit },
  { name: 'Cybersecurity', icon: LockKeyhole },
  { name: 'Shopify Development', icon: Store },
  { name: 'PHP & MySQL', icon: Database },
  { name: 'Git & GitHub', icon: Github },
  { name: 'Video Editing (CapCut)', icon: Video },
  { name: 'YouTube SEO', icon: Youtube },
  { name: 'Ad Marketing', icon: BarChart },
  { name: 'API Integrations', icon: ExternalLink },
  { name: 'Backend Systems', icon: Server },
];

const GALLERY_IMAGES = [
  "https://ik.imagekit.io/shaban/SHABAN-1768573425069_nIPVZQOaT.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768573550507_ArSSmUT0tW.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768573642529_UEEpMXFEkV.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768573647809_L4RIsxMgI.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768573652854__LqIeAU47.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768573659591_abaSpAF-y.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768573669146_5z2ap9EbK.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768573674849_RvEzQQfNI.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768573679202_aZrkl8hRt.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768573689483_NnwuSUKqm.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768573697274_CP3034fDP.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768573705488_jYpVaM2u0.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768575063823_VKv0h9E-k.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768575091370_Eff9-yBbl.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768575128883_e-W-AMj3q.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768575146572_S9cSoOYEd.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768575153097_cNAjcwYjl.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768575206893_2JJlY1Wm0.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768575218262_6SqMS7ijo.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768575233008_FM9BCgwYX.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768575235727_gOIsiMEMW.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768575240340_5tz9dWXNo.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768575245369_aFwAR5G1A.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768575256985_nCso21_yg.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768575261320_xDKXsGy9j.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768575265565_APidCqJd2.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768575273776_12t6fSWUNF.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768575281292_KWCWQm1tp.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768575289386_Ohy6x5nR7.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768575387302_iPzMxeVnf.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768575391677_bsAlvqZL9.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768575400809_AMhNzr8n3.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768575407874_LewPrAdHC.jpg",
  "https://ik.imagekit.io/shaban/SHABAN-1768575415857_lNqkpn9Iz.jpg"
];

const LIVE_PROJECTS = [
  { 
    name: "Free Fire Tournament", 
    url: "https://freefire.zone.id/", 
    tags: ["Gaming"], 
    restricted: false,
    description: "A competitive platform for Free Fire players to join tournaments, track scores, and win prizes. Features real-time leaderboards and match scheduling.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"]
  },
  { 
    name: "OpenBazaar", 
    url: "https://openbazaar.vercel.app/#/", 
    tags: ["Market"], 
    restricted: false,
    description: "A decentralized marketplace allowing users to buy and sell goods directly without middlemen. Built with a focus on privacy and crypto payments.",
    technologies: ["Vue.js", "Tailwind CSS", "Web3", "IPFS"]
  },
  { 
    name: "AI Studio", 
    url: "https://proboyaistudio.vercel.app/", 
    tags: ["AI"], 
    restricted: false,
    description: "An advanced AI-powered creative suite for generating images, text, and code. Integrates multiple LLMs and diffusion models in a sleek interface.",
    technologies: ["Next.js", "TypeScript", "OpenAI API", "Framer Motion"]
  },
  { 
    name: "Food Website", 
    url: "https://food-one-jade.vercel.app/#/", 
    tags: ["E-commerce"], 
    restricted: false,
    description: "A modern restaurant ordering system with a dynamic menu, cart functionality, and seamless checkout experience.",
    technologies: ["React", "Redux", "Firebase", "Stripe"]
  },
  { 
    name: "Premium Shoes", 
    url: "https://shoes-91zl.vercel.app/", 
    tags: ["Fashion"], 
    restricted: false,
    description: "An exclusive sneaker boutique e-commerce platform featuring high-end footwear, 3D product views, and limited drops.",
    technologies: ["Next.js", "Three.js", "Tailwind CSS", "Shopify API"]
  },
  { 
    name: "Fashion Hub", 
    url: "https://shoes.zone.id", 
    tags: ["Style"], 
    restricted: false,
    description: "A trendy fashion aggregator showcasing the latest apparel collections, style guides, and user-curated lookbooks.",
    technologies: ["React", "GraphQL", "Node.js", "PostgreSQL"]
  },
  { 
    name: "Unban Tool", 
    url: "https://Unban.zone.id", 
    tags: ["Utility"], 
    restricted: false,
    description: "A specialized utility designed to help users appeal and recover banned accounts across various social media platforms.",
    technologies: ["HTML5", "CSS3", "Vanilla JS", "PHP"]
  },
  { 
    name: "Tech AI", 
    url: "https://techai.zone.id", 
    tags: ["Tech"], 
    restricted: false,
    description: "A comprehensive tech blog and AI news aggregator, featuring automated summaries and trending tech insights.",
    technologies: ["Gatsby", "GraphQL", "Contentful", "Netlify"]
  },
  { 
    name: "Free Hosting", 
    url: "https://techai1.kesug.com/", 
    tags: ["Web"], 
    restricted: true,
    description: "A lightweight cPanel alternative providing free web hosting services, domain management, and one-click app installations.",
    technologies: ["PHP", "MySQL", "Apache", "Linux"]
  }, 
  { 
    name: "Tool Kit Gen", 
    url: "https://techai.ct.ws/", 
    tags: ["Dev Tools"], 
    restricted: true,
    description: "A collection of essential developer tools including JSON formatters, base64 encoders, regex testers, and code minifiers.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"]
  }, 
  { 
    name: "Cam + Loc", 
    url: "https://proboy.ct.ws/", 
    tags: ["Security"], 
    restricted: true,
    description: "A security demonstration tool showcasing browser capabilities for accessing camera feeds and geolocation data with user consent.",
    technologies: ["JavaScript", "WebRTC", "Geolocation API"]
  }, 
  { 
    name: "Social Tool", 
    url: "https://follower-woz5.vercel.app/", 
    tags: ["Growth"], 
    restricted: false,
    description: "An analytics dashboard for tracking social media growth, engagement metrics, and audience demographics across platforms.",
    technologies: ["Vue.js", "Chart.js", "Express", "MongoDB"]
  }
];

const Logo = () => (
  <div className="flex items-center gap-3">
    <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-900 border border-blue-400/50 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
    </div>
    <div className="flex flex-col">
      <span className="font-sans font-bold text-lg leading-none tracking-wide text-white">ProBoy</span>
      <span className="text-[9px] tracking-[0.2em] text-blue-400 uppercase font-sans mt-0.5">Tech Enthusiast</span>
    </div>
  </div>
);

export default function App() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof LIVE_PROJECTS[0] | null>(null);
  const [isProjectsExpanded, setIsProjectsExpanded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-ink)] selection:bg-[var(--color-accent)] selection:text-white overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 p-4 sm:p-6 flex justify-between items-center bg-gradient-to-b from-[#030816] via-[#030816]/80 to-transparent backdrop-blur-sm">
        <Logo />
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase">
          <a href="#about" className="text-blue-200/70 hover:text-white transition-colors">About</a>
          <a href="#skills" className="text-blue-200/70 hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="text-blue-200/70 hover:text-white transition-colors">Projects</a>
          <a href="#work" className="text-blue-200/70 hover:text-white transition-colors">Work</a>
          <a href="#contact" className="px-6 py-2.5 rounded-full bg-blue-600/20 border border-blue-500/50 text-blue-400 hover:bg-blue-500 hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all backdrop-blur-md">
            Follow
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-blue-200 hover:text-white transition-colors z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed inset-0 z-40 bg-[#030816]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-display tracking-widest text-blue-100 hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-display tracking-widest text-blue-100 hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-display tracking-widest text-blue-100 hover:text-blue-400 transition-colors">Projects</a>
            <a href="#work" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-display tracking-widest text-blue-100 hover:text-blue-400 transition-colors">Work</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 px-8 py-3 rounded-full bg-blue-600/20 border border-blue-500/50 text-blue-400 text-lg font-medium tracking-widest uppercase hover:bg-blue-500 hover:text-white transition-all">
              Follow
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 pt-32 pb-12 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-cyan-500/10 rounded-full mix-blend-screen filter blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center text-center">
          
          {/* Background Wavy Element */}
          <motion.img 
            src="https://ik.imagekit.io/19imy4f1u/lite_1775631944491_au5CAcNpd.png" 
            alt="Abstract Wave"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[140%] md:w-[110%] max-w-none h-auto z-0 mix-blend-screen pointer-events-none"
          />

          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="font-display text-[22vw] sm:text-[18vw] md:text-[12vw] leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 drop-shadow-[0_0_40px_rgba(59,130,246,0.3)] mb-4 sm:mb-6 relative z-10"
          >
            Portfolio
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-8 sm:mb-12"
          >
            <span className="text-lg sm:text-xl md:text-2xl font-medium text-white tracking-wide">Creative Artist</span>
            <div className="flex items-center gap-2 sm:gap-3 bg-blue-900/40 border border-blue-500/50 rounded-full pl-3 sm:pl-4 pr-1 sm:pr-1.5 py-1 sm:py-1.5 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.2)]">
              <span className="text-xs sm:text-sm text-blue-200 font-medium">Shahan A.</span>
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-blue-500 flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.8)]">
                <User className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </div>
            </div>
          </motion.div>

          {/* Search Bar Element */}
          <motion.a 
            href="https://saqib.zone.id/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.4 }}
            className="w-full max-w-2xl relative mt-4 sm:mt-8 px-2 sm:px-0 block group cursor-pointer"
          >
            <div className="absolute inset-0 bg-blue-600/20 blur-xl rounded-full transition-all duration-300 group-hover:bg-blue-500/30 group-hover:blur-2xl"></div>
            <div className="relative flex items-center justify-between bg-[#0a1930]/80 border border-blue-500/30 rounded-full px-4 sm:px-6 py-3 sm:py-4 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:border-blue-400/60 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]">
              <span className="text-xs sm:text-sm md:text-base text-blue-200/70 italic font-light truncate mr-2 transition-colors duration-300 group-hover:text-blue-100/90">Explore my tech and developer portfolio...</span>
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 shrink-0 transition-transform duration-300 group-hover:scale-110" />
            </div>
          </motion.a>

          {/* Floating Developer Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotate: -5, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, rotate: -5, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.6 }}
            className="absolute right-[-5%] md:right-[5%] top-[20%] hidden lg:block glass-panel p-5 rounded-2xl border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.2)] backdrop-blur-xl"
          >
            <div className="flex items-center gap-2 mb-4 border-b border-blue-500/20 pb-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_5px_rgba(239,68,68,0.5)]"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_5px_rgba(234,179,8,0.5)]"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
              <Terminal className="w-4 h-4 text-blue-400 ml-auto" />
            </div>
            <div className="font-mono text-xs text-left leading-relaxed">
              <span className="text-pink-400">const</span> <span className="text-blue-300">developer</span> <span className="text-cyan-400">=</span> <span className="text-yellow-300">new</span> <span className="text-green-300">CreativeEngine</span>();<br/>
              <span className="text-blue-300">developer</span>.<span className="text-yellow-200">initialize</span>({'{'}<br/>
              &nbsp;&nbsp;<span className="text-blue-200">skills:</span> [<span className="text-orange-300">'React'</span>, <span className="text-orange-300">'AI'</span>, <span className="text-orange-300">'UI/UX'</span>],<br/>
              &nbsp;&nbsp;<span className="text-blue-200">passion:</span> <span className="text-orange-300">'Building the future'</span><br/>
              {'}'});<br/>
              <span className="text-blue-300">developer</span>.<span className="text-yellow-200">execute</span>();<span className="animate-pulse text-white">_</span>
            </div>
          </motion.div>

          {/* Decorative Line */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative flex items-center w-full max-w-md mt-16"
          >
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-full"></div>
            <div className="absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_#60a5fa]"></div>
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <InfoSection />

      {/* Gallery Section */}
      <GallerySection images={GALLERY_IMAGES} />

      {/* About & Skills Section */}
      <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          
          {/* About */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-panel p-6 sm:p-8 md:p-12 rounded-[2rem] relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-400"></div>
            <h3 className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-6 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]"></div>
              About Me
            </h3>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-blue-50 mb-8">
              I'm Shahan Ali from Burewala, Pakistan—a tech enthusiast passionate about creating apps, websites, and digital solutions. I believe in honesty, faith in Allah, and living a simple, peaceful life.
            </p>
            <div className="space-y-4 text-blue-200/70">
              <div className="flex items-center gap-4 border-b border-blue-500/20 pb-4">
                <span className="w-24 text-sm uppercase tracking-wider text-blue-400">Location</span>
                <span className="text-white">Burewala, Pakistan</span>
              </div>
              <div className="flex items-center gap-4 border-b border-blue-500/20 pb-4">
                <span className="w-24 text-sm uppercase tracking-wider text-blue-400">Identity</span>
                <span className="text-white">Honest Person</span>
              </div>
              <div className="flex items-center gap-4 border-b border-blue-500/20 pb-4">
                <span className="w-24 text-sm uppercase tracking-wider text-blue-400">Objective</span>
                <span className="text-white leading-relaxed">I have no big future goal. I just want a simple life and only what is required to survive.</span>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            id="skills"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-panel p-6 sm:p-8 md:p-12 rounded-[2rem] relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-600"></div>
            <h3 className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-6 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"></div>
              Expertise
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SKILLS.map((skill, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 border border-blue-500/20 rounded-2xl hover:border-blue-400 hover:bg-blue-900/30 transition-all group backdrop-blur-sm"
                >
                  <div className="p-3 bg-blue-950/50 rounded-xl group-hover:bg-blue-600 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all">
                    <skill.icon className="w-5 h-5 text-blue-300 group-hover:text-white" />
                  </div>
                  <span className="font-medium text-blue-50">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* Live Projects Section */}
      <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-12 sm:mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white tracking-wide">Live Projects</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 to-transparent relative w-full sm:w-auto">
             <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white rounded-full shadow-[0_0_10px_white]"></div>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {!isProjectsExpanded ? (
            <motion.div
              key="master-folder"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsProjectsExpanded(true)}
              className="max-w-md mx-auto glass-panel p-6 sm:p-8 rounded-[2rem] relative overflow-hidden group cursor-pointer border border-blue-500/30 hover:border-blue-400/60 transition-all bg-gradient-to-br from-[#0a1930]/80 to-[#030816]/90 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            >
              <div className="flex items-start gap-5 mb-8">
                <div className="relative">
                  <Folder className="w-16 h-16 text-blue-600 drop-shadow-[0_0_15px_rgba(37,99,235,0.5)] group-hover:text-blue-400 transition-colors" fill="currentColor" />
                  <div className="absolute bottom-1 -left-1 bg-white/10 backdrop-blur-md border border-white/20 text-[9px] font-bold tracking-wider px-2 py-0.5 rounded text-white shadow-lg">
                    FILES
                  </div>
                </div>
                <div className="pt-2">
                  <h4 className="text-white font-medium text-xl leading-tight group-hover:text-blue-300 transition-colors">Project Docs Folder</h4>
                  <p className="text-blue-200/50 text-sm mt-1">80MB</p>
                </div>
              </div>
              
              <div className="bg-[#020617]/60 rounded-2xl p-4 sm:p-5 border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-blue-400 border-t-transparent animate-spin"></div>
                  <span className="text-base text-blue-100/70">Uploading...</span>
                </div>
                <span className="text-xl font-light text-white">73%</span>
              </div>
              <div className="mt-[-12px] px-5 pb-5">
                 <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-[73%] h-full bg-white rounded-full shadow-[0_0_10px_white]"></div>
                 </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="projects-grid"
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <div className="flex justify-between items-center bg-blue-900/20 border border-blue-500/20 p-4 rounded-2xl backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <Folder className="w-6 h-6 text-blue-400" fill="currentColor" />
                  <h3 className="text-lg text-white font-medium">Project Docs Folder</h3>
                </div>
                <button 
                  onClick={() => setIsProjectsExpanded(false)}
                  className="p-2 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-300 hover:text-white hover:bg-blue-800/50 transition-all flex items-center justify-center"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {LIVE_PROJECTS.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedProject(project)}
                    className="glass-panel p-6 rounded-[2rem] relative overflow-hidden group cursor-pointer border border-blue-500/30 hover:border-blue-400/60 transition-all bg-gradient-to-br from-[#0a1930]/80 to-[#030816]/90 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
                  >
                    <div className="flex items-start gap-5 mb-8">
                      <div className="relative">
                        <Folder className="w-14 h-14 text-blue-600 drop-shadow-[0_0_15px_rgba(37,99,235,0.5)] group-hover:text-blue-400 transition-colors" fill="currentColor" />
                        <div className="absolute bottom-1 -left-1 bg-white/10 backdrop-blur-md border border-white/20 text-[8px] font-bold tracking-wider px-2 py-0.5 rounded text-white shadow-lg">
                          {project.tags[0].toUpperCase()}
                        </div>
                      </div>
                      <div className="pt-1">
                        <h4 className="text-white font-medium text-lg leading-tight group-hover:text-blue-300 transition-colors">{project.name}</h4>
                        <p className="text-blue-200/50 text-xs mt-1">Live Project</p>
                      </div>
                    </div>
                    
                    <div className="bg-[#020617]/60 rounded-2xl p-4 border border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full border-2 border-blue-400 border-t-transparent animate-spin"></div>
                        <span className="text-sm text-blue-100/70">Launch...</span>
                      </div>
                      <span className="text-lg font-light text-white">100%</span>
                    </div>
                    <div className="mt-[-10px] px-4 pb-4">
                       <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div className="w-full h-full bg-white rounded-full shadow-[0_0_10px_white]"></div>
                       </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#030816]/90 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl bg-[#0a1930] rounded-2xl rambo-border flex flex-col overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]"
              onClick={e => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center p-4 border-b border-white/10 bg-black/40 backdrop-blur-md z-20">
                <div className="flex items-center gap-3">
                  <div className="w-3.5 h-3.5 rounded-full bg-red-500 cursor-pointer hover:bg-red-400 transition-colors shadow-[0_0_10px_rgba(239,68,68,0.5)]" onClick={() => setSelectedProject(null)}></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                  <span className="ml-4 text-white font-mono text-sm tracking-wider">{selectedProject.name}</span>
                </div>
                <a href={selectedProject.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white flex items-center gap-2 text-sm font-medium transition-colors bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/30">
                  Open Live <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              
              {/* Body */}
              <div className="flex flex-col md:flex-row w-full h-[70vh] sm:h-[80vh] bg-[#0a1930] relative overflow-hidden">
                {/* Details Sidebar */}
                <div className="w-full md:w-1/3 p-6 sm:p-8 bg-[#030816] border-r border-blue-500/20 flex flex-col overflow-y-auto custom-scrollbar">
                  <h2 className="text-2xl font-display text-white mb-4">{selectedProject.name}</h2>
                  <p className="text-blue-200/70 mb-6 leading-relaxed text-sm sm:text-base">
                    {selectedProject.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-900/40 border border-blue-500/30 rounded-full text-xs text-blue-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-6">
                    <a href={selectedProject.url} target="_blank" rel="noopener noreferrer" className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] flex items-center justify-center gap-2">
                      View Project <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Preview Area */}
                <div className="w-full md:w-2/3 h-64 md:h-full bg-white relative">
                  {selectedProject.restricted ? (
                    <div className="absolute inset-0 bg-[#111] flex flex-col items-center justify-center text-white p-6 text-center">
                      <div className="mb-6 p-5 rounded-full bg-red-500/10 border border-red-500/20">
                        <Lock className="w-12 h-12 text-red-500" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3">Security Restricted</h3>
                      <p className="text-gray-400 max-w-md mb-8 leading-relaxed">Hosting provider forbids direct embedding for security. Please click the button below to open the project safely in a new tab.</p>
                      <a href={selectedProject.url} target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] flex items-center gap-2">
                        Open Project <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  ) : (
                    <div className="w-full h-full relative">
                      <div className="absolute inset-0 z-10 md:hidden pointer-events-none"></div>
                      <iframe src={selectedProject.url} className="preview-iframe" loading="lazy"></iframe>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gallery Section */}
      <section id="work" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-8 sm:mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white tracking-wide">My Designs</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 to-transparent relative w-full sm:w-auto">
               <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white rounded-full shadow-[0_0_10px_white]"></div>
            </div>
          </motion.div>

          <div className="glass-panel p-4 sm:p-6 md:p-10 rounded-[1.5rem] sm:rounded-[2rem] relative overflow-hidden">
            {/* Top glare */}
            <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-2 bg-blue-500/20 blur-xl"></div>
            
            <div className="masonry-grid">
              {GALLERY_IMAGES.map((src, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: (index % 5) * 0.1 }}
                  className="masonry-item relative group overflow-hidden rounded-xl sm:rounded-2xl bg-[#0a1930] border border-blue-500/20"
                >
                  <img 
                    src={src} 
                    alt={`Portfolio piece ${index + 1}`}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 border-2 border-blue-400/0 group-hover:border-blue-400/50 rounded-xl sm:rounded-2xl transition-colors duration-300"></div>
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-600/80 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.6)]">
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 mt-8 sm:mt-12 overflow-hidden border-t border-blue-500/20 bg-[#020617]/80 backdrop-blur-2xl">
        {/* Liquid Glassmorphism Blobs */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-[-10%] sm:right-1/4 w-[60vw] sm:w-[40vw] h-[60vw] sm:h-[40vw] max-w-[500px] max-h-[500px] bg-blue-600 rounded-full mix-blend-screen filter blur-[100px] sm:blur-[120px] opacity-20 animate-[pulse_8s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-0 left-[-10%] sm:left-1/4 w-[50vw] sm:w-[30vw] h-[50vw] sm:h-[30vw] max-w-[400px] max-h-[400px] bg-cyan-500 rounded-full mix-blend-screen filter blur-[80px] sm:blur-[100px] opacity-10 animate-[pulse_10s_ease-in-out_infinite_reverse]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.1] sm:leading-[0.9] mb-6 sm:mb-8 text-white drop-shadow-lg">
                Let's Create<br className="hidden sm:block"/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 sm:ml-0 ml-2">Together</span>
              </h2>
              <p className="text-lg sm:text-xl font-light max-w-md mb-8 sm:mb-12 text-blue-100/70">
                Open for collaborations, freelance projects, and creative opportunities.
              </p>
              
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg font-medium mb-8 sm:mb-12">
                <a href="mailto:luciferkiller315@gmail.com" className="flex items-center gap-3 sm:gap-4 text-blue-50 hover:text-blue-400 transition-colors break-all">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-full bg-blue-900/40 border border-blue-500/30 flex items-center justify-center">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  luciferkiller315@gmail.com
                </a>
                <a href="tel:03261684315" className="flex items-center gap-3 sm:gap-4 text-blue-50 hover:text-blue-400 transition-colors">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-full bg-blue-900/40 border border-blue-500/30 flex items-center justify-center">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  0326-1684315
                </a>
                <a href="https://proboy.ct.ws/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 sm:gap-4 text-blue-50 hover:text-blue-400 transition-colors">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-full bg-blue-900/40 border border-blue-500/30 flex items-center justify-center">
                    <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  proboy.ct.ws
                </a>
              </div>

              <h3 className="font-sans font-semibold tracking-widest uppercase text-xs mb-4 sm:mb-6 text-blue-400">Connect</h3>
              {/* Social Icons matching Image 1 */}
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {SOCIAL_LINKS.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#111] border border-white/10 flex items-center justify-center hover:bg-blue-900/40 hover:border-blue-500/50 transition-all group shadow-lg"
                    title={link.name}
                  >
                    <link.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:scale-110 group-hover:text-blue-400 transition-all" strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col justify-center mt-8 lg:mt-0"
            >
              {/* Liquid Glass Form Container */}
              <div className="glass-panel relative p-6 sm:p-8 md:p-10 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden">
                {/* Inner subtle glare */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
                
                <h3 className="font-sans font-semibold tracking-widest uppercase text-sm mb-8 text-blue-200">Send a Message</h3>
                
                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-[10px] uppercase tracking-widest text-blue-400 ml-1">Name</label>
                    <input 
                      type="text" 
                      id="name"
                      placeholder="Your Name"
                      className="w-full bg-[#020617]/50 border border-blue-500/20 rounded-xl px-4 py-3.5 text-white placeholder:text-blue-200/30 focus:outline-none focus:border-blue-400 focus:bg-blue-900/20 transition-all backdrop-blur-md"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-blue-400 ml-1">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      placeholder="your@email.com"
                      className="w-full bg-[#020617]/50 border border-blue-500/20 rounded-xl px-4 py-3.5 text-white placeholder:text-blue-200/30 focus:outline-none focus:border-blue-400 focus:bg-blue-900/20 transition-all backdrop-blur-md"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-[10px] uppercase tracking-widest text-blue-400 ml-1">Message</label>
                    <textarea 
                      id="message"
                      rows={4}
                      placeholder="Tell me about your project..."
                      className="w-full bg-[#020617]/50 border border-blue-500/20 rounded-xl px-4 py-3.5 text-white placeholder:text-blue-200/30 focus:outline-none focus:border-blue-400 focus:bg-blue-900/20 transition-all backdrop-blur-md resize-none"
                    ></textarea>
                  </div>
                  <div className="relative">
                    <motion.button 
                      type="submit"
                      disabled={isSubmitting || isSuccess}
                      whileHover={{ scale: (isSubmitting || isSuccess) ? 1 : 1.02 }}
                      whileTap={{ scale: (isSubmitting || isSuccess) ? 1 : 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      className={`mt-4 w-full text-white font-semibold tracking-wider uppercase py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group ${
                        isSuccess 
                          ? 'bg-green-500/20 border border-green-500/50 text-green-400 shadow-[0_0_20px_rgba(34,197,94,0.3)]' 
                          : 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]'
                      }`}
                    >
                      {isSubmitting ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : isSuccess ? (
                        <>
                          <CheckCircle2 className="w-5 h-5" />
                          Sent Successfully
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </motion.button>

                    <AnimatePresence>
                      {isSuccess && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          className="absolute -bottom-12 left-0 right-0 text-center text-sm text-green-400 font-medium bg-green-500/10 py-2 rounded-lg border border-green-500/20 backdrop-blur-md"
                        >
                          Thanks for reaching out! I'll get back to you soon.
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </form>
              </div>
            </motion.div>

          </div>

          <div className="mt-16 sm:mt-24 pt-6 sm:pt-8 border-t border-blue-500/20 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] sm:text-xs font-medium uppercase tracking-widest text-blue-200/50 text-center">
            <div>© {new Date().getFullYear()} ProBoy. All rights reserved.</div>
            <div className="flex gap-6 sm:gap-8">
              <a href="https://proboy.ct.ws/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Portfolio Site</a>
              <a href="https://proboy.ct.ws/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Main Site</a>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Widget */}
      <WhatsAppWidget />
    </div>
  );
}
