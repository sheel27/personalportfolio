
function toggleNavbar() {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('show');
}

const navIcon = document.getElementById('navIcon');
navIcon.onclick = toggleNavbar;
