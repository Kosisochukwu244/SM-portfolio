import { motion } from "framer-motion";
import { PenTool, TrendingUp, BarChart3 } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Content Creation",
      description: "From scripts to carousels — content that stops the scroll and starts the conversation.",
      icon: PenTool,
    },
    {
      title: "Growth Strategy",
      description: "Data-informed playbooks that turn followers into fans and fans into customers.",
      icon: TrendingUp,
    },
    {
      title: "Analytics & Reporting",
      description: "Monthly reports that actually make sense. Insights you can act on.",
      icon: BarChart3,
    },
  ];

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
    <section id="services" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Services</h2>
          <p className="text-muted-foreground text-lg font-light">
            Strategic support tailored to your brand's unique goals.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group p-8 border border-border bg-background hover:border-primary/50 transition-colors duration-300 relative"
            >
              <div className="w-12 h-12 bg-secondary flex items-center justify-center rounded-full mb-8 text-foreground group-hover:scale-110 transition-transform duration-500">
                <service.icon size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
