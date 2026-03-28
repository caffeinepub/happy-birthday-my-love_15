import { useEffect, useRef, useState } from "react";

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

interface ConfettiPiece {
  id: number;
  left: string;
  duration: number;
  delay: number;
  color: string;
  size: number;
  shape: string;
}

function getTimeUntilMidnight(): TimeLeft {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  const diff = midnight.getTime() - now.getTime();
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { hours, minutes, seconds };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

const confettiColors = [
  "oklch(0.42 0.10 10)",
  "oklch(0.77 0.12 75)",
  "oklch(0.65 0.15 350)",
  "oklch(0.70 0.15 30)",
  "oklch(0.80 0.10 80)",
];

const confettiPieces: ConfettiPiece[] = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left: `${(i * 3.4) % 100}%`,
  duration: 3 + (i % 4),
  delay: (i * 0.4) % 5,
  color: confettiColors[i % confettiColors.length],
  size: 6 + (i % 4) * 3,
  shape: i % 3 === 0 ? "50%" : i % 3 === 1 ? "0%" : "20%",
}));

export default function CelebrationSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeUntilMidnight);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft(getTimeUntilMidnight());
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const timeUnits = [
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section
      id="celebrate"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.93 0.03 20) 0%, oklch(0.91 0.04 10) 50%, oklch(0.93 0.03 40) 100%)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {confettiPieces.map((piece) => (
          <div
            key={piece.id}
            className="confetti-piece"
            style={{
              left: piece.left,
              width: `${piece.size}px`,
              height: `${piece.size}px`,
              backgroundColor: piece.color,
              borderRadius: piece.shape,
              animationDuration: `${piece.duration}s`,
              animationDelay: `${piece.delay}s`,
              opacity: 0.75,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="font-script text-gold text-2xl md:text-3xl mb-2">
          it’s your special day
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-maroon tracking-wide uppercase mb-4">
          Let’s Celebrate!
        </h2>
        <div className="flex items-center justify-center gap-3 mb-10">
          <span className="h-px w-12 bg-gold/50" />
          <span className="text-gold text-lg">❖</span>
          <span className="h-px w-12 bg-gold/50" />
        </div>

        <div className="flex justify-center mb-12">
          <div className="relative">
            <div className="flex justify-center gap-3 mb-1" aria-hidden="true">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex flex-col items-center">
                  <div
                    className="candle-flame w-4 h-5 rounded-full"
                    style={{
                      background:
                        "radial-gradient(ellipse at 50% 80%, oklch(0.95 0.18 80) 0%, oklch(0.85 0.2 55) 40%, oklch(0.70 0.22 35) 100%)",
                      animationDelay: `${i * 0.27}s`,
                      boxShadow: "0 0 8px oklch(0.85 0.2 55 / 0.8)",
                    }}
                  />
                  <div
                    className="w-1.5 h-6"
                    style={{ background: "oklch(0.60 0.04 50)" }}
                  />
                </div>
              ))}
            </div>
            <div
              className="text-8xl md:text-9xl leading-none"
              role="img"
              aria-label="Birthday cake"
            >
              🎂
            </div>
            <div
              className="absolute -top-4 -right-4 text-3xl animate-spin"
              style={{ animationDuration: "3s" }}
              aria-hidden="true"
            >
              ✨
            </div>
            <div
              className="absolute -top-2 -left-6 text-2xl animate-bounce"
              style={{ animationDelay: "0.5s" }}
              aria-hidden="true"
            >
              🌟
            </div>
          </div>
        </div>

        <div>
          <p className="font-display text-sm font-semibold text-maroon tracking-[0.25em] uppercase mb-6">
            Until the Big Celebration!
          </p>
          <div
            className="flex items-center justify-center gap-4 md:gap-8"
            data-ocid="celebrate.panel"
          >
            {timeUnits.map((unit, i) => (
              <div
                key={unit.label}
                className="flex items-center gap-4 md:gap-8"
              >
                <div className="flex flex-col items-center">
                  <div
                    className="w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center font-display text-3xl md:text-4xl font-bold text-primary-foreground shadow-lg"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.42 0.10 10) 0%, oklch(0.35 0.08 10) 100%)",
                      boxShadow: "0 4px 16px oklch(0.42 0.10 10 / 0.3)",
                    }}
                  >
                    {pad(unit.value)}
                  </div>
                  <p className="font-body text-xs text-brown-soft mt-2 tracking-widest uppercase">
                    {unit.label}
                  </p>
                </div>
                {i < 2 && (
                  <span
                    className="font-display text-3xl text-gold font-bold mb-4"
                    aria-hidden="true"
                  >
                    :
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 max-w-2xl mx-auto">
          <div
            className="rounded-2xl px-8 py-8 shadow-xl"
            style={{
              background: "oklch(0.98 0.01 75 / 0.9)",
              border: "1px solid oklch(0.77 0.12 75 / 0.4)",
            }}
          >
            <p className="font-script text-3xl md:text-4xl text-maroon mb-4">
              Happy Birthday, My Love!
            </p>
            <p className="font-body text-xl md:text-2xl leading-relaxed text-brown-soft">
              May this day be as extraordinary as you are. May the year ahead
              bring you joy, laughter, and all the beautiful things you deserve
              — because you deserve every single one.
            </p>
            <p className="font-script text-gold text-2xl mt-5">
              With all my love, always. 💛
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
