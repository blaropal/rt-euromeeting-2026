import type { Component } from "solid-js";
import NupanImage from "../assets/Nupan.jpg";
import KonvinImage from "../assets/konvin.webp";

const AccommodationSection: Component = () => {
  return (
    <section
      id="accommodation"
      class="bg-gradient-to-br from-white to-gray-100 py-10 md:py-40 px-6"
    >
      <div class="max-w-6xl mx-auto">
        <h2
          class="text-5xl md:text-6xl font-bold text-center mb-8 text-ink-black"
          style={{ "font-family": "var(--font-marcellus)" }}
        >
          Where to Stay
        </h2>

        <p class="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          We recommend booking the accomodation as soon as possible to ensure
          the best rates. For convenience, we suggest to stay in Keflavík, but
          anywhere in Reykjanesbær will work for the event.
        </p>
        <div class="grid gap-12">
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-olive-green">
            <div class="flex flex-col md:flex-row">
              <div class="md:w-[60%] p-8">
                <div class="mb-6">
                  <div class="inline-block bg-gold/20 border border-gold px-3 py-1 rounded-full mb-3">
                    <span class="text-gold font-bold text-sm">
                      SPECIAL RATE
                    </span>
                  </div>
                  <h3
                    class="text-3xl font-bold text-reddish-brown mb-2"
                    style={{ "font-family": "var(--font-marcellus)" }}
                  >
                    Nupan Deluxe
                  </h3>
                  <p class="text-gray-600 text-lg">
                    Aðalgata 10, 230 Reykjanesbær
                  </p>
                </div>
                <div class="space-y-4 text-lg text-gray-700 mb-6">
                  <p>
                    A hotel located in the heart of Keflavík, very close to
                    everything you need.
                  </p>
                </div>
                <div>
                  <p class="text-gray-700">
                    To get a reduced rate send and email to{" "}
                    <a
                      href="mailto:Nupan.hotel@gmail.com"
                      class="text-blue font-semibold hover:underline"
                    >
                      Nupan.hotel@gmail.com
                    </a>{" "}
                    and reference that it is "from Brother Johnas for
                    EuroMeeting"
                  </p>
                </div>
                <hr class="my-6 border-t border-gray-200" />
                <div>
                  <a
                    class="text-blue font-semibold hover:underline"
                    href="https://www.booking.com/hotel/is/nupan-deluxe.html"
                  >
                    Further information
                  </a>
                  <p class="text-gray-700 mt-2 text-sm italic">
                    *Images of the hotel and rooms will be updated after the
                    10th of February.
                  </p>
                </div>
              </div>
              <div class="md:w-[40%] h-64 md:h-auto">
                <img
                  src={NupanImage}
                  alt="Nupan Deluxe"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-olive-green">
            <div class="flex flex-col md:flex-row">
              <div class="md:w-[60%] p-8">
                <div class="mb-6">
                  <div class="inline-block bg-gold/20 border border-gold px-3 py-1 rounded-full mb-3">
                    <span class="text-gold font-bold text-sm">
                      SPECIAL RATE
                    </span>
                  </div>
                  <h3
                    class="text-3xl font-bold text-reddish-brown mb-2"
                    style={{ "font-family": "var(--font-marcellus)" }}
                  >
                    Konvin
                  </h3>
                  <p class="text-gray-600 text-lg">
                    Keilisbraut 762, 262 Reykjanesbær
                  </p>
                </div>
                <div class="space-y-4 text-lg text-gray-700 mb-6">
                  <p>
                    A modern hotel located a bit outside of Reykjanesbær city
                    center.
                  </p>
                </div>
                <div>
                  <p class="text-gray-700">
                    To get a reduced rate book through the website and use the
                    code{" "}
                    <span class="font-semibold text-ink-black">konvin24</span>
                  </p>
                </div>
                <hr class="my-6 border-t border-gray-200" />
                <div>
                  <a
                    class="text-blue font-semibold hover:underline"
                    href="https://www.konvin.is/"
                  >
                    Further information
                  </a>
                </div>
              </div>
              <div class="md:w-[40%] h-64 md:h-auto">
                <img
                  src={KonvinImage}
                  alt="Konvin"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <p class="text-gray-700 mt-8">
            Home accomodation may be available upon request. Please contact us
            for more information if you are interested in this option.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AccommodationSection;
