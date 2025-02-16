// Your code here.

document.addEventListener("DOMContentLoaded", function () {
  const itemsContainer = document.querySelector(".items");
  let selectedItem = null;
  let offsetX = 0;
  let offsetY = 0;

  document.querySelectorAll(".item").forEach((item) => {
    item.addEventListener("mousedown", (e) => {
      selectedItem = e.target;
      const rect = selectedItem.getBoundingClientRect();
      
      // Calculate offset between click position and item position
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;

      // Change style to indicate dragging
      selectedItem.style.position = "absolute";
      selectedItem.style.zIndex = "1000";
      selectedItem.style.cursor = "grabbing";

      moveAt(e.pageX, e.pageY);

      function moveAt(pageX, pageY) {
        // Ensure the cube stays inside the boundary
        const containerRect = itemsContainer.getBoundingClientRect();
        const itemRect = selectedItem.getBoundingClientRect();

        let newX = pageX - offsetX;
        let newY = pageY - offsetY;

        // Prevent moving out of container
        if (newX < containerRect.left) newX = containerRect.left;
        if (newY < containerRect.top) newY = containerRect.top;
        if (newX + itemRect.width > containerRect.right) newX = containerRect.right - itemRect.width;
        if (newY + itemRect.height > containerRect.bottom) newY = containerRect.bottom - itemRect.height;

        selectedItem.style.left = `${newX}px`;
        selectedItem.style.top = `${newY}px`;
      }

      function onMouseMove(e) {
        moveAt(e.pageX, e.pageY);
      }

      document.addEventListener("mousemove", onMouseMove);

      document.addEventListener("mouseup", function onMouseUp() {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
        
        // Reset styles after dropping
        selectedItem.style.cursor = "grab";
        selectedItem = null;
      });
    });
  });
});
