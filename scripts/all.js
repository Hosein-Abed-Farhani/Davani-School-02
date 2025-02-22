
  // screen_width = screen.width;
  // if (screen_width <= 550){

  // }

//scroll bar

window.onscroll = function () {
  scroll();
};

function scroll() {
  var winScroll =
    window.scrollY ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;
  var height = document.body.scrollHeight - document.body.clientHeight;
  var scrolled = (winScroll / height) * 100;
  scrolled = Math.min(100, Math.max(0, scrolled));
  if (scrolled >= 95) {
    scrolled = 100;
  }
  document.querySelector(".scroll-bar").style.width = scrolled + "%";
  // float btn for scroll to top
  if (scrolled >= 5) {
    document.querySelector(".float-btn").style.translate = "0px";
  } else {
    document.querySelector(".float-btn").style.translate = "100px";
  }
}

// GoToTop

function goToTop() {
  window.scrollTo({
    top: 0,
  });
}

// arrow animation
function arrow() {
  document.querySelector("#arrow-top").style.animation =
    "arrow 800ms ease-in-out";
  setTimeout(arrow_off, 1000);
}
function arrow_off() {
  document.querySelector("#arrow-top").style.animation = "none";
}

setInterval(arrow, 3000);

// محدود کردن راست کلیک روی عکس‌ها
document.addEventListener("contextmenu", function (event) {
  if (event.target.tagName === "IMG") {
    event.preventDefault();
  }
});

document.addEventListener("mousedown", function (event) {
  if (event.target.tagName === "IMG") {
    event.preventDefault();
  }
});

// فهمیدن مرورگر کاربر برای استایل اسکرول بار

var userAgent = navigator.userAgent;
if (userAgent.includes("firefox")) {
  document.querySelector("html").style.scrollbarWidth = "thin";
  document.querySelector("html").style.scrollbarColor =
    "rgb(155, 155, 155) none";
}

// row box anim

document.addEventListener("DOMContentLoaded", function () {
  const rowBoxes = document.querySelectorAll(".row-box");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1, // 10% از آیتم باید در دید باشد
    }
  );

  // مشاهده هر کدام از آیتم‌ها
  rowBoxes.forEach((box) => {
    observer.observe(box);
  });
});
