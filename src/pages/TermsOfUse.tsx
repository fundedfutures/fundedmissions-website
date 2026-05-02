import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermsOfUse() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "Introduction",
      content: "These Terms of Use govern your access to and use of the fundED futures website and its associated services. By accessing our site, you agree to be bound by these terms in their entirety. If you do not agree, please refrain from using the platform."
    },
    {
      title: "User Responsibilities",
      content: "Users are expected to provide accurate and truthful information when interacting with our forms. You agree to use the website lawfully and respectfully. Any attempt to misuse the platform, engage in fraudulent activity, or interfere with site security is strictly prohibited."
    },
    {
      title: "Donations Policy",
      content: "All donations made through our platform are voluntary transfers of funds. Donations are non-refundable unless required by law or in exceptional circumstances at our discretion. We use secure third-party providers to process these transactions to ensure the safety of your financial data."
    },
    {
      title: "Intellectual Property",
      content: "All content featured on this website—including text, logos, graphics, and images—is the intellectual property of fundED futures. Users may not copy, reproduce, or modify any content without our prior written consent, except for personal, non-commercial use."
    },
    {
      title: "Limitation of Liability",
      content: "While we strive for accuracy, fundED futures is not liable for any indirect, incidental, or consequential losses arising from your use of the site. We are not responsible for issues arising from third-party payment processing or external website links."
    },
    {
      title: "Governing Law",
      content: "These Terms of Use are governed by and construed in accordance with the laws of Kenya, including the Data Protection Act (2019). Any disputes arising from these terms will be subject to the exclusive jurisdiction of the Kenyan legal system."
    },
    {
      title: "Changes to Terms",
      content: "We reserve the right to update or modify these terms at any time. Significant changes will be communicated via a notice on our website or through email notification to our registered subscribers. Your continued use of the site signifies acceptance of any updates."
    },
    {
      title: "Contact Us",
      content: "If you have questions regarding these Terms of Use, please reach out to us at: fundedfuturesorg@gmail.com"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-24 px-[5%] text-deep-slate">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-forest-green font-semibold mb-12 hover:gap-3 transition-all">
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-forest-green font-bold text-sm tracking-widest uppercase mb-4">Agreement</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Terms of Use</h1>
          <p className="text-muted-text mb-12 font-medium">Last updated: April 2026</p>

          <div className="space-y-12">
            {sections.map((section, idx) => (
              <section key={idx} className="border-b border-gray-100 pb-8 last:border-0">
                <h2 className="text-2xl font-display font-bold mb-4">{section.title}</h2>
                <p className="text-lg text-muted-text leading-relaxed">
                  {section.content}
                </p>
              </section>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
