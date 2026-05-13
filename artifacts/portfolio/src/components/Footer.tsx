export default function Footer() {
  return (
    <footer className="py-8 bg-card border-t border-border text-sm text-muted-foreground">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-serif italic text-base text-foreground">Kosi Moronu.</div>
        
        <div className="flex gap-6 uppercase tracking-widest text-xs">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="#work" className="hover:text-foreground transition-colors">Work</a>
        </div>

        <div>
          &copy; {new Date().getFullYear()} Kosi Moronu. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
