import CelebrationSection from "./components/CelebrationSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import MemoriesSection from "./components/MemoriesSection";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main>
        <HeroSection />
        <MemoriesSection />
        <CelebrationSection />
      </main>
      <Footer />
    </div>
  );
}
