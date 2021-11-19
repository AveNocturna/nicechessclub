let links = document.querySelectorAll(".link");

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
        hideMenuWhenClick();
        colorLinksWhenClick(this);
    });
}

//To color the links when click
const colorLinksWhenClick = (e) => {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    e.className += " active";
}

//To hide the menu when clcik on a link
const hideMenuWhenClick = () => {
    let hamburgerCheck = document.getElementById("check");
    if (hamburgerCheck.checked) {
        hamburgerCheck.checked = false;
    }
}


