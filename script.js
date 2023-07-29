function Menu(e) {
  let list = document.querySelector("ul");
  let nav = document.querySelector("nav");

  if (e.name === "menu") {
    e.name = "close";
    list.classList.add("top-[80px]");
    list.classList.add("opacity-100");
    list.classList.add("bg-gray-200"); // Add the Tailwind CSS class for background color
  } else {
    e.name = "menu";
    list.classList.remove("top-[80px]");
    list.classList.remove("opacity-100");
    list.classList.remove("bg-gray-200"); // Remove the Tailwind CSS class for background color
  }
}
