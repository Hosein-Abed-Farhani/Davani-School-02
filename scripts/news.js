// translate anim cart
let arrow_cart = 1;
function c_a_left() {
  arrow_cart++;
  if (arrow_cart == 0) {
    arrow_cart = 4;
  }
  if (arrow_cart == 5) {
    arrow_cart = 1;
  }
  if (arrow_cart == 1) {
    document.querySelector(".t-carts").style.translate = "0px";
  }
  if (arrow_cart == 2) {
    document.querySelector(".t-carts").style.translate = "450px";
  }
  if (arrow_cart == 3) {
    document.querySelector(".t-carts").style.translate = "900px";
  }
  if (arrow_cart == 4) {
    document.querySelector(".t-carts").style.translate = "1350px";
  }
}
function c_a_right() {
  arrow_cart--;
  if (arrow_cart == 0) {
    arrow_cart = 4;
  }
  if (arrow_cart == 5) {
    arrow_cart = 1;
  }
  if (arrow_cart == 1) {
    document.querySelector(".t-carts").style.translate = "0px";
  }
  if (arrow_cart == 2) {
    document.querySelector(".t-carts").style.translate = "450px";
  }
  if (arrow_cart == 3) {
    document.querySelector(".t-carts").style.translate = "900px";
  }
  if (arrow_cart == 4) {
    document.querySelector(".t-carts").style.translate = "1350px";
  }
}

function c_a_left_2() {
  arrow_cart++;
  if (arrow_cart == 0) {
    arrow_cart = 5;
  }
  if (arrow_cart == 6) {
    arrow_cart = 1;
  }
  if (arrow_cart == 1) {
    document.querySelector(".t-carts").style.translate = "0px";
  }
  if (arrow_cart == 2) {
    document.querySelector(".t-carts").style.translate = "450px";
  }
  if (arrow_cart == 3) {
    document.querySelector(".t-carts").style.translate = "900px";
  }
  if (arrow_cart == 4) {
    document.querySelector(".t-carts").style.translate = "1350px";
  }
  if (arrow_cart == 5) {
    document.querySelector(".t-carts").style.translate = "1800px";
  }
}
function c_a_right_2() {
  arrow_cart--;
  if (arrow_cart == 0) {
    arrow_cart = 5;
  }
  if (arrow_cart == 6) {
    arrow_cart = 1;
  }
  if (arrow_cart == 1) {
    document.querySelector(".t-carts").style.translate = "0px";
  }
  if (arrow_cart == 2) {
    document.querySelector(".t-carts").style.translate = "450px";
  }
  if (arrow_cart == 3) {
    document.querySelector(".t-carts").style.translate = "900px";
  }
  if (arrow_cart == 4) {
    document.querySelector(".t-carts").style.translate = "1350px";
  }
  if (arrow_cart == 5) {
    document.querySelector(".t-carts").style.translate = "1800px";
  }
}

web_width = screen.width;

if (web_width >= 900) {
  setInterval(c_a_left, 2500);
} else if (web_width <= 900) {
  setInterval(c_a_left_2, 2500);
}

// cart-container anim

document.addEventListener("DOMContentLoaded", function () {
  const classBoxes = document.querySelectorAll(".test-carts");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.3, // 10% از آیتم باید در دید باشد
    }
  );

  // مشاهده هر کدام از آیتم‌ها
  classBoxes.forEach((box) => {
    observer.observe(box);
  });
});
