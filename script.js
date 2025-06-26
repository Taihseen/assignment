// script.js

// Logs when the script is loaded
console.log('Script loaded');

// Theme toggle logic
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.createElement("button");
  themeToggle.innerText = "Toggle Theme";
  themeToggle.style.position = "fixed";
  themeToggle.style.top = "1rem";
  themeToggle.style.right = "1rem";
  themeToggle.style.padding = "0.5rem 1rem";
  themeToggle.style.background = "#000";
  themeToggle.style.color = "#fff";
  themeToggle.style.border = "none";
  themeToggle.style.borderRadius = "5px";
  themeToggle.style.cursor = "pointer";
  document.body.appendChild(themeToggle);

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
  });
});
