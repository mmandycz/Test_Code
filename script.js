// Set the year in the footer automatically
document.getElementById("year").textContent = new Date().getFullYear();

// Add a click event to the button
const btn = document.getElementById("hello-btn");
btn.addEventListener("click", () => {
  alert("Hello from your own code!");
  console.log("Button was clicked!");
});
