import React from 'react';
import { MapPin, Phone, Instagram, Clock } from 'lucide-react';


export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="text-5xl font-serif italic text-[#2D4341]">Come visit us.</h2>
          <p className="text-gray-600 leading-relaxed">Our flagship boutique is located in the design district. Experience the magic of tactile play in person.</p>
          <div className="space-y-4">
            <div className="flex gap-4 items-center">
              <MapPin className="text-[#C5A059]" />
              <p>Shop No. G-11, Jagat Farm Market, <br /> Gamma 1, Greater Noida, UP</p>
            </div>
            <div className="flex gap-4 items-center">
              <Clock className="text-[#C5A059]" />
              <p>Everyday: 11:00 AM - 9:00 PM</p>
            </div>
          </div>
        </div>
        <div className="h-100 rounded-4xl overflow-hidden brightness-75 contrast-125 shadow-2xl">
          <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800" className="w-full h-full object-cover" alt="Map View" />
        </div>
      </div>
    </section>
  );
}