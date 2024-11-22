const menuButton = document.getElementById("burger")
const navigationMenu = document.getElementById("nav-menu")

function openMenu() {
    if (navigationMenu.style.visibility === "visible") {
        navigationMenu.style.visibility = "hidden"
    } else {
        navigationMenu.style.visibility = "visible"
    }
}

menuButton.addEventListener('click', openMenu);