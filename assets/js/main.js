// Mobile menu functionality
const navToggler = document.querySelector(".main-header .hamburger");
const mobileMenu = document.querySelector(".main-header__bottom");
const body = document.body;

// Toggle mobile menu
navToggler.addEventListener("click", () => {
  document.documentElement.classList.toggle("menu-open");
  body.classList.toggle("menu-open");
  
  // Toggle mobile menu visibility
  if (mobileMenu) {
    mobileMenu.classList.toggle("active");
  }
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".main-header") && body.classList.contains("menu-open")) {
    document.documentElement.classList.remove("menu-open");
    body.classList.remove("menu-open");
    if (mobileMenu) {
      mobileMenu.classList.remove("active");
    }
  }
});

// Close mobile menu when pressing Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && body.classList.contains("menu-open")) {
    document.documentElement.classList.remove("menu-open");
    body.classList.remove("menu-open");
    if (mobileMenu) {
      mobileMenu.classList.remove("active");
    }
  }
});

// Handle window resize
window.addEventListener("resize", () => {
  if (window.innerWidth > 991.98 && body.classList.contains("menu-open")) {
    document.documentElement.classList.remove("menu-open");
    body.classList.remove("menu-open");
    if (mobileMenu) {
      mobileMenu.classList.remove("active");
    }
  }
});

// Add smooth scrolling for mobile menu links
const mobileMenuLinks = document.querySelectorAll(".mobile-nav a");
mobileMenuLinks.forEach(link => {
  link.addEventListener("click", () => {
    // Close mobile menu when a link is clicked
    document.documentElement.classList.remove("menu-open");
    body.classList.remove("menu-open");
    if (mobileMenu) {
      mobileMenu.classList.remove("active");
    }
  });
});

// Header scroll effect
let lastScrollTop = 0;
const header = document.querySelector(".main-header");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop && scrollTop > 100) {
    // Scrolling down
    header.classList.add("scroll-down");
    header.classList.remove("scroll-up");
  } else if (scrollTop < lastScrollTop) {
    // Scrolling up
    header.classList.remove("scroll-down");
    header.classList.add("scroll-up");
  }
  
  lastScrollTop = scrollTop;
});

// Initialize header state
document.addEventListener("DOMContentLoaded", () => {
  // Add any initialization code here
  console.log("Header initialized");
  
  // Initialize Team Slider
  initializeTeamSlider();
});

// Team Slider functionality
function initializeTeamSlider() {
  const teamSwiper = new Swiper('.team-swiper', {
    slidesPerView: 3.5,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.team-swiper-button-next',
      prevEl: '.team-swiper-button-prev',
    },
    pagination: {
      el: '.team-swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2.2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3.2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3.5,
        spaceBetween: 20,
      }
    }
  });



  // Add click functionality for expand icon
  const expandIcons = document.querySelectorAll('.team-card__expand');
  expandIcons.forEach(icon => {
    icon.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const card = this.closest('.team-card');
      const title = card.querySelector('.team-card__title').textContent;
      console.log(`Expanding card: ${title}`);
      // Add your expand functionality here
    });
  });

  // Add click functionality for location icon
  const locationIcons = document.querySelectorAll('.team-card__location');
  locationIcons.forEach(icon => {
    icon.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const card = this.closest('.team-card');
      const title = card.querySelector('.team-card__title').textContent;
      console.log(`Opening location for: ${title}`);
      // Add your location functionality here
    });
  });

  console.log("Team slider initialized");
}
