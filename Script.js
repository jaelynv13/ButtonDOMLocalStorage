const clickCountDisplay = document.getElementById('click-count');
        const header = document.getElementById('header');
        const button = document.getElementById('click-button');
       
//1.Add a comment here explaining the let clickCount variable
// The let Clickcount varaible  gives you an item afer you click and counts the amount of clicks.
        let clickCount = localStorage.getItem('clickCount') ? parseInt(localStorage.getItem('clickCount')) : 0;

        // Update display on load
        clickCountDisplay.textContent = clickCount;
        updateUI();

//2.Explain what this event listener function does (and what function it calls).
// The event listener fucction adds the sound of a click after hitting the button and calls the clicking function.
        // Add event listener to button
        button.addEventListener('click', () => {
            clickCount++;
            localStorage.setItem('clickCount', clickCount);
            clickCountDisplay.textContent = clickCount;
            updateUI();
        });

//3.Explain what function updateUI does and is holding the colors and texts
// The function updateUI assigns colors to the const texts 
        function updateUI() {
            const colors = ['#FF5733', '#33FF57', '#3357FF', '#F5A623', '#E91E63'];
            const texts = [
                'Keep going!',
                'Great job!',
                'You are amazing!',
                'Fantastic!',
                'Click click hooray!'
            ];

            const randomIndex = Math.floor(Math.random() * colors.length);
            document.body.style.backgroundColor = colors[randomIndex];
            header.textContent = texts[randomIndex];
        }
