import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Copy, Share2, Download } from 'lucide-react';
import { Button } from '../components/UI';

const SHARE_ASSETS = [
  {
    id: 1,
    title: "Education is a Right",
    description: "A series of visuals for Instagram & Snapchat stories.",
    image: "https://i.imgur.com/I1yj9CJ.jpeg",
    platforms: ["Instagram", "Snapchat"]
  },
  {
    id: 3,
    title: "Student Stories Loop",
    description: "Short vertical video frames for TikTok & Reels.",
    image: "https://i.imgur.com/2ZF1CuH.jpeg",
    platforms: ["TikTok", "Reels"]
  }
];

export default function ShareWork() {
  const navigate = useNavigate();

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.origin);
    // In a real app, you'd show a toast here
    alert("Website link copied!");
  };

  return (
    <div className="min-h-screen bg-snow text-deep-slate font-body">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-muted-text hover:text-forest-green transition-colors mb-12 font-medium"
        >
          <ArrowLeft size={20} /> Back to Home
        </button>

        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Share Our Mission</h1>
          <p className="text-xl text-muted-text max-w-2xl mx-auto">
            Your voice is powerful. Use these visuals to spread awareness and help us reach more children.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {SHARE_ASSETS.map((asset, idx) => (
            <motion.div 
              key={asset.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[2.5rem] overflow-hidden border border-frosted-blue/20 flex flex-col"
            >
              <div className="h-64 relative overflow-hidden group">
                <img 
                  src={asset.image} 
                  alt={asset.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-forest-green/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button className="bg-white p-4 rounded-full text-forest-green hover:bg-forest-green hover:text-white transition-colors">
                    <Download size={24} />
                  </button>
                  <button className="bg-white p-4 rounded-full text-forest-green hover:bg-forest-green hover:text-white transition-colors">
                    <Share2 size={24} />
                  </button>
                </div>
              </div>
              <div className="p-8 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {asset.platforms.map(p => (
                    <span key={p} className="text-[10px] font-bold uppercase tracking-widest bg-frosted-blue/20 text-deep-slate px-3 py-1 rounded-full">{p}</span>
                  ))}
                </div>
                <h3 className="text-2xl font-display font-bold">{asset.title}</h3>
                <p className="text-muted-text">{asset.description}</p>
                <div className="pt-4 flex gap-4">
                  <Button variant="primary" className="flex-1 py-3 text-sm">Download Asset</Button>
                  <button className="bg-snow p-3 rounded-2xl text-muted-text hover:text-forest-green transition-colors border border-gray-100">
                    <Copy size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-forest-green text-white rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold">Quick Share Link</h2>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              Alternatively, you can just share our website link directly with your friends and family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-5 rounded-3xl font-mono text-sm max-w-sm truncate">
                {window.location.origin}
              </div>
              <Button 
                variant="gold" 
                className="py-5 px-10 flex items-center gap-2"
                onClick={handleCopyLink}
              >
                <Copy size={18} /> Copy Website Link
              </Button>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>
      </div>
    </div>
  );
}
