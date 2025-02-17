document.addEventListener("DOMContentLoaded", function () {
  const itemsContainer = document.querySelector(".items");
  let isDragging = false;
  let startX;
  let scrollLeft;

  // Prevent text selection during drag
  itemsContainer.style.userSelect = "none";

  itemsContainer.addEventListener("mousedown", (e) => {
    isDragging = true;
    itemsContainer.classList.add("active");
    startX = e.pageX - itemsContainer.offsetLeft;
    scrollLeft = itemsContainer.scrollLeft;
  });

  itemsContainer.addEventListener("mouseleave", () => {
    isDragging = false;
    itemsContainer.classList.remove("active");
  });

  itemsContainer.addEventListener("mouseup", () => {
    isDragging = false;
    itemsContainer.classList.remove("active");
  });

  itemsContainer.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - itemsContainer.offsetLeft;
    const walk = (x - startX) * 1.5; // Adjust the scroll speed
    itemsContainer.scrollLeft = scrollLeft - walk;
  });

  // Ensure the drag works on touch devices as well
  itemsContainer.addEventListener("touchstart", (e) => {
    startX = e.touches[0].pageX - itemsContainer.offsetLeft;
    scrollLeft = itemsContainer.scrollLeft;
    isDragging = true;
  });

  itemsContainer.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - itemsContainer.offsetLeft;
    const walk = (x - startX) * 1.5;
    itemsContainer.scrollLeft = scrollLeft - walk;
  });

  itemsContainer.addEventListener("touchend", () => {
    isDragging = false;
  });
});
