// box - 2 - anim

// Intersection Observer for Animations
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1, // وقتی ۱۰% از عنصر در viewport قرار گرفت، رویداد فعال می‌شود
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const target = entry.target;
      // انیمیشن برای باکس‌های تاریخچه و دانش‌آموزان
      if (target.classList.contains("davani-box")) {
        target.style.opacity = "1";
      }
    }
  });
}, observerOptions);

// مشاهده عناصر برای انیمیشن
document.querySelectorAll(".davani-box").forEach((box) => {
  observer.observe(box);
});

// تنظیمات Observer برای نمایش عناصر
const newObserverOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1, // وقتی ۱۰٪ از عنصر در viewport قرار گرفت، رویداد فعال می‌شود
};

// box - 1 - anim
const newObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const observedElement = entry.target;
      // نمایش عناصر بر اساس عرض صفحه
      observedElement.style.transform = "translateX(0)";
      observedElement.style.opacity = "1";
    }
  });
}, newObserverOptions);

// مشاهده عناصر برای انیمیشن بر اساس عرض صفحه
document
  .querySelectorAll(
    "#info-boxes-1, #info-boxes-2, #info-boxes-3, #info-boxes-4"
  )
  .forEach((element, index) => {
    // ابتدا حالت اولیه‌ی عناصر را تنظیم کنید
    if (index % 2 === 0) {
      // عناصر سمت چپ
      element.style.transform = "translateX(300px)";
    } else {
      // عناصر سمت راست
      element.style.transform = "translateX(-300px)";
    }
    element.style.opacity = "0";

    newObserver.observe(element);
  });

// box - 3 - anim
document.addEventListener("DOMContentLoaded", function () {
  const webBoxes = document.querySelectorAll(".web-box");

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

// image slider

function slide_func() {
  document.querySelector("#image-1").style.display = "none";
  document.querySelector("#image-2").style.display = "none";
  document.querySelector("#image-3").style.display = "none";
  document.querySelector("#image-4").style.display = "none";
  document.querySelector("#image-5").style.display = "none";
  document.querySelector("#circle-1").style.background = "none";
  document.querySelector("#circle-2").style.background = "none";
  document.querySelector("#circle-3").style.background = "none";
  document.querySelector("#circle-4").style.background = "none";
  document.querySelector("#circle-5").style.background = "none";
  document.querySelector("#circle-1").style.width = "20%";
  document.querySelector("#circle-2").style.width = "20%";
  document.querySelector("#circle-3").style.width = "20%";
  document.querySelector("#circle-4").style.width = "20%";
  document.querySelector("#circle-5").style.width = "20%";
  document.querySelector("#circle-1").style.borderRadus = "50%";
  document.querySelector("#circle-2").style.borderRadus = "50%";
  document.querySelector("#circle-3").style.borderRadus = "50%";
  document.querySelector("#circle-4").style.borderRadus = "50%";
  document.querySelector("#circle-5").style.borderRadus = "50%";
}

let img_num = 1;
function next() {
  img_num++;
  if (img_num == 6) {
    img_num = 1;
  }

  if (img_num == 1) {
    slide_func();
    document.querySelector("#image-1").style.display = "block";
    document.querySelector("#p-slide").innerHTML = "1/5";
    document.querySelector("#circle-1").style.background = "rgb(70, 199, 99)";
    document.querySelector("#circle-1").style.width = "50%";
    document.querySelector("#circle-1").style.borderRadius = "15px";
  }

  if (img_num == 2) {
    slide_func();
    document.querySelector("#image-2").style.display = "block";
    document.querySelector("#p-slide").innerHTML = "2/5";
    document.querySelector("#circle-2").style.background = "rgb(70, 199, 99)";
    document.querySelector("#circle-2").style.width = "50%";
    document.querySelector("#circle-2").style.borderRadius = "15px";
  }

  if (img_num == 3) {
    slide_func();
    document.querySelector("#image-3").style.display = "block";
    document.querySelector("#p-slide").innerHTML = "3/5";
    document.querySelector("#circle-3").style.background = "rgb(70, 199, 99)";
    document.querySelector("#circle-3").style.width = "50%";
    document.querySelector("#circle-3").style.borderRadius = "15px";
  }

  if (img_num == 4) {
    slide_func();
    document.querySelector("#image-4").style.display = "block";
    document.querySelector("#p-slide").innerHTML = "4/5";
    document.querySelector("#circle-4").style.background = "rgb(70, 199, 99)";
    document.querySelector("#circle-4").style.width = "50%";
    document.querySelector("#circle-4").style.borderRadius = "15px";
  }

  if (img_num == 5) {
    slide_func();
    document.querySelector("#image-5").style.display = "block";
    document.querySelector("#p-slide").innerHTML = "5/5";
    document.querySelector("#circle-5").style.background = "rgb(70, 199, 99)";
    document.querySelector("#circle-5").style.width = "50%";
    document.querySelector("#circle-5").style.borderRadius = "15px";
  }
}

function back() {
  img_num--;
  if (img_num == 0) {
    img_num = 5;
  }

  if (img_num == 1) {
    slide_func();
    document.querySelector("#image-1").style.display = "block";
    document.querySelector("#p-slide").innerHTML = "1/5";
    document.querySelector("#circle-1").style.background = "rgb(70, 199, 99)";
    document.querySelector("#circle-1").style.width = "50%";
    document.querySelector("#circle-1").style.borderRadius = "15px";
  }

  if (img_num == 2) {
    slide_func();
    document.querySelector("#image-2").style.display = "block";
    document.querySelector("#p-slide").innerHTML = "2/5";
    document.querySelector("#circle-2").style.background = "rgb(70, 199, 99)";
    document.querySelector("#circle-2").style.width = "50%";
    document.querySelector("#circle-2").style.borderRadius = "15px";
  }

  if (img_num == 3) {
    slide_func();
    document.querySelector("#image-3").style.display = "block";
    document.querySelector("#p-slide").innerHTML = "3/5";
    document.querySelector("#circle-3").style.background = "rgb(70, 199, 99)";
    document.querySelector("#circle-3").style.width = "50%";
    document.querySelector("#circle-3").style.borderRadius = "15px";
  }

  if (img_num == 4) {
    slide_func();
    document.querySelector("#image-4").style.display = "block";
    document.querySelector("#p-slide").innerHTML = "4/5";
    document.querySelector("#circle-4").style.background = "rgb(70, 199, 99)";
    document.querySelector("#circle-4").style.width = "50%";
    document.querySelector("#circle-4").style.borderRadius = "15px";
  }

  if (img_num == 5) {
    slide_func();
    document.querySelector("#image-5").style.display = "block";
    document.querySelector("#p-slide").innerHTML = "5/5";
    document.querySelector("#circle-5").style.background = "rgb(70, 199, 99)";
    document.querySelector("#circle-5").style.width = "50%";
    document.querySelector("#circle-5").style.borderRadius = "15px";
  }
}

setInterval(next, 3000);

// circle slide

function cir_1() {
  img_num = 1;
  slide_func();
  document.querySelector("#image-1").style.display = "block";
  document.querySelector("#p-slide").innerHTML = "1/5";
  document.querySelector("#circle-1").style.background = "rgb(70, 199, 99)";
  document.querySelector("#circle-1").style.width = "50%";
  document.querySelector("#circle-1").style.borderRadius = "15px";
}
function cir_2() {
  img_num = 2;
  slide_func();
  document.querySelector("#image-2").style.display = "block";
  document.querySelector("#p-slide").innerHTML = "2/5";
  document.querySelector("#circle-2").style.background = "rgb(70, 199, 99)";
  document.querySelector("#circle-2").style.width = "50%";
  document.querySelector("#circle-2").style.borderRadius = "15px";
}
function cir_3() {
  img_num = 3;
  slide_func();
  document.querySelector("#image-3").style.display = "block";
  document.querySelector("#p-slide").innerHTML = "3/5";
  document.querySelector("#circle-3").style.background = "rgb(70, 199, 99)";
  document.querySelector("#circle-3").style.width = "50%";
  document.querySelector("#circle-3").style.borderRadius = "15px";
}
function cir_4() {
  img_num = 4;
  slide_func();
  document.querySelector("#image-4").style.display = "block";
  document.querySelector("#p-slide").innerHTML = "4/5";
  document.querySelector("#circle-4").style.background = "rgb(70, 199, 99)";
  document.querySelector("#circle-4").style.width = "50%";
  document.querySelector("#circle-4").style.borderRadius = "15px";
}
function cir_5() {
  img_num = 5;
  slide_func();
  document.querySelector("#image-5").style.display = "block";
  document.querySelector("#p-slide").innerHTML = "5/5";
  document.querySelector("#circle-5").style.background = "rgb(70, 199, 99)";
  document.querySelector("#circle-5").style.width = "50%";
  document.querySelector("#circle-5").style.borderRadius = "15px";
}
