let prevScrollPos = window.pageYOffset;
const scrollThreshold = 10;

window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;
  const scrollDifference = prevScrollPos - currentScrollPos;

  if (Math.abs(scrollDifference) > scrollThreshold) {
    if (scrollDifference > 0) {
      document.getElementById("main-head").classList.remove("scroll-down");
      document.getElementById("main-head").classList.add("scroll-up");
    } else {
      // Scrolling down
      document.getElementById("main-head").classList.remove("scroll-up");
      document.getElementById("main-head").classList.add("scroll-down");
    }

    prevScrollPos = currentScrollPos;
  }
};

var swiper = new Swiper(".banner-swiper", {
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  speed: 800,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});

var mySwiper = new Swiper(".deals", {
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    567: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
  },
  pagination: {
    el: ".swiper-paginations",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


if (window.jQuery && $.fn && $.fn.select2) {
  if (document.getElementById('language-select')) {
    $("#language-select").select2({
      templateResult: formatState,
      templateSelection: formatState,
      minimumResultsForSearch: -1,
    });
  }
}

// Initialize Select2 for search dropdown
if (window.jQuery && $.fn && $.fn.select2) {
  if (document.getElementById('search-select')) {
    $("#search-select").select2({
      placeholder: "Search",
      allowClear: true,
      minimumResultsForSearch: 0,
      width: '100%'
    });
  }
}

// Initialize Select2 for sort dropdown
function initSortSelect() {
  const isMobile = window.matchMedia('(max-width: 991.98px)').matches;
  if (window.jQuery && $.fn && $.fn.select2 && document.getElementById('sort-select')) {
    try {
      if ($("#sort-select").data('select2')) {
        $("#sort-select").select2('destroy');
      }
    } catch (e) {
      // ignore if not initialized
    }
    $("#sort-select").select2({
      placeholder: "Sort",
      allowClear: true,
      minimumResultsForSearch: -1,
      width: isMobile ? '100%' : '200px'
    });
  }
}
initSortSelect();
window.addEventListener('resize', () => {
  // debounce
  clearTimeout(window.__sortResizeT);
  window.__sortResizeT = setTimeout(initSortSelect, 150);
});

// Event handlers for search and sort functionality
$("#search-select").on('select2:select', function (e) {
  const selectedValue = e.params.data.id;
  const selectedText = e.params.data.text;
  console.log('Search selected:', selectedValue, selectedText);
  
  // Here you can add your search logic
  // For example, filter products, make API calls, etc.
  if (selectedValue) {
    // Perform search based on selectedValue
    performSearch(selectedValue);
  }
});

$("#sort-select").on('select2:select', function (e) {
  const selectedValue = e.params.data.id;
  const selectedText = e.params.data.text;
  console.log('Sort selected:', selectedValue, selectedText);
  
  // Here you can add your sorting logic
  if (selectedValue) {
    // Perform sorting based on selectedValue
    performSort(selectedValue);
  }
});

// Search function
function performSearch(searchTerm) {
  // Add your search implementation here
  console.log('Performing search for:', searchTerm);
  
  // Example: You could filter DOM elements, make AJAX calls, etc.
  // For now, just log the action
}

// Sort function
function performSort(sortType) {
  // Add your sorting implementation here
  console.log('Performing sort by:', sortType);
  
  // Example: You could sort DOM elements, make AJAX calls, etc.
  // For now, just log the action
}

function formatState(opt) {
  if (!opt.id) {
    return opt.text.toUpperCase();
  }

  var optimage = $(opt.element).attr("data-image");
  if (!optimage) {
    return opt.text;
  } else {
    var $opt = $(
      `<span class="select2-flag"><img src="${optimage}" width="24px" alt="icon-flag" /></span><span class="select2-language">${opt.text}</span>`
    );
    return $opt;
  }
}

//animation
// just "anim" in your element
// window.addEventListener("load", () => {
function isInViewport(el, gap) {
  let top = el.offsetTop;
  let left = el.offsetLeft;
  let height = el.offsetHeight;
  // console.log(el.offsetParent);
  while (el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }
  return (
    window.pageYOffset + window.innerHeight - gap >= top &&
    window.pageYOffset <= height + top
  );
}

let getElem = document.querySelectorAll(".anime");
//please change as per the design
const breakPoints = {
  desktop: 250,
  laptop: 80,
  tab: 50,
  mobile: 30,
};
let targetGap;
window.innerWidth >= 1200
  ? (targetGap = breakPoints.desktop)
  : window.innerWidth >= 1024
  ? (targetGap = breakPoints.laptop)
  : window.innerWidth >= 768
  ? (targetGap = breakPoints.tab)
  : (targetGap = breakPoints.mobile);

function anim() {
  getElem.forEach((element) => {
    isInViewport(element, targetGap) ? element.classList.add("visible") : null;
  });
}
getElem.length > 0 ? window.addEventListener("scroll", anim, false) : null;
getElem.length > 0 ? anim() : null;
// }, false);

// Team Slider functionality
function initializeTeamSlider() {
  // Check if Swiper is available
  if (typeof Swiper === 'undefined') {
    console.error('Swiper is not loaded. Please check if swiper-bundle.min.js is included.');
    return;
  }

  // Check if the team-swiper element exists
  const teamSwiperElement = document.querySelector('.team-swiper');
  if (!teamSwiperElement) {
    console.error('Team swiper element not found.');
    return;
  }

  try {
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

    console.log('Team slider initialized successfully');

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

    return teamSwiper;
  } catch (error) {
    console.error('Error initializing team slider:', error);
    return null;
  }
}

// Initialize team slider when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Wait a bit for all elements to be ready
  setTimeout(() => {
    initializeTeamSlider();
  }, 100);
});
