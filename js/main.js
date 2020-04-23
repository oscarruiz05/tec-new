document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
  });
  
  ScrollReveal().reveal('.showcase');
  ScrollReveal().reveal('.news-card', { delay: 500 });
  ScrollReveal().reveal('.banner-card-one', { delay: 500 });
  ScrollReveal().reveal('.banner-card-two', { delay: 500 });