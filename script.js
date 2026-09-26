const navbar = document.getElementById("navbar");
const cursor = document.querySelector(".cursor-glow");
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("mainNav");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 30);

  const sections = [...document.querySelectorAll("main section[id]")];
  const links = [...document.querySelectorAll("nav a")];
  let current = "inicio";

  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 180) current = section.id;
  });

  links.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + current);
  });
});

document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("mobile-open");
});

document.querySelectorAll("nav a").forEach(a => {
  a.addEventListener("click", () => nav.classList.remove("mobile-open"));
});
