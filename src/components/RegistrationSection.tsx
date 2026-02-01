import type { Component } from "solid-js";
import { onMount } from "solid-js";

const RegistrationSection: Component = () => {
  onMount(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.tickettailor.com/js/widgets/min/widget.js";
    script.setAttribute(
      "data-url",
      "https://www.tickettailor.com/checkout/new-session/id/7521961/chk/64e6/?ref=website_widget&show_search_filter=true&show_date_filter=true&show_sort=true",
    );
    script.setAttribute("data-type", "inline");
    script.setAttribute("data-inline-minimal", "true");
    script.setAttribute("data-inline-show-logo", "false");
    script.setAttribute("data-inline-bg-fill", "false");
    script.setAttribute("data-inline-inherit-ref-from-url-param", "");
    script.setAttribute("data-inline-ref", "website_widget");

    const widgetContainer = document.querySelector(".tt-widget");
    if (widgetContainer) {
      widgetContainer.appendChild(script);
    }
  });

  return (
    <section
      id="registration"
      class="flex items-center justify-center py-10 md:py-40 px-6 bg-ink-black"
    >
      <div class="w-full max-w-3xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-12 font-marcellus text-white">
          Register Now
        </h2>
        <div class="border-4 rounded-xl py-10 px-8 md:px-20 bg-white">
          <div class="tt-widget">
            <div class="tt-widget-fallback"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
