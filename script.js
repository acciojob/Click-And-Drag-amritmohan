document.querySelectorAll('.item').forEach(item => {
    let offsetX, offsetY, isDragging = false;

    item.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - item.getBoundingClientRect().left;
        offsetY = e.clientY - item.getBoundingClientRect().top;
        item.style.position = 'absolute';
        item.style.zIndex = 1000;  // Bring the dragged item to the front
        item.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        let container = document.querySelector('.items');
        let containerRect = container.getBoundingClientRect();
        let itemRect = item.getBoundingClientRect();

        let newX = e.clientX - offsetX;
        let newY = e.clientY - offsetY;

        // Ensure the item stays within the container
        let minX = containerRect.left;
        let maxX = containerRect.right - itemRect.width;
        let minY = containerRect.top;
        let maxY = containerRect.bottom - itemRect.height;

        newX = Math.max(minX, Math.min(newX, maxX));
        newY = Math.max(minY, Math.min(newY, maxY));

        // Set new position
        item.style.left = newX - containerRect.left + 'px';
        item.style.top = newY - containerRect.top + 'px';
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        item.style.zIndex = 1;  // Reset stacking order
        item.style.cursor = 'grab';
    });
});
