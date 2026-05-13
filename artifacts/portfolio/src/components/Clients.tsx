import { motion } from "framer-motion";

export default function Clients() {
  const clients = ["LUMINARY", "NOVA CO.", "REVEL", "ATLAS BRANDS", "ZENITH"];

  return (
    <section className="py-20 border-y border-border bg-card overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center opacity-60">
          {clients.map((client, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="text-xl md:text-2xl font-serif tracking-[0.2em] text-foreground uppercase"
            >
              {client}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
