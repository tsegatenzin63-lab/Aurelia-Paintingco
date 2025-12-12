"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin, ChevronDown, Star, ArrowRight } from "lucide-react";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Textarea from "@/components/ui/textarea";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Process", href: "#process" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Premium Residential Painting",
    description: "From modern interiors to full-home transformations, we deliver flawless finishes and refined detail that elevate your lifestyle.",
    image: "https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?w=800&q=80",
  },
  {
    title: "Luxury Interior Finishes",
    description: "Specialising in feature walls, textures, venetian plaster, and bespoke finishes designed to make a statement.",
    image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80",
  },
  {
    title: "Exterior Painting",
    description: "High-performance products and expert application to protect and beautify your home for years to come.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  },
  {
    title: "Commercial Projects",
    description: "Professional results with minimal disruption — ideal for offices, retail, strata, and commercial buildings seeking a premium aesthetic.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    title: "Colour Consultation",
    description: "Expert guidance to help you choose tones that complement your architecture and enhance the mood of your space.",
    image: "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?w=800&q=80",
  },
];

const portfolio = [
  { image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", title: "Modern Residence", category: "Residential" },
  { image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", title: "Luxury Interior", category: "Interior" },
  { image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80", title: "Heritage Restoration", category: "Exterior" },
  { image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80", title: "Boutique Office", category: "Commercial" },
  { image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80", title: "Penthouse Suite", category: "Residential" },
  { image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80", title: "Feature Wall", category: "Interior" },
];

const process = [
  { step: "01", title: "Consultation & Vision", description: "We take the time to understand your needs, style, and goals." },
  { step: "02", title: "Detailed Preparation", description: "Flawless finishes begin with meticulous surface preparation." },
  { step: "03", title: "Precision Painting", description: "Premium products, advanced techniques, and a steady hand." },
  { step: "04", title: "Final Inspection", description: "We review every detail to ensure perfection." },
  { step: "05", title: "After-Care Guidance", description: "We leave you with a clean space and simple care recommendations." },
];

const testimonials = [
  { quote: "Aurelia Painting transformed our home beyond expectation. The attention to detail was extraordinary.", author: "Sarah L." },
  { quote: "Professional, reliable, and the finish is flawless. Easily the best painters we've ever worked with.", author: "Mark & Olivia" },
  { quote: "Their craftsmanship is on another level — truly luxurious results.", author: "Daniel K." },
];

const values = [
  { title: "Craftsmanship", description: "We honour the art of painting with precision, passion, and pride." },
  { title: "Integrity", description: "Transparent, honest service from consultation to completion." },
  { title: "Detail", description: "Luxury lives in the details; we refuse to cut corners." },
  { title: "Beauty", description: "Every space deserves to look and feel extraordinary." },
  { title: "Professionalism", description: "Reliable, respectful, and committed to your satisfaction." },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map(item => item.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#FDFBF7]/95 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#home" className="font-serif text-2xl tracking-wide text-[#1A1A1A]">
              <span className="font-light">AURELIA</span>
              <span className="text-[#C9A962] ml-1">.</span>
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`font-display text-sm tracking-widest uppercase transition-colors ${activeSection === item.href.slice(1) ? "text-[#C9A962]" : "text-[#1A1A1A]/70 hover:text-[#C9A962]"}`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="hidden lg:block">
              <a href="#contact">
                <Button className="bg-[#1A1A1A] hover:bg-[#C9A962] text-white font-display text-sm tracking-wider px-6 transition-all duration-300">
                  Request Quote
                </Button>
              </a>
            </div>

            <button className="lg:hidden text-[#1A1A1A]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-[#FDFBF7] border-t border-[#E8E4DC]"
          >
            <div className="px-6 py-8 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block font-display text-sm tracking-widest uppercase text-[#1A1A1A]/70 hover:text-[#C9A962] py-2"
                >
                  {item.name}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-[#1A1A1A] hover:bg-[#C9A962] text-white font-display text-sm tracking-wider mt-4">
                  Request Quote
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </nav>
      {/* Rest of page content omitted for brevity in this file to keep size reasonable */}

      <main className="mt-24 p-6">
        <section id="home" className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <p className="font-display text-[#C9A962] text-sm tracking-[0.3em] uppercase mb-6">Aurelia Painting</p>
            <h1 className="font-serif text-4xl sm:text-5xl text-[#1A1A1A] leading-none mb-4">
              Luxury Painting,<br/><span className="italic font-light">Redefined.</span>
            </h1>
            <p className="text-[#1A1A1A]/70 max-w-2xl mx-auto mb-6">Where craftsmanship meets artistry — delivering refined finishes for homes and spaces that deserve nothing less than exceptional.</p>
            <div className="flex gap-4 justify-center">
              <a href="#contact"><Button>Request a Quote</Button></a>
              <a href="#portfolio"><Button variant="outline">View Portfolio</Button></a>
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl mb-6">Where Precision <span className="italic font-light">Meets Elegance</span></h2>
            <p className="text-[#1A1A1A]/70">Aurelia Painting was founded on a simple belief — <strong>luxury is created through detail.</strong> With years of professional experience across residential and commercial projects, our team brings artistry, technical skill, and craftsmanship to every surface we touch.</p>
          </div>
        </section>

        <section id="services" className="py-20 bg-[#F5F3EE]">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <div key={i} className="flex gap-6 items-center">
                <img src={s.image} alt={s.title} className="w-40 h-28 object-cover rounded-md"/>
                <div>
                  <h3 className="font-serif text-xl">{s.title}</h3>
                  <p className="text-[#1A1A1A]/70">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-serif text-2xl mb-4">Let's Bring Your Vision to Life</h3>
              <p className="text-[#1A1A1A]/70 mb-6">Whether you're refreshing a single room or transforming an entire property, Aurelia Painting is here to deliver exceptional results.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4"><Phone size={20}/><span>0000 000 000</span></div>
                <div className="flex items-center gap-4"><Mail size={20}/><span>info@aureliapainting.com.au</span></div>
                <div className="flex items-center gap-4"><MapPin size={20}/><span>Sydney Wide</span></div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div><label className="block text-sm">Name</label><Input placeholder="Your name" className="w-full p-3"/></div>
                <div><label className="block text-sm">Email</label><Input placeholder="your@email.com" className="w-full p-3"/></div>
                <div><label className="block text-sm">Phone</label><Input placeholder="Your phone" className="w-full p-3"/></div>
                <div><label className="block text-sm">Project Details</label><Textarea placeholder="Tell us about your project..." className="w-full p-3 min-h-[120px]"/></div>
                <Button type="submit">Send Message</Button>
              </form>
            </div>
          </div>
        </section>

        <footer className="py-12 text-center text-sm text-[#777]">
          © {new Date().getFullYear()} Aurelia Painting. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
