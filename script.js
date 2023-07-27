function Menu(e) {
  let list = document.querySelector("ul");
  let nav = document.querySelector("nav");

//   if (e.name === "menu") {
//     e.name = "close";
//     list.classList.add("top-[80px]");
//     list.classList.add("opacity-100");
//     list.classList.add("bg-gray-200"); 
//   } else {
//     e.name = "menu";
//     list.classList.remove("top-[80px]");
//     list.classList.remove("opacity-100");
//     list.classList.remove("bg-gray-200"); 
//   }
// }

 if (e.getAttribute("name") === "menu") {
    e.setAttribute("name", "close");
    list.classList.add("top-[80px]");
    list.classList.add("opacity-100");
    list.classList.add("bg-gray-200"); 
  } else {
    e.setAttribute("name", "menu");
    list.classList.remove("top-[80px]");
    list.classList.remove("opacity-100");
    list.classList.remove("bg-gray-200");
  }
}
