// Animación sencilla al hacer scroll
const items = document.querySelectorAll('.feature-grid article, .dept, .update-list article');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.animate(
        [{opacity:0, transform:'translateY(16px)'},{opacity:1, transform:'translateY(0)'}],
        {duration:500, easing:'ease-out', fill:'forwards'}
      );
      observer.unobserve(entry.target);
    }
  });
}, {threshold:0.12});
items.forEach(item => observer.observe(item));
