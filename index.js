document.addEventListener("DOMContentLoaded", function () {
  const gifSlider = document.querySelector(".gif-slider");
  if (gifSlider) {
    const gifThumbWrapper = gifSlider.querySelector(
      ".gif-thumb .swiper-wrapper"
    );
    const gifInfo = document.querySelector(".gif-info");
    const sliderGif = Array.from(
      document.querySelectorAll(".gif-thumb .swiper-slide")
    );
    const observer = new MutationObserver((mutationsList) => {
      for (let mutation of mutationsList) {
        if (mutation.attributeName === "style") {
          sliderGif.map((item) => {
            if (item.classList.contains("swiper-slide-active")) {
              const getDataValue = item.dataset.value;
              gifInfo.textContent = getDataValue;
            }
          });
        }
      }
    });

    observer.observe(gifThumbWrapper, {
      attributes: true,
    });
  }
  // menu
  const iconMenu = document.querySelector(".header-icon-menu");
  const btnCloseMenu = document.querySelector(".header-icon-close");
  const navMenu = document.querySelector("header nav");
  iconMenu.addEventListener("click", function () {
    navMenu.classList.add("active");
  });
  btnCloseMenu.addEventListener("click", function () {
    navMenu.classList.remove("active");
  });

  // popup
  const btnClose = document.querySelectorAll(".btn-close-popup");
  btnClose.forEach((item) => {
    item.addEventListener("click", function () {
      item.closest(".popup").classList.remove("active");
    });
  });
});
