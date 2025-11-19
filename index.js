document.addEventListener("DOMContentLoaded", () => {
  const heroLight = document.querySelector(".hero-light");
  if (!heroLight) return;

  // How far (in px) the user must scroll for the light to fully fade out
  const maxFadeDistance = 400; // tweak this number to taste

  function updateLightOpacity() {
    const scrollY = window.scrollY;

    // ratio goes from 0 (top of page) to 1 (scrolled maxFadeDistance or more)
    const ratio = Math.min(scrollY / maxFadeDistance, 1);

    // opacity: 1 at top, 0 when ratio = 1
    const opacity = 1 - ratio;

    heroLight.style.opacity = opacity.toString();
  }

  // Set initial opacity on load
  updateLightOpacity();

  // Update on scroll
  window.addEventListener("scroll", updateLightOpacity);
});