import type { Component } from "solid-js";

const AboutSection: Component = () => {
  const features = [
    {
      icon: (
        <svg
          class="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
          />
        </svg>
      ),
      title: "Volcanic Activity",
      description: "Dynamic volcanic landscapes",
    },
    {
      icon: (
        <svg
          class="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
      ),
      title: "Geothermal Wonders",
      description: "Natural hot springs & spas",
    },
    {
      icon: (
        <svg
          class="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      title: "Midnight Sun",
      description: "Nearly 24 hours of daylight in June",
    },
    {
      icon: (
        <svg
          class="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
      ),
      title: "Stunning Landscapes",
      description: "Dramatic coastal scenery",
    },
  ];

  return (
    <section
      id="about"
      class="flex items-center justify-center py-10 md:py-40 px-6 bg-ink-black"
    >
      <div class="max-w-7xl mx-auto py-10 px-8 md:px-20">
        <h2 class="text-4xl md:text-6xl font-bold text-center mb-16 font-marcellus text-white">
          Welcome to Iceland
        </h2>

        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <div class="space-y-6 text-lg md:text-xl leading-relaxed text-white">
            <p>
              Reykjanesbær sits on the Reykjanes Peninsula, a dramatic stretch
              of coastline and volcanic terrain shaped by geothermal energy and
              the North Atlantic. Expect crisp sea air, striking landscapes, and{" "}
              <span class="text-olive-green">nearly 24 hours of daylight</span>{" "}
              in June's midnight sun.
            </p>

            <p>
              With easy international access via{" "}
              <span class="text-gold">Keflavík International Airport</span>,
              great local hospitality, and a truly distinctive setting, this
              year's EuroMeeting event will bring a warm Icelandic
              welcome—perfect for tabling.
            </p>

            <p>
              So, what are you waiting for? Join us in June 2026 for an
              unforgettable experience in Iceland!
            </p>
          </div>

          <div class="relative rounded-lg overflow-hidden shadow-2xl">
            <img
              src="/src/assets/Bergid.jpg"
              alt="Icelandic landscape"
              class="w-full h-full object-cover"
            />
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t-2 border-gold/30">
          {features.map((feature) => (
            <div class="flex flex-col items-center text-center space-y-3">
              <div class="text-gold">{feature.icon}</div>
              <h3 class="text-white font-bold text-lg font-marcellus">
                {feature.title}
              </h3>
              <p class="text-white/70 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
