import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight,
  ShieldCheck, 
  Smartphone, 
  Lock,
  Heart,
  CheckCircle2,
  Copy,
  X,
  ExternalLink
} from 'lucide-react';
import { Button, Card } from '../components/UI';

const PAYMENT_METHODS = [
  { 
    id: 'mpesa', 
    name: 'M-PESA Paybill', 
    label: 'M-PESA',
    description: 'Pay via Business No. 522522 — Acc: 1351769820'
  }
];

const CURRENCY_CONFIG: Record<string, { 
  name: string; 
  symbol: string; 
  flag: string; 
  min: number; 
  max: number; 
  step: number;
  presets: number[];
}> = {
  KES: { 
    name: 'Kenyan Shilling', 
    symbol: 'KES', 
    flag: '🇰🇪', 
    min: 1000, 
    max: 1000000, 
    step: 1000,
    presets: [1000, 5000, 10000, 50000, 100000] 
  },
  USD: { 
    name: 'US Dollar', 
    symbol: 'USD', 
    flag: '🇺🇸', 
    min: 500, 
    max: 10000, 
    step: 500,
    presets: [500, 1000, 2500, 5000, 7500] 
  },
  GBP: { 
    name: 'British Pound', 
    symbol: 'GBP', 
    flag: '🇬🇧', 
    min: 500, 
    max: 10000, 
    step: 500,
    presets: [500, 1000, 2500, 5000, 7500] 
  }
};

const MILESTONES: Record<string, { threshold: number; message: string }[]> = {
  KES: [
    { threshold: 1000, message: "Every journey begins with a single step. Thank you for taking yours!" },
    { threshold: 2000, message: "Two thousand shillings — a child's books and supplies for a term. Beautiful." },
    { threshold: 3000, message: "You're already making a real difference. We see you!" },
    { threshold: 4000, message: "Four thousand shillings closer to a brighter classroom. Thank you." },
    { threshold: 5000, message: "Half of a child's term fees. You are halfway to something incredible." },
    { threshold: 6000, message: "Six thousand shillings — that's a child's uniform, shoes, and more." },
    { threshold: 7000, message: "Seven thousand. A child will walk to school with everything they need because of you." },
    { threshold: 8000, message: "Eight thousand shillings. You are covering more than you know." },
    { threshold: 9000, message: "Almost at ten thousand — your heart is generous and your impact is real." },
    { threshold: 10000, message: "You've just covered a full term's school fees for one child. Thank you!" },
    { threshold: 11000, message: "A child's fees and a little more — you are going above and beyond." },
    { threshold: 12000, message: "Twelve thousand shillings. Two children's supplies for a full term." },
    { threshold: 13000, message: "You are building futures one shilling at a time. Keep going!" },
    { threshold: 14000, message: "Fourteen thousand — a family can breathe a little easier tonight." },
    { threshold: 15000, message: "Fifteen thousand shillings. One and a half children fully funded for a term." },
    { threshold: 16000, message: "Sixteen thousand. The ripple of your kindness is spreading." },
    { threshold: 17000, message: "Seventeen thousand shillings — a child's entire term plus extras covered." },
    { threshold: 18000, message: "Eighteen thousand. You are changing what is possible for these families." },
    { threshold: 19000, message: "Nineteen thousand shillings. We are in awe of your generosity." },
    { threshold: 20000, message: "Two children will stay in school because of you. That's extraordinary!" },
    { threshold: 25000, message: "Twenty-five thousand shillings — two and a half children funded for a full term." },
    { threshold: 30000, message: "You're changing the story for an entire family. We are so grateful." },
    { threshold: 35000, message: "Thirty-five thousand shillings. Three children and counting — thank you!" },
    { threshold: 40000, message: "A whole classroom is brighter because of your generosity." },
    { threshold: 45000, message: "Forty-five thousand shillings. Four families feel the warmth of your giving." },
    { threshold: 50000, message: "You are becoming a cornerstone of this community. Thank you!" },
    { threshold: 60000, message: "Sixty thousand shillings. Six children. Six futures. All lit up by you." },
    { threshold: 70000, message: "Seventy thousand — you are not just donating, you are investing in a generation." },
    { threshold: 80000, message: "Eighty thousand shillings. Eight children will walk into a classroom because of this." },
    { threshold: 90000, message: "Ninety thousand. You are one of the most generous souls we have encountered." },
    { threshold: 100000, message: "One hundred thousand shillings. You've just sponsored an entire year of education for a child. Life-changing." },
    { threshold: 150000, message: "Three families will never forget this moment. Neither will we." },
    { threshold: 200000, message: "You've covered a full year of school fees for four children. You are a hero." },
    { threshold: 250000, message: "A quarter of a million shillings — you are rewriting futures." },
    { threshold: 300000, message: "Six children. One full year. All because of you." },
    { threshold: 350000, message: "Three hundred and fifty thousand shillings. Seven children, fully funded for a year." },
    { threshold: 400000, message: "You're building something that will outlast all of us. Thank you." },
    { threshold: 450000, message: "Nine children. Nine futures secured. You are extraordinary." },
    { threshold: 500000, message: "Halfway to a million — your heart is as big as your vision." },
    { threshold: 550000, message: "Eleven children. A full year each. This is what generosity looks like." },
    { threshold: 600000, message: "Twelve children. Twelve futures. Twelve families changed forever." },
    { threshold: 650000, message: "Thirteen children will grow up differently because of what you are doing right now." },
    { threshold: 700000, message: "You are not just donating — you are investing in a generation." },
    { threshold: 750000, message: "Fifteen children. Three quarters of a million shillings. You are remarkable." },
    { threshold: 800000, message: "Sixteen children. The ripple effect of this gift will last decades." },
    { threshold: 850000, message: "Seventeen children. Seventeen families. One extraordinary person — you." },
    { threshold: 900000, message: "Almost there. You are one of the most generous people we have ever encountered." },
    { threshold: 950000, message: "Nineteen children fully funded for a year. One final push — you are almost at a million." },
    { threshold: 1000000, message: "One million shillings. You have just transformed the future of an entire community. From every child, every family, and every member of our team — asante sana. Thank you." },
  ],
  USD: [
    { threshold: 500, message: "You've just covered a term's school fees for one child. Thank you!" },
    { threshold: 1000, message: "Two children will stay in school because of you. That's extraordinary!" },
    { threshold: 1500, message: "You're changing the story for an entire family. We are so grateful." },
    { threshold: 2000, message: "A whole classroom is brighter because of your generosity." },
    { threshold: 2500, message: "You are becoming a cornerstone of this community. Thank you!" },
    { threshold: 3000, message: "Three thousand dollars — six children will have a full term ahead of them." },
    { threshold: 3500, message: "Your generosity is reaching further than you know. Seven families feel it." },
    { threshold: 4000, message: "You've now covered eight children for a full term. Remarkable." },
    { threshold: 4500, message: "Nearly halfway — your commitment to these kids is unwavering." },
    { threshold: 5000, message: "Five thousand dollars. You've just sponsored an entire year of education for a child. Life-changing." },
    { threshold: 5500, message: "Eleven children. Eleven futures. All touched by your kindness." },
    { threshold: 6000, message: "Six thousand dollars — you are rewriting the story of an entire community." },
    { threshold: 6500, message: "Thirteen children will walk through the school gate because of you." },
    { threshold: 7000, message: "You are not just donating — you are investing in a generation." },
    { threshold: 7500, message: "Three families will never forget this moment. Neither will we." },
    { threshold: 8000, message: "Sixteen children. The ripple effect of this gift will last decades." },
    { threshold: 8500, message: "You are one of the most generous people we have ever encountered." },
    { threshold: 9000, message: "Eighteen children. Eighteen chances at a brighter future — all because of you." },
    { threshold: 9500, message: "Almost there. What you are doing is nothing short of extraordinary." },
    { threshold: 10000, message: "Ten thousand dollars. You have just transformed the future of an entire community. From every child, every family, and every member of our team — thank you, from the bottom of our hearts." },
  ],
  GBP: [
    { threshold: 500, message: "You've just covered a term's school fees for one child. Thank you!" },
    { threshold: 1000, message: "Two children will stay in school because of you. That's extraordinary!" },
    { threshold: 1500, message: "You're changing the story for an entire family. We are so grateful." },
    { threshold: 2000, message: "A whole classroom is brighter because of your generosity." },
    { threshold: 2500, message: "You are becoming a cornerstone of this community. Thank you!" },
    { threshold: 3000, message: "Three thousand pounds — six children will have a full term ahead of them." },
    { threshold: 3500, message: "Your generosity is reaching further than you know. Seven families feel it." },
    { threshold: 4000, message: "You've now covered eight children for a full term. Remarkable." },
    { threshold: 4500, message: "Nearly halfway — your commitment to these kids is unwavering." },
    { threshold: 5000, message: "Five thousand pounds. You've just sponsored an entire year of education for a child. Life-changing." },
    { threshold: 5500, message: "Eleven children. Eleven futures. All touched by your kindness." },
    { threshold: 6000, message: "Six thousand pounds — you are rewriting the story of an entire community." },
    { threshold: 6500, message: "Thirteen children will walk through the school gate because of you." },
    { threshold: 7000, message: "You are not just donating — you are investing in a generation." },
    { threshold: 7500, message: "Three families will never forget this moment. Neither will we." },
    { threshold: 8000, message: "Sixteen children. The ripple effect of this gift will last decades." },
    { threshold: 8500, message: "You are one of the most generous people we have ever encountered." },
    { threshold: 9000, message: "Eighteen children. Eighteen chances at a brighter future — all because of you." },
    { threshold: 9500, message: "Almost there. What you are doing is nothing short of extraordinary." },
    { threshold: 10000, message: "Ten thousand pounds. You have just transformed the future of an entire community. From every child, every family, and every member of our team — thank you, from the bottom of our hearts." },
  ]
};

const InstructionModal = ({ isOpen, onClose, method, amount, currency }: any) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  if (!method) return null;

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const businessNo = "522522";
  const accountNo = "1351769820";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-deep-slate/80 backdrop-blur-md z-[200]"
            onClick={onClose}
          />
          <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-[201] p-6">
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              className="bg-snow max-w-md w-full rounded-[3rem] p-8 md:p-10 pointer-events-auto relative border border-white/20 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] overflow-hidden"
            >
              {/* Close Button */}
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-3 bg-white/50 hover:bg-white rounded-full text-deep-slate transition-all z-20"
              >
                <X size={20} />
              </button>

              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-display font-bold text-deep-slate mb-2">
                  Lipa na <span className="text-forest-green italic">M-PESA</span>
                </h3>
                <p className="text-sm text-muted-text font-medium mb-8">Follow these steps carefully</p>
                
                <div className="space-y-4 text-left">
                  <div className="bg-white p-6 rounded-3xl border border-gray-100 space-y-4 shadow-sm">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-text font-bold uppercase tracking-widest text-[10px]">Business Number</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-lg">{businessNo}</span>
                        <button 
                          onClick={() => copyToClipboard(businessNo, 'business')}
                          className={`p-2 rounded-lg transition-all ${copiedField === 'business' ? 'bg-forest-green text-white' : 'bg-forest-green/5 text-forest-green hover:bg-forest-green/10'}`}
                        >
                          {copiedField === 'business' ? <span className="text-[10px] font-bold">Copied!</span> : <Copy size={16} />}
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-sm pt-4 border-t border-gray-50">
                      <span className="text-muted-text font-bold uppercase tracking-widest text-[10px]">Account Number</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-lg">{accountNo}</span>
                        <button 
                          onClick={() => copyToClipboard(accountNo, 'account')}
                          className={`p-2 rounded-lg transition-all ${copiedField === 'account' ? 'bg-forest-green text-white' : 'bg-forest-green/5 text-forest-green hover:bg-forest-green/10'}`}
                        >
                          {copiedField === 'account' ? <span className="text-[10px] font-bold">Copied!</span> : <Copy size={16} />}
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-sm pt-4 border-t border-gray-50">
                      <span className="text-muted-text font-bold uppercase tracking-widest text-[10px]">Amount</span>
                      <span className="font-mono font-bold text-lg text-forest-green">{amount.toLocaleString()} {currency}</span>
                    </div>
                  </div>

                  <div className="bg-forest-green/5 p-4 rounded-2xl">
                    <ol className="text-xs space-y-2 font-medium text-deep-slate/80 list-decimal list-inside">
                      <li>Go to <span className="font-bold">Lipa na M-PESA</span> menu</li>
                      <li>Select <span className="font-bold">Pay Bill</span></li>
                      <li>Enter the Business No. and Account No. above</li>
                      <li>Enter your <span className="font-bold">M-PESA PIN</span> to complete</li>
                    </ol>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <Button 
                    variant="primary" 
                    className="w-full py-5 text-lg"
                    onClick={onClose}
                  >
                    I have made the payment
                  </Button>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-text opacity-50">
                    Then enter your code in the summary field
                  </p>
                </div>
              </div>
              
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-forest-green/5 rounded-full blur-3xl pointer-events-none" />
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default function Donate() {
  const navigate = useNavigate();
  const [currencyCode, setCurrencyCode] = useState<string>('KES');
  const [amount, setAmount] = useState<number>(1000);
  const [paymentMethod, setPaymentMethod] = useState<string>('mpesa');
  const [error, setError] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [donorName, setDonorName] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');

  const config = CURRENCY_CONFIG[currencyCode];

  const activeMilestone = useMemo(() => {
    const currencyMilestones = MILESTONES[currencyCode] || [];
    const reached = currencyMilestones.filter(m => amount >= m.threshold);
    return reached.length > 0 ? reached[reached.length - 1] : null;
  }, [amount, currencyCode]);

  const handleCurrencyChange = (code: string) => {
    setCurrencyCode(code);
    setAmount(CURRENCY_CONFIG[code].min);
    setPaymentMethod('mpesa');
    setError('');
  };

  const handleMethodSelect = (methodId: string) => {
    setPaymentMethod(methodId);
    
    if (methodId === 'mpesa') {
      // Attempt M-Pesa deep link (simulated for common patterns)
      const businessNo = "522522";
      const accountNo = "1351769820";
      const mpesaUrl = `mpesa://paybill?business=${businessNo}&account=${accountNo}&amount=${amount}`;
      
      // We try to open the app, but immediately show instructions as a fallback
      // Most browsers will ignore invalid schemes without erroring the script
      try {
        window.location.href = mpesaUrl;
      } catch (e) {
        console.log("Deep link not supported");
      }
    }
    
    setShowInstructions(true);
    setError('');
  };

  const handleDonate = () => {
    if (!confirmationCode || confirmationCode.length < 5) {
      setError('A valid confirmation code is mandatory to track your donation.');
      return;
    }
    setError('');
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      navigate('/thank-you');
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-snow text-deep-slate font-body relative overflow-x-hidden selection:bg-forest-green/20">
      <InstructionModal 
        isOpen={showInstructions} 
        onClose={() => setShowInstructions(false)}
        method={PAYMENT_METHODS.find(m => m.id === paymentMethod)}
        amount={amount}
        currency={currencyCode}
      />

      <header className="p-6 md:p-10 max-w-7xl mx-auto flex items-center justify-between sticky top-0 bg-snow/80 backdrop-blur-md z-50">
        <div className="text-2xl font-display font-bold">
          fund<span className="text-forest-green">ED</span> futures
        </div>
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-muted-text hover:text-forest-green transition-colors font-bold group text-sm"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Site
        </button>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 md:py-20 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-display font-bold text-deep-slate"
          >
            Create <span className="text-forest-green italic">Impact</span>
          </motion.h1>
          <p className="text-lg text-muted-text max-w-xl mx-auto font-medium">
            Your contribution provides school fees, uniforms, and books directly to children in need.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-8">
            {/* Currency Selector */}
            <div className="bg-white p-8 rounded-[3rem] border border-gray-100">
              <label className="block text-xs font-bold uppercase tracking-widest text-muted-text mb-6">Preferred Currency</label>
              <div className="flex gap-4">
                {Object.keys(CURRENCY_CONFIG).map((code) => (
                  <button
                    key={code}
                    onClick={() => handleCurrencyChange(code)}
                    className={`flex-1 flex flex-col items-center gap-2 p-5 rounded-3xl border-2 transition-all ${
                      currencyCode === code ? 'border-forest-green bg-forest-green/5' : 'border-gray-50 bg-gray-50/50 hover:border-gray-200'
                    }`}
                  >
                    <span className="text-3xl">{CURRENCY_CONFIG[code].flag}</span>
                    <span className="font-bold text-sm">{code}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Donation Amount */}
            <div className="bg-white p-10 rounded-[3rem] border border-gray-100">
              <div className="text-center mb-10 h-32 flex flex-col justify-center">
                <div className="text-6xl md:text-7xl font-display font-bold text-deep-slate mb-2">
                  <span className="text-forest-green opacity-30">{config.symbol}</span> {amount.toLocaleString()}
                </div>
                <div className="min-h-[3rem]">
                  <AnimatePresence mode="wait">
                    {activeMilestone && (
                      <motion.p
                        key={`${currencyCode}-${activeMilestone.threshold}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-forest-green font-display italic text-xl leading-relaxed px-6"
                      >
                        "{activeMilestone.message}"
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="space-y-8">
                <input 
                  type="range"
                  min={config.min}
                  max={config.max}
                  step={config.step}
                  value={amount}
                  onChange={(e) => setAmount(parseInt(e.target.value))}
                  className="w-full h-3 bg-snow rounded-full appearance-none cursor-pointer accent-forest-green"
                />
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 pt-6">
                  {config.presets.map((p) => (
                    <button
                      key={p}
                      onClick={() => setAmount(p)}
                      className={`py-3 rounded-2xl border-2 font-bold transition-all text-sm ${
                        amount === p ? 'bg-forest-green border-forest-green text-white' : 'border-gray-50 bg-gray-50 text-muted-text hover:border-gray-200'
                      }`}
                    >
                      {p.toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white p-10 rounded-[3rem] border border-gray-100">
              <label className="block text-xs font-bold uppercase tracking-widest text-muted-text mb-8">Payment Secure Channel</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {PAYMENT_METHODS.map((method) => {
                  const isSelected = paymentMethod === method.id;
                  return (
                    <button
                      key={method.id}
                      onClick={() => handleMethodSelect(method.id)}
                      className={`relative flex flex-col p-8 rounded-[2.5rem] border-2 transition-all text-left group overflow-hidden active:scale-95 ${
                        isSelected ? 'border-forest-green bg-white shadow-xl shadow-forest-green/10' : 'border-gray-50 bg-snow hover:border-gray-200'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-6">
                        <div className={`px-4 py-2 rounded-xl transition-all ${
                          isSelected ? 'bg-forest-green text-white shadow-md' : 'bg-forest-green/5 text-forest-green border border-forest-green/10'
                        }`}>
                          <span className="text-xs font-black tracking-widest uppercase">{method.label}</span>
                        </div>
                      </div>
                      <h4 className="font-bold text-lg text-deep-slate mb-1">{method.name}</h4>
                      <p className="text-xs text-muted-text font-medium">{method.description}</p>
                      
                      {isSelected && (
                        <div className="absolute top-4 right-4 text-forest-green">
                          <CheckCircle2 size={24} />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <aside className="lg:col-span-5 space-y-8 sticky top-36">
            <div className="bg-deep-slate text-snow p-10 rounded-[3rem] relative overflow-hidden">
              <div className="relative z-10 space-y-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-forest-green">
                    <ShieldCheck size={24} />
                    <span className="text-xs font-bold uppercase tracking-[0.2em]">Donation Verification</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold">Checkout Summary</h3>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest opacity-50">Your Name (Optional)</label>
                    <input 
                      type="text" 
                      placeholder="e.g. John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-forest-green/50 transition-all font-medium text-snow placeholder:text-white/20"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest opacity-50 flex items-center justify-between">
                      Confirmation Code
                      <span className="text-forest-green text-[9px] px-2 py-0.5 bg-forest-green/10 rounded-full">Mandatory</span>
                    </label>
                    <input 
                      type="text" 
                      placeholder="Enter M-Pesa Transaction Code"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-forest-green/50 transition-all font-bold text-snow placeholder:text-white/20 uppercase tracking-widest"
                      value={confirmationCode}
                      onChange={(e) => setConfirmationCode(e.target.value)}
                    />
                  </div>
                </div>

                <div className="pt-10 border-t border-white/10">
                  <div className="flex justify-between items-end mb-8">
                    <span className="text-sm font-medium opacity-60">Total Donation</span>
                    <span className="text-4xl font-display font-bold text-forest-green">{amount.toLocaleString()} {currencyCode}</span>
                  </div>

                  {error && (
                    <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-red-400 text-xs font-bold mb-6 bg-red-400/10 p-4 rounded-xl border border-red-400/20">
                      {error}
                    </motion.p>
                  )}

                  <Button 
                    variant="gold" 
                    className="w-full py-6 text-xl"
                    onClick={handleDonate}
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <div className="w-6 h-6 border-3 border-deep-slate/20 border-t-deep-slate rounded-full animate-spin mx-auto" />
                    ) : (
                      <span className="flex items-center justify-center gap-3">
                        Submit Donation <ArrowRight size={20} />
                      </span>
                    )}
                  </Button>
                </div>

                <div className="flex items-center justify-center gap-2 opacity-30 pt-6">
                  <Lock size={12} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">End-to-End Encrypted</span>
                </div>
              </div>

              <div className="absolute top-0 right-0 w-64 h-64 bg-forest-green/10 rounded-full blur-3xl pointer-events-none" />
            </div>

            <Card className="bg-snow border-frosted-blue/10 p-8">
              <div className="flex items-center gap-4 mb-4">
                <Heart className="text-forest-green" size={24} />
                <h4 className="font-bold text-deep-slate">Your Impact</h4>
              </div>
              <p className="text-sm text-deep-slate/60 leading-relaxed font-medium">
                Every shilling or dollar goes directly to vetted schools in Kenya to pay for tuition and meals. You will receive an educational update twice a year.
              </p>
            </Card>
          </aside>
        </div>
      </main>

      <footer className="py-20 border-t border-gray-100 text-center opacity-30">
        <div className="font-display font-bold text-2xl mb-2">fund<span className="text-forest-green">ED</span> futures</div>
        <p className="text-[10px] font-bold uppercase tracking-[0.3em]">Nurturing Potential • Africa & Beyond</p>
      </footer>
    </div>
  );
}
