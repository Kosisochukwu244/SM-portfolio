import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Let's Work Together</h2>
          <p className="text-muted-foreground text-lg font-light max-w-xl mx-auto">
            Ready to elevate your brand's digital presence? Tell me a bit about your project.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          action="mailto:hello@mayachen.co"
          method="post"
          encType="text/plain"
          className="space-y-6 max-w-2xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm uppercase tracking-widest text-muted-foreground mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-primary transition-colors text-foreground"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm uppercase tracking-widest text-muted-foreground mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-primary transition-colors text-foreground"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm uppercase tracking-widest text-muted-foreground mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-primary transition-colors resize-none text-foreground"
            ></textarea>
          </div>
          <div className="pt-6 text-center">
            <button
              type="submit"
              className="inline-block bg-foreground text-background px-10 py-4 text-sm uppercase tracking-widest font-medium hover:bg-primary transition-colors"
            >
              Send Message
            </button>
          </div>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-24 text-center border-t border-border pt-12"
        >
          <a href="mailto:hello@mayachen.co" className="text-xl md:text-2xl font-serif hover:text-primary transition-colors">
            peterrexysmith@gmail.com
          </a>
          <div className="flex justify-center gap-6 mt-8">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Instagram size={24} strokeWidth={1.5} /></a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Linkedin size={24} strokeWidth={1.5} /></a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Twitter size={24} strokeWidth={1.5} /></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
