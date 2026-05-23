const finePointer = window.matchMedia("(pointer: fine)");

const cursorFilter = document.createElement("div");
cursorFilter.className = "cursor-filter";
cursorFilter.setAttribute("aria-hidden", "true");
document.body.append(cursorFilter);

const maxPinnedFilters = 24;
const pinnedFilters = [];

let frame = 0;
let pointerX = 0;
let pointerY = 0;

function moveFilter() {
  frame = 0;
  cursorFilter.style.setProperty("--cursor-x", `${pointerX}px`);
  cursorFilter.style.setProperty("--cursor-y", `${pointerY}px`);
}

function addPinnedFilter(x, y) {
  const pinnedFilter = document.createElement("div");
  pinnedFilter.className = "cursor-filter cursor-filter--pinned";
  pinnedFilter.setAttribute("aria-hidden", "true");
  pinnedFilter.style.setProperty("--cursor-x", `${x}px`);
  pinnedFilter.style.setProperty("--cursor-y", `${y}px`);
  document.body.append(pinnedFilter);
  pinnedFilters.push(pinnedFilter);

  if (pinnedFilters.length > maxPinnedFilters) {
    pinnedFilters.shift().remove();
  }
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

window.addEventListener("click", (event) => {
  if (event.button !== 0) {
    return;
  }

  addPinnedFilter(event.clientX, event.clientY);
});
