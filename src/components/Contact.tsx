'use client';

import { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [notification, setNotification] = useState<{ message: string; type: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      showNotification('Please fill in all fields', 'error');
      return;
    }

    if (!isValidEmail(formData.email)) {
      showNotification('Please enter a valid email address', 'error');
      return;
    }

    showNotification("Thank you for your message! I'll get back to you soon.", 'success');
    setFormData({ name: '', email: '', message: '' });
  };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const showNotification = (message: string, type: string) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 4000);
  };

  return (
    <section id="contact" className="py-20 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-6 py-4 bg-[#1a1a1a] border-2 border-white/10 rounded-xl text-white focus:border-[#6366f1] focus:outline-none focus:shadow-lg focus:shadow-[#6366f1]/20 transition-all"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-6 py-4 bg-[#1a1a1a] border-2 border-white/10 rounded-xl text-white focus:border-[#6366f1] focus:outline-none focus:shadow-lg focus:shadow-[#6366f1]/20 transition-all"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-6 py-4 bg-[#1a1a1a] border-2 border-white/10 rounded-xl text-white focus:border-[#6366f1] focus:outline-none focus:shadow-lg focus:shadow-[#6366f1]/20 transition-all resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-[#6366f1] to-[#ec4899] text-white font-semibold hover:shadow-lg hover:shadow-[#6366f1]/50 transition-all"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-semibold mb-4">Connect with me</h3>
            <p className="text-gray-400 text-lg mb-8">
              For booking inquiries, collaborations, or just to say hello, feel free to reach out!
            </p>
            <div className="flex items-center gap-4 text-gray-400">
              <FaEnvelope className="text-[#6366f1] text-2xl" />
              <span className="text-lg">contact@kylezhang.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Notification */}
      {notification && (
        <div
          className={`fixed top-24 right-6 px-6 py-4 rounded-xl text-white shadow-2xl z-50 animate-fade-in-up max-w-sm ${
            notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
          }`}
        >
          {notification.message}
        </div>
      )}
    </section>
  );
}
