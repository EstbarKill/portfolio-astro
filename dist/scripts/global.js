const btn = document.getElementById("menuBtn");
const menu = document.getElementById("mobileMenu");

btn?.addEventListener("click", () => {
  menu.classList.toggle("open");
});

/**SCROLL FUNTIONS */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target); // anima una sola vez
      }
    });
  }
);

document.querySelectorAll(".reveal-section").forEach(section => {
  observer.observe(section);
});
document.querySelectorAll(".reveal-section-container").forEach(section => {
  observer.observe(section);
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");

          navLinks.forEach(link => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${id}`
            );
          });
        }
      });
    },
    { threshold: 0.6 }
  );

  sections.forEach(section => observer.observe(section));
});

  const bg = document.querySelector("#abaut-section [data-parallax]");
  let lastScroll = 0;
  let ticking = false;

  function onScroll() {
    lastScroll = window.scrollY;
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }

  function update() {
    const speed = 10; // profundidad elegante
    bg.style.transform = `translateY(${lastScroll * speed}px)`;
    ticking = false;
  }

  window.addEventListener("scroll", onScroll);

//