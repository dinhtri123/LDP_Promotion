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

  // vongquay
  const value = "iPhone";

  const gift = [
    "iPhone",
    "sacduphong",
    "logo",
    "sacduphong",
    "loa",
    "tainghe",
    "loa",
    "sacduphong",
    "tainghe",
    "sacduphong",
    "loa",
    "sacduphong",
  ];
  const soOQua = gift.length;
  const gocMotO = 360 / soOQua;
  const oTrungThuong = gift.indexOf(value);

  document
    .querySelector(".lucky-icon-btn")
    .addEventListener("click", function () {
      if (oTrungThuong === -1) {
        alert("Không tìm thấy quà");
        return;
      }
      const vongquay = document.querySelector(".vongquay");
      const soVong = 4;
      const gocLech = 30;
      const gocQuay =
        soVong * 360 - oTrungThuong * gocMotO + (gocMotO / 2 - gocLech);

      vongquay.style.transform = `rotate(${gocQuay}deg)`;

      setTimeout(() => {
        document.querySelector(".popup.popup-quaythuong").classList.add("active");
        const popupImg = document.querySelector(".popup-quaythuong .popup-img");
        switch (value) {
          case "iPhone":
            popupImg.src = `./images/iPhone.svg`;
            break;
          case "tainghe":
            popupImg.src = `./images/tainghe.svg`;
            break;
          case "loa":
            popupImg.src = `./images/loa.svg`;
            break;
          default:
            popupImg.src = `./images/sacduphong.svg`;
        }

      }, 4000);
    });

  // popup
  const btnClose = document.querySelectorAll(".btn-close-popup");
  btnClose.forEach((item) => {
    item.addEventListener("click", function () {
      item.closest(".popup").classList.remove("active");
    });
  });
});
