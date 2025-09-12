'use client';

import { motion } from 'framer-motion';
import { 
  Terminal, 
  Github, 
  Brain, 
  Link, 
  Database, 
  Heart, 
  Figma, 
  Play, 
  Zap, 
  Globe, 
  Activity,
  Code,
  Palette,
  Rocket,
  Shield,
  Users,
  MapPin,
  Mail,
  Phone,
  ShoppingCart,
  Utensils,
  Stethoscope,
  Scale,
  Factory,
  Lightbulb,
  Briefcase,
  Hammer,
  MessageCircle
} from 'lucide-react';

export default function Home() {
  const handleStartProject = () => {
    // Scroll to contact section or open contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTalkToTeam = () => {
    // Open email client or redirect to contact page
    window.location.href = 'mailto:contact@n52.de?subject=Let\'s discuss your project&body=Hi N 52° team,%0D%0A%0D%0AI\'d like to discuss my project with you.%0D%0A%0D%0AProject details:%0D%0A%0D%0ABest regards';
  };

  const handleBookConsultation = () => {
    // Open calendar booking or contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    // Open WhatsApp Business with pre-filled message
    const message = encodeURIComponent("Hi N 52° team! I'd like to discuss my project with you. Can we schedule a call?");
    window.open(`https://wa.me/493012345678?text=${message}`, '_blank');
  };
  const aiTools = [
    { name: 'Cursor', icon: Terminal, description: 'AI-powered code editor' },
    { name: 'GitHub Copilot', icon: Github, description: 'AI pair programming' },
    { name: 'OpenAI GPT', icon: Brain, description: 'Advanced language models' },
    { name: 'LangChain', icon: Link, description: 'LLM application framework' },
    { name: 'Pinecone', icon: Database, description: 'Vector database' },
    { name: 'Hugging Face', icon: Heart, description: 'ML model repository' },
    { name: 'Figma', icon: Figma, description: 'AI-enhanced design' },
    { name: 'Playwright', icon: Play, description: 'AI-assisted testing' },
    { name: 'Vercel', icon: Globe, description: 'Deployment platform' },
    { name: 'Sentry', icon: Activity, description: 'Error monitoring' },
  ];

  const services = [
    { icon: Code, title: 'Product Strategy & Design', description: 'AI-enhanced UX research and product architecture' },
    { icon: Palette, title: 'Web & Mobile Development', description: 'Modern frameworks with AI-assisted development' },
    { icon: Brain, title: 'AI-Enhanced Features', description: 'Intelligent features and automation' },
    { icon: Shield, title: 'QA & Deployment', description: 'Automated testing and reliable deployment' },
    { icon: Users, title: 'Subscription Maintenance', description: 'Ongoing support and optimization' },
  ];

  const industries = [
    { 
      name: 'SMEs (retail, restaurants, doctors, lawyers)', 
      icon: ShoppingCart,
      description: 'Small and medium enterprises across retail, food service, healthcare, and legal sectors'
    },
    { 
      name: 'Small manufacturing companies', 
      icon: Factory,
      description: 'Manufacturing businesses looking to digitize operations'
    },
    { 
      name: 'Entrepreneurs & startups', 
      icon: Lightbulb,
      description: 'Innovative startups building their digital foundation'
    },
    { 
      name: 'Professional services', 
      icon: Briefcase,
      description: 'Consulting firms and professional service providers'
    },
    { 
      name: 'Trade & craft businesses', 
      icon: Hammer,
      description: 'Traditional trades and crafts going digital'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">N 52°</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#about" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
                <a href="#services" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</a>
                <a href="#contact" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-teal-50 via-cyan-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm-20-18c9.941 0 18 8.059 18 18s-8.059 18-18 18S-8 39.941-8 30s8.059-18 18-18z'/%3E%3Cpath d='M30 30c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20zm20 18c-9.941 0-18-8.059-18-18s8.059-18 18-18 18 8.059 18 18-8.059 18-18 18z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Your Digital Foundation Partner
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                Rooted in Berlin (52°N), we design, build and scale digital products with AI-first teams — 
                covering strategy, design, engineering and operation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={handleStartProject}
                  className="bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors transform hover:scale-105 active:scale-95"
                >
                  Start your project
                </button>
                <button 
                  onClick={handleTalkToTeam}
                  className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors transform hover:scale-105 active:scale-95"
                >
                  Talk to our team
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why N 52° Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why N 52°</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Inspired by Berlin's latitude — 52°N — we help SMEs and entrepreneurs build resilient digital foundations. 
              We combine local accountability with modern AI-driven engineering.
            </p>
          </div>
        </div>
      </section>

      {/* AI-First Section */}
      <section className="py-16 bg-gray-50 relative">
        {/* Background Network Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 border border-teal-200 rounded-lg rotate-45 opacity-20"></div>
          <div className="absolute top-32 right-20 w-24 h-24 border border-teal-200 rounded-full opacity-20"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-1 bg-gradient-to-r from-transparent via-teal-200 to-transparent opacity-30"></div>
          <div className="absolute bottom-32 right-1/3 w-1 h-32 bg-gradient-to-b from-transparent via-teal-200 to-transparent opacity-30"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center shadow-lg">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                {/* Circuit connections */}
                <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-teal-400 rounded-tl-lg"></div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-teal-400 rounded-br-lg"></div>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why we are AI-First</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
              We architect your digital footprint by combining years of human expertise with established AI tooling. 
              Our teams use AI throughout the product lifecycle — from research and prototyping to code generation, 
              testing and monitoring — to cut iteration time and reduce implementation risk.
            </p>
          </div>

          {/* AI Tools Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
            {aiTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
              >
                <tool.icon className="w-8 h-8 mx-auto mb-3 text-gray-700" />
                <h3 className="font-semibold text-gray-900 text-sm">{tool.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{tool.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Benefits */}
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Smarter architecture</h3>
                  <p className="text-gray-600">Superior design decisions with AI insight</p>
                </div>
                <div className="text-center">
                  <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Rocket className="w-8 h-8 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Faster prototyping & delivery</h3>
                  <p className="text-gray-600">AI-assisted prototypes & code generation</p>
                </div>
                <div className="text-center">
                  <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Activity className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Maintainable, observable systems</h3>
                  <p className="text-gray-600">ML-ops readiness + modular model integrations</p>
                </div>
              </div>
        </div>
      </section>

      {/* End-to-End Teams Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Complete teams for every stage</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We act as your parallel IT partner: product strategy & design, web & mobile development, 
              AI-enhanced features, QA, deployment and subscription maintenance. One team, full lifecycle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-lg"
              >
                <service.icon className="w-12 h-12 text-gray-700 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Partner Section */}
      <section className="py-16 bg-gray-50 relative">
        {/* Berlin-inspired architectural elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-2 h-20 bg-gradient-to-b from-teal-400 to-transparent opacity-30"></div>
          <div className="absolute top-32 left-32 w-2 h-16 bg-gradient-to-b from-teal-400 to-transparent opacity-30"></div>
          <div className="absolute top-24 left-44 w-2 h-24 bg-gradient-to-b from-teal-400 to-transparent opacity-30"></div>
          <div className="absolute top-16 left-56 w-2 h-28 bg-gradient-to-b from-teal-400 to-transparent opacity-30"></div>
          
          <div className="absolute top-20 right-20 w-2 h-20 bg-gradient-to-b from-teal-400 to-transparent opacity-30"></div>
          <div className="absolute top-32 right-32 w-2 h-16 bg-gradient-to-b from-teal-400 to-transparent opacity-30"></div>
          <div className="absolute top-24 right-44 w-2 h-24 bg-gradient-to-b from-teal-400 to-transparent opacity-30"></div>
          <div className="absolute top-16 right-56 w-2 h-28 bg-gradient-to-b from-teal-400 to-transparent opacity-30"></div>
          
          {/* Connection lines */}
          <div className="absolute top-28 left-20 w-36 h-0.5 bg-teal-300 opacity-20"></div>
          <div className="absolute top-28 right-20 w-36 h-0.5 bg-teal-300 opacity-20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center shadow-lg">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                {/* Berlin tower-inspired elements */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-teal-400 rounded-full"></div>
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-teal-500 rounded-full"></div>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Your Local Partner</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Based in Berlin, we combine international experience with local accountability. 
              All projects follow EU compliance (DSGVO) and German contractual standards — 
              transparent delivery, local invoicing, and German-language support.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Who we support</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We help businesses across various industries build their digital foundation with AI-first development.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className="bg-gradient-to-br from-teal-500 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{industry.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{industry.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The N 52° difference</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We build foundations, not patches. Our teams deliver pragmatic product decisions, 
              high-quality engineering, and continuous operation so your business can grow reliably.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to strengthen your digital foundation?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help build your resilient digital infrastructure with AI-first development.
          </p>
          <button 
            onClick={handleBookConsultation}
            className="bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105 active:scale-95"
          >
            Book a free consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Form Section */}
          <div className="mb-12">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-center mb-6">Get in Touch</h3>
              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                const name = formData.get('name') as string;
                const email = formData.get('email') as string;
                const subject = formData.get('subject') as string;
                const message = formData.get('message') as string;
                
                // Open email client with pre-filled content
                window.location.href = `mailto:contact@n52.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
              }}>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-teal-500"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-teal-500"
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors transform hover:scale-105 active:scale-95"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">N 52°</h3>
              <p className="text-gray-300 mb-4">
                Your Digital Foundation Partner
              </p>
              <div className="flex items-center text-gray-300 mb-2">
                <MapPin className="w-4 h-4 mr-2" />
                Berlin, Germany
              </div>
              <div className="flex items-center text-gray-300 mb-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:contact@n52.de" className="hover:underline">
                  contact@n52.de
                </a>
              </div>
              <div className="flex items-center text-gray-300 hover:text-white transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+493012345678" className="hover:underline">
                  +49 30 1234 5678
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>AI-First Development</li>
                <li>Web & Mobile Development</li>
                <li>Digital Product Strategy</li>
                <li>Software Architecture</li>
                <li>QA & Deployment</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Impressum</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Datenschutz</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 N 52°. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <button
          onClick={handleWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 group"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            Chat with us on WhatsApp
          </div>
        </button>
      </motion.div>
    </div>
  );
}