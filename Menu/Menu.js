class MenuItem
{
  constructor(element)
  {
    this.element = element;
    this.element.addEventListener("mouseover", x => {this.onhover(true); x.preventDefault();});
    this.element.addEventListener("mouseout", x=> {this.onhover(false); x.preventDefault();});
  }
  onhover(focus)
  {
    this.element.style.background = focus ? "#2c442d" : "#81C784";
    //console.log("hello");
  }
}

const menubutton = document.querySelector(".menu-button")
const menu = document.querySelector(".menu");
[...menu.querySelectorAll("li")].map(x =>new MenuItem(x))
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  menu.classList.toggle("menu--open");
  console.log("hello");
}
menu.onmouseleave = toggleMenu;
menubutton.addEventListener("click", toggleMenu);