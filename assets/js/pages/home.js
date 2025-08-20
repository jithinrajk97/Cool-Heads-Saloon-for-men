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

var swiper = new Swiper(".mySwiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
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
});

var swiper1 = new Swiper(".swiper-container-category", {
  // loop: true,
  slidesPerView: 2,
  spaceBetween: 15,

  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },

  breakpoints: {
    slidesPerView: 2,
    spaceBetween: 16,
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
  },
});

var swiper1 = new Swiper(".swiper-container-limited", {
  // loop: true,
  slidesPerView: 1,
  spaceBetween: 15,

  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },

  breakpoints: {
    1920: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});
/* Updated Sec ends*/

var swiper1 = new Swiper(".swiper-container-newlimited", {
  // loop: true,
  slidesPerView: 1,
  spaceBetween: 15,

  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },

  breakpoints: {
    1920: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

$("#language-select").select2({
  templateResult: formatState,
  templateSelection: formatState,
  minimumResultsForSearch: -1,
});

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
