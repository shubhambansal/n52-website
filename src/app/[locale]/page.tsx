'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslations, Locale } from '../../lib/i18n';
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


export default function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const [locale, setLocale] = React.useState<Locale>('en');
  
  React.useEffect(() => {
    params.then(({ locale }) => setLocale(locale));
  }, [params]);
  
  const t = useTranslations(locale);

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
      name: t('industries.retailRestaurants.title'),
      icon: ShoppingCart,
      description: t('industries.retailRestaurants.description')
    },
    {
      name: t('industries.healthcareLegal.title'),
      icon: Stethoscope,
      description: t('industries.healthcareLegal.description')
    },
    {
      name: t('industries.manufacturing.title'),
      icon: Factory,
      description: t('industries.manufacturing.description')
    },
    {
      name: t('industries.startupsEntrepreneurs.title'),
      icon: Lightbulb,
      description: t('industries.startupsEntrepreneurs.description')
    },
    {
      name: t('industries.professionalServices.title'),
      icon: Briefcase,
      description: t('industries.professionalServices.description')
    },
    {
      name: t('industries.tradeCraft.title'),
      icon: Hammer,
      description: t('industries.tradeCraft.description')
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
            
            {/* Mobile Language Switcher */}
            <div className="md:hidden flex items-center space-x-2">
              <Link 
                href="/en" 
                className={`px-2 py-1 rounded text-xs font-medium transition-all duration-300 ${
                  locale === 'en' 
                    ? 'bg-purple-700 text-white' 
                    : 'text-gray-600 hover:text-purple-700'
                }`}
              >
                EN
              </Link>
              <span className="text-gray-300">|</span>
              <Link 
                href="/de" 
                className={`px-2 py-1 rounded text-xs font-medium transition-all duration-300 ${
                  locale === 'de' 
                    ? 'bg-purple-700 text-white' 
                    : 'text-gray-600 hover:text-purple-700'
                }`}
              >
                DE
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                {/* Language Switcher */}
                <div className="flex items-center space-x-2">
                  <Link 
                    href="/en" 
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                      locale === 'en' 
                        ? 'bg-purple-700 text-white' 
                        : 'text-gray-600 hover:text-purple-700 hover:bg-purple-50'
                    }`}
                  >
                    EN
                  </Link>
                  <span className="text-gray-300">|</span>
                  <Link 
                    href="/de" 
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                      locale === 'de' 
                        ? 'bg-purple-700 text-white' 
                        : 'text-gray-600 hover:text-purple-700 hover:bg-purple-50'
                    }`}
                  >
                    DE
                  </Link>
                </div>
                <Link href="/ai-first" className="bg-black text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  {t('navigation.whyDifferent')}
                </Link>
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
                        {t('hero.title')}
                      </h1>
                      <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
                        {t('hero.description')}
                      </p>
                      <div className="flex items-center gap-8 mb-12">
                        <div className="bg-purple-500/20 backdrop-blur-sm px-8 py-4 rounded-2xl border border-purple-400/30">
                          <span className="text-4xl font-semibold text-white">{t('hero.pricing')}</span>
                        </div>
                        <div className="flex items-center text-orange-400">
                          <CheckCircle className="w-6 h-6 mr-3" />
                          <span className="text-lg font-medium">{t('hero.freeConsultation')}</span>
                        </div>
                      </div>
                      <button
                        onClick={handleStartProject}
                        className="bg-white text-black px-10 py-5 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-3 shadow-lg"
                      >
                        {t('hero.cta')}
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
              {t('advantages.title')}
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
              <h3 className="text-2xl font-semibold text-black mb-6">{t('advantages.fullService.title')}</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('advantages.fullService.description')}
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
              <h3 className="text-2xl font-semibold text-black mb-6">{t('advantages.topRated.title')}</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('advantages.topRated.description')}
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
              <h3 className="text-2xl font-semibold text-black mb-6">{t('advantages.topDesigns.title')}</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('advantages.topDesigns.description')}
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
              <h3 className="text-2xl font-semibold text-black mb-6">{t('advantages.guaranteedSuccess.title')}</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('advantages.guaranteedSuccess.description')}
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
              {t('howItWorks.title')}
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
                        <h4 className="font-semibold text-gray-900">{t('howItWorks.step1.title')}</h4>
                        <p className="text-sm text-gray-600">30 minutes</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        <span>{t('howItWorks.step1.features.0')}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        <span>{t('howItWorks.step1.features.1')}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        <span>{t('howItWorks.step1.features.2')}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        <span>{t('howItWorks.step1.features.3')}</span>
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
                  <h3 className="text-2xl font-bold text-gray-900">{t('howItWorks.step1.title')}</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  {t('howItWorks.step1.description')}
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{t('howItWorks.step1.featureDetails.discussNeeds.title')}</h4>
                      <p className="text-gray-600">{t('howItWorks.step1.featureDetails.discussNeeds.description')}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{t('howItWorks.step1.featureDetails.expertRecommendations.title')}</h4>
                      <p className="text-gray-600">{t('howItWorks.step1.featureDetails.expertRecommendations.description')}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{t('howItWorks.step1.featureDetails.noPressure.title')}</h4>
                      <p className="text-gray-600">{t('howItWorks.step1.featureDetails.noPressure.description')}</p>
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
                  <h3 className="text-2xl font-bold text-gray-900">{t('howItWorks.step2.title')}</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  {t('howItWorks.step2.description')}
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{t('howItWorks.step2.featureDetails.professionalDesign.title')}</h4>
                      <p className="text-gray-600">{t('howItWorks.step2.featureDetails.professionalDesign.description')}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{t('howItWorks.step2.featureDetails.mobileFriendly.title')}</h4>
                      <p className="text-gray-600">{t('howItWorks.step2.featureDetails.mobileFriendly.description')}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{t('howItWorks.step2.featureDetails.seoOptimized.title')}</h4>
                      <p className="text-gray-600">{t('howItWorks.step2.featureDetails.seoOptimized.description')}</p>
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
                        <h4 className="font-semibold text-gray-900">{t('howItWorks.step3.featureDetails.websiteCreation.title')}</h4>
                        <p className="text-sm text-gray-600">{t('howItWorks.step3.featureDetails.websiteCreation.timeline')}</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        <span>{t('howItWorks.step3.featureDetails.websiteCreation.features.customDesign')}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        <span>{t('howItWorks.step3.featureDetails.websiteCreation.features.mobileResponsive')}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        <span>{t('howItWorks.step3.featureDetails.websiteCreation.features.seoOptimized')}</span>
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
                        <h4 className="font-semibold text-gray-900">{t('howItWorks.step3.featureDetails.goLiveSecurely.title')}</h4>
                        <p className="text-sm text-gray-600">{t('howItWorks.step3.featureDetails.goLiveSecurely.timeline')}</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        <span>{t('howItWorks.step3.featureDetails.goLiveSecurely.features.sslCertificate')}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        <span>{t('howItWorks.step3.featureDetails.goLiveSecurely.features.gdprCompliant')}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        <span>{t('howItWorks.step3.featureDetails.goLiveSecurely.features.domainHosting')}</span>
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
                  {t('howItWorks.step3.detailedDescription')}
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{t('howItWorks.step3.featureDetails.sslCertificate.title')}</h4>
                      <p className="text-gray-600">{t('howItWorks.step3.featureDetails.sslCertificate.description')}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{t('howItWorks.step3.featureDetails.gdprCompliance.title')}</h4>
                      <p className="text-gray-600">{t('howItWorks.step3.featureDetails.gdprCompliance.description')}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{t('howItWorks.step3.featureDetails.domainHostingSetup.title')}</h4>
                      <p className="text-gray-600">{t('howItWorks.step3.featureDetails.domainHostingSetup.description')}</p>
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
              {t('howItWorks.getFreeConsultation')}
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
            <h2 className="text-4xl md:text-5xl font-semibold text-black mb-8 tracking-tight">{t('packages.title')}</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t('packages.subtitle')}
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
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('packages.bronze.title')}</h3>
                <div className="mb-4">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-xl text-gray-400 line-through">{t('packages.bronze.originalPrice')}</span>
                    <span className="text-3xl font-bold text-orange-600">{t('packages.bronze.offerPrice')}</span>
                  </div>
                  <div className="text-sm text-orange-600 font-semibold">{t('packages.limitedOffer')}</div>
                  <div className="text-sm text-gray-500">{t('packages.bronze.subtitle')}</div>
                </div>
                <p className="text-gray-600 text-sm">{t('packages.bronze.description')}</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{t('packages.bronze.features.0')}</span>
                </div>
                <div className="flex items-center">
                  <Smartphone className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{t('packages.bronze.features.1')}</span>
                </div>
                <div className="flex items-center">
                  <Search className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{t('packages.bronze.features.2')}</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{t('packages.bronze.features.3')}</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{t('packages.bronze.features.4')}</span>
                </div>
                <div className="flex items-center">
                  <Camera className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{t('packages.bronze.features.5')}</span>
                </div>
                <div className="flex items-center">
                  <Headphones className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{t('packages.bronze.features.6')}</span>
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
                  {t('packages.silver.popular')}
                </div>
              </div>
              
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('packages.silver.title')}</h3>
                <div className="mb-4">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-xl text-gray-400 line-through">{t('packages.silver.originalPrice')}</span>
                    <span className="text-3xl font-bold text-orange-600">{t('packages.silver.offerPrice')}</span>
                  </div>
                  <div className="text-sm text-orange-600 font-semibold">{t('packages.limitedOffer')}</div>
                  <div className="text-sm text-gray-500">{t('packages.silver.subtitle')}</div>
                </div>
                <p className="text-gray-600 text-sm">{t('packages.silver.description')}</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{t('packages.silver.features.0')}</span>
                </div>
                <div className="flex items-center">
                  <Settings className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{t('packages.silver.features.1')}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{t('packages.silver.features.2')}</span>
                </div>
                <div className="flex items-center">
                  <Activity className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{t('packages.silver.features.3')}</span>
                </div>
                <div className="flex items-center">
                  <Search className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{t('packages.silver.features.4')}</span>
                </div>
                <div className="flex items-center">
                  <Camera className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{t('packages.silver.features.5')}</span>
                </div>
                <div className="flex items-center">
                  <Headphones className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{t('packages.silver.features.6')}</span>
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
                  <span className="text-gray-700 text-sm">{t('packages.gold.featureDetails.multiPageWebsite')}</span>
                </div>
                <div className="flex items-center">
                  <CreditCard className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{t('packages.gold.featureDetails.bookingSystem')}</span>
                </div>
                <div className="flex items-center">
                  <Brain className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{t('packages.gold.featureDetails.aiChatbot')}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{t('packages.gold.featureDetails.personalization')}</span>
                </div>
                <div className="flex items-center">
                  <Database className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{t('packages.gold.featureDetails.advancedAnalytics')}</span>
                </div>
                <div className="flex items-center">
                  <Settings className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{t('packages.gold.featureDetails.adminDashboard')}</span>
                </div>
                <div className="flex items-center">
                  <Camera className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{t('packages.gold.featureDetails.customPhotography')}</span>
                </div>
                <div className="flex items-center">
                  <Headphones className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{t('packages.gold.featureDetails.support')}</span>
                </div>
              </div>

            </motion.div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">{t('packages.allPackagesInclude')}</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-black mr-2" />
                <span>{t('packages.includedFeatures.aiEnhancedDevelopment')}</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-black mr-2" />
                <span>{t('packages.includedFeatures.modernWebTechnologies')}</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-black mr-2" />
                <span>{t('packages.includedFeatures.mobileOptimization')}</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-black mr-2" />
                <span>Security & performance</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-black mr-2" />
                <span>{t('packages.includedFeatures.ongoingSupport')}</span>
              </div>
            </div>
          </div>

          {/* CTA below packages */}
          <div className="text-center mt-16">
            <button
              onClick={handleBookConsultation}
              className="bg-gradient-to-r from-purple-700 to-purple-800 text-white px-12 py-6 rounded-full text-lg font-semibold hover:from-purple-800 hover:to-purple-900 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
            >
              {t('howItWorks.getFreeConsultation')}
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
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">{t('industries.title')}</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t('industries.subtitle')}
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t('difference.title')}</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              {t('difference.description')}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-8 tracking-tight">{t('finalCta.title')}</h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            {t('finalCta.description')}
          </p>
          <button
            onClick={handleBookConsultation}
            className="bg-gradient-to-r from-purple-700 to-purple-800 text-white px-12 py-6 rounded-full text-lg font-semibold hover:from-purple-800 hover:to-purple-900 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
          >
            {t('finalCta.cta')}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Form Section */}
          <div className="mb-12">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-center mb-6">{t('footer.contact')}</h3>
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
                    placeholder={locale === 'de' ? 'Ihr Name' : 'Your name'}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder={locale === 'de' ? 'Ihre E-Mail' : 'Your email'}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder={locale === 'de' ? 'Betreff' : 'Subject'}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <textarea
                  name="message"
                  placeholder={locale === 'de' ? 'Erzählen Sie uns von Ihrem Projekt...' : 'Tell us about your project...'}
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  {locale === 'de' ? 'Nachricht senden' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">N 52°</h3>
              <p className="text-gray-600 mb-4">
                {t('footer.description')}
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
              <h4 className="text-lg font-semibold mb-4">{t('footer.services')}</h4>
              <ul className="space-y-2 text-gray-600">
                <li>{locale === 'de' ? 'Webentwicklung' : 'Web Development'}</li>
                <li>{locale === 'de' ? 'Mobile App-Entwicklung' : 'Mobile App Development'}</li>
                <li>{locale === 'de' ? 'Webanwendungen' : 'Web Applications'}</li>
                <li>{locale === 'de' ? 'KI-Integration' : 'AI Integration'}</li>
                <li>{locale === 'de' ? 'Wartung & Support' : 'Maintenance & Support'}</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">{locale === 'de' ? 'Rechtliches' : 'Legal'}</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-purple-600 transition-colors">Impressum</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">Datenschutz</a></li>
                <li><a href="#" className="hover:text-purple-600 transition-colors">{locale === 'de' ? 'AGB' : 'Terms of Service'}</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
            <p>{t('footer.rights')}</p>
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