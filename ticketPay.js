const menuButton = document.getElementById("burger")
const navigationMenu = document.getElementById("nav-menu")

sessionStorage.setItem("deleteFine", "false")

function openMenu() {
    if (navigationMenu.style.visibility === "visible") {
        navigationMenu.style.visibility = "hidden"
    } else {
        navigationMenu.style.visibility = "visible"
    }
}

document.getElementById("pay-button").addEventListener("click", () => {
    // Set a flag in localStorage
    sessionStorage.setItem("deleteFine", "true")
});

menuButton.addEventListener('click', openMenu);
