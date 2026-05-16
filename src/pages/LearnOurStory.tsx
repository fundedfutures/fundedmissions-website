import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Heart, Globe, Users, Target } from 'lucide-react';
import { Button } from '../components/UI';

export default function LearnOurStory() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-snow text-deep-slate font-body overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-forest-green text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop" 
          alt="School children in Kenya" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105"
        />
        <div className="relative z-20 text-center px-6 max-w-4xl pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="w-10 h-1 bg-white/40" />
            <p className="text-sm font-bold tracking-[0.4em] uppercase">Our Story</p>
            <span className="w-10 h-1 bg-white/40" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl font-display font-bold leading-tight"
          >
            A Journey of <i>Hope</i> and <i>Purpose</i>
          </motion.h1>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-24 space-y-32">
        <button 
          onClick={() => navigate('/')}
          className="fixed top-8 left-8 z-50 flex items-center gap-2 bg-white/90 backdrop-blur px-6 py-3 rounded-full text-muted-text hover:text-forest-green transition-all font-medium border border-gray-100"
        >
          <ArrowLeft size={20} /> Home
        </button>

        {/* Introduction */}
        <section className="space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">It started with a simple observation: potential is universal, but <i>opportunity</i> is not.</h2>
            <p className="text-xl text-muted-text leading-relaxed">
              In the heart of Kenya's most underserved communities, bright minds are often left in the shadows. Children with the potential to become doctors, engineers, and world leaders are frequently forced out of classrooms not by lack of will, but by lack of means.
            </p>
          </motion.div>

          {/* Visual Divider */}
          <div className="aspect-video rounded-[3rem] overflow-hidden border border-gray-100">
            <img 
              src="https://i.imgur.com/I1yj9CJ.jpeg" 
              alt="Student focused on study" 
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Our Foundation */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold">Why FundED Futures?</h2>
            <p className="text-lg opacity-80 leading-relaxed font-medium">
              We were founded to bridge the gap between financial despair and academic excellence. Our initiative is built on four core pillars that guide every decision we make.
            </p>
            <div className="space-y-6 pt-4">
              {[
                { icon: <Heart size={20} />, title: "Radical Empathy", desc: "We place ourselves in the shoes of the families we serve." },
                { icon: <Target size={20} />, title: "Precision Impact", desc: "Every shilling is tracked and verified for maximum efficacy." },
                { icon: <Users size={20} />, title: "Community Wisdom", desc: "We don't impose solutions; we listen to local leaders." },
                { icon: <Globe size={20} />, title: "Global Responsibility", desc: "Empowering one child strengthens the literal global future." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-center">
                  <div className="w-10 h-10 bg-forest-green/10 rounded-xl flex items-center justify-center text-forest-green flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <span className="font-bold block text-sm">{item.title}</span>
                    <span className="text-xs text-muted-text">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] bg-frosted-blue/20 rounded-[3rem] p-4">
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden border border-white">
                <img 
                   src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" 
                   alt="Mission in action" 
                   className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Quote Pop */}
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-[2.5rem] max-w-[240px] border border-gray-100 hidden lg:block">
              <p className="text-xs italic font-medium opacity-80 mb-2">"Opportunity is the fuel of potential. We ensure that fuel never runs dry."</p>
              <span className="text-[10px] font-bold text-forest-green uppercase tracking-widest">— The Founder</span>
            </div>
          </div>
        </section>

        {/* The Impact */}
        <section className="space-y-12 text-center py-20 bg-frosted-blue/10 rounded-[4rem] px-8">
           <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-5xl font-display font-bold">What We Do.</h2>
            <p className="text-xl text-muted-text leading-relaxed">
              We identify vulnerable students, pay their fees directly to schools, provide materials, and offer mentorship. No middle-man, no cash handling by parents, no misused funds. Just pure, targeted educational support.
            </p>
            <div className="pt-8">
              <Button variant="primary" onClick={() => navigate('/how-it-works/identify')}>Explore Our Process</Button>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center pb-20">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-7xl font-display font-bold">Join our mission to <br /><i>Fund the Future.</i></h2>
            <p className="text-xl text-muted-text max-w-xl mx-auto">
              Whether you donate, volunteer, or share our story, you are part of the solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button variant="primary" className="w-full sm:w-auto px-12" onClick={() => navigate('/donate')}>Donate Powerfully</Button>
              <Button variant="ghost" className="w-full sm:w-auto px-12" onClick={() => navigate('/join-volunteer')}>Become a Volunteer</Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
