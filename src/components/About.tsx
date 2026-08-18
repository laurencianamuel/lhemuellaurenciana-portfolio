import { Download, Eye, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RESUME_URL = `${import.meta.env.BASE_URL}Laurenciana-Lhemuel-Resume.pdf`;

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="gradient-text">About Me</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Image */}
          <div className="flex justify-center animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-full scale-75" />
              <div className="glass-card w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden relative border-2 border-primary/30 glow-box">
                <img
  src={`${import.meta.env.BASE_URL}profile.jpg`}
  alt="My Profile Picture"
  className="w-full h-full object-cover"
/>

              </div>
            </div>
          </div>

          {/* About Text */}
          <div className="space-y-6 animate-slide-in-right">
            <p className="text-muted-foreground leading-relaxed text-lg max-w-[60ch] text-left md:text-justify hyphens-auto">
 I am a recent graduate in Information Technology with a strong interest in IT support,
 technical assistance, and troubleshooting. I have hands-on experience resolving hardware,
 software, and network issues during academic projects and On-the-Job Training,
 and I am eager to apply these skills in an entry-level IT support role.
</p>
            <p className="text-muted-foreground leading-relaxed text-lg max-w-[60ch] text-left md:text-justify hyphens-auto">
  I enjoy learning new technologies, helping people with technical problems, and gaining
  practical experience. In my free time, I watch tutorials on IT support, troubleshooting,
  and system tools, and I keep improving my problem-solving skills for real-world work.
</p>

            <div className="glass-card rounded-xl p-6 mt-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Resume</h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <Button
                  variant="outline"
                  className="group w-full sm:w-auto"
                  onClick={() => {
                    window.location.href = RESUME_URL;
                  }}
                >
                  <Eye className="w-4 h-4 group-hover:animate-bounce" />
                  View Resume
                </Button>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <Button asChild variant="hero" className="group w-full sm:w-auto">
                    <a href={RESUME_URL} download="Laurenciana-Lhemuel-Resume.pdf" target="_self">
                      <Download className="w-4 h-4 group-hover:animate-bounce" />
                      Download Resume
                    </a>
                  </Button>
                  <span className="text-sm text-muted-foreground hidden sm:inline-block">
                    (PDF, 90.4KB)
                  </span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mt-3 sm:hidden">(PDF, 90.4KB)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
