// Get a reference to the button and the counter
const button = document.getElementById('my-button');
const counter = document.getElementById('counter');

// Set an initial value for the counter
let count = 0;

// Listen for clicks on the button
button.addEventListener('click', function() {
  // Increase the count by 1
  count += 1;
});