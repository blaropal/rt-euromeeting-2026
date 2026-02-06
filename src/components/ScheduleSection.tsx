import type { Component } from "solid-js";
import BlueLagoonImage from "../assets/bluelagoon.webp";
import GrindavikImage from "../assets/grindavik.jpg";
import GunnuhverImage from "../assets/gunnuhver.jpg";
import VitiImage from "../assets/gardskagaviti.jpg";

const ScheduleSection: Component = () => {
  return (
    <section
      id="schedule"
      class="min-h-screen bg-gradient-to-br from-gray-slate to-ink-black py-10 md:py-40 px-6"
    >
      <div class="max-w-6xl mx-auto">
        <div class="flex flex-col items-center mb-16 gap-4">
          <h2
            class="text-5xl md:text-6xl font-bold text-white text-center"
            style={{ "font-family": "var(--font-marcellus)" }}
          >
            Main Event
          </h2>
          <p class="text-white text-xl">June 11-13, 2026</p>
          <p class="text-white text-3xl font-bold">Price: 429€ (early bird )</p>
        </div>

        <div class="space-y-12">
          <div class="bg-white/95 backdrop-blur rounded-2xl shadow-2xl p-8 border-2 border-olive-green">
            <div class="mb-6">
              <h3
                class="text-3xl font-bold text-reddish-brown mb-2"
                style={{ "font-family": "var(--font-marcellus)" }}
              >
                Thursday, June 11th, 2026
              </h3>
            </div>
            <div class="border-l-4 border-gold pl-6">
              <h4 class="text-2xl font-bold text-gray-slate mb-3">
                Welcome Party
              </h4>
              <p class="text-gray-700 text-lg mb-3">
                Kick off the EuroMeeting with a warm Icelandic welcome with
                music, food, drinks and most importantly of all, great company.
              </p>
              <div class="flex flex-wrap gap-3">
                <span class="inline-flex items-center gap-2 bg-olive-green/20 text-gray-slate px-4 py-2 rounded-full border border-olive-green/40">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span class="font-semibold">7:00 PM</span>
                </span>
                <span class="inline-flex items-center gap-2 bg-reddish-brown/20 text-gray-slate px-4 py-2 rounded-full border border-reddish-brown/40">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span class="font-semibold">Keflavík</span>
                </span>
              </div>
            </div>
          </div>

          <div class="bg-white/95 backdrop-blur rounded-2xl shadow-2xl p-8 border-2 border-olive-green">
            <div class="mb-6">
              <h3
                class="text-3xl font-bold text-reddish-brown mb-2"
                style={{ "font-family": "var(--font-marcellus)" }}
              >
                Friday, June 12th, 2026
              </h3>
            </div>
            <div class="space-y-6">
              <div class="border-l-4 border-gold pl-6">
                <h4 class="text-2xl font-bold text-gray-slate mb-2">
                  Day Trip: Grindavík & Blue Lagoon
                </h4>
                <p class="text-gray-700 text-lg mb-3">
                  Experience the world-famous Blue Lagoon geothermal spa and
                  explore the town of Grindavík, which has been greatly affected
                  by the recent volcanic activity in the region. Bring your
                  swimsuit!
                </p>
                <div class="grid md:grid-cols-2 gap-6 mb-6">
                  <img
                    src={BlueLagoonImage}
                    alt="Blue Lagoon"
                    class="w-full h-50 object-cover rounded-lg"
                  />
                  <img
                    src={GrindavikImage}
                    alt="Grindavík"
                    class="w-full h-50 object-cover rounded-lg"
                  />
                </div>
                <div class="flex flex-wrap gap-3">
                  <span class="inline-flex items-center gap-2 bg-olive-green/20 text-gray-slate px-4 py-2 rounded-full border border-olive-green/40">
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span class="font-semibold">9:00 AM - 5:00 PM</span>
                  </span>
                  <span class="inline-flex items-center gap-2 bg-reddish-brown/20 text-gray-slate px-4 py-2 rounded-full border border-reddish-brown/40">
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span class="font-semibold">Depart from Keflavík</span>
                  </span>
                </div>
              </div>
              <div class="border-l-4 border-reddish-brown pl-6">
                <h4 class="text-2xl font-bold text-gray-slate mb-2">
                  Nations Night
                </h4>
                <p class="text-gray-700 text-lg mb-3">
                  Celebrate the diversity of cultures with an international
                  evening of traditions and festivities.
                </p>
                <div class="flex flex-wrap gap-3">
                  <span class="inline-flex items-center gap-2 bg-olive-green/20 text-gray-slate px-4 py-2 rounded-full border border-olive-green/40">
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span class="font-semibold">7:00 PM - 11:00 PM</span>
                  </span>
                  <span class="inline-flex items-center gap-2 bg-reddish-brown/20 text-gray-slate px-4 py-2 rounded-full border border-reddish-brown/40">
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span class="font-semibold">Keflavík</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white/95 backdrop-blur rounded-2xl shadow-2xl p-8 border-2 border-olive-green">
            <div class="mb-6">
              <h3
                class="text-3xl font-bold text-reddish-brown mb-2"
                style={{ "font-family": "var(--font-marcellus)" }}
              >
                Saturday, June 13th, 2026
              </h3>
            </div>
            <div class="space-y-6">
              <div class="border-l-4 border-gold pl-6">
                <h4 class="text-2xl font-bold text-gray-slate mb-2">
                  Day Trip: Reykjanes Peninsula Tour
                </h4>
                <p class="text-gray-700 text-lg mb-3">
                  Discover the most interesting landmarks of Reykjanes, from
                  dramatic coastlines to geothermal wonders.
                </p>
                <div class="grid md:grid-cols-2 gap-6 mb-6">
                  <img
                    src={GunnuhverImage}
                    alt="Gunnuhver"
                    class="w-full h-50 object-cover rounded-lg"
                  />
                  <img
                    src={VitiImage}
                    alt="Garðskagaviti"
                    class="w-full h-50 object-cover object-[15%_30%] rounded-lg"
                  />
                </div>
                <div class="flex flex-wrap gap-3">
                  <span class="inline-flex items-center gap-2 bg-olive-green/20 text-gray-slate px-4 py-2 rounded-full border border-olive-green/40">
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span class="font-semibold">9:00 AM - 4:00 PM</span>
                  </span>
                  <span class="inline-flex items-center gap-2 bg-reddish-brown/20 text-gray-slate px-4 py-2 rounded-full border border-reddish-brown/40">
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span class="font-semibold">Depart from Keflavík</span>
                  </span>
                </div>
              </div>
              <div class="border-l-4 border-reddish-brown pl-6">
                <h4 class="text-2xl font-bold text-gray-slate mb-2">
                  Gala Dinner & Party
                </h4>
                <p class="text-gray-700 text-lg mb-3">
                  The grand finale! An exquisite dinner followed by a
                  celebration to remember.
                </p>
                <div class="flex flex-wrap gap-3">
                  <span class="inline-flex items-center gap-2 bg-olive-green/20 text-gray-slate px-4 py-2 rounded-full border border-olive-green/40">
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span class="font-semibold">6:00 PM - Late</span>
                  </span>
                  <span class="inline-flex items-center gap-2 bg-reddish-brown/20 text-gray-slate px-4 py-2 rounded-full border border-reddish-brown/40">
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span class="font-semibold">Keflavík</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
