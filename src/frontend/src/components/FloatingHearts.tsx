import { useMemo } from "react";

interface HeartConfig {
  id: number;
  left: string;
  size: number;
  duration: number;
  delay: number;
  emoji: string;
  opacity: number;
}

export default function FloatingHearts() {
  const hearts = useMemo<HeartConfig[]>(() => {
    const emojis = ["💖", "💕", "❤️", "💗", "💓", "✨", "🌸", "💝"];
    return Array.from({ length: 24 }, (_, i) => ({
      id: i,
      left: `${(i * 4.2 + Math.sin(i * 1.3) * 8) % 100}%`,
      size: 14 + (i % 5) * 6,
      duration: 8 + (i % 7) * 2,
      delay: (i * 1.1) % 12,
      emoji: emojis[i % emojis.length],
      opacity: 0.4 + (i % 4) * 0.15,
    }));
  }, []);

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="heart-float"
          style={{
            left: heart.left,
            bottom: "-60px",
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            opacity: heart.opacity,
          }}
        >
          {heart.emoji}
        </span>
      ))}
    </div>
  );
}
