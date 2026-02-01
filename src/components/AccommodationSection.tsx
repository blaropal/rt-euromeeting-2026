import type { Component } from "solid-js";

const AccommodationSection: Component = () => {
  return (
    <section
      id="accommodation"
      class="bg-gradient-to-br from-white to-gray-100 py-10 md:py-40 px-6"
    >
      <div class="max-w-6xl mx-auto">
        <h2
          class="text-5xl md:text-6xl font-bold text-center mb-12 text-ink-black"
          style={{ "font-family": "var(--font-marcellus)" }}
        >
          Where to Stay
        </h2>

        <div class="grid md:grid-cols-2 gap-8 mb-12">
          {/* Main Information Card */}
          <div class="bg-white rounded-2xl shadow-2xl p-8 border-2 border-olive-green">
            <h3
              class="text-3xl font-bold text-reddish-brown mb-6"
              style={{ "font-family": "var(--font-marcellus)" }}
            >
              Where to Stay
            </h3>
            <div class="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                We have partnered with several hotels in the Reykjavík area to
                offer special rates for EuroMeeting attendees.
              </p>
              <p>
                Reykjanesbær and surrounding areas offer a variety of
                accommodation options to suit every budget and preference, from
                cozy guesthouses to modern hotels.
              </p>
              <div class="bg-olive-green/10 border-l-4 border-olive-green p-4 rounded">
                <p class="text-gray-slate font-semibold">
                  Accommodation recommendations and booking information will be
                  shared with registered participants closer to the event date.
                </p>
              </div>
            </div>
          </div>

          {/* Tips Card */}
          <div class="bg-white rounded-2xl shadow-2xl p-8 border-2 border-blue">
            <h3
              class="text-3xl font-bold text-blue mb-6"
              style={{ "font-family": "var(--font-marcellus)" }}
            >
              Booking Tips
            </h3>
            <ul class="space-y-4 text-lg text-gray-700">
              <li class="flex items-start gap-3">
                <svg
                  class="w-6 h-6 text-gold flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>
                  <strong>Book early</strong> - June is peak tourist season in
                  Iceland
                </span>
              </li>
              <li class="flex items-start gap-3">
                <svg
                  class="w-6 h-6 text-gold flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>
                  <strong>Consider location</strong> - Proximity to event venues
                  and public transport
                </span>
              </li>
              <li class="flex items-start gap-3">
                <svg
                  class="w-6 h-6 text-gold flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>
                  <strong>Check cancellation policies</strong> - Flexibility is
                  important
                </span>
              </li>
              <li class="flex items-start gap-3">
                <svg
                  class="w-6 h-6 text-gold flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>
                  <strong>Group bookings</strong> - Coordinate with fellow
                  attendees for better rates
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccommodationSection;
