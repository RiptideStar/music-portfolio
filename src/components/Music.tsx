'use client';

import { FaMusic } from 'react-icons/fa';

export default function Music() {
  const albums = [
    { title: 'Latest Single', description: 'Available on all platforms' },
    { title: 'EP Collection', description: '5 tracks' },
    { title: 'Debut Album', description: '12 tracks' },
  ];

  return (
    <section id="music" className="py-20 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Music
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {albums.map((album, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-3xl p-6 border border-white/10 card-hover hover:border-[#6366f1] text-center"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#6366f1]/20 to-[#ec4899]/20 flex items-center justify-center mb-4">
                <FaMusic className="text-6xl opacity-50" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">{album.title}</h3>
              <p className="text-gray-400 mb-4">{album.description}</p>
              <button className="px-6 py-2 rounded-full bg-gradient-to-r from-[#6366f1] to-[#ec4899] font-semibold hover:shadow-lg hover:shadow-[#6366f1]/50 transition-all">
                Listen
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
