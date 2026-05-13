import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="min-h-screen pt-20 flex items-center bg-background">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] text-foreground mb-6"
          >
            Crafting <br className="hidden md:block" />
            <span className="italic text-primary">Stories</span> That Convert
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground mb-10 font-light leading-relaxed max-w-md"
          >
            Social Media Manager — helping brands grow through intentional content and authentic community building.
          </motion.p>
          <motion.div variants={itemVariants}>
            <a
              href="#work"
              className="inline-flex items-center gap-3 border-b border-foreground pb-1 text-sm uppercase tracking-widest font-medium hover:text-primary hover:border-primary transition-all group"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[3/4] md:aspect-[4/5] w-full max-w-md mx-auto md:ml-auto md:mr-0"
        >
          {/* Subtle editorial framing */}
          <div className="absolute -inset-4 border border-primary/20 pointer-events-none" />
          <div className="absolute inset-0 bg-secondary" />
        </motion.div>
      </div>
    </section>
  );
}
