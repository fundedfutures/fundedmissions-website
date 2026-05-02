import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Wallet, PieChart, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import { Button } from '../components/UI';

export default function HowItWorks_Fund() {
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
            <Wallet size={32} />
          </motion.div>
          <h1 className="text-4xl md:text-7xl font-display font-bold mb-6">We Fund</h1>
          <p className="text-xl text-muted-text max-w-4xl leading-relaxed">
            Every shilling has a destination. We ensure that 100% of your scholarship donation reaches the student's education directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-display font-bold">Transparent Funding</h2>
              <p className="text-lg opacity-80 leading-relaxed">
                Management of funds is the backbone of our integrity. We don't just collect money; we steward it to maximize its impact on a child's future.
              </p>
            </div>

            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 flex flex-col items-center text-center space-y-6">
              <PieChart size={120} className="text-forest-green mb-4" />
              <h3 className="text-2xl font-bold">100% Direct Education Support</h3>
              <p className="opacity-70">
                School Fees • Uniforms • Books • Stationery • Mentorship
              </p>
              <div className="pt-4 grid grid-cols-2 gap-4 w-full">
                <div className="p-4 bg-snow rounded-2xl">
                  <span className="block text-2xl font-display font-bold text-forest-green">85%</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-text">Tuition Fees</span>
                </div>
                <div className="p-4 bg-snow rounded-2xl">
                  <span className="block text-2xl font-display font-bold text-forest-green">15%</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-text">Materials & Support</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-10 pt-10">
            {[
              { icon: <ShieldCheck size={24} />, title: "Zero Fee Deduction", desc: "We cover our administrative costs through separate grants, not your student donations." },
              { icon: <Zap size={24} />, title: "Real-Time Allocation", desc: "Funds are allocated to specific students instantly upon donation confirmation." },
              { icon: <Wallet size={24} />, title: "Direct School Payments", desc: "Money is wired directly to the educational institution, never handled by the student's family." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-8 items-start pb-8 border-b border-gray-100 last:border-0"
              >
                <div className="w-14 h-14 bg-forest-green text-white rounded-2xl flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="opacity-70 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </motion.div>
            ))}

            <div className="pt-10 flex flex-col gap-6">
              <motion.button
                whileHover={{ opacity: 0.9 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/how-it-works/follow-through')}
                className="w-full bg-forest-green text-snow py-6 rounded-[2rem] font-bold transition-all flex items-center justify-center gap-3 group text-xl"
              >
                <span>Next: We Follow Through</span>
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <Button 
                variant="outline" 
                className="w-full py-6 text-xl border-forest-green/20 hover:bg-forest-green/5 text-forest-green rounded-[2rem]"
                onClick={() => navigate('/donate')}
              >
                Start A Sponsorship
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
