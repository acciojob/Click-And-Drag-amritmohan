document.querySelectorAll('.item').forEach(item => {
    let isDragging = false, offsetX, offsetY;

    item.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - item.getBoundingClientRect().left;
        offsetY = e.clientY - item.getBoundingClientRect().top;
        item.style.position = 'absolute';
        item.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        let container = document.querySelector('.container');
        let containerRect = container.getBoundingClientRect();
        let itemRect = item.getBoundingClientRect();

        let newX = e.clientX - offsetX;
        let newY = e.clientY - offsetY;

        // Ensure the item stays within the container
        newX = Math.max(containerRect.left, Math.min(newX, containerRect.right - itemRect.width));
        newY = Math.max(containerRect.top, Math.min(newY, containerRect.bottom - itemRect.height));

        item.style.left = (newX - containerRect.left) + 'px';
        item.style.top = (newY - containerRect.top) + 'px';
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        item.style.cursor = 'grab';
    });
});
