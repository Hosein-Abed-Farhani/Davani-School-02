// sign in and sign up script

function log_1() {
  document.querySelector(".right").style.display = "none";
  document.querySelector(".right-2").style.display = "flex";
}

function log_2() {
  document.querySelector(".right-2").style.display = "none";
  document.querySelector(".right").style.display = "flex";
}

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
