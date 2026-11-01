const MARQUEE_ITEMS = [
  'WEBSITE DESIGN',
  'WHATSAPP AUTOMATION',
  'SEO',
  'LEAD GENERATION',
  'BUSINESS AUTOMATION',
  'WEB DEVELOPMENT',
];

export default function Marquee() {
  return (
    <div className="w-full overflow-hidden select-none bg-[#0047FF] text-white border-y-2 border-[#111111] py-2.5 sm:py-5 my-3 sm:my-10 touch-pan-y">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* Render 4 copies for continuous seamless loop with zero blank gaps */}
        {[0, 1, 2, 3].map((copyIndex) => (
          <div
            key={copyIndex}
            className="flex items-center shrink-0 text-xs sm:text-xl md:text-2xl font-black uppercase tracking-wider"
          >
            {MARQUEE_ITEMS.map((item, idx) => (
              <span key={`${copyIndex}-${idx}`} className="flex items-center">
                <span className="px-3 sm:px-8 md:px-10">{item}</span>
                <span className="text-white/85 text-[10px] sm:text-base md:text-lg select-none">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
