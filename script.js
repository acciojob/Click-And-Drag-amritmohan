document.addEventListener("DOMContentLoaded", function () {
  const itemsContainer = document.querySelector(".items");
  let isDragging = false;
  let startX;
  let scrollLeft;

  // Prevent text selection during drag
  itemsContainer.style.userSelect = "none";

  // Mouse Down Event: Start dragging
  itemsContainer.addEventListener("mousedown", (e) => {
    isDragging = true;
    itemsContainer.classList.add("active");
    startX = e.pageX - itemsContainer.offsetLeft;
    scrollLeft = itemsContainer.scrollLeft;
  });

  // Mouse Leave Event: Stop dragging when mouse leaves the container
  itemsContainer.addEventListener("mouseleave", () => {
    isDragging = false;
    itemsContainer.classList.remove("active");
  });

  // Mouse Up Event: Stop dragging when mouse is released
  itemsContainer.addEventListener("mouseup", () => {
    isDragging = false;
    itemsContainer.classList.remove("active");
  });

  // Mouse Move Event: Update the position of the container while dragging
  itemsContainer.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - itemsContainer.offsetLeft;
    const walk = (x - startX) * 1.5; // Adjust the scroll speed
    itemsContainer.scrollLeft = scrollLeft - walk;
  });

  // Ensure the drag works on touch devices as well (Mobile support)
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
