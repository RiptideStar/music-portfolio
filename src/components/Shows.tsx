'use client';

export default function Shows() {
  const shows = [
    { month: 'DEC', day: '15', venue: 'The Blue Note', location: 'New York, NY' },
    { month: 'JAN', day: '08', venue: 'The Troubadour', location: 'Los Angeles, CA' },
    { month: 'JAN', day: '22', venue: 'House of Blues', location: 'Chicago, IL' },
  ];

  return (
    <section id="shows" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Upcoming Shows
        </h2>

        <div className="space-y-6">
          {shows.map((show, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/10 flex flex-col sm:flex-row items-center gap-6 hover:translate-x-2 hover:border-[#6366f1] hover:shadow-lg hover:shadow-[#6366f1]/20 transition-all"
            >
              <div className="gradient-bg rounded-xl p-4 text-center min-w-[80px]">
                <div className="text-sm font-bold">{show.month}</div>
                <div className="text-3xl font-bold">{show.day}</div>
              </div>

              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-2xl font-semibold mb-1">{show.venue}</h3>
                <p className="text-gray-400">{show.location}</p>
              </div>

              <button className="px-6 py-2 rounded-full bg-gradient-to-r from-[#6366f1] to-[#ec4899] font-semibold hover:shadow-lg hover:shadow-[#6366f1]/50 transition-all">
                Tickets
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
