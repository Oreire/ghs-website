// Smooth scroll for navigation links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Highlight active section in nav on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// Contact form validation (if added later)
function validateContactForm() {
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  if (!email.value || !message.value) {
    alert("Please fill in all required fields.");
    return false;
  }
  return true;
}

// Dynamic year in footer
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.querySelector("footer p");
  if (yearSpan) {
    yearSpan.innerHTML = `&copy; ${new Date().getFullYear()} Glanik Healthcare Solutions (GH) Limited. All rights reserved.`;
  }
});