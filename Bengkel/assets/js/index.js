document.getElementById("hamburger-menu-desktop").onclick = function () {
  document.getElementById("menu-desktop").classList.toggle("hidden");
};
document.getElementById("hamburger-menu-mobile").onclick = function () {
  document.getElementById("menu-mobile").classList.toggle("hidden");
};
// Fungsi Lazy Load
document.addEventListener("DOMContentLoaded", function () {
  // ScrollReveal setup
  ScrollReveal({
    distance: "80px",
    duration: 2000,
    delay: 300,
    reset: true // Enable resetting to allow re-triggering the animation
  });

  ScrollReveal().reveal(".home", { origin: "left" });
  ScrollReveal().reveal(".home-btn", { origin: "bottom" });
  ScrollReveal().reveal(".service", { origin: "left" });
  ScrollReveal().reveal(".about-text", { origin: "left" });
  ScrollReveal().reveal(".about-img", { origin: "right" });
  ScrollReveal().reveal(".brand", { origin: "bottom" });
  ScrollReveal().reveal(".tim-img", { origin: "right" });
  ScrollReveal().reveal(".gallery", { origin: "right" });

  // Intersection Observer setup
  const elementsToObserve = document.querySelectorAll('.home, .home-btn, .service, .about-text, .about-img, .brand, .tim-img, .gallery');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        // If the element is out of the viewport, hide it
        entry.target.style.opacity = '0';
      } else {
        // If the element is in the viewport, show it
        entry.target.style.opacity = '1';
      }
    });
  }, {
    threshold: 0.1 // Adjust this value to set when the observer triggers
  });

  // Observe each element
  elementsToObserve.forEach((element) => {
    observer.observe(element);
  });
});
