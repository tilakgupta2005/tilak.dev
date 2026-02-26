import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, Twitter, Youtube, Instagram, MessageCircle } from "lucide-react";
import WindowFrame from "./WindowFrame";
import { useState } from "react";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/tilakgupta2005" },
  //{ icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/tilakgupta2005" },
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/channel/UCd0K3J64pA78s3WN53q74RA" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/tilakgupta2005" },
  { icon: MessageCircle, label: "Discord", href: "https://discord.com/invite/nvQvAyqsZw" },
  { icon: Mail, label: "Email", href: "mailto:tilakgupta2005@gmail.com" },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up form submission
    alert("Message sent! (demo)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-secondary-foreground">
        contact<span className="text-primary">.</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Contact form */}
        <WindowFrame title="new-message.sh" variant="terminal">
          <form onSubmit={handleSubmit} className="p-6 font-mono text-sm space-y-4">
            <div>
              <label className="text-primary text-xs">$ echo $NAME</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Your name"
                required
                className="w-full mt-1 bg-transparent border-b border-terminal-foreground/30 text-terminal-foreground placeholder:text-terminal-foreground/30 py-2 outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="text-primary text-xs">$ echo $EMAIL</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="you@example.com"
                required
                className="w-full mt-1 bg-transparent border-b border-terminal-foreground/30 text-terminal-foreground placeholder:text-terminal-foreground/30 py-2 outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="text-primary text-xs">$ cat message.txt</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                placeholder="What's on your mind?"
                required
                rows={4}
                className="w-full mt-1 bg-transparent border-b border-terminal-foreground/30 text-terminal-foreground placeholder:text-terminal-foreground/30 py-2 outline-none focus:border-primary transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="btn-brutal inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-sans font-bold"
            >
              <Send className="w-4 h-4" />
              Send message
            </button>
          </form>
        </WindowFrame>

        {/* Socials */}
        <div className="space-y-4">
          <div className="window-border-sm bg-primary/20 border-primary p-6 space-y-4 messy-alt">
            <h3 className="font-bold text-lg tracking-tight text-secondary-foreground">Find me elsewhere</h3>
            <div className="grid grid-cols-2 gap-3">
              {socials.map((social, i) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-brutal flex items-center gap-3 px-4 py-3 bg-highlight text-highlight-foreground border-secondary-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 ${i % 2 === 0 ? 'messy-sm' : 'messy-sm-alt'}`}
                >
                  <social.icon className="w-5 h-5" />
                  <span className="font-mono text-sm font-bold">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="window-border-sm bg-terminal border-secondary-foreground p-6 messy-sm-alt">
            <div className="font-mono text-sm space-y-2">
              <div className="text-terminal-foreground/60">{"// availability"}</div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                <span className="font-bold text-secondary-foreground">Currently available for freelance, full-time, part-time, contract roles</span>
              </div>
              <p className="text-terminal-foreground/70 text-xs">
                Response time: usually within 24h
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
