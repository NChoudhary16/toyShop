import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Anjali Sharma",
    location: "Beta 1, Greater Noida",
    text: "Finally a shop in Jagat Farm that doesn't just sell plastic! I bought the wooden block set for my son. The quality is far better than anything I found online.",
    rating: 5
  },
  {
    name: "Rajesh Kasana",
    location: "Omega II",
    text: "I usually go to the malls for toys, but Toytopia's collection is unique. Great for gifting. It's just a 5-minute walk from the Greater Noida Authority office.",
    rating: 5
  },
  {
    name: "Dr. Meera Iyer",
    location: "Gamma 1",
    text: "Love their Montessori-inspired collection. Highly recommend to all parents in Greater Noida looking for educational toys that actually last.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">

      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-[#FDFBF7] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-[#DE8F6E] font-bold tracking-[0.3em] text-[10px] uppercase">Community</span>
          <h2 className="text-4xl font-serif italic text-[#2D4341] mt-2">Trusted by Local Parents</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="p-8 rounded-4xlbg-[#FDFBF7] border border-gray-100 flex flex-col justify-between hover:shadow-xl transition-all duration-500">
              <div>
                <Quote className="text-[#DE8F6E] opacity-20 mb-4" size={32} />
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="#DE8F6E" className="text-[#DE8F6E]" />
                  ))}
                </div>
                <p className="text-[#2D4341]/80 italic leading-relaxed mb-6">
                  "{review.text}"
                </p>
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-[#2D4341]">{review.name}</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}