import { ChevronRight, Gift } from "lucide-react";
import { useState } from "react";
import FloatingHearts from "./FloatingHearts";

const giftMessages = [
  "You are the greatest adventure of my life. 💖",
  "Every day with you feels like a dream I never want to wake from. 🌙",
  "You make my heart feel like it's always your birthday. 🎁",
  "The world is so much brighter because you're in it. ✨",
  "Happy Birthday, my love. Thank you for being you. 🥂",
];

export default function HeroSection() {
  const [giftIndex, setGiftIndex] = useState(-1);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleGiftClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setGiftIndex((prev) => (prev + 1) % giftMessages.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.96 0.02 75) 0%, oklch(0.93 0.04 40) 40%, oklch(0.91 0.05 20) 100%)",
      }}
    >
      <FloatingHearts />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12" id="story">
          <p className="font-script text-gold text-2xl md:text-4xl mb-3 drop-shadow-sm">
            With all my heart...
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-maroon leading-tight font-bold drop-shadow-sm">
            To the Love
            <br />
            <em className="font-display italic text-4xl md:text-6xl lg:text-7xl font-normal">
              of My Life…
            </em>
          </h1>
          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-gold/60" />
            <span className="text-gold text-xl">❤️</span>
            <span className="h-px w-16 bg-gold/60" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          <div className="flex justify-center">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                transform: "rotate(-2deg)",
                border: "8px solid oklch(0.98 0.01 75)",
                boxShadow:
                  "0 20px 60px oklch(0.20 0.03 30 / 0.3), 0 4px 12px oklch(0.20 0.03 30 / 0.15)",
              }}
            >
              <img
                src="/assets/generated/hero-romantic.dim_600x700.jpg"
                alt="Us together"
                className="w-72 md:w-80 h-auto object-cover"
              />
              <div className="absolute top-3 right-3 bg-white/90 rounded-full w-10 h-10 flex items-center justify-center text-xl shadow">
                💖
              </div>
            </div>
          </div>
          <div className="relative">
            <div
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-xl"
              style={{
                border: "1px solid oklch(0.77 0.12 75 / 0.3)",
                boxShadow: "0 8px 32px oklch(0.42 0.10 10 / 0.1)",
              }}
            >
              <span
                className="font-display text-8xl text-maroon/15 leading-none absolute -top-3 left-6"
                aria-hidden="true"
              >
                “
              </span>
              <p className="font-body text-xl md:text-2xl leading-relaxed text-brown-soft mb-4 relative z-10">
                Happy Birthday to the person who makes every single day feel
                like the most magical day of my life.
              </p>
              <p className="font-body text-xl md:text-2xl leading-relaxed text-brown-soft mb-6">
                You are my morning sunshine, my late-night laughter, my safe
                harbor and my greatest adventure — all wrapped into one
                incredible soul.
              </p>
              <p className="font-script text-gold text-2xl md:text-3xl">
                I love you more than words can say. 💛
              </p>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-center gap-4" id="wishes">
          <button
            type="button"
            onClick={handleGiftClick}
            className="gift-btn-pulse flex items-center gap-3 px-8 py-4 rounded-full font-display font-semibold text-lg tracking-wide transition-all hover:scale-105 active:scale-95"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.82 0.14 75) 0%, oklch(0.72 0.11 60) 100%)",
              color: "oklch(0.20 0.03 30)",
              boxShadow: "0 4px 20px oklch(0.77 0.12 75 / 0.4)",
            }}
            data-ocid="hero.primary_button"
          >
            <Gift className="w-5 h-5" />
            {giftIndex === -1 ? "OPEN YOUR GIFT" : "REVEAL NEXT SURPRISE"}
            <ChevronRight className="w-4 h-4" />
          </button>
          <p className="font-body text-sm text-brown-soft italic">
            (Click again to reveal the next surprise!)
          </p>
          {giftIndex >= 0 && (
            <div
              key={giftIndex}
              className="reveal-card-enter mt-2 max-w-md w-full text-center px-8 py-6 rounded-2xl"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.42 0.10 10) 0%, oklch(0.35 0.08 10) 100%)",
                boxShadow: "0 8px 32px oklch(0.42 0.10 10 / 0.35)",
              }}
              data-ocid="hero.card"
            >
              <p className="font-script text-gold text-2xl md:text-3xl leading-relaxed">
                {giftMessages[giftIndex]}
              </p>
              <p className="font-body text-xs text-cream/60 mt-3 tracking-widest uppercase">
                Message {giftIndex + 1} of {giftMessages.length}
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
