import HeroSection from "../components/home/HeroSection";
import Stack from "../components/home/Stack";
import ProjectsSection from "../components/home/ProjectsSection";
import CallToActionSection from "../components/home/CallToActionSection";

function Home() {
  return (
    <div>
      {/* Conteúdo da sua home aqui */}
      <HeroSection />
      <Stack />
      <ProjectsSection />
      <CallToActionSection />
    </div>
  );
}

export default Home;