import type { Component } from "solid-js";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import PretourSection from "./components/PretourSection";
import ScheduleSection from "./components/ScheduleSection";
import RegistrationSection from "./components/RegistrationSection";
import FooterSection from "./components/FooterSection";

const App: Component = () => {
  return (
    <div class="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ScheduleSection />
      <PretourSection />
      <RegistrationSection />
      <FooterSection />
    </div>
  );
};

export default App;
