const finePointer = window.matchMedia("(pointer: fine)");

const cursorFilter = document.createElement("div");
cursorFilter.className = "cursor-filter";
cursorFilter.setAttribute("aria-hidden", "true");
document.body.append(cursorFilter);

let frame = 0;
let pointerX = 0;
let pointerY = 0;

function moveFilter() {
  frame = 0;
  cursorFilter.style.setProperty("--cursor-x", `${pointerX}px`);
  cursorFilter.style.setProperty("--cursor-y", `${pointerY}px`);
}

window.addEventListener("pointermove", (event) => {
  if (!finePointer.matches || event.pointerType === "touch") {
    return;
  }

  pointerX = event.clientX;
  pointerY = event.clientY;
  cursorFilter.classList.add("is-active");

  if (!frame) {
    frame = window.requestAnimationFrame(moveFilter);
  }
});

window.addEventListener("pointerleave", () => {
  cursorFilter.classList.remove("is-active");
});
