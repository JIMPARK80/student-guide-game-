let points = 0; // Initialize points
let badges = 0; // Initialize badges

// Function to update points
function updatePoints(value) {
    points += value; // Add value to points
    document.getElementById('points').innerText = points; // Update points display
}

// Function to update badges
function updateBadges(value) {
    badges += value; // Add value to badges
    document.getElementById('badges').innerText = badges; // Update badges display
}

// Example: When a game is completed, increase points and badges
// updatePoints(10); // Add 10 points
// updateBadges(1); // Add 1 badge
