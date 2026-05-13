import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function About() {
  const skills = [
    "Content Strategy",
    "Brand Voice",
    "Analytics",
    "Community Management",
    "Paid Ads",
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="aspect-square bg-primary w-full max-w-md mx-auto"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-8 text-foreground">
            Hi, I'm Maya Chen. I help brands find their voice and build communities that actually care.
          </h2>
          
          <div className="flex items-center gap-2 text-muted-foreground mb-10 text-sm uppercase tracking-widest">
            <MapPin size={16} />
            <span>San Francisco, CA</span>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-widest text-foreground mb-4">Core Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 border border-border text-sm text-foreground rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
