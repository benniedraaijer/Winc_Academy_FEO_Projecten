const menuHeader = document.querySelector('.menu-header'),
    nav = document.querySelector('.nav'),
    ul = document.querySelector('.nav ul'),
    list = document.querySelectorAll('.nav li'),
    iconMenu = document.querySelector('.icon-menu'),
    colors = ['lightgray', 'lightgreen', 'lightskyblue', 'red', 'orange', 'yellow', 'purple', 'salmon', 'aqua', 'deeppink'];

const getNavStatus = (element, event) => {
    if (element === 'btn') {
        if (event === 'over') {
            toggleNav('expand');
        } else {
            toggleNav('collapse');
        }
    } else if (element === 'header') {
        if (event === 'over') {
            toggleNav('expand');
        } else {
            toggleNav('collapse');
        }
    } else if (element === 'nav-A') {
        if (nav.offsetWidth > 60) {
            toggleNav('expand');
        } else {}
    } else {
        if (nav.offsetWidth > 60) {
            toggleNav('collapse');
        } else {}
    }
}

const toggleNav = (parameter) => {
    if (parameter === 'expand') {
        menuHeader.style.width = '125px';
        menuHeader.style.transition = 'ease-in-out 0.5s';
        nav.style.width = '175px';
        nav.style.transition = 'ease-in-out  0.5s';
        ul.style.visibility = 'visible';
        ul.style.color = 'white';
    } else {
        menuHeader.style.width = '0';
        nav.style.width = '50px';
        ul.style.visibility = 'hidden';
        ul.style.color = 'white';
    }
}

list.forEach((list) => {
    list.onclick = (element) => {
        document.body.style.backgroundColor = element.target.id;
        document.querySelector('h1').innerHTML = element.target.id;
        iconMenu.style.color = element.target.id;
    };
});

document.onkeypress = (element) => {
    document.body.style.backgroundColor = colors[element.key];
    iconMenu.style.color = colors[element.key];
};