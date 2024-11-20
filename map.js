const menuButton = document.getElementById("burger")
const navigationMenu = document.getElementById("nav-menu")
const filterTab = document.getElementById("filter-tab")

function openMenu() {
    if (navigationMenu.style.visibility === "visible") {
        navigationMenu.style.visibility = "hidden"
    } else {
        navigationMenu.style.visibility = "visible"
    }
}

function openFilter() {
    filterTab.style.marginTop = "150px"
    
}

menuButton.addEventListener('click', openMenu);
filterTab.addEventListener('click', openFilter)