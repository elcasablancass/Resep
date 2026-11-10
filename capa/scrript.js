 const canvas = document.getElementById('signatureCanvas');
        const ctx = canvas.getContext('2d');
        let isDrawing = false;

        // Ensure the canvas is the correct size
        canvas.width = window.innerWidth; // Or set a fixed width
        canvas.height = 200; // Set a fixed height

        // Handle mouse down event
        canvas.addEventListener('mousedown', (e) => {
            isDrawing = true;
            ctx.beginPath(); // Start a new path for the drawing
            ctx.moveTo(e.offsetX, e.offsetY); // Set the starting point
        });

        // Handle mouse move event to draw on the canvas
        canvas.addEventListener('mousemove', (e) => {
            if (isDrawing) {
                ctx.lineTo(e.offsetX, e.offsetY);
                ctx.stroke(); // Draw a line
            }
        });

        // Handle mouse up event to stop drawing
        canvas.addEventListener('mouseup', () => {
            isDrawing = false;
        });

        // Handle mouse leave event to stop drawing if mouse leaves canvas
        canvas.addEventListener('mouseleave', () => {
            isDrawing = false;
        });

        // Clear the canvas
        document.getElementById('clearCanvas').addEventListener('click', () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
        });