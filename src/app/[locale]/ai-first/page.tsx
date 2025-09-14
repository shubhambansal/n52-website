'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslations, Locale } from '../../../lib/i18n';
import {
  Brain,
  Shield,
  Rocket,
  Target,
  CheckCircle,
  ArrowRight,
  Code,
  Database,
  Globe,
  Activity,
  Terminal,
  Github,
  Heart,
  Figma,
  Play,
  Link as LinkIcon
} from 'lucide-react';

export default function AiFirstPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const [locale, setLocale] = React.useState<Locale>('en');
  
  React.useEffect(() => {
    params.then(({ locale }) => setLocale(locale));
  }, [params]);
  
  const t = useTranslations(locale);
  const handleContact = () => {
    try {
      window.location.href = 'mailto:contact@n52.de?subject=AI-First Development Inquiry&body=Hi N 52° team,%0D%0A%0D%0AI\'d like to learn more about your AI-First development approach.%0D%0A%0D%0AProject details:%0D%0A%0D%0ABest regards';
    } catch (error) {
      console.error('Error opening email client:', error);
    }
  };

  const aiTools = [
    { name: 'Cursor', icon: Terminal, description: 'AI-powered code editor that writes code as you think' },
    { name: 'GitHub Copilot', icon: Github, description: 'AI assistant that suggests code while you type' },
    { name: 'OpenAI GPT', icon: Brain, description: 'Advanced AI for content generation and problem solving' },
    { name: 'LangChain', icon: LinkIcon, description: 'Framework for building AI-powered applications' },
    { name: 'Pinecone', icon: Database, description: 'AI database for smart search and recommendations' },
    { name: 'Hugging Face', icon: Heart, description: 'Library of pre-trained AI models for various tasks' },
    { name: 'Figma', icon: Figma, description: 'Design tool with AI features for faster prototyping' },
    { name: 'Playwright', icon: Play, description: 'AI-assisted testing for bug-free applications' },
    { name: 'Vercel', icon: Globe, description: 'Platform that automatically optimizes your website' },
    { name: 'Sentry', icon: Activity, description: 'AI-powered error monitoring and fixing suggestions' },
  ];

  const benefits = [
    {
      icon: Brain,
      title: 'Smarter Architecture',
      description: 'AI analyzes your requirements and suggests the best technical approach, avoiding costly mistakes.',
      example: 'Instead of guessing which database to use, AI recommends the optimal solution based on your specific needs.'
    },
    {
      icon: Rocket,
      title: 'Faster Prototyping & Delivery',
      description: 'AI generates initial code, designs, and prototypes in hours instead of weeks.',
      example: 'A landing page that would take 2 weeks manually can be prototyped in 2 days with AI assistance.'
    },
    {
      icon: Activity,
      title: 'Maintainable, Observable Systems',
      description: 'AI continuously monitors your application and suggests improvements before problems occur.',
      example: 'AI detects slow loading pages and automatically suggests optimizations to improve user experience.'
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'AI-Enhanced Planning',
      description: 'We use AI to analyze your business goals and automatically generate the optimal project roadmap.',
      icon: Target
    },
    {
      step: '2',
      title: 'Smart Design & Prototyping',
      description: 'AI tools help us create better designs faster, with automatic user experience optimization.',
      icon: Figma
    },
    {
      step: '3',
      title: 'Intelligent Development',
      description: 'AI assists our developers, writing code faster and catching bugs before they become problems.',
      icon: Code
    },
    {
      step: '4',
      title: 'Automated Testing & Deployment',
      description: 'AI continuously tests your application and deploys updates safely and efficiently.',
      icon: Shield
    },
    {
      step: '5',
      title: 'Continuous AI Monitoring',
      description: 'AI monitors your live application, suggesting improvements and preventing issues.',
      icon: Activity
    }
  ];

  const comparisons = [
    {
      aspect: 'Development Speed',
      traditional: '2-3 months',
      aiFirst: '3-6 weeks',
      improvement: '50% faster'
    },
    {
      aspect: 'Bug Detection',
      traditional: 'After deployment',
      aiFirst: 'During development',
      improvement: '90% fewer bugs'
    },
    {
      aspect: 'Code Quality',
      traditional: 'Manual review',
      aiFirst: 'AI-assisted optimization',
      improvement: 'Consistently better'
    },
    {
      aspect: 'Maintenance Cost',
      traditional: 'High ongoing costs',
      aiFirst: 'Predictable, lower costs',
      improvement: '40% savings'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href={`/${locale}`} className="text-2xl font-bold text-gray-900">N 52°</Link>
            </div>
            
            {/* Mobile Language Switcher */}
            <div className="md:hidden flex items-center space-x-2">
              <Link 
                href="/en/ai-first" 
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
                href="/de/ai-first" 
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
                    href="/en/ai-first" 
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
                    href="/de/ai-first" 
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                      locale === 'de' 
                        ? 'bg-purple-700 text-white' 
                        : 'text-gray-600 hover:text-purple-700 hover:bg-purple-50'
                    }`}
                  >
                    DE
                  </Link>
                </div>
                <Link href={`/${locale}`} className="bg-black text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-32 bg-black text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm-20-18c9.941 0 18 8.059 18 18s-8.059 18-18 18S-8 39.941-8 30s8.059-18 18-18z'/%3E%3Cpath d='M30 30c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20zm20 18c-9.941 0-18-8.059-18-18s8.059-18 18-18 18 8.059 18 18-8.059 18-18 18z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-2xl">
                    <Brain className="w-12 h-12 text-white" />
                  </div>
                  {/* Circuit connections */}
                  <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-purple-400 rounded-tl-lg"></div>
                  <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-purple-400 rounded-br-lg"></div>
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-semibold text-white mb-8 tracking-tight">
                Why We Are AI-First
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Think of AI as your super-smart assistant who never gets tired, makes fewer mistakes, 
                and works 24/7 to make your project better. That&apos;s how we build websites and apps.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleContact}
                  className="bg-white text-black px-10 py-5 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-3 shadow-lg"
                >
                  See AI-First in Action
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Simple Explanation Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Does AI-First Actually Mean?</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-8 mb-8 border border-purple-200">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Imagine you&apos;re building a house. Traditionally, you&apos;d measure everything by hand, 
                  cut wood with basic tools, and hope you don&apos;t make mistakes. 
                  <strong className="text-purple-600"> AI-First development is like having a smart architect, 
                  precision tools, and quality control working together</strong> — 
                  everything is planned better, built faster, and works more reliably.
                </p>
              </div>
              <p className="text-lg text-gray-600">
                We use AI throughout the entire process — from planning your project to writing code, 
                testing for bugs, and monitoring your live website. The result? 
                <span className="font-semibold text-purple-600">Better websites, delivered faster, with fewer problems.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why AI-First Makes a Difference</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here&apos;s how AI-first development gives you better results compared to traditional methods:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 mb-4">{benefit.description}</p>
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                    <p className="text-sm text-purple-700 font-medium">
                      <strong>Real Example:</strong> {benefit.example}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Tools Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The AI Tools We Use</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Think of these as our &quot;smart tools&quot; — each one helps us work faster and smarter on your project.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {aiTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex flex-col items-center text-center p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3">
                  <tool.icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-sm font-semibold text-gray-800 mb-1">{tool.name}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our AI-First Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here&apos;s how we build your project using AI at every step:
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col md:flex-row items-center gap-8"
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4">
                        <span className="text-black font-bold text-lg">{step.step}</span>
                      </div>
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-black" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                <div className={`flex-1 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border border-purple-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">What This Means for You:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Faster project delivery</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Better quality results</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Fewer surprises and problems</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Traditional vs AI-First Development</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the difference AI-first development makes in real numbers:
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-4 gap-4 p-6 bg-gray-50 border-b border-gray-200">
              <div className="font-semibold text-gray-900">Aspect</div>
              <div className="font-semibold text-gray-900 text-center">Traditional</div>
              <div className="font-semibold text-purple-600 text-center">AI-First</div>
              <div className="font-semibold text-orange-600 text-center">Improvement</div>
            </div>
            {comparisons.map((comparison, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 p-6 border-b border-gray-100 last:border-b-0">
                <div className="font-medium text-gray-900">{comparison.aspect}</div>
                <div className="text-gray-600 text-center">{comparison.traditional}</div>
                <div className="text-purple-600 font-semibold text-center">{comparison.aiFirst}</div>
                <div className="text-orange-600 font-bold text-center">{comparison.improvement}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-8 tracking-tight">Ready to Experience AI-First Development?</h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Let us show you how AI-first development can transform your project. 
            Faster delivery, better quality, fewer problems.
          </p>
          <button
            onClick={handleContact}
            className="bg-gradient-to-r from-purple-700 to-purple-800 text-white px-12 py-6 rounded-full text-lg font-semibold hover:from-purple-800 hover:to-purple-900 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg flex items-center gap-3 justify-center mx-auto"
          >
            Start Your AI-First Project
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">N 52°</h3>
              <p className="text-gray-600 mb-4">
                AI-First Development Partner
              </p>
              <div className="flex items-center text-gray-600 mb-2">
                <span className="mr-2">📍</span>
                Berlin, Germany
              </div>
              <div className="flex items-center text-gray-600 mb-2 hover:text-purple-600 transition-colors">
                <span className="mr-2">✉️</span>
                <a href="mailto:contact@n52.de" className="hover:underline">
                  contact@n52.de
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-600">
                <li>AI-First Web Development</li>
                <li>Mobile App Development</li>
                <li>Custom Web Applications</li>
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
    </div>
  );
}
