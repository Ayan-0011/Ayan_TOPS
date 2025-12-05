export default function Banner() {
  return (
    <section className="relative bg-gray-500">
      {/* Banner Image */}
      <div className="h-[450px] md:h-[500px] w-full relative">
        <img
          src="https://images.unsplash.com/photo-1602524817923-0b32b2b22369?auto=format&fit=crop&w=1950&q=80"
          alt="E-Commerce Banner"
          className="w-full h-full object-cover"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-20">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
            Summer Sale is Here!
          </h2>
          <p className="text-white text-lg md:text-2xl mb-6 max-w-lg">
            Up to 50% off on selected items. Grab your favorites before stock runs out!
          </p>
          <button className="bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition">
            Shop Now
          </button>
        </div>
      </div>
    </section>

  );
}
