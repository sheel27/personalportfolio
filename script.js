document.addEventListener("DOMContentLoaded", function () {
  const navIcon = document.getElementById("navIcon");
  const navLinks = document.getElementById("navLinks");

  navIcon.addEventListener("click", function () {
    navLinks.classList.toggle("hidden");
  });
});
