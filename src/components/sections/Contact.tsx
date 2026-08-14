'use client';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Button from '@/components/ui/Button';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/contact`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        },
      );

      if (res.ok) {
        toast.success('Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      } else {
        toast.error('Failed to send message');
      }
    } catch {
      toast.error('Error sending message');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative w-full py-20 px-6 md:px-12">
      <div className="max-w-2xl mx-auto">
        <div className="mb-16 text-center">
          <span className="font-mono text-xs tracking-[0.3em] text-cyber uppercase text-glow">
            {'>'} GET IN TOUCH {'<'}
          </span>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white mt-4">
            Contact Me
          </h2>
          <p className="text-silver-dim text-base mt-4 max-w-md mx-auto">
            Have a project or want to collaborate? Let's work together!
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="hud-panel p-8 rounded-lg border border-cyber/40 space-y-4"
        >
          <div>
            <label
              htmlFor="contact-name"
              className="block font-mono text-xs text-cyber mb-2 uppercase"
            >
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
              required
              className="w-full bg-ink-light border border-cyber/40 text-silver placeholder-silver-dim rounded px-4 py-3 focus:outline-none focus:border-cyber/80 transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="block font-mono text-xs text-cyber mb-2 uppercase"
            >
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="your@email.com"
              required
              className="w-full bg-ink-light border border-cyber/40 text-silver placeholder-silver-dim rounded px-4 py-3 focus:outline-none focus:border-cyber/80 transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="block font-mono text-xs text-cyber mb-2 uppercase"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Your message..."
              required
              rows={5}
              className="w-full bg-ink-light border border-cyber/40 text-silver placeholder-silver-dim rounded px-4 py-3 focus:outline-none focus:border-cyber/80 transition-colors resize-none"
            />
          </div>

          <Button type="submit" variant="cyber" className="w-full" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </Button>
        </form>

        <div className="mt-12 text-center space-y-2">
          <p className="text-silver-dim font-mono text-sm">Or reach out directly:</p>
          <a
            href="mailto:pakhrinhemraj@gmail.com"
            className="text-cyber font-mono text-sm hover:text-teal transition-colors"
          >
            pakhrinhemraj@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
