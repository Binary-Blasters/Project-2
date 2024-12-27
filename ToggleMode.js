let mode = "dark";
let nav = document.getElementById("nav");

const toggleMode = () => {
  if (mode === "dark") {
    mode = "light";
    nav.classList.remove("bg-light", "text-black-50");
    nav.classList.add("bg-dark", "text-white");
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";

    
    changeBrd();
  } else {
    mode = "dark";
    nav.classList.remove("bg-dark", "text-white");
    nav.classList.add("bg-light", "text-black-50");
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";

    
    changeBrd();
  }
};
function changeBrd() {
  let brd = document.querySelectorAll(".Brd");

  brd.forEach((brds) => {
    if (mode === "dark") {
      brds.classList.remove("dark");
      brds.classList.add("white");
    } else {
      brds.classList.remove("white");
      brds.classList.add("dark");
    }
  });
}
