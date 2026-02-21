
import shop from "../assets/shop.png";


export default function Hero() {
  return (
    <div className="relative">

      <section className="px-6 py-6">
        <div className="max-w-7xl mx-auto bg-[#2D4341] rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row items-center min-h-125">
          <div className="p-10 lg:p-20 lg:w-1/2 text-white">
            <h1 className="text-5xl lg:text-7xl font-serif italic mb-6 leading-tight">
              Playful <span className="text-[#DE8F6E]">Heirlooms.</span>
            </h1>
            <p className="text-gray-400 mb-8 max-w-sm font-light leading-relaxed">
              Timeless toys crafted for imagination. Sustainable, safe, and beautiful enough for your living room.
            </p>
            <a href="#collection" className="inline-block bg-[#DE8F6E] text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#2D4341] transition-all">
              See Collection
            </a>
          </div>
          <div className="lg:w-1/2 w-full h-64 lg:h-125">
            <img 
              src={shop} 
              className="w-full h-full object-cover" 
              alt="Shop Decor" 
            />
          </div>
        </div>
      </section>


      <div 
        className="absolute -bottom-24 left-0 w-full h-64 bg-linear-to-b from-[#e3aa36] to-white -z-10"
        style={{ clipPath: 'polygon(0 0, 100% 30%, 100% 100%, 0% 100%)' }}
      ></div>
    </div>
  );
}