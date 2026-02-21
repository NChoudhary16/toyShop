import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 md:px-12 py-6 sticky top-0 bg-white/80 backdrop-blur-md z-50">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-[#2D4341] rounded-lg flex items-center justify-center text-[#DE8F6E] font-bold">T</div>
        <span className="text-xl font-serif italic font-bold text-[#2D4341]">Toytopia</span>
      </div>
      <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-[#2D4341]/70">
        <a href="#collection" className="hover:text-[#DE8F6E] transition">Collection</a>
        <a href="#about" className="hover:text-[#DE8F6E] transition">Story</a>
        <a href="#contact" className="hover:text-[#DE8F6E] transition">Contact</a>
      </div>
      <a 
        href="https://wa.me/+917563087581" 
        target="_blank"
        className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full text-xs font-bold hover:shadow-lg transition-all"
      >
        <MessageCircle size={16} /> <span className="hidden sm:inline">WhatsApp Us</span>
      </a>
    </nav>
  );
}