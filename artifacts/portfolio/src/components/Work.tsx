import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const works = [
  {
    id: 1,
    client: "Lumina Skincare",
    platform: "Instagram",
    metric: "+240% engagement",
    goal: "Revitalize visual identity and build an engaged community prior to a major product launch.",
    result: "Achieved a 240% increase in average engagement rate and grew following by 15k within 3 months.",
    strategy: "Shifted from product-heavy posts to educational, aesthetic content highlighting routines and behind-the-scenes. Leveraged Reels for reach and carousels for saves.",
  },
  {
    id: 2,
    client: "Oat & Co.",
    platform: "TikTok",
    metric: "3.2M organic views",
    goal: "Establish brand presence on TikTok and reach Gen Z consumers.",
    result: "Generated over 3.2M organic views across 5 viral videos in the first month.",
    strategy: "Created highly relatable, low-production lifestyle videos leaning into trending audio and authentic humor.",
  },
  {
    id: 3,
    client: "Vertex FinTech",
    platform: "LinkedIn",
    metric: "2x lead generation",
    goal: "Position the founders as thought leaders and generate B2B leads.",
    result: "Doubled inbound leads from social channels and increased profile views by 400%.",
    strategy: "Developed a founder-led content strategy focused on industry insights, actionable advice, and transparent company milestones.",
  },
  {
    id: 4,
    client: "Aura Athletics",
    platform: "Instagram",
    metric: "45% conversion rate",
    goal: "Drive direct sales through social media for the summer collection.",
    result: "Achieved a 45% conversion rate from Instagram Shop and Stories.",
    strategy: "Implemented a robust influencer seeding campaign paired with high-urgency Story sequences and strategic paid retargeting.",
  },
];

export default function Work() {
  const [selectedWork, setSelectedWork] = useState<typeof works[0] | null>(null);

  return (
    <section id="work" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 flex justify-between items-end"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-foreground">Selected Work</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {works.map((work, idx) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              onClick={() => setSelectedWork(work)}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] bg-secondary mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-border/50 text-xs font-medium uppercase tracking-wider rounded-full">
                      {work.platform}
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif text-foreground">{work.client}</h3>
                </div>
                <div className="text-right">
                  <span className="text-primary font-medium">{work.metric}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedWork && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedWork(null)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-card border border-border p-8 md:p-12 z-50 shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedWork(null)}
                className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="mb-8">
                <span className="px-3 py-1 bg-secondary text-xs font-medium uppercase tracking-wider rounded-full inline-block mb-4">
                  {selectedWork.platform}
                </span>
                <h3 className="text-3xl font-serif text-foreground mb-2">{selectedWork.client}</h3>
                <p className="text-xl text-primary font-serif italic">{selectedWork.metric}</p>
              </div>

              <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
                <div>
                  <h4 className="text-sm font-medium uppercase tracking-widest text-foreground mb-2">Goal</h4>
                  <p>{selectedWork.goal}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium uppercase tracking-widest text-foreground mb-2">Strategy</h4>
                  <p>{selectedWork.strategy}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium uppercase tracking-widest text-foreground mb-2">Result</h4>
                  <p>{selectedWork.result}</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
