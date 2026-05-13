import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Kosi completely transformed our online presence. She doesn't just post content; she builds communities. Our engagement has never been higher.",
      author: "Joel or",
      company: "Founder, Jence",
    },
    {
      quote: "The strategic depth Kosi brings is unmatched. She translated our complex product into stories our audience actually wanted to hear and share.",
      author: "David Altar",
      company: "CMO, DenLabs",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-secondary text-foreground">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="relative"
            >
              <span className="absolute -top-12 -left-6 text-8xl font-serif text-primary/30 leading-none">
                "
              </span>
              <p className="text-xl md:text-2xl font-serif leading-relaxed mb-8 relative z-10">
                {item.quote}
              </p>
              <div>
                <p className="font-medium">{item.author}</p>
                <p className="text-sm text-foreground/70 uppercase tracking-wider mt-1">{item.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
