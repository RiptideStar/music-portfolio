'use client';

import { FaSpotify, FaApple, FaYoutube, FaInstagram } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          About
        </h2>

        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Artist Image */}
          <div className="flex justify-center">
            <div className="w-72 h-72 rounded-3xl gradient-bg flex items-center justify-center text-6xl font-bold shadow-2xl shadow-[#6366f1]/30">
              KZ
            </div>
          </div>

          {/* About Text */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-3xl font-semibold">Welcome to my musical journey</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Kyle Zhang is a dynamic music artist known for pushing boundaries and creating unique sonic experiences.
              With a passion for blending different genres and styles, Kyle crafts music that resonates with audiences around the world.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              From intimate acoustic performances to electrifying stage shows, Kyle&apos;s versatility and authenticity shine through in every note.
              Drawing inspiration from life experiences and diverse musical influences, each track tells a story and invites listeners on an emotional journey.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {[
                { Icon: FaSpotify, href: '#' },
                { Icon: FaApple, href: '#' },
                { Icon: FaYoutube, href: '#' },
                { Icon: FaInstagram, href: '#' },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:gradient-bg transition-all hover:-translate-y-1"
                  aria-label="Social media link"
                >
                  <Icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
