'use client';

import { motion } from 'framer-motion';
import {
  Brain,
  Activity,
  Shield,
  Users,
  MapPin,
  Mail,
  Phone,
  ShoppingCart,
  Factory,
  Lightbulb,
  Briefcase,
  Hammer,
  MessageCircle,
  Monitor,
  ArrowRight,
  CheckCircle,
  Star,
  Crown,
  Zap,
  Smartphone,
  Camera,
  Search,
  CreditCard,
  Headphones,
  Settings,
  Globe,
  Database,
  Palette,
  Stethoscope
} from 'lucide-react';

export default function Home() {

  const handleStartProject = () => {
    try {
      // Scroll to packages section
      const packagesSection = document.getElementById('packages');
      if (packagesSection) {
        packagesSection.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (error) {
      console.error('Error scrolling to packages:', error);
    }
  };

  const handleContactUs = () => {
    try {
      // Scroll to contact section
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (error) {
      console.error('Error scrolling to contact:', error);
    }
  };

  const handleTalkToTeam = () => {
    try {
      // Open email client or redirect to contact page
      window.location.href = 'mailto:contact@n52.de?subject=Let\'s discuss your project&body=Hi N 52° team,%0D%0A%0D%0AI\'d like to discuss my project with you.%0D%0A%0D%0AProject details:%0D%0A%0D%0ABest regards';
    } catch (error) {
      console.error('Error opening email client:', error);
    }
  };

  const handleBookConsultation = () => {
    try {
      // Open calendar booking or contact form
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (error) {
      console.error('Error scrolling to contact:', error);
    }
  };

  const handleWhatsApp = () => {
    try {
      // Open WhatsApp Business with pre-filled message
      const message = encodeURIComponent("Hi N 52° team! I'd like to discuss my project with you. Can we schedule a call?");
      window.open(`https://wa.me/491745801229?text=${message}`, '_blank');
    } catch (error) {
      console.error('Error opening WhatsApp:', error);
    }
  };


  const industries = [
    {
      name: 'Retail & Restaurants',
      icon: ShoppingCart,
      description: 'Online stores, food delivery, booking systems, and customer management solutions'
    },
    {
      name: 'Healthcare & Legal',
      icon: Stethoscope,
      description: 'Appointment booking, patient portals, case management, and secure document handling'
    },
    {
      name: 'Manufacturing',
      icon: Factory,
      description: 'Production tracking, inventory management, supplier portals, and quality control systems'
    },
    {
      name: 'Startups & Entrepreneurs',
      icon: Lightbulb,
      description: 'MVP development, investor presentations, and scalable digital platforms for growth'
    },
    {
      name: 'Professional Services',
      icon: Briefcase,
      description: 'Client portals, project management, billing systems, and team collaboration tools'
    },
    {
      name: 'Trade & Craft',
      icon: Hammer,
      description: 'Service booking, portfolio showcases, customer reviews, and quote management systems'
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
              <div className="ml-10 flex items-baseline space-x-6">
                <a href="/ai-first" className="bg-gradient-to-r from-purple-700 to-purple-800 text-white px-6 py-3 rounded-full text-sm font-semibold hover:from-purple-800 hover:to-purple-900 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Why We&apos;re Different
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-32 bg-black text-white overflow-hidden">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        
        {/* Minimal background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm-20-18c9.941 0 18 8.059 18 18s-8.059 18-18 18S-8 39.941-8 30s8.059-18 18-18z'/%3E%3Cpath d='M30 30c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20zm20 18c-9.941 0-18-8.059-18-18s8.059-18 18-18 18 8.059 18 18-8.059 18-18 18z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative h-full">
          <div className="relative h-[500px] flex items-center">
            <div className="absolute inset-0 flex items-center justify-between">
                  <div className="flex-1 max-w-2xl">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h1 className="text-5xl md:text-7xl font-semibold text-white mb-8 tracking-tight">
                        Take your Business online
                      </h1>
                      <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
                        Professional websites that convert visitors into customers.
                        Built with modern technology and optimized for growth.
                      </p>
                      <div className="flex items-center gap-8 mb-12">
                        <div className="bg-purple-500/20 backdrop-blur-sm px-8 py-4 rounded-2xl border border-purple-400/30">
                          <span className="text-gray-300 text-lg">from </span>
                          <span className="text-4xl font-semibold text-white">€699</span>
                        </div>
                        <div className="flex items-center text-orange-400">
                          <CheckCircle className="w-6 h-6 mr-3" />
                          <span className="text-lg font-medium">Free consultation</span>
                        </div>
                      </div>
                      <button
                        onClick={handleStartProject}
                        className="bg-white text-black px-10 py-5 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-3 shadow-lg"
                      >
                        View Our Packages
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </motion.div>
                  </div>

                  {/* Illustration */}
                  <div className="hidden lg:block flex-1 max-w-lg">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 }}
                      className="relative"
                    >
                      <div className="bg-purple-500/10 backdrop-blur-sm rounded-3xl p-8 border border-purple-400/20 shadow-2xl">
                        <div className="flex items-center mb-6">
                          <div className="w-4 h-4 bg-red-400 rounded-full mr-3"></div>
                          <div className="w-4 h-4 bg-yellow-400 rounded-full mr-3"></div>
                          <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                        </div>
                        <div className="space-y-6">
                          <div className="h-6 bg-purple-400/20 rounded-lg w-4/5"></div>
                          <div className="h-6 bg-purple-400/20 rounded-lg w-3/5"></div>
                          <div className="h-40 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-2xl flex items-center justify-center border border-purple-400/20">
                            <Monitor className="w-16 h-16 text-purple-300" />
                          </div>
                          <div className="grid grid-cols-2 gap-6">
                            <div className="h-12 bg-purple-400/15 rounded-xl border border-purple-400/20"></div>
                            <div className="h-12 bg-purple-400/15 rounded-xl border border-purple-400/20"></div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute -top-6 -right-6 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center shadow-lg">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                    </motion.div>
                  </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Advantages Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-semibold text-black mb-8 tracking-tight">
              Why Choose Us?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We make going online simple and stress-free. Here&apos;s what you get when you work with us:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Advantage 1: Full Service */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-50 rounded-3xl p-10 hover:bg-gray-100 transition-all duration-500 text-center group"
            >
              <div className="bg-black w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <Settings className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-black mb-6">Full Service</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We handle everything from start to finish. No technical headaches - we&apos;ll get your business online and running smoothly.
              </p>
            </motion.div>

            {/* Advantage 2: Top Rated */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 rounded-3xl p-10 hover:bg-gray-100 transition-all duration-500 text-center group"
            >
              <div className="bg-black w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-black mb-6">Top Rated</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our clients love us! We&apos;ve helped hundreds of businesses go online successfully with 5-star reviews and happy customers.
              </p>
            </motion.div>

            {/* Advantage 3: Top Designs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-50 rounded-3xl p-10 hover:bg-gray-100 transition-all duration-500 text-center group"
            >
              <div className="bg-black w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <Palette className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-black mb-6">Beautiful Designs</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We love creating beautiful websites that make your business look professional and trustworthy to your customers.
              </p>
            </motion.div>

            {/* Advantage 4: Guaranteed Success */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-50 rounded-3xl p-10 hover:bg-gray-100 transition-all duration-500 text-center group"
            >
              <div className="bg-black w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-black mb-6">Guaranteed Success</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We&apos;re so confident in our work that we guarantee your satisfaction. If you&apos;re not happy, we&apos;ll make it right.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-semibold text-black mb-8 tracking-tight">
              How It Works
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Getting your business online is easier than you think. Here&apos;s our simple 3-step process:
            </p>
          </div>

          <div className="space-y-24">
            {/* Step 1: Book a Free Consultation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Illustration */}
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 relative border border-purple-200">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center mr-4">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Free Consultation</h4>
                        <p className="text-sm text-gray-600">30 minutes</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        <span>Discuss your business needs</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        <span>Get expert recommendations</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        <span>No pressure, just advice</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Book a Free Consultation</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Start with a completely free, no-obligation consultation. We&apos;ll listen to your business goals and provide expert advice on the best digital solution for you.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Discuss Your Needs</h4>
                      <p className="text-gray-600">Tell us about your business and what you want to achieve online</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Get Expert Recommendations</h4>
                      <p className="text-gray-600">We&apos;ll suggest the best approach for your specific situation</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">No Pressure, No Sales Pitch</h4>
                      <p className="text-gray-600">Just honest advice to help you make the right decision</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 2: Have a Website Created */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Text Content */}
              <div className="order-1">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">We Create Your Website</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Sit back and relax while our expert team builds your professional website. We handle all the technical work so you can focus on running your business.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Professional Design</h4>
                      <p className="text-gray-600">Beautiful, modern design that represents your brand perfectly</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Mobile-Friendly</h4>
                      <p className="text-gray-600">Your website works perfectly on phones, tablets, and computers</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">SEO Optimized</h4>
                      <p className="text-gray-600">Built to help customers find you on Google and other search engines</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Illustration */}
              <div className="order-2">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 relative">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center mr-4">
                        <Monitor className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Website Creation</h4>
                        <p className="text-sm text-gray-600">2-4 weeks</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        <span>Custom design & development</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        <span>Mobile-responsive</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        <span>SEO optimized</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 3: Securing and Going Live */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Illustration */}
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 relative">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-700 to-purple-800 rounded-full flex items-center justify-center mr-4">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Go Live Securely</h4>
                        <p className="text-sm text-gray-600">1-2 days</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        <span>SSL certificate installed</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        <span>GDPR compliant</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        <span>Domain & hosting setup</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-700 to-purple-800 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Secure & Go Live</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  We handle all the technical setup to get your website live and secure. Your website will be GDPR compliant and protected with the latest security measures.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">SSL Certificate</h4>
                      <p className="text-gray-600">Your website is secure and shows the &quot;lock&quot; icon in browsers</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">GDPR Compliance</h4>
                      <p className="text-gray-600">Full compliance with European data protection laws</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Domain & Hosting Setup</h4>
                      <p className="text-gray-600">We handle all technical setup so your website goes live smoothly</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA at end of How it Works */}
          <div className="text-center mt-20">
            <button
              onClick={handleBookConsultation}
              className="bg-gradient-to-r from-purple-700 to-purple-800 text-white px-12 py-6 rounded-full text-lg font-semibold hover:from-purple-800 hover:to-purple-900 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
            >
              Get Free Expert Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Website Packages Section */}
      <section id="packages" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-full flex items-center justify-center">
                <Monitor className="w-10 h-10 text-black" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-black mb-8 tracking-tight">Choose Your Perfect Development Package</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Professional web and app development tailored to your business needs. All packages include modern design, mobile optimization, and AI-enhanced development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Bronze Package */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 relative"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Bronze</h3>
                <div className="mb-4">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-xl text-gray-400 line-through">€1,799</span>
                    <span className="text-3xl font-bold text-orange-600">€699</span>
                  </div>
                  <div className="text-sm text-orange-600 font-semibold">Limited Time Offer!</div>
                  <div className="text-sm text-gray-500">Landing Page MVP</div>
                </div>
                <p className="text-gray-600 text-sm">Perfect for testing your business idea</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">1-page responsive website</span>
                </div>
                <div className="flex items-center">
                  <Smartphone className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Mobile-first design</span>
                </div>
                <div className="flex items-center">
                  <Search className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">SEO-ready structure</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">SSL certificate</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Hosting setup</span>
                </div>
                <div className="flex items-center">
                  <Camera className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Stock photos (3 images)</span>
                </div>
                <div className="flex items-center">
                  <Headphones className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">1 month support</span>
                </div>
              </div>

            </motion.div>

            {/* Silver Package */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border-2 border-purple-200 hover:shadow-xl transition-all duration-300 relative transform scale-105"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              </div>
              
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Silver</h3>
                <div className="mb-4">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-xl text-gray-400 line-through">€2,799</span>
                    <span className="text-3xl font-bold text-orange-600">€1,999</span>
                  </div>
                  <div className="text-sm text-orange-600 font-semibold">Limited Time Offer!</div>
                  <div className="text-sm text-gray-500">Business Website</div>
                </div>
                <p className="text-gray-600 text-sm">Complete business presence online</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">3-5 page responsive website</span>
                </div>
                <div className="flex items-center">
                  <Settings className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">CMS (WordPress/Webflow)</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Contact forms</span>
                </div>
                <div className="flex items-center">
                  <Activity className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Analytics setup</span>
                </div>
                <div className="flex items-center">
                  <Search className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">SEO optimization</span>
                </div>
                <div className="flex items-center">
                  <Camera className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Professional photos (8 images)</span>
                </div>
                <div className="flex items-center">
                  <Headphones className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">3 months support</span>
                </div>
              </div>

            </motion.div>

            {/* Gold Package */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 relative"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Gold</h3>
                <div className="mb-4">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-xl text-gray-400 line-through">€4,799</span>
                    <span className="text-3xl font-bold text-orange-600">€3,999</span>
                  </div>
                  <div className="text-sm text-orange-600 font-semibold">Limited Time Offer!</div>
                  <div className="text-sm text-gray-500">AI-Enhanced Website</div>
                </div>
                <p className="text-gray-600 text-sm">Advanced features with AI integration</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Multi-page website with CMS</span>
                </div>
                <div className="flex items-center">
                  <CreditCard className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Booking system/E-commerce</span>
                </div>
                <div className="flex items-center">
                  <Brain className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">AI chatbot integration</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Personalization features</span>
                </div>
                <div className="flex items-center">
                  <Database className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Advanced analytics</span>
                </div>
                <div className="flex items-center">
                  <Settings className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Admin dashboard</span>
                </div>
                <div className="flex items-center">
                  <Camera className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Custom photography</span>
                </div>
                <div className="flex items-center">
                  <Headphones className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">6 months support</span>
                </div>
              </div>

            </motion.div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">All packages include:</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-black mr-2" />
                <span>AI-enhanced development</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-black mr-2" />
                <span>Modern web technologies</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-black mr-2" />
                <span>Mobile optimization</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-black mr-2" />
                <span>Security & performance</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-black mr-2" />
                <span>Ongoing support</span>
              </div>
            </div>
          </div>

          {/* CTA below packages */}
          <div className="text-center mt-16">
            <button
              onClick={handleBookConsultation}
              className="bg-gradient-to-r from-purple-700 to-purple-800 text-white px-12 py-6 rounded-full text-lg font-semibold hover:from-purple-800 hover:to-purple-900 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
            >
              Get Free Expert Consultation
            </button>
          </div>
        </div>
      </section>





      {/* Industries Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">Who We Support</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
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
                className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 group hover:border-purple-200"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-purple-50 transition-all duration-300">
                    <industry.icon className="w-8 h-8 text-gray-700 group-hover:text-purple-600 transition-colors duration-300" />
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
      <section className="py-16 bg-white">
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
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-8 tracking-tight">Ready to strengthen your digital foundation?</h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Let&apos;s discuss how we can help build your resilient digital infrastructure with AI-first development.
          </p>
          <button
            onClick={handleBookConsultation}
            className="bg-gradient-to-r from-purple-700 to-purple-800 text-white px-12 py-6 rounded-full text-lg font-semibold hover:from-purple-800 hover:to-purple-900 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
          >
            Get Free Expert Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Form Section */}
          <div className="mb-12">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-center mb-6">Get in Touch</h3>
              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                try {
                  const formData = new FormData(e.target as HTMLFormElement);
                  const name = formData.get('name') as string;
                  const email = formData.get('email') as string;
                  const subject = formData.get('subject') as string;
                  const message = formData.get('message') as string;

                  // Open email client with pre-filled content
                  window.location.href = `mailto:contact@n52.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
                } catch (error) {
                  console.error('Form submission error:', error);
                  alert('There was an error submitting the form. Please try again.');
                }
              }}>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">N 52°</h3>
              <p className="text-gray-600 mb-4">
                Your Digital Foundation Partner
              </p>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="w-4 h-4 mr-2" />
                Berlin, Germany
              </div>
              <div className="flex items-center text-gray-600 mb-2 hover:text-purple-600 transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:contact@n52.de" className="hover:underline">
                  contact@n52.de
                </a>
              </div>
              <div className="flex items-center text-gray-600 hover:text-purple-600 transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+491745801229" className="hover:underline">
                  +49 174 5801229
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Web Development</li>
                <li>Mobile App Development</li>
                <li>Web Applications</li>
                <li>AI Integration</li>
                <li>Maintenance & Support</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-purple-600 transition-colors">Impressum</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Datenschutz</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
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
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-purple-700 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            Chat with us on WhatsApp
          </div>
        </button>
      </motion.div>
    </div>
  );
}