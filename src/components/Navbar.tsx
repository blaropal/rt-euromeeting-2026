import type { Component } from "solid-js";
import { createSignal, onMount, onCleanup } from "solid-js";
import LogoImage from "../assets/logo.png";

const Navbar: Component = () => {
  const [isVisible, setIsVisible] = createSignal(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = createSignal(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY > window.innerHeight * 0.8);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
    onCleanup(() => window.removeEventListener("scroll", handleScroll));
  });

  const navLinks = [
    { id: "about", label: "About" },
    { id: "schedule", label: "Schedule" },
    { id: "pretour", label: "PreTour" },
    { id: "registration", label: "Register" },
    { id: "accommodation", label: "Accommodation" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      class={`fixed top-0 left-0 right-0 z-50 bg-ink-black/95 backdrop-blur border-b-2 border-gold transition-transform duration-300 ${
        isVisible() ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div class="max-w-7xl mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            class="hover:opacity-80 transition-opacity"
            aria-label="Go to top"
          >
            <img src={LogoImage} alt="EuroMeeting 2026" class="h-12" />
          </button>

          {/* Desktop Navigation */}
          <div class="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                onClick={() => scrollToSection(link.id)}
                class="text-white hover:text-gold transition-colors text-lg font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen())}
            class="md:hidden text-white hover:text-gold transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen() ? (
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen() && (
          <div class="md:hidden mt-4 pb-4 border-t border-gold/30 pt-4">
            <div class="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  onClick={() => scrollToSection(link.id)}
                  class="text-white hover:text-gold transition-colors text-lg font-medium text-left py-2"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
