//anim 1

document.addEventListener("DOMContentLoaded", function () {
  const imgLink1 = document.getElementById("img-link-1");
  const imgLink2 = document.getElementById("img-link-2");

  const options = {
    root: null, // از viewport به عنوان مرجع استفاده می‌شود
    rootMargin: "0px",
    threshold: 0.2, // 20 درصد از المان باید در viewport باشد
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // اضافه کردن کلاس برای فعال کردن انیمیشن
        entry.target.classList.add("visible");

        // اگر می‌خواهید انیمیشن فقط یک بار اجرا شود، مشاهده‌گر را متوقف کنید
        observer.unobserve(entry.target);
      }
    });
  }, options);

  // شروع مشاهده المان‌ها
  observer.observe(imgLink1);
  observer.observe(imgLink2);
});

// anim 2
document.addEventListener("DOMContentLoaded", function () {
  const contentInfo = document.querySelector(".content-info");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          contentInfo.classList.add("visible");
          observer.unobserve(contentInfo); // Stop observing after animation
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the element is visible
    }
  );

  observer.observe(contentInfo);
});

// anim 3 (contact)
let arrow_let = 1;
function arrow_right() {
  arrow_let--;
  if (arrow_let == 3) {
    document.querySelector("#circle-4").style.background = "white";
    document.querySelector("#contact-line-2").style.width = "65%";
    document.querySelector("#contact-i-4").style.color = "rgba(0, 0, 0, 0.4)";
    document.querySelector("#contact-h2-4").style.color = "rgba(0, 0, 0, 0.4)";
    document.querySelector("#contact-p-4").style.color = "rgba(0, 0, 0, 0.4)";
  }
  if (arrow_let == 2) {
    document.querySelector("#circle-3").style.background = "white";
    document.querySelector("#contact-line-2").style.width = "35%";
    document.querySelector("#contact-i-3").style.color = "rgba(0, 0, 0, 0.4)";
    document.querySelector("#contact-h2-3").style.color = "rgba(0, 0, 0, 0.4)";
    document.querySelector("#contact-p-3").style.color = "rgba(0, 0, 0, 0.4)";
  }
  if (arrow_let == 1) {
    document.querySelector("#circle-2").style.background = "white";
    document.querySelector("#contact-line-2").style.width = "0%";
    document.querySelector("#contact-i-2").style.color = "rgba(0, 0, 0, 0.4)";
    document.querySelector("#contact-h2-2").style.color = "rgba(0, 0, 0, 0.4)";
    document.querySelector("#contact-p-2").style.color = "rgba(0, 0, 0, 0.4)";
  }
  if (arrow_let == 0) {
    arrow_let = 1;
  }
}
function arrow_left() {
  arrow_let++;
  if (arrow_let == 2) {
    document.querySelector("#circle-2").style.background = "rgb(75, 221, 89)";
    document.querySelector("#contact-line-2").style.width = "35%";
    document.querySelector("#contact-i-2").style.color = "black";
    document.querySelector("#contact-h2-2").style.color = "black";
    document.querySelector("#contact-p-2").style.color = "black";
  }
  if (arrow_let == 3) {
    document.querySelector("#circle-3").style.background = "rgb(75, 221, 89)";
    document.querySelector("#contact-line-2").style.width = "65%";
    document.querySelector("#contact-i-3").style.color = "black";
    document.querySelector("#contact-h2-3").style.color = "black";
    document.querySelector("#contact-p-3").style.color = "black";
  }
  if (arrow_let == 4) {
    document.querySelector("#circle-4").style.background = "rgb(75, 221, 89)";
    document.querySelector("#contact-line-2").style.width = "100%";
    document.querySelector("#contact-i-4").style.color = "black";
    document.querySelector("#contact-h2-4").style.color = "black";
    document.querySelector("#contact-p-4").style.color = "black";
  }
  if (arrow_let == 5) {
    arrow_let = 4;
  }
}

// last anim

document.addEventListener("DOMContentLoaded", function () {
  const webBoxes = document.querySelectorAll(".map");

  const options = {
    threshold: 0.3, // وقتی ۱۰٪ از المان در viewport قرار گرفت
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // دیگر نیازی به مشاهده نیست
      }
    });
  }, options);

  webBoxes.forEach((box) => {
    observer.observe(box);
  });
});
