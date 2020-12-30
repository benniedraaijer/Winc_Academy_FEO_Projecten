const menuHeader = document.querySelector(".menu-header"),
  nav = document.querySelector(".nav"),
  ul = document.querySelector(".nav ul"),
  list = document.querySelectorAll(".nav li"),
  iconMenu = document.querySelector(".icon-menu"),
  colors = [
    "lightgray",
    "lightgreen",
    "lightskyblue",
    "red",
    "orange",
    "yellow",
    "purple",
    "salmon",
    "aqua",
    "deeppink",
  ];

const getNavStatus = (element, event) => {
  if (element === "btn") {
    if (event === "over") {
      toggleNav("expand");
    } else {
      toggleNav("collapse");
    }
  } else if (element === "header") {
    if (event === "over") {
      toggleNav("expand");
    } else {
      toggleNav("collapse");
    }
  } else if (element === "nav-A") {
    if (nav.offsetWidth > 60) {
      toggleNav("expand");
    }
  } else {
    if (nav.offsetWidth > 60) {
      toggleNav("collapse");
    }
  }
};

const toggleNav = parameter => {
  if (parameter === "expand") {
    menuHeader.style.width = "125px";
    nav.style.width = "175px";
    ul.style.visibility = "visible";
  } else {
    menuHeader.style.width = "0";
    nav.style.width = "50px";
    ul.style.visibility = "hidden";
  }
};

list.forEach(item => {
  item.onclick = item => {
    document.body.style.backgroundColor = item.target.id;
    document.querySelector("h1").innerHTML = item.target.id;
    iconMenu.style.color = item.target.id;
  };
});

document.onkeypress = element => {
  if (isNaN(element.key) === false) {
    document.body.style.backgroundColor = colors[element.key];
    document.querySelector("h1").innerHTML = colors[element.key];
    iconMenu.style.color = colors[element.key];
  }
};
