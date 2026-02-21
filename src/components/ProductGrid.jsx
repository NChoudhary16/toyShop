import bike from "../assets/bike.png";
import cycle from "../assets/cycle.png";
import barbie from "../assets/barbie.png";
import car from "../assets/car.png";
const products = [
  { name: " Racer", price: "7500", cat: "bike", img: bike },
  { name: "F1", price: "8000", cat: "car", img: car },
  { name: "Barbie", price: "350", cat: "barbie", img: barbie },
  { name: "Bicycle", price: "3500", cat: "cycle", img: cycle},
];

export default function ProductGrid() {
  return (
    <section id="collection" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-serif italic text-[#2D4341]">The Seasonal Edit</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((p, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="aspect-6/5 rounded-2xl overflow-hidden bg-gray-100 mb-4">
              <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <p className="text-[9px] uppercase tracking-widest text-[#DE8F6E] font-bold">{p.cat}</p>
            <h4 className="text-lg font-serif text-[#2D4341]">{p.name}</h4>
            <p className="font-bold text-gray-500">₹{p.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}