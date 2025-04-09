//// scripts.js
// 1. Validate email format
function validateEmail(email) {
  return email.includes('@') && email.includes('.');
}

console.log(validateEmail("test@example.com")); // true


// 2. Get a random featured event
const events = ["Spring Festival", "Tech Meetup", "Charity Run"];
function getRandomEvent() {
  const index = Math.floor(Math.random() * events.length);
  return events[index];
}
console.log(`Featured Event: ${getRandomEvent()}`);



// 3. Calculate total menu cost (simulate an order)
const menuPrices = [12.99, 8.50, 14.75];
function getTotalPrice() {
  return menuPrices.reduce((total, price) => total + price, 0).toFixed(2);
}
console.log(`Total Order: $${calculateTotal(menuPrices)}`);


// 4. Store feedback messages
let feedbackList = [];
function addFeedback(message) {
  feedbackList.push(message);
  return feedbackList;
}
console.log(addFeedback("This event center is amazing!"));

// 5. Auto-fill form data (for testing/demo)
function fillForm() {
  document.getElementById('name').value = "John Doe";
  document.getElementById('email').value = "john@example.com";
  document.getElementById('message').value = "Looking forward to your next event!";
}