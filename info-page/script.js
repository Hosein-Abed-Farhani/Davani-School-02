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
