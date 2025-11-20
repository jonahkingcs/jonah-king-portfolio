document.addEventListener("DOMContentLoaded", () => {
  const heroLight = document.querySelector(".hero-light");
  if (!heroLight) return;

  // Pixels user must scroll for light to fade out fully
  const maxFadeDistance = 600; // tweak this number to taste

  function updateLightOpacity() {
    const scrollY = window.scrollY;

    // ratio from 0 at top of page to 1 at maxFadeDistance or bottom of the page
    const ratio = Math.min(scrollY / maxFadeDistance, 1);

    // opacity = 1 at top, 0 when ratio = 1
    const opacity = 1 - ratio;

    heroLight.style.opacity = opacity.toString();
  }

  // set initial opacity on load
  updateLightOpacity();

  // update when scrolling
  window.addEventListener("scroll", updateLightOpacity);
});