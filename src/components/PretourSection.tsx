import type { Component } from "solid-js";

const PretourSection: Component = () => {
  const activities = [
    {
      title: "Vatnshellir lava cave",
      description: "Explore ancient lava caves",
    },
    {
      title: "ATV Adventure",
      description: "Ride to Snæfellsjökull glacier",
    },
    {
      title: "Scenic Journey",
      description: "Experience the Snæfellsnes Peninsula",
    },
  ];

  return (
    <section
      id="pretour"
      class="relative min-h-screen py-10 md:py-40 px-6 bg-cover bg-center"
      style={{
        "background-image": "url('/assets/snaefell.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div class="absolute inset-0 bg-gradient-to-br from-ink-black/75 via-blue/70 to-gray-slate/80"></div>

      {/* Content */}
      <div class="relative max-w-6xl mx-auto z-10">
        <div class="flex flex-col items-center mb-12 gap-4">
          <div class="inline-block bg-gold/20 border-2 border-gold px-6 py-2 rounded-full mb-2">
            <span class="text-gold font-bold text-lg tracking-wide">
              PRETOUR
            </span>
          </div>
          <h2
            class="text-5xl md:text-6xl font-bold text-white text-center"
            style={{ "font-family": "var(--font-marcellus)" }}
          >
            Snæfellsnes Adventure
          </h2>
          <p class="text-white text-xl">June 10-11, 2026</p>
          <p class="text-white text-3xl font-bold">Price: 389€</p>
        </div>

        <div class="bg-gradient-to-br from-white/95 to-white/90 backdrop-blur rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-blue mb-12">
          <div class="max-w-4xl mx-auto">
            <h3
              class="text-3xl md:text-4xl font-bold text-blue mb-6 text-center"
              style={{ "font-family": "var(--font-marcellus)" }}
            >
              An Epic Day in Snæfellsnes
            </h3>
            <div class="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
              <p>
                Join us for an unforgettable adventure to the stunning{" "}
                <span class="font-bold text-blue">Snæfellsnes Peninsula</span>.
              </p>
              <p>
                Your day will include thrilling exploration of ancient{" "}
                <span class="font-bold text-blue">lava caves</span> at
                Vatnshellir—the legendary setting that inspired Jules Verne's
                "Journey to the Center of the Earth." Then, experience an
                exhilarating{" "}
                <span class="font-bold text-blue">ATV adventure</span> to the
                magnificent Snæfellsjökull glacier, the mystical ice cap that
                has captivated explorers and storytellers for centuries.
              </p>
            </div>

            {/* Activity Highlights */}
            <div class="grid md:grid-cols-3 gap-6 mt-10 pt-8 border-t-2 border-blue/20">
              {activities.map((activity) => (
                <div class="text-center">
                  <h4 class="text-xl font-bold text-blue mb-2">
                    {activity.title}
                  </h4>
                  <p class="text-gray-600">{activity.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div class="relative rounded-xl overflow-hidden shadow-2xl group">
            <img
              src="/assets/cave.webp"
              alt="Cave exploring in Vatnshellir"
              class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink-black/80 to-transparent p-4">
              <p class="text-white font-bold text-lg">Vatnshellir</p>
            </div>
          </div>
          <div class="relative rounded-xl overflow-hidden shadow-2xl group">
            <img
              src="/assets/atv.webp"
              alt="ATV adventure to Snæfellsjökull"
              class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink-black/80 to-transparent p-4">
              <p class="text-white font-bold text-lg">ATV Adventure</p>
            </div>
          </div>
          <div class="relative rounded-xl overflow-hidden shadow-2xl group">
            <img
              src="/assets/glacier.webp"
              alt="Snæfellsjökull glacier"
              class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink-black/80 to-transparent p-4">
              <p class="text-white font-bold text-lg">Snæfellsjökull</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PretourSection;
