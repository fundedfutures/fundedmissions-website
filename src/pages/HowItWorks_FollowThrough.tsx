import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, RefreshCw, BarChart3, GraduationCap, Heart, ArrowRight } from 'lucide-react';
import { Button } from '../components/UI';

export default function HowItWorks_FollowThrough() {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen bg-snow text-deep-slate font-body"
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-muted-text hover:text-forest-green transition-colors mb-12 font-medium"
        >
          <ArrowLeft size={20} /> Back to Home
        </button>

        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-20 h-20 bg-forest-green/10 rounded-[2rem] flex items-center justify-center text-forest-green mb-8"
          >
            <RefreshCw size={32} />
          </motion.div>
          <h1 className="text-4xl md:text-7xl font-display font-bold mb-6">We Follow Through</h1>
          <p className="text-xl text-muted-text max-w-4xl leading-relaxed">
            Our commitment doesn't end with a check. We walk with every student until they reach their full potential.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-display font-bold">Accountability & Transparency</h2>
              <p className="text-lg opacity-80 leading-relaxed font-medium">
                To prevent misuse and ensure impact, we've built a system of radical transparency.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {[
                { 
                  icon: <GraduationCap size={20} />, 
                  title: "Direct School Payments", 
                  desc: "Funds reach educational institutions directly via bank transfer or Paybill. We never give cash to parents or guardians, eliminating the risk of diversion." 
                },
                { 
                  icon: <BarChart3 size={20} />, 
                  title: "Term-ly Performance Reports", 
                  desc: "Donors receive periodic updates on their sponsored student's academic progress and general well-being." 
                },
                { 
                  icon: <Heart size={20} />, 
                  title: "Lifelong Mentorship", 
                  desc: "We provide career guidance and emotional support to help students navigate the transition from school to professional life." 
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 flex gap-6 items-start">
                   <div className="w-12 h-12 bg-forest-green/10 text-forest-green rounded-2xl flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="opacity-70 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative pt-12 lg:pt-0">
             <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-frosted-blue rounded-[3rem] p-12 md:p-16 h-full flex flex-col justify-center items-center text-center space-y-8"
            >
              <div className="w-24 h-24 bg-white/40 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Heart size={48} className="text-deep-slate" />
              </div>
              <h3 className="text-3xl font-display font-bold">A Promise Kept</h3>
              <p className="text-lg opacity-80 italic leading-relaxed">
                "When I was first turned away at the gate, I thought my journey was over. FundED Futures didn't just pay my fees; they stayed until I graduated. Today, I am studying to be a nurse."
              </p>
              <div className="pt-4">
                <p className="font-bold text-sm tracking-widest uppercase">— Sarah, Former Beneficiary</p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-10 pb-20">
          <SectionDivider />
          <div className="text-center">
            <h2 className="text-3xl font-display font-bold mb-8">Ready to change a life?</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button
                whileHover={{ opacity: 0.9 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/donate')}
                className="bg-forest-green text-snow px-10 py-5 rounded-[2rem] font-bold transition-all flex items-center gap-3 group"
              >
                <span>Support a Student Now</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <Button variant="ghost" className="px-10 py-5 hover:bg-forest-green/5 text-forest-green rounded-[2rem]" onClick={() => navigate('/impact-stories')}>View Impact Stories</Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const SectionDivider = () => (
  <div className="w-24 h-1 bg-forest-green/20 rounded-full" />
);
