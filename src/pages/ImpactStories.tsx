import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Heart, Quote } from 'lucide-react';
import { Button, Card } from '../components/UI';

const stories = [
  {
    name: "Louis",
    age: 13,
    grade: "Grade 7",
    location: "Kangemi",
    story: "Louis is a bright, hardworking, and ambitious boy whose greatest dream is to become a lawyer or engineer. His teachers describe him as obedient, disciplined, and exceptionally talented. Sadly, his future is threatened by his family's harsh economic situation. His father works as a mechanic while his mother takes on small hustles, yet they still struggle to afford balanced meals and a suitable study environment. School fees have become an impossible burden, causing Louis to miss classes frequently. With support, Louis can remain in school and turn his dreams into reality.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Blessing",
    age: 10,
    grade: "Grade 5",
    location: "Kangemi",
    story: "Blessing is a quiet, determined girl with a powerful dream — to become a doctor and save lives. She is raised by her elderly grandmother who relies on a small pension to meet both basic needs and school fees. Her mother struggles to find steady work, while her father has been largely absent. School fees remain a constant struggle, and the risk of Blessing being sent home is always present. It is heartbreaking that her dream could fade not because of a lack of ability, but because of a lack of means.",
    image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Yusuf",
    age: 13,
    grade: "Grade 8",
    location: "Kangemi",
    story: "When Yusuf was born, his mother faced everything alone — rent to find, food to put on the table, and a child who depended on her for everything. Yusuf has grown up in the middle of that struggle, but somehow, he still dreams. He loves science and wants to be an engineer one day. School fees are a constant burden, and each unpaid balance puts his education at risk. His mother is doing everything she can, but she cannot do it alone.",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Lydia",
    age: 15,
    grade: "Grade 10",
    location: "Uthiru",
    story: "Lydia lives with her mother and siblings in a home built on sacrifice. Her father left when she was just one year old, and her mother has worked odd jobs ever since to keep the family going. More than once, Lydia has been turned away at the school gate and told not to return until fees are cleared. Yet she holds onto a dream of becoming a fashion designer or chef. In a life that has given her very little certainty, her dreams remain stubbornly, tenderly her own.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Branice",
    age: 13,
    grade: "Grade 8",
    location: "Kangemi",
    story: "Branice has already made a decision no child should have to make. She has quietly decided to step aside and sacrifice her own education so her younger brother can have a chance. Her parents hustle daily but there are days the family goes to bed hungry. At school, on the days she was allowed in, teachers seated her apart from other students as a visible mark of her unpaid debt — letting her be present in the room but making her feel she did not fully belong. With support, Branice can reclaim her own future.",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Mark",
    age: 13,
    grade: "Grade 7",
    location: "Kangemi",
    story: "Mark dreams of becoming a pilot — a goal he pursues with focus and determination. Recently, that progress was interrupted when he was sent home due to unpaid school fees. His mother carries the full weight of the household as his father remains without work. Each time Mark is sent home, it chips away at his confidence. His situation is not about a lack of potential — it is about a lack of opportunity.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Favour",
    age: 12,
    grade: "Grade 7",
    location: "Kangemi",
    story: "Favour frequently tops her class and consistently stays within the top three students. She dreams of becoming a doctor. She stays with her mother as her father abandons the family and contributes nothing. Her family has seen bright talent lost before — her brother was highly intelligent but could not attend university due to lack of fees. Despite all of this, Favour keeps pushing. She deserves the chance to become the doctor she dreams of being.",
    image: "https://images.unsplash.com/photo-1531123414780-f74242c2b052?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Kelvin",
    age: 13,
    grade: "Grade 8",
    location: "Kangemi",
    story: "Kelvin is gifted, curious, and drawn to wiring and engineering from a young age. He grew up in a broken home where his mother tried to shield him from his father's struggles with alcoholism. She passed away, leaving Kelvin without the one person who had always stood between him and the chaos. His aunt stepped in as guardian, doing what she can with limited resources. Despite everything, Kelvin holds tightly to his dream of becoming an engineer — but mounting school fee debt means that dream is slipping away.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function ImpactStories() {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-snow pt-32 pb-20 px-[5%]"
    >
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-forest-green mb-12 hover:gap-3 transition-all font-bold"
        >
          <ArrowLeft size={20} /> Back to Home
        </button>

        <div className="max-w-4xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-10 leading-tight">
              Stories of <span className="text-forest-green">Impact</span>
            </h1>
            <div className="relative p-8 md:p-12 bg-frosted-blue/20 rounded-[3rem] border border-frosted-blue/30 overflow-hidden group">
              <Quote className="absolute -top-4 -left-4 w-24 h-24 text-frosted-blue/20 rotate-18" />
              <p className="text-2xl md:text-3xl text-deep-slate/90 leading-relaxed font-display italic relative z-10">
                "Behind every statistic is a child with a name, a dream, and a story worth telling. These are just a few of the lives you help change when you choose to give."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {stories.map((story, idx) => (
            <Card
              key={idx}
              className="p-0 !rounded-[4rem]"
            >
              <div className="h-72 overflow-hidden relative">
                <img 
                  src={story.image} 
                  alt={story.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-slate/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <div className="text-white">
                    <p className="font-bold text-lg mb-1">{story.location}</p>
                    <p className="text-sm opacity-80">{story.grade}</p>
                  </div>
                </div>
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full">
                  <p className="text-forest-green font-bold text-sm">Age {story.age}</p>
                </div>
              </div>

              <div className="p-10 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-10 h-[2px] bg-forest-green" />
                  <h3 className="text-3xl font-display font-medium text-deep-slate">{story.name}</h3>
                </div>
                <p className="text-deep-slate/80 leading-relaxed mb-8 flex-grow italic">
                  "{story.story}"
                </p>
                <div className="pt-6 border-t border-gray-50 flex justify-between items-center">
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-text">Verified Story</span>
                  <div className="w-10 h-10 rounded-full bg-frosted-blue/10 flex items-center justify-center text-frosted-blue group-hover:bg-forest-green group-hover:text-white transition-colors">
                    <Heart size={18} fill="currentColor" className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Closing Message */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-40 p-12 md:p-20 bg-deep-slate text-snow rounded-[4rem] relative overflow-hidden text-center"
        >
          <div className="relative z-10 max-w-4xl mx-auto">
            <Quote className="w-16 h-16 text-forest-green mb-8 mx-auto opacity-50" />
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-10 leading-tight">
              Giving with Transparency
            </h2>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed mb-12 italic">
              "Your donation does not just pay a school fee. It keeps a dream alive. Every shilling you give goes directly to a verified school, never to parents or intermediaries, ensuring full transparency and real impact."
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mb-12 p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] relative group"
            >
              <p className="text-lg md:text-2xl font-bold text-snow leading-relaxed tracking-wide">
                Every contribution transforms a <span className="text-forest-green">student's future</span>. Your gift reaches the <span className="text-frosted-blue">classroom directly</span>, creating lasting change in education and opportunity.
              </p>
              {/* Reflection Effect removed */}
            </motion.div>
            
            <Button
              variant="primary"
              onClick={() => navigate('/donate')}
              className="text-xl flex items-center gap-3 mx-auto"
            >
              Donate Now <ArrowRight size={24} />
            </Button>
          </div>

          {/* Decorative accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-forest-green/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-frosted-blue/10 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </motion.div>
  );
}
