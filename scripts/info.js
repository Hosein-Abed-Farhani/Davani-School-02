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
  document.querySelector("#image-6").style.display = "none";
  document.querySelector("#image-7").style.display = "none";
  document.querySelector("#image-8").style.display = "none";
  document.querySelector("#image-9").style.display = "none";
  document.querySelector("#circle-1").style.background = "none";
  document.querySelector("#circle-2").style.background = "none";
  document.querySelector("#circle-3").style.background = "none";
  document.querySelector("#circle-4").style.background = "none";
  document.querySelector("#circle-5").style.background = "none";
  document.querySelector("#circle-6").style.background = "none";
  document.querySelector("#circle-7").style.background = "none";
  document.querySelector("#circle-8").style.background = "none";
  document.querySelector("#circle-9").style.background = "none";
  document.querySelector("#circle-1").style.width = "20%";
  document.querySelector("#circle-2").style.width = "20%";
  document.querySelector("#circle-3").style.width = "20%";
  document.querySelector("#circle-4").style.width = "20%";
  document.querySelector("#circle-5").style.width = "20%";
  document.querySelector("#circle-6").style.width = "20%";
  document.querySelector("#circle-7").style.width = "20%";
  document.querySelector("#circle-8").style.width = "20%";
  document.querySelector("#circle-9").style.width = "20%";
  document.querySelector("#circle-1").style.borderRadus = "50%";
  document.querySelector("#circle-2").style.borderRadus = "50%";
  document.querySelector("#circle-3").style.borderRadus = "50%";
  document.querySelector("#circle-4").style.borderRadus = "50%";
  document.querySelector("#circle-5").style.borderRadus = "50%";
  document.querySelector("#circle-6").style.borderRadus = "50%";
  document.querySelector("#circle-7").style.borderRadus = "50%";
  document.querySelector("#circle-8").style.borderRadus = "50%";
  document.querySelector("#circle-9").style.borderRadus = "50%";
}

let img_num = 1;
function next() {
  img_num++;
  if (img_num == 10) {
    img_num = 1;
  }

  if (img_num == 1) {
    slide_func();
    document.querySelector("#image-1").style.display = "block";
    document.querySelector("#p-slide").innerHTML = "1/9";
    document.querySelector("#circle-1").style.background = "rgb(70, 199, 99)";
    document.querySelector("#circle-1").style.width = "50%";
    document.querySelector("#circle-1").style.borderRadius = "15px";
  }

  if (img_num == 2) {
    slide_func();
    document.querySelector("#image-2").style.display = "block";
    document.querySelector("#p-slide").innerHTML = "2/9";
    document.querySelector("#circle-2").style.background = "rgb(70, 199, 99)";
    document.querySelector("#circle-2").style.width = "50%";
    document.querySelector("#circle-2").style.borderRadius = "15px";
  }

  if (img_num == 3) {
    slide_func();
    document.querySelector("#image-3").style.display = "block";
    document.querySelector("#p-slide").innerHTML = "3/9";
    document.querySelector("#circle-3").style.background = "rgb(70, 199, 99)";
    document.querySelector("#circle-3").style.width = "50%";
    document.querySelector("#circle-3").style.borderRadius = "15px";
  }

  if (img_num == 4) {
    slide_func();
    document.querySelector("#image-4").style.display = "block";
    document.querySelector("#p-slide").innerHTML = "4/9";
    document.querySelector("#circle-4").style.background = "rgb(70, 199, 99)";
    document.querySelector("#circle-4").style.width = "50%";
    document.querySelector("#circle-4").style.borderRadius = "15px";
  }

  if (img_num == 5) {
    slide_func();
    document.querySelector("#image-5").style.display = "block";
    document.querySelector("#p-slide").innerHTML = "5/9";
    document.querySelector("#circle-5").style.background = "rgb(70, 199, 99)";
    document.querySelector("#circle-5").style.width = "50%";
    document.querySelector("#circle-5").style.borderRadius = "15px";
  }
  if (img_num == 6) {
    slide_func();
    document.querySelector("#image-6").style.display = "block";
    document.querySelector("#p-slide").innerHTML = "6/9";
    document.querySelector("#circle-6").style.background = "rgb(70, 199, 99)";
    document.querySelector("#circle-6").style.width = "50%";
    document.querySelector("#circle-6").style.borderRadius = "15px";
  }
  if (img_num == 7) {
    slide_func();
    document.querySelector("#image-7").style.display = "block";
    document.querySelector("#p-slide").innerHTML = "7/9";
    document.querySelector("#circle-7").style.background = "rgb(70, 199, 99)";
    document.querySelector("#circle-7").style.width = "50%";
    document.querySelector("#circle-7").style.borderRadius = "15px";
  }
  if (img_num == 8) {
    slide_func();
    document.querySelector("#image-8").style.display = "block";
    document.querySelector("#p-slide").innerHTML = "8/9";
    document.querySelector("#circle-8").style.background = "rgb(70, 199, 99)";
    document.querySelector("#circle-8").style.width = "50%";
    document.querySelector("#circle-8").style.borderRadius = "15px";
  }
  if (img_num == 9) {
    slide_func();
    document.querySelector("#image-9").style.display = "block";
    document.querySelector("#p-slide").innerHTML = "9/";
    document.querySelector("#circle-9").style.background = "rgb(70, 199, 99)";
    document.querySelector("#circle-9").style.width = "50%";
    document.querySelector("#circle-9").style.borderRadius = "15px";
  }
}

function back() {
  img_num--;
  if (img_num == 0) {
    img_num = 9;
  }

  if (img_num == 1) {
    slide_func();
    document.querySelector("#image-1").style.display = "block";
    document.querySelector("#p-slide").innerHTML = "1/9";
    document.querySelector("#circle-1").style.background = "rgb(70, 199, 99)";
    document.querySelector("#circle-1").style.width = "50%";
    document.querySelector("#circle-1").style.borderRadius = "15px";
  }

  if (img_num == 2) {
    slide_func();
    document.querySelector("#image-2").style.display = "block";
    document.querySelector("#p-slide").innerHTML = "2/9";
    document.querySelector("#circle-2").style.background = "rgb(70, 199, 99)";
    document.querySelector("#circle-2").style.width = "50%";
    document.querySelector("#circle-2").style.borderRadius = "15px";
  }

  if (img_num == 3) {
    slide_func();
    document.querySelector("#image-3").style.display = "block";
    document.querySelector("#p-slide").innerHTML = "3/9";
    document.querySelector("#circle-3").style.background = "rgb(70, 199, 99)";
    document.querySelector("#circle-3").style.width = "50%";
    document.querySelector("#circle-3").style.borderRadius = "15px";
  }

  if (img_num == 4) {
    slide_func();
    document.querySelector("#image-4").style.display = "block";
    document.querySelector("#p-slide").innerHTML = "4/9";
    document.querySelector("#circle-4").style.background = "rgb(70, 199, 99)";
    document.querySelector("#circle-4").style.width = "50%";
    document.querySelector("#circle-4").style.borderRadius = "15px";
  }

  if (img_num == 5) {
    slide_func();
    document.querySelector("#image-5").style.display = "block";
    document.querySelector("#p-slide").innerHTML = "5/9";
    document.querySelector("#circle-5").style.background = "rgb(70, 199, 99)";
    document.querySelector("#circle-5").style.width = "50%";
    document.querySelector("#circle-5").style.borderRadius = "15px";
  }
  if (img_num == 6) {
    slide_func();
    document.querySelector("#image-6").style.display = "block";
    document.querySelector("#p-slide").innerHTML = "6/9";
    document.querySelector("#circle-6").style.background = "rgb(70, 199, 99)";
    document.querySelector("#circle-6").style.width = "50%";
    document.querySelector("#circle-6").style.borderRadius = "15px";
  }
  if (img_num == 7) {
    slide_func();
    document.querySelector("#image-7").style.display = "block";
    document.querySelector("#p-slide").innerHTML = "7/9";
    document.querySelector("#circle-7").style.background = "rgb(70, 199, 99)";
    document.querySelector("#circle-7").style.width = "50%";
    document.querySelector("#circle-7").style.borderRadius = "15px";
  }
  if (img_num == 8) {
    slide_func();
    document.querySelector("#image-8").style.display = "block";
    document.querySelector("#p-slide").innerHTML = "8/9";
    document.querySelector("#circle-8").style.background = "rgb(70, 199, 99)";
    document.querySelector("#circle-8").style.width = "50%";
    document.querySelector("#circle-8").style.borderRadius = "15px";
  }
  if (img_num == 9) {
    slide_func();
    document.querySelector("#image-9").style.display = "block";
    document.querySelector("#p-slide").innerHTML = "9/";
    document.querySelector("#circle-9").style.background = "rgb(70, 199, 99)";
    document.querySelector("#circle-9").style.width = "50%";
    document.querySelector("#circle-9").style.borderRadius = "15px";
  }
}

setInterval(next, 3000);

// circle slide

function cir_1() {
  img_num = 1;
  slide_func();
  document.querySelector("#image-1").style.display = "block";
  document.querySelector("#p-slide").innerHTML = "1/9";
  document.querySelector("#circle-1").style.background = "rgb(70, 199, 99)";
  document.querySelector("#circle-1").style.width = "50%";
  document.querySelector("#circle-1").style.borderRadius = "15px";
}
function cir_2() {
  img_num = 2;
  slide_func();
  document.querySelector("#image-2").style.display = "block";
  document.querySelector("#p-slide").innerHTML = "2/9";
  document.querySelector("#circle-2").style.background = "rgb(70, 199, 99)";
  document.querySelector("#circle-2").style.width = "50%";
  document.querySelector("#circle-2").style.borderRadius = "15px";
}
function cir_3() {
  img_num = 3;
  slide_func();
  document.querySelector("#image-3").style.display = "block";
  document.querySelector("#p-slide").innerHTML = "3/9";
  document.querySelector("#circle-3").style.background = "rgb(70, 199, 99)";
  document.querySelector("#circle-3").style.width = "50%";
  document.querySelector("#circle-3").style.borderRadius = "15px";
}
function cir_4() {
  img_num = 4;
  slide_func();
  document.querySelector("#image-4").style.display = "block";
  document.querySelector("#p-slide").innerHTML = "4/9";
  document.querySelector("#circle-4").style.background = "rgb(70, 199, 99)";
  document.querySelector("#circle-4").style.width = "50%";
  document.querySelector("#circle-4").style.borderRadius = "15px";
}
function cir_5() {
  img_num = 5;
  slide_func();
  document.querySelector("#image-5").style.display = "block";
  document.querySelector("#p-slide").innerHTML = "5/9";
  document.querySelector("#circle-5").style.background = "rgb(70, 199, 99)";
  document.querySelector("#circle-5").style.width = "50%";
  document.querySelector("#circle-5").style.borderRadius = "15px";
}
function cir_6() {
  img_num = 6;
  slide_func();
  document.querySelector("#image-6").style.display = "block";
  document.querySelector("#p-slide").innerHTML = "6/9";
  document.querySelector("#circle-6").style.background = "rgb(70, 199, 99)";
  document.querySelector("#circle-6").style.width = "50%";
  document.querySelector("#circle-6").style.borderRadius = "15px";
}function cir_7() {
  img_num = 7;
  slide_func();
  document.querySelector("#image-7").style.display = "block";
  document.querySelector("#p-slide").innerHTML = "7/9";
  document.querySelector("#circle-7").style.background = "rgb(70, 199, 99)";
  document.querySelector("#circle-7").style.width = "50%";
  document.querySelector("#circle-7").style.borderRadius = "15px";
}function cir_8() {
  img_num = 8;
  slide_func();
  document.querySelector("#image-8").style.display = "block";
  document.querySelector("#p-slide").innerHTML = "8/9";
  document.querySelector("#circle-8").style.background = "rgb(70, 199, 99)";
  document.querySelector("#circle-8").style.width = "50%";
  document.querySelector("#circle-8").style.borderRadius = "15px";
}function cir_9() {
  img_num = 9;
  slide_func();
  document.querySelector("#image-9").style.display = "block";
  document.querySelector("#p-slide").innerHTML = "9/9";
  document.querySelector("#circle-9").style.background = "rgb(70, 199, 99)";
  document.querySelector("#circle-9").style.width = "50%";
  document.querySelector("#circle-9").style.borderRadius = "15px";
}

// class box anim

document.addEventListener("DOMContentLoaded", function () {
  const classBoxes = document.querySelectorAll(".class-box");

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
  classBoxes.forEach((box) => {
    observer.observe(box);
  });
});

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
    document.querySelector(".t-carts").style.translate = "400px";
  }
  if (arrow_cart == 3) {
    document.querySelector(".t-carts").style.translate = "800px";
  }
  if (arrow_cart == 4) {
    document.querySelector(".t-carts").style.translate = "1200px";
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
    document.querySelector(".t-carts").style.translate = "400px";
  }
  if (arrow_cart == 3) {
    document.querySelector(".t-carts").style.translate = "800px";
  }
  if (arrow_cart == 4) {
    document.querySelector(".t-carts").style.translate = "1200px";
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
    document.querySelector(".t-carts").style.translate = "400px";
  }
  if (arrow_cart == 3) {
    document.querySelector(".t-carts").style.translate = "800px";
  }
  if (arrow_cart == 4) {
    document.querySelector(".t-carts").style.translate = "1200px";
  }
  if (arrow_cart == 5) {
    document.querySelector(".t-carts").style.translate = "1600px";
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
    document.querySelector(".t-carts").style.translate = "400px";
  }
  if (arrow_cart == 3) {
    document.querySelector(".t-carts").style.translate = "800px";
  }
  if (arrow_cart == 4) {
    document.querySelector(".t-carts").style.translate = "1200px";
  }
  if (arrow_cart == 5) {
    document.querySelector(".t-carts").style.translate = "1600px";
  }
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

// gallery anim

document.addEventListener("DOMContentLoaded", function () {
  const classBoxes = document.querySelectorAll(".slider");

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
  classBoxes.forEach((box) => {
    observer.observe(box);
  });
});
