document.querySelectorAll('.item').forEach(item => {
    let offsetX, offsetY, isDragging = false;

    item.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - item.offsetLeft;
        offsetY = e.clientY - item.offsetTop;
        item.style.position = 'absolute';
        item.style.zIndex = 1000;  // Bring the dragged item to the front
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            let itemsContainer = document.querySelector('.items');
            let containerRect = itemsContainer.getBoundingClientRect();

            let newX = e.clientX - offsetX;
            let newY = e.clientY - offsetY;

            // Ensure the item stays within the container boundaries
            let maxX = containerRect.width - item.offsetWidth;
            let maxY = containerRect.height - item.offsetHeight;

            newX = Math.max(0, Math.min(newX, maxX));
            newY = Math.max(0, Math.min(newY, maxY));

            item.style.left = newX + 'px';
            item.style.top = newY + 'px';
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        item.style.zIndex = 1;  // Reset stacking order
    });
});
