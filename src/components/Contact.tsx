import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="gradient-text">Contact Me</span>
        </h2>

        <div className="max-w-2xl mx-auto">
          <div className="glass-card rounded-2xl p-8 animate-scale-in">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Let's Connect!</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed max-w-[60ch] text-left md:text-justify hyphens-auto">
              Feel free to reach out for any inquiries or opportunities. I'm always open to
              discussing potential collaborations or answering questions about my OJT experience.
            </p>

            <div className="space-y-5 mb-8">
              <a
                href="mailto:laurencianamuel@gmail.com"
                className="flex items-center gap-4 w-full text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span className="break-all">laurencianamuel@gmail.com</span>
              </a>

              <a
                href="tel:+639055945827"
                className="flex items-center gap-4 w-full text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span className="break-all">+63 905 594 5827</span>
              </a>

              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span className="break-all">Manila, Philippines</span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 w-full">
              <div className="w-full sm:max-w-md flex flex-col sm:flex-row items-center sm:justify-between gap-4">
                <a
                  href="https://www.linkedin.com/in/lhemuel-laurenciana-857a48350/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 bg-secondary hover:bg-primary/20 rounded-lg text-foreground transition-all duration-200 hover:scale-105 whitespace-nowrap"
                >
                  <Linkedin className="w-5 h-5 text-primary" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/laurencianamuel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 bg-secondary hover:bg-primary/20 rounded-lg text-foreground transition-all duration-200 hover:scale-105 whitespace-nowrap"
                >
                  <Github className="w-5 h-5 text-primary" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
