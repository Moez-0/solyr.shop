import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import LookbookGrid from "@/components/LookbookGrid";
import UnisexGrid from "@/components/UnisexGrid";
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full overflow-hidden">
      <Hero />
      <Manifesto />
      <LookbookGrid />
      <UnisexGrid />
      <ComingSoon />
      <Footer />
    </main>
  );
}
