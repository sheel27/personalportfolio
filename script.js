// function Menu(e) {
//   let list = document.querySelector("ul");

//   e.name === "menu"
//     ? ((e.name = "close"),
//       list.classList.add("top-[80px]"),
//       list.classList.add("opacity-100"))
//     : ((e.name = "menu"),
//       list.classList.remove("top-[80px]"),
//       list.classList.remove("opacity-100"));
// }

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

// const scriptURL = "https://script.google.com/macros/s/AKfycbxl75e66JY-xjUuUPXKAMOafKFGp4viZJY4L8Rlow6rkudD39EcmM1KVb5mlKv-q4BrQg/exec";
// const form = document.forms["submit-to-google-sheet"];

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   fetch(scriptURL, { method: "POST", body: new FormData(form) })
//     .then((response) => console.log("Success!", response))
//     .catch((error) => console.error("Error!", error.message));
// });
