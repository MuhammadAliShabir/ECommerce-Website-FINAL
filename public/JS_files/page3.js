document.addEventListener('DOMContentLoaded', () => {
    const tennisBtn = document.getElementById('tennisBtn');

    tennisBtn.addEventListener('click', () => {
        // Scroll to the first section
        document.querySelector('#tenRack').scrollIntoView({ behavior: 'smooth' });

        // Add a delay between scrolling to the sections (optional)
        setTimeout(() => {
            // Scroll to the second section
            document.querySelector('#tenBall').scrollIntoView({ behavior: 'smooth' });
        }, 2000); // Adjust the delay time as needed
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const footBallBtn = document.getElementById('footballBtn');

    footBallBtn.addEventListener('click', () => {
        // Scroll to the first section
        document.querySelector('#futBall').scrollIntoView({ behavior: 'smooth' });

        // Add a delay between scrolling to the sections (optional)
        setTimeout(() => {
            // Scroll to the second section
            document.querySelector('#golGloves').scrollIntoView({ behavior: 'smooth' });
        }, 2000); // Adjust the delay time as needed
    });
});


