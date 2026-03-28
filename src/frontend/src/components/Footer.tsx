import { Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const utm = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "birthday",
  );

  return (
    <footer className="bg-maroon py-8">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-3 text-center">
        <p className="font-script text-gold text-3xl">Made with Love ✨</p>
        <p className="font-body text-sm text-cream/60 tracking-wide">
          © {year}.{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${utm}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/70 hover:text-gold transition-colors underline underline-offset-2"
          >
            Built with love using caffeine.ai
          </a>
        </p>
        <div className="flex items-center gap-2 text-cream/40 text-xs">
          <Heart className="w-3 h-3 fill-current" />
          <span>Forever yours</span>
          <Heart className="w-3 h-3 fill-current" />
        </div>
      </div>
    </footer>
  );
}
