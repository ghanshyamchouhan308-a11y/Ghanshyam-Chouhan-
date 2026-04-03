/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Dumbbell, 
  Users, 
  Clock, 
  MapPin, 
  Phone, 
  Star, 
  CheckCircle2, 
  ArrowRight, 
  Instagram, 
  Facebook, 
  MessageCircle,
  Menu,
  X,
  Zap,
  TrendingUp
} from 'lucide-react';

// --- Components ---

const About = () => {
  return (
    <section id="about" className="py-24 bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="/input_file_0.png" 
                alt="Bodyfy Fitness Interior" 
                className="w-full h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-dark/80 via-transparent to-transparent" />
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-brand-red p-8 rounded-[2rem] shadow-2xl z-10">
              <div className="text-4xl font-black text-white mb-1">4.6★</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-white/80">Google Rating</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-display font-black mb-8 uppercase tracking-tighter leading-none">
              WHERE POWER <br />
              <span className="text-brand-red">MEETS PURPOSE</span>
            </h2>
            <p className="text-gray-400 font-bold uppercase text-xs tracking-widest mb-8 leading-relaxed">
              At BODYFY FITNESS, we don't just provide equipment; we provide an environment where you can CONQUER your limits. Our facility is designed for high-performance training with a community that pushes you further.
            </p>
            <ul className="space-y-6 mb-10">
              {[
                "Elite Strength & Conditioning Zone",
                "Certified Professional Trainers",
                "Premium Atmosphere & Community",
                "High-Performance Equipment"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-xs font-black uppercase tracking-widest">
                  <CheckCircle2 className="w-5 h-5 text-brand-red" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="bg-white text-brand-dark px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-brand-red hover:text-white transition-all shadow-xl">
              LEARN MORE ABOUT US
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Plans', href: '#plans' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/95 backdrop-blur-md py-3 border-b border-white/10 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(225,29,72,0.4)]">
            <Dumbbell className="text-white w-6 h-6" />
          </div>
          <span className="font-display font-bold text-xl tracking-tighter uppercase">
            BODYFY <span className="text-brand-red">FITNESS</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-xs font-black hover:text-brand-red transition-colors uppercase tracking-[0.2em]">
              {link.name}
            </a>
          ))}
          <button className="bg-brand-red hover:bg-red-700 text-white px-8 py-2.5 rounded-full text-sm font-black transition-all transform hover:scale-105 shadow-lg active:scale-95">
            JOIN NOW
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-dark border-b border-white/10 p-6 flex flex-col gap-4 md:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-black uppercase tracking-widest py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-brand-red text-white py-4 rounded-xl font-black text-lg shadow-lg mt-2">
              JOIN NOW
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image - Using the uploaded real gym image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/input_file_0.png" 
          alt="Bodyfy Fitness Real Interior" 
          className="w-full h-full object-cover brightness-[0.5] contrast-[1.2] scale-110"
          referrerPolicy="no-referrer"
        />
        {/* 70% Opacity Black Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-brand-dark/80 via-brand-dark/60 to-brand-dark" />
        <div className="absolute inset-0 bg-linear-to-r from-brand-dark/90 via-brand-dark/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/20 border border-brand-red/30 text-brand-red text-[10px] font-black mb-6 tracking-[0.3em] uppercase shadow-[0_0_20px_rgba(225,29,72,0.2)]">
            <Zap className="w-4 h-4" /> Real Environment • Real Results
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-black leading-[0.9] mb-6 tracking-tighter uppercase">
            CONQUER <br />
            <span className="text-brand-red drop-shadow-[0_0_30px_rgba(225,29,72,0.3)]">YOUR LIMITS</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-lg leading-relaxed font-black uppercase tracking-wide">
            Experience the power of BODYFY. Our elite facility is built for those who refuse to settle for average.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-brand-red hover:bg-red-700 text-white px-10 py-5 rounded-full font-black text-lg transition-all flex items-center justify-center gap-2 group shadow-2xl shadow-brand-red/20">
              JOIN THE POWER HOUSE <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/5 hover:bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-full font-black text-lg transition-all border border-white/10">
              EXPLORE FACILITY
            </button>
          </div>

          <div className="mt-12 flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="flex text-brand-red">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <span className="text-white font-black text-xl">4.6</span>
            </div>
            <div className="h-8 w-[1px] bg-white/10" />
            <div className="flex flex-col">
              <span className="text-brand-red font-black text-xs uppercase tracking-widest">Open Now</span>
              <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Closes 9:30 PM</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Gallery = () => {
  // Using the real gym image for the gallery
  const galleryImages = [
    { url: "/input_file_0.png", caption: "Our Main Workout Floor" },
    { url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070", caption: "Elite Strength Zone" },
    { url: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069", caption: "Premium Equipment" },
    { url: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975", caption: "Functional Training" },
  ];

  return (
    <section id="gallery" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-display font-black mb-4 uppercase tracking-tighter">OUR <span className="text-brand-red">FACILITY</span></h2>
          <p className="text-gray-500 font-black uppercase tracking-[0.3em] text-xs">Real Photos • Real Vibe</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryImages.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-[450px] rounded-[2.5rem] overflow-hidden cursor-pointer border border-white/5 shadow-2xl"
            >
              <img 
                src={img.url} 
                alt={img.caption} 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 brightness-[1.1] contrast-[1.1]"
                referrerPolicy="no-referrer"
              />
              {/* Subtle Red/Purple Glow Effect on Hover */}
              <div className="absolute inset-0 bg-brand-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
              <div className="absolute inset-0 bg-linear-to-t from-brand-dark via-transparent to-transparent opacity-90" />
              
              <div className="absolute bottom-0 left-0 w-full p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-brand-red font-black text-xs uppercase tracking-[0.4em] mb-3">{img.caption}</p>
                <div className="h-1 w-12 bg-brand-red group-hover:w-32 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ActionSection = () => {
  return (
    <section className="relative py-40 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/input_file_0.png" 
          alt="Workout Action" 
          className="w-full h-full object-cover brightness-[0.25] contrast-[1.4] grayscale-[0.3]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-r from-brand-dark via-brand-dark/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <h2 className="text-6xl md:text-8xl font-display font-black mb-8 leading-[0.85] uppercase tracking-tighter">
            NO EXCUSES. <br />
            <span className="text-brand-red drop-shadow-[0_0_20px_rgba(225,29,72,0.4)]">JUST RESULTS.</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 font-black uppercase tracking-[0.2em] max-w-md">
            The clock is ticking. Your transformation starts now.
          </p>
          <button className="bg-brand-red hover:bg-red-700 text-white px-12 py-6 rounded-full font-black text-xl transition-all shadow-[0_20px_50px_rgba(225,29,72,0.4)] transform hover:scale-105 active:scale-95">
            START TRAINING TODAY
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { title: 'Weight Training', icon: <Dumbbell className="w-8 h-8" />, desc: 'Elite free weights and machines for maximum muscle growth.' },
    { title: 'Cardio Training', icon: <TrendingUp className="w-8 h-8" />, desc: 'High-performance treadmills and endurance gear.' },
    { title: 'Personal Training', icon: <Users className="w-8 h-8" />, desc: '1-on-1 coaching from certified industry experts.' },
  ];

  return (
    <section id="services" className="py-24 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="p-12 rounded-[2.5rem] bg-brand-dark border border-white/5 hover:border-brand-red/30 transition-all group shadow-2xl"
            >
              <div className="w-20 h-20 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red mb-10 group-hover:bg-brand-red group-hover:text-white transition-all duration-500 shadow-lg">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{service.title}</h3>
              <p className="text-gray-500 font-bold leading-relaxed uppercase text-xs tracking-widest">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Plans = () => {
  const plans = [
    { name: 'Monthly', price: '₹1,999', features: ['Full Gym Access', 'Locker Facility', 'General Training'], popular: false },
    { name: 'Quarterly', price: '₹4,999', features: ['Full Gym Access', 'Personal Training (2 sessions)', 'Nutrition Plan'], popular: true },
    { name: 'Yearly', price: '₹14,999', features: ['Full Gym Access', 'Unlimited PT sessions', 'Advanced Nutrition', 'Gym Merch'], popular: false },
  ];

  return (
    <section id="plans" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-display font-black mb-4 uppercase tracking-tighter">MEMBERSHIP <span className="text-brand-red">PLANS</span></h2>
          <p className="text-gray-500 font-black uppercase tracking-[0.3em] text-xs">Invest in Your Future Self</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {plans.map((plan, idx) => (
            <div 
              key={idx}
              className={`relative p-12 rounded-[3rem] border transition-all duration-500 ${plan.popular ? 'bg-brand-red border-brand-red shadow-[0_30px_60px_rgba(225,29,72,0.3)] scale-105 z-10' : 'bg-brand-gray border-white/5 hover:border-white/20'}`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white text-brand-red px-8 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-2xl">
                  Most Popular
                </div>
              )}
              <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-10">
                <span className="text-6xl font-black tracking-tighter">{plan.price}</span>
                <span className="text-xs opacity-60 font-black uppercase tracking-widest">/period</span>
              </div>
              <ul className="space-y-6 mb-12">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-center gap-4 text-xs font-black uppercase tracking-widest opacity-90">
                    <CheckCircle2 className={`w-5 h-5 shrink-0 ${plan.popular ? 'text-white' : 'text-brand-red'}`} />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-6 rounded-2xl font-black text-lg transition-all shadow-2xl ${plan.popular ? 'bg-white text-brand-red hover:bg-gray-100' : 'bg-brand-red text-white hover:bg-red-700'}`}>
                JOIN NOW
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-display font-black mb-10 uppercase tracking-tighter leading-none">VISIT THE <br /><span className="text-brand-red">POWER HOUSE</span></h2>
            <div className="space-y-12">
              <div className="flex gap-8 group">
                <div className="w-20 h-20 rounded-2xl bg-brand-dark border border-white/5 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-500 shadow-2xl">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-black uppercase tracking-tight mb-2">Our Location</h4>
                  <p className="text-gray-500 font-black uppercase text-xs tracking-widest leading-relaxed">123 Fitness Street, Power House Lane,<br />Mumbai, Maharashtra</p>
                </div>
              </div>
              <div className="flex gap-8 group">
                <div className="w-20 h-20 rounded-2xl bg-brand-dark border border-white/5 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-500 shadow-2xl">
                  <Clock className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-black uppercase tracking-tight mb-2">Working Hours</h4>
                  <p className="text-gray-500 font-black uppercase text-xs tracking-widest">Mon - Sat: 5:00 AM - 10:00 PM</p>
                  <p className="text-brand-red font-black text-[10px] mt-2 uppercase tracking-[0.3em] animate-pulse">Open Now • Closes 9:30 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-16 flex flex-col sm:flex-row gap-6">
              <button className="flex-1 bg-brand-red hover:bg-red-700 text-white py-6 rounded-2xl font-black flex items-center justify-center gap-4 shadow-2xl shadow-brand-red/20 transition-all active:scale-95 text-lg">
                <Phone className="w-6 h-6" /> CALL NOW
              </button>
              <button className="flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white py-6 rounded-2xl font-black flex items-center justify-center gap-4 shadow-2xl shadow-green-500/20 transition-all active:scale-95 text-lg">
                <MessageCircle className="w-6 h-6" /> WHATSAPP
              </button>
            </div>
          </div>

          <div className="rounded-[3.5rem] overflow-hidden h-[550px] border border-white/10 shadow-2xl relative group">
            <img 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066" 
              alt="Map" 
              className="w-full h-full object-cover brightness-[0.4] group-hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center bg-brand-dark/40 backdrop-blur-[2px]">
              <div className="w-24 h-24 bg-brand-red rounded-full flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(225,29,72,0.6)] animate-pulse">
                <MapPin className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-4xl font-black mb-6 uppercase tracking-tighter">OPEN IN MAPS</h3>
              <button className="bg-white text-brand-dark px-12 py-5 rounded-full font-black text-xl shadow-2xl hover:bg-gray-200 transition-all transform hover:scale-105">GET DIRECTIONS</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Trainers = () => {
  const trainers = [
    { name: "Alex Rivera", role: "Strength Coach", img: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1974" },
    { name: "Sarah Chen", role: "HIIT Specialist", img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070" },
    { name: "Marcus Thorne", role: "Bodybuilding Expert", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070" },
  ];

  return (
    <section id="trainers" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-display font-black mb-4 uppercase tracking-tighter">MEET THE <span className="text-brand-red">EXPERTS</span></h2>
          <p className="text-gray-500 font-black uppercase tracking-[0.3em] text-xs">Guided by Power</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {trainers.map((trainer, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="group relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5"
            >
              <img src={trainer.img} alt={trainer.name} className="w-full h-[450px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              <div className="absolute inset-0 bg-linear-to-t from-brand-dark via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 w-full p-8">
                <h4 className="text-xl font-black uppercase tracking-tight mb-1">{trainer.name}</h4>
                <p className="text-brand-red font-black uppercase text-[10px] tracking-[0.2em]">{trainer.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 bg-brand-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-16 mb-16">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-brand-red rounded-xl flex items-center justify-center shadow-2xl">
              <Dumbbell className="text-white w-8 h-8" />
            </div>
            <span className="font-display font-bold text-3xl tracking-tighter uppercase">
              BODYFY <span className="text-brand-red">FITNESS</span>
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-12">
            {['Services', 'Gallery', 'Plans', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-500 font-black hover:text-brand-red transition-colors uppercase text-xs tracking-[0.3em]">{item}</a>
            ))}
          </div>

          <div className="flex gap-8">
            <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all cursor-pointer group shadow-xl">
              <Instagram className="w-6 h-6 text-gray-500 group-hover:text-white" />
            </div>
            <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all cursor-pointer group shadow-xl">
              <Facebook className="w-6 h-6 text-gray-500 group-hover:text-white" />
            </div>
          </div>
        </div>
        
        <div className="pt-16 border-t border-white/5 text-center">
          <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.5em]">
            © 2026 BODYFY FITNESS BY POWER HOUSE GYM. DESIGNED FOR POWER.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="selection:bg-brand-red selection:text-white">
      {/* Sticky Join Now Button for Desktop */}
      <div className="fixed top-1/2 -right-14 z-40 hidden lg:block transform -rotate-90 origin-center">
        <button className="bg-brand-red text-white px-10 py-5 font-black uppercase tracking-[0.3em] shadow-[0_10px_40px_rgba(225,29,72,0.4)] hover:bg-red-700 transition-all rounded-t-[2rem] text-sm">
          JOIN NOW
        </button>
      </div>

      <Navbar />
      <Hero />
      <About />
      
      {/* Trust Bar */}
      <div className="bg-brand-red py-5 overflow-hidden whitespace-nowrap border-y border-white/10 shadow-2xl relative z-20">
        <div className="flex animate-marquee gap-16 items-center">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center gap-6 text-white font-black uppercase tracking-[0.3em] text-[10px]">
              <Star className="w-4 h-4 fill-current" /> 4.6 RATING ON GOOGLE
              <div className="w-2 h-2 rounded-full bg-white/40" />
              LIMITED SLOTS AVAILABLE
              <div className="w-2 h-2 rounded-full bg-white/40" />
              OPEN UNTIL 9:30 PM
            </div>
          ))}
        </div>
      </div>

      <Gallery />
      <ActionSection />
      <Services />
      <Plans />
      <Trainers />
      <Contact />
      <Footer />

      {/* Floating Action Buttons for Mobile */}
      <div className="fixed bottom-10 right-10 z-50 flex flex-col gap-6 md:hidden">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-20 h-20 bg-[#25D366] text-white rounded-full shadow-[0_15px_40px_rgba(37,211,102,0.5)] flex items-center justify-center"
        >
          <MessageCircle className="w-10 h-10" />
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-20 h-20 bg-brand-red text-white rounded-full shadow-[0_15px_40px_rgba(225,29,72,0.5)] flex items-center justify-center"
        >
          <Phone className="w-10 h-10" />
        </motion.button>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
          display: flex;
          width: max-content;
        }
      `}</style>
    </div>
  );
}
