/* @refresh reload */
import "./index.css";
import { render } from "solid-js/web";
import "solid-devtools";

import App from "./App";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
  );
}

render(() => <App />, root!);

// Hide loading screen after everything is loaded
window.addEventListener("load", () => {
  setTimeout(() => {
    const loadingScreen = document.getElementById("loading-screen");
    if (loadingScreen) {
      loadingScreen.classList.add("fade-out");
      // Remove loader element from DOM after fade-out
      setTimeout(() => {
        loadingScreen.remove();
      }, 150);
    }
  }, 100);
});
