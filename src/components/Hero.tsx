import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-16"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text */}
          <div className="animate-slide-in-left">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight w-full whitespace-normal break-words">
                <span className="block text-foreground">Hi, I'm</span>
                <span className="block gradient-text mt-2 break-words">Lhemuel Laurenciana</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                I am a recent Information Technology graduate with experience in troubleshooting computers,
                fixing technical issues, and helping people with tech problems. During my internship as an IT Services Intern,
                I assisted employees through chat and in-person support while improving my problem-solving and communication skills.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={() => handleScroll('#internship')}
                  className="w-full sm:w-auto"
                >
                  View My Internship
                </Button>
                <Button
                  variant="heroOutline"
                  size="lg"
                  onClick={() => handleScroll('#contact')}
                  className="w-full sm:w-auto"
                >
                  Contact Me
                </Button>
              </div>
            </div>
          </div>

          {/* Hero Visual - Code Card */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <div className="glass-card rounded-2xl p-6 relative animate-float">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <pre className="font-mono text-sm md:text-base max-w-full whitespace-pre-wrap break-words">
                  <code className="text-muted-foreground break-words">
                    <span className="text-primary">const</span>{' '}
                    <span className="text-foreground">candidate</span>{' '}
                    <span className="text-primary">=</span> {'{'}
                    {'\n'}
                    {'  '}
                    <span className="text-accent">name</span>:{' '}
                    <span className="text-green-400">'Lhemuel P. Laurenciana'</span>,
                    {'\n'}
                    {'  '}
                    <span className="text-accent">course</span>:{' '}
                    <span className="text-green-400">'Bachelor of Science in Information Technology'</span>,
                    {'\n'}
                    {'  '}
                    <span className="text-accent">status</span>:{' '}
                    <span className="text-green-400">'Open for Entry-Level'</span>,
                    {'\n'}
                    {'  '}
                    <span className="text-accent">availability</span>:{' '}
                    <span className="text-green-400">'Open to new opportunities'</span>
                    {'\n'}
                    {'}'};
                  </code>
                </pre>
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-2 h-4 bg-primary animate-pulse" />
                  <span className="text-muted-foreground text-sm">Available for new opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
