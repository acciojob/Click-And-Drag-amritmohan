// Your code here.

document.addEventListener("DOMContentLoaded", function () {
  const itemsContainer = document.querySelector(".items");
  let isDragging = false;
  let startX;
  let scrollLeft;

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
    const walk = (x - startX) * 2; // Adjust the scroll speed
    itemsContainer.scrollLeft = scrollLeft - walk;
  });
});
