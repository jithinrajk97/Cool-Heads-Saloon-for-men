// Mobile menu functionality
const navToggler = document.querySelector(".main-header .hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const body = document.body;

// Debug logging
console.log("Hamburger element:", navToggler);
console.log("Mobile menu element:", mobileMenu);

// Toggle mobile menu
if (navToggler) {
navToggler.addEventListener("click", () => {
  console.log("Hamburger clicked!");
  document.documentElement.classList.toggle("menu-open");
  body.classList.toggle("menu-open");
  
  // Toggle mobile menu visibility
  if (mobileMenu) {
    mobileMenu.classList.toggle("active");
    console.log("Mobile menu toggled:", mobileMenu.classList.contains("active"));
  } else {
    console.log("Mobile menu element not found!");
  }
  
  // Prevent body scroll when menu is open
  if (body.classList.contains("menu-open")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "";
  }
});
}

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".main-header") && body.classList.contains("menu-open")) {
    document.documentElement.classList.remove("menu-open");
    body.classList.remove("menu-open");
    if (mobileMenu) {
      mobileMenu.classList.remove("active");
    }
    body.style.overflow = "";
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
    body.style.overflow = "";
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
    body.style.overflow = "";
  }
});

// Add smooth scrolling for mobile menu links
const mobileMenuLinks = document.querySelectorAll(".mobile-nav a");
if (mobileMenuLinks && mobileMenuLinks.length) {
  mobileMenuLinks.forEach(link => {
    link.addEventListener("click", () => {
      // Close mobile menu when a link is clicked
      document.documentElement.classList.remove("menu-open");
      body.classList.remove("menu-open");
      if (mobileMenu) {
        mobileMenu.classList.remove("active");
      }
      body.style.overflow = "";
    });
  });
}

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

// Search functionality
const searchToggle = document.getElementById("searchToggle");
const searchOverlay = document.getElementById("searchOverlay");
const searchClose = document.getElementById("searchClose");
const searchInput = document.getElementById("searchInput");
const searchSubmit = document.querySelector(".search-submit");
const suggestionTags = document.querySelectorAll(".suggestion-tag");

// Open search overlay
if (searchToggle && searchOverlay) {
  searchToggle.addEventListener("click", (e) => {
    e.preventDefault();
    searchOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
    
    // Focus on search input after animation
    setTimeout(() => {
      if (searchInput) {
        searchInput.focus();
      }
    }, 300);
  });
}

// Close search overlay
if (searchClose) {
  searchClose.addEventListener("click", () => {
    closeSearch();
  });
}

// Close search overlay when clicking outside
if (searchOverlay) {
  searchOverlay.addEventListener("click", (e) => {
    if (e.target === searchOverlay) {
      closeSearch();
    }
  });
}

// Close search overlay with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && searchOverlay.classList.contains("active")) {
    closeSearch();
  }
});

// Handle search submission
if (searchSubmit) {
  searchSubmit.addEventListener("click", () => {
    performSearch();
  });
}

// Handle Enter key in search input
if (searchInput) {
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      performSearch();
    }
  });
}

// Handle suggestion tag clicks
if (suggestionTags && suggestionTags.length) {
  suggestionTags.forEach(tag => {
    tag.addEventListener("click", () => {
      if (searchInput) {
        searchInput.value = tag.textContent;
      }
      performSearch();
    });
  });
}

// Function to close search
function closeSearch() {
  if (searchOverlay) {
    searchOverlay.classList.remove("active");
  }
  document.body.style.overflow = "";
  if (searchInput) {
    searchInput.value = "";
  }
}

// Function to perform search
function performSearch() {
  const query = (searchInput ? searchInput.value : "").trim();
  if (query) {
    console.log("Searching for:", query);
    // Here you can implement your actual search logic
    // For now, we'll just log the search query
    // You can redirect to a search results page or make an API call
    
    // Example: Redirect to search results page
    // window.location.href = `/search?q=${encodeURIComponent(query)}`;
    
    // Or show a success message
    showSearchMessage(`Searching for: ${query}`);
    
    // Close the search overlay after a short delay
    setTimeout(() => {
      closeSearch();
    }, 1000);
  }
}

// Function to show search message (optional)
function showSearchMessage(message) {
  // Create a temporary message element
  const messageEl = document.createElement("div");
  messageEl.textContent = message;
  messageEl.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #e74c3c;
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 10px;
    z-index: 10000;
    font-weight: 500;
    box-shadow: 0 4px 15px rgba(231, 76, 60, 0.3);
    transform: translateX(100%);
    transition: transform 0.3s ease;
  `;
  
  document.body.appendChild(messageEl);
  
  // Animate in
  setTimeout(() => {
    messageEl.style.transform = "translateX(0)";
  }, 100);
  
  // Remove after 3 seconds
  setTimeout(() => {
    messageEl.style.transform = "translateX(100%)";
    setTimeout(() => {
      document.body.removeChild(messageEl);
    }, 300);
  }, 3000);
}

// Services Accordion functionality
document.addEventListener("DOMContentLoaded", () => {
  // Initialize accordion functionality
  const accordionHeaders = document.querySelectorAll('.services-accordion .accordion-header');
  
  accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const targetId = this.getAttribute('data-bs-target');
      const targetElement = document.querySelector(targetId);
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      const icon = this.querySelector('.accordion-icon');
      
      // Toggle aria-expanded
      this.setAttribute('aria-expanded', !isExpanded);
      
      // Toggle icon rotation using CSS transform
      if (icon) {
        if (isExpanded) {
          // Collapsing - rotate back to 0 degrees
          icon.style.transform = 'rotate(0deg)';
        } else {
          // Expanding - rotate to 180 degrees (pointing down)
          icon.style.transform = 'rotate(180deg)';
        }
      }
      
      // Toggle collapse class
      if (targetElement) {
        targetElement.classList.toggle('show');
      }
    });
  });
});

// Initialize header state
document.addEventListener("DOMContentLoaded", () => {
  // Add any initialization code here
  console.log("Header initialized");
});


