import { useRef, useState } from 'react';

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

type Work = {
  title: string;
  description: string;
  details: string;
  image: string;
  video?: string | null;
  link?: string;
};

const works: Work[] = [
  {
    title: 'PageIT Website Project',
    description: 'Front-end web system project developed for an academic course.',
    details:
      'PageIT is a front-end web system project that I designed and developed as part of my Web System course using HTML, CSS, and basic JavaScript. I focused on creating a structured layout, responsive design, and user-friendly interface. This project helped me strengthen my understanding of core web development concepts such as page structure, styling, and basic interactivity.',
    image: asset('pageit.jpg'),
    video: asset('website-pageit.mp4'),
    link: 'https://laurencianamuel.github.io/page-it/index.html',
  },
  {
    title: 'TuneTwist Project',
    description: 'Music player application development project.',
    details:
      'TuneTwist is a music player web application that I fully designed and developed. I implemented the user interface, audio playback functionality, and responsive layout, ensuring a smooth and user-friendly experience.',
    image: asset('tunetwist.jpg'),
    video: asset('website-tunetwist.mp4'),
  },
  {
    title: 'Game Dev | 2D Asset Designer',
    description: '2D game asset design project.',
    details:
      'In this project, I created 2D pixel-art assets using Aseprite, including characters, environment objects, and game elements. I focused on maintaining visual consistency, proper scaling, and animation readiness.',
    image: asset('gdev.png'),
    video: asset('website-taptapgodelivery.mp4'),
    link: 'https://drive.google.com/file/d/1v8iFoMuzvnSplu8YRHabAnjbmsIRqmUR/view',
  },
];

const Works = () => {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  const [expandedMedia, setExpandedMedia] = useState<Work | null>(null);
  const requestFrame = useRef<number | null>(null);

  const applyCardTransform = (
    cardInner: HTMLDivElement,
    x: number,
    y: number,
    scale = 1,
  ) => {
    const transformValue = `perspective(800px) scale(${scale}) rotateX(${y}deg) rotateY(${x}deg)`;
    cardInner.dataset.transform = transformValue;

    if (requestFrame.current === null) {
      requestFrame.current = window.requestAnimationFrame(() => {
        if (cardInner.dataset.transform) {
          cardInner.style.transform = cardInner.dataset.transform;
        }
        requestFrame.current = null;
      });
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const cardInner = e.currentTarget.querySelector<HTMLDivElement>('.works-card-inner');
    if (!cardInner) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    const scale = cardInner.dataset.hover === 'true' ? 1.05 : 1;

    applyCardTransform(cardInner, x, y, scale);
  };

  const handlePointerEnter = (e: React.PointerEvent<HTMLDivElement>) => {
    const cardInner = e.currentTarget.querySelector<HTMLDivElement>('.works-card-inner');
    if (!cardInner) return;
    cardInner.dataset.hover = 'true';
    applyCardTransform(cardInner, 0, 0, 1.05);
  };

  const handlePointerLeave = (e: React.PointerEvent<HTMLDivElement>) => {
    const cardInner = e.currentTarget.querySelector<HTMLDivElement>('.works-card-inner');
    if (!cardInner) return;
    cardInner.dataset.hover = 'false';
    applyCardTransform(cardInner, 0, 0, 1);
  };

  return (
    <section id="projects" className="py-16 relative">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="gradient-text">Sample Projects</span>
        </h2>

        {/* Works Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {works.map((work, index) => (
            <div
              key={index}
              onClick={() => setSelectedWork(work)}
              onPointerEnter={handlePointerEnter}
              onPointerMove={handlePointerMove}
              onPointerLeave={handlePointerLeave}
              className="cursor-pointer border border-transparent bg-secondary/50 rounded-xl overflow-hidden transition-all duration-200 ease-out hover:scale-105 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/30 animate-slide-up"
            >
              <div
                className="works-card-inner transition-transform duration-300"
                style={{
                  transform: 'perspective(800px) rotateX(0deg) rotateY(0deg)',
                  willChange: 'transform',
                }}
              >
                  <div className="aspect-video overflow-hidden bg-black">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-foreground mb-1">
                      {work.title}
                    </h4>
                    <p className="text-sm text-muted-foreground max-w-[60ch] text-left md:text-justify hyphens-auto">
                      {work.description}
                    </p>
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedWork && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="glass-card rounded-2xl max-w-2xl w-full p-6 relative animate-scale-in mx-4">
            {/* Close */}
            <button
              onClick={() => {
                setSelectedWork(null);
                setExpandedMedia(null);
              }}
              className="absolute top-4 right-4 text-white hover:text-foreground transition-colors bg-black/40 hover:bg-black/60 rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold z-20"
              title="Close (Esc)"
            >
              ✕
            </button>

            {/* Media */}
            <div
              onClick={() => setExpandedMedia(selectedWork)}
              className="cursor-pointer rounded-xl overflow-hidden mb-4 bg-black hover:opacity-90 transition-opacity"
            >
              {selectedWork.video ? (
                <video
                  src={selectedWork.video}
                  controls
                  className="w-full max-h-[60vh] object-contain"
                />
              ) : (
                <img
                  src={selectedWork.image}
                  alt={selectedWork.title}
                  className="w-full h-56 object-cover"
                />
              )}
            </div>

            {/* Text */}
            <h4 className="text-xl font-semibold text-foreground mb-1">
              {selectedWork.title}
            </h4>
            <p className="text-sm text-muted-foreground mb-3 max-w-[60ch] text-left md:text-justify hyphens-auto">
              {selectedWork.description}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-[60ch] text-left md:text-justify hyphens-auto">
              {selectedWork.details}
            </p>

            {/* 🔗 Project Link */}
            {selectedWork.link && (
              <a
                href={selectedWork.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-medium text-primary hover:underline"
              >
                🔗 Try this project
              </a>
            )}
          </div>
        </div>
      )}

      {/* EXPANDED MEDIA MODAL */}
      {expandedMedia && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-sm px-4 py-8">
          <div className="relative w-full max-w-5xl">
            <button
              onClick={() => setExpandedMedia(null)}
              className="absolute top-4 right-4 z-10 rounded-full bg-white/20 px-3 py-1 text-sm text-white transition hover:bg-white/30"
            >
              ✕
            </button>
            {expandedMedia.video ? (
              <video
                src={expandedMedia.video}
                controls
                className="w-full max-h-[85vh] object-contain"
              />
            ) : (
              <img
                src={expandedMedia.image}
                alt={expandedMedia.title}
                className="w-full max-h-[85vh] object-contain"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Works;
