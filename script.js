function Menu(e) {
  let list = document.querySelector("ul");

  e.name === "menu" ?
    (e.name = "close",
    list.classList.add("top-[80px]"),
    list.classList.add("opacity-100"),
    list.classList.add("bg-gray-200"))
  :
    (e.name = "menu",
    list.classList.remove("top-[80px]");
    list.classList.remove("opacity-100"),
    list.classList.remove("bg-gray-200")) 
  }
