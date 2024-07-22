// ScrollReveal
ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".name, .title-company", { origin: "top" });
ScrollReveal().reveal(".sejarah", { origin: "bottom" });
ScrollReveal().reveal(".title-visi, .visi", { origin: "left" });
ScrollReveal().reveal(".title-misi, .misi", { origin: "right" });

// Navbar
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-item");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((link) => link.classList.remove("active"));

      this.classList.add("active");
    });
  });
});
