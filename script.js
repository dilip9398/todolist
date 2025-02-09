// Get the roadmap container
const roadmap = document.getElementById('roadmap');
if (!roadmap) {
    console.error("Roadmap element not found!");
}

let currentPhase = 0;

// Function to show a specific phase
function showPhase(phaseIndex) {
    if (!roadmap) return;

    const phaseWidth = roadmap.offsetWidth; // Width of one phase
    roadmap.style.transform = `translateX(-${phaseIndex * phaseWidth}px)`;

    // Add glowing effect to active phase button
    document.querySelectorAll('.phase-button').forEach((button, index) => {
        if (index === phaseIndex) {
            button.style.boxShadow = '0 0 15px 5px rgba(255, 215, 0, 0.8)';
        } else {
            button.style.boxShadow = '0 5px 15px rgba(255, 215, 0, 0.4)';
        }
    });
}

// Add interactivity to the to-do list
document.querySelectorAll('.task-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const taskItem = checkbox.closest('.task-item');
        if (taskItem) {
            if (checkbox.checked) {
                taskItem.classList.add('completed');
                taskItem.style.animation = 'glowGreen 0.8s ease-in-out'; // Trigger glowing animation
            } else {
                taskItem.classList.remove('completed');
                taskItem.style.animation = 'none'; // Reset animation
            }
        }
    });
});

// Keyframe Animations for Glow Effects
const styleSheet = document.createElement('style');
styleSheet.innerHTML = `
    @keyframes glowGreen {
        0% { border-color: #ffd700; box-shadow: 0 0 10px #ffd700; }
        50% { border-color: #32cd32; box-shadow: 0 0 20px #32cd32; }
        100% { border-color: #32cd32; box-shadow: 0 0 10px #32cd32; }
    }
`;
document.head.appendChild(styleSheet);