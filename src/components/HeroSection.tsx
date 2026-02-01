import type { Component } from "solid-js";

const HeroSection: Component = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      class="relative h-screen w-full flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        "background-image": "url(/assets/Flag_min.png)",
      }}
    >
      {/* Overlay for better text readability */}
      <div class="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div class="relative z-10 text-left text-white px-6 max-w-6xl">
        <h1
          class="text-5xl md:text-7xl font-bold mb-6 uppercase"
          style={{ "font-family": "Marcellus, serif" }}
        >
          EuroMeeting 10 2026
        </h1>

        <div class="text-xl md:text-2xl mb-4">
          <p class="mb-2">Get ready for an unforgettable experience!</p>
        </div>

        <div class="text-lg md:text-xl mb-12 space-y-2">
          <p>📍 Location: Reykjanes, Iceland</p>
          <p>📅 Date: 10-14 June 2026</p>
        </div>

        {/* Navigation Buttons */}
        <div class="flex flex-wrap gap-4 justify-left">
          <button
            onClick={() => scrollToSection("registration")}
            class="px-8 py-3 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 bg-blue text-white"
          >
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
