// navbar slide
const input = document.querySelector(".input-btn");
const menuList = document.querySelector(".menu-list");
const body = document.querySelector("body");

input.addEventListener("click", () => {
  if (input.checked === true) {
    menuList.classList.add("slide");
    body.style.overflow = "hidden";
    return;
  }
  body.style.overflowY = "auto";
  menuList.classList.remove("slide");
  return;
});

const rippleButton = document.querySelectorAll(".btn-visit");

function mousePositionCustomProp(event, element) {
  // var posisi
  let posX = event.offsetX;
  let posY = event.offsetY;

  // Memberikan var ke css dan diisi dengan variable posisi.
  // nama variable di argument pertama dan isinya di argument kedua
  element.style.setProperty("--x", posX + "px");
  element.style.setProperty("--y", posY + "px");
}

rippleButton.forEach((i) => {
  // mousedown ketika mouse kanan diklik maka fungsi eventlister akan jalan
  i.addEventListener("click", (e) => {
    mousePositionCustomProp(e, i);

    i.classList.add("pulse");

    //   kalau animasi sudah selesai maka akan masuk ke fungsi evenlistener.
    i.addEventListener("animationend", () => {
      i.classList.remove("pulse");
    });
  });
});
