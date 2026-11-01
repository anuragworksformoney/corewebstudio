import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeroProps {
  onOpenProjectModal: () => void;
}

const ROTATING_PHRASES = [
  'WEBSITES',
  'AUTOMATION',
  'SEO',
  'SYSTEMS',
];

export default function Hero({ onOpenProjectModal }: HeroProps) {
  const [index, setIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);

    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', listener);
    return () => mq.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROTATING_PHRASES.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full lg:h-[calc(100vh-4.5rem)] lg:min-h-[520px] lg:max-h-[850px] flex flex-col justify-start lg:justify-between pt-2 pb-3.5 sm:pt-5 sm:pb-8 lg:py-5 xl:py-6 overflow-x-clip lg:overflow-hidden touch-pan-y">
      <div className="relative max-w-6xl mx-auto px-3.5 sm:px-8 lg:px-12 w-full flex flex-col lg:h-full lg:flex-1 lg:justify-between">
        {/* Top Desktop Floating Stickers */}
        <div className="hidden lg:flex items-center justify-between mb-2 xl:mb-3 select-none shrink-0">
          {/* Sticker 1: WEB DESIGN */}
          <div
            className="animate-sticker-1 inline-flex items-center px-3.5 py-1 rounded-full bg-[#111111] text-white text-xs font-black uppercase tracking-wider border-2 border-[#111111] shadow-[2.5px_2.5px_0px_#0047FF]"
          >
            WEB DESIGN
          </div>

          {/* Sticker 2: WHATSAPP AUTOMATION */}
          <div
            className="animate-sticker-2 inline-flex items-center px-3.5 py-1 rounded-full bg-[#0047FF] text-white text-xs font-black uppercase tracking-wider border-2 border-[#111111] shadow-[2.5px_2.5px_0px_#111111]"
          >
            WHATSAPP AUTOMATION
          </div>

          {/* Sticker 3: SEO & LEADS */}
          <div
            className="animate-sticker-3 inline-flex items-center px-3.5 py-1 rounded-full bg-white text-[#111111] text-xs font-black uppercase tracking-wider border-2 border-[#111111] shadow-[2.5px_2.5px_0px_#0047FF]"
          >
            SEO & LEADS
          </div>
        </div>

        {/* Top Mobile Floating Stickers (Reference: AI JUGAAD tilted badges framing top of hero) */}
        <div className="flex lg:hidden items-center justify-between pt-1 mb-2 select-none shrink-0 pointer-events-none">
          <div className="-rotate-3 inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#111111] text-white text-[9px] min-[360px]:text-[10px] font-black uppercase tracking-wider border-2 border-[#111111] shadow-[2px_2px_0px_#0047FF]">
            WEB DESIGN
          </div>
          <div className="rotate-3 inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#0047FF] text-white text-[9px] min-[360px]:text-[10px] font-black uppercase tracking-wider border-2 border-[#111111] shadow-[2px_2px_0px_#111111]">
            AUTOMATION
          </div>
        </div>

        {/* Center: Large Editorial Headline */}
        <div className="py-0.5 sm:py-2 lg:my-auto">
          <div className="flex items-center gap-2 mb-1.5 sm:mb-3 select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0047FF] shrink-0" />
            <span className="font-mono text-[9px] min-[360px]:text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#666666]">
              CORE / SYSTEM / DIGITAL
            </span>
          </div>

          <h1 className="font-black uppercase text-[#111111] leading-[0.93] tracking-tighter text-[26px] min-[360px]:text-[32px] min-[390px]:text-[36px] xs:text-[42px] sm:text-[52px] md:text-[64px] lg:text-[75px] xl:text-[86px] 2xl:text-[97px] select-none break-normal">
            <span className="block">WE BUILD</span>
            {/* Dynamic Rotating Word: strictly fixed-height line container to prevent any layout shift */}
            <span className="block text-[#0047FF] h-[1.12em] relative overflow-hidden select-none pointer-events-none touch-pan-y">
              <AnimatePresence mode="wait">
                <motion.span
                  key={ROTATING_PHRASES[index]}
                  initial={{
                    opacity: 0,
                    y: prefersReducedMotion ? 0 : 16,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: prefersReducedMotion ? 0 : -16,
                  }}
                  transition={{
                    duration: prefersReducedMotion ? 0 : 0.32,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute inset-0 flex items-center whitespace-nowrap"
                >
                  {ROTATING_PHRASES[index]}
                </motion.span>
              </AnimatePresence>
            </span>
            <span className="block">FOR REAL BUSINESSES</span>
          </h1>
        </div>

        {/* Bottom: Copy, Side-by-Side CTAs, & Circular Stamp */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-2.5 sm:gap-4 lg:gap-6 pt-2.5 sm:pt-4 border-t-2 border-[#111111]/10 shrink-0 mt-1.5 sm:mt-4 lg:mt-0">
          <div className="max-w-xl w-full">
            {/* Supporting Copy */}
            <p className="text-xs min-[360px]:text-[13px] sm:text-base lg:text-lg text-[#222222] font-semibold leading-relaxed mb-2.5 sm:mb-4">
              Digital solutions for real businesses.
              <br className="hidden xs:inline" />
              <span className="text-[#555555] block xs:inline xs:ml-1">
                Built to look good, work smarter and help you grow.
              </span>
            </p>

            {/* Side-by-Side Action Buttons (reference: AI JUGAAD START A PROJECT & SEE OUR WORK side-by-side) */}
            <div className="flex flex-row items-center gap-2 sm:gap-3.5 w-full max-w-md sm:max-w-none">
              <button
                type="button"
                onClick={onOpenProjectModal}
                className="flex-1 min-w-0 sm:w-auto inline-flex items-center justify-center gap-1 sm:gap-2 text-[10px] min-[360px]:text-xs sm:text-sm font-black uppercase tracking-wider h-10 min-[360px]:h-11 sm:h-12 px-2.5 min-[360px]:px-4 sm:px-7 rounded-full bg-[#111111] text-white border-2 border-[#111111] shadow-[2.5px_2.5px_0px_#0047FF] sm:shadow-[3px_3px_0px_#0047FF] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all cursor-pointer shrink-0"
              >
                <span className="truncate">START A PROJECT</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0 hidden min-[360px]:inline" />
              </button>

              <button
                type="button"
                onClick={scrollToWork}
                className="flex-1 min-w-0 sm:w-auto inline-flex items-center justify-center gap-1 sm:gap-2 text-[10px] min-[360px]:text-xs sm:text-sm font-black uppercase tracking-wider h-10 min-[360px]:h-11 sm:h-12 px-2.5 min-[360px]:px-4 sm:px-7 rounded-full bg-white text-[#111111] border-2 border-[#111111] shadow-[2.5px_2.5px_0px_#111111] sm:shadow-[3px_3px_0px_#111111] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all cursor-pointer shrink-0"
              >
                <span className="truncate">SEE OUR WORK</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0 hidden min-[360px]:inline" />
              </button>
            </div>

            {/* Mobile bottom microcopy & badge (reference: PSST - THE STICKERS ARE DRAGGABLE + AI BOTS) */}
            <div className="flex sm:hidden items-center justify-between mt-2 select-none">
              <span className="font-mono text-[9px] min-[360px]:text-[10px] uppercase font-bold tracking-wider text-[#666666]">
                PSST — BUILT FOR REAL RESULTS
              </span>
              <div className="rotate-2 inline-flex items-center px-2 py-0.5 rounded-full bg-white text-[#111111] text-[9px] font-black uppercase tracking-wider border-2 border-[#111111] shadow-[1.5px_1.5px_0px_#0047FF]">
                SEO & LEADS
              </div>
            </div>
          </div>

          {/* Supporting Circular Stamp (Desktop Only) */}
          <div className="hidden lg:flex items-center justify-center relative w-24 h-24 xl:w-28 xl:h-28 select-none shrink-0 self-end mb-0.5">
            <svg
              viewBox="0 0 120 120"
              className="w-full h-full animate-spin-slow"
              aria-hidden="true"
            >
              <path
                id="circlePathHero"
                d="M 60, 60 m -44, 0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
                fill="none"
              />
              <text className="text-[10px] font-black tracking-[0.24em] uppercase fill-[#111111]">
                <textPath href="#circlePathHero" startOffset="0%">
                  DESIGN • BUILD • CONNECT • GROW •
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 m-auto w-8 h-8 xl:w-9 xl:h-9 rounded-full bg-[#0047FF] text-white flex items-center justify-center font-black text-xs xl:text-sm shadow-[2px_2px_0px_#111111]">
              ✦
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
