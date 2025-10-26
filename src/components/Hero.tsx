'use client';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black to-[#0f0f0f]">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1)_0%,transparent_50%)]"></div>

      <div className="relative z-10 text-center animate-fade-in-up px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-text tracking-wider">
          KYLE ZHANG
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8 tracking-wide">
          Music Artist • Producer • Performer
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#music"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#6366f1] to-[#ec4899] text-white font-semibold hover:shadow-lg hover:shadow-[#6366f1]/50 transition-all hover:-translate-y-1"
          >
            Listen Now
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-full border-2 border-[#6366f1] text-white font-semibold hover:bg-[#6366f1] transition-all hover:-translate-y-1"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <div className="w-0.5 h-8 bg-gradient-to-b from-[#6366f1] to-transparent"></div>
      </div>
    </section>
  );
}
