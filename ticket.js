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

document.getElementById("tix-pay-button").addEventListener("click", () => {
    // Set a flag in localStorage
    localStorage.setItem("paymentSuccess", "true");
});
