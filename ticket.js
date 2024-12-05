const menuButton = document.getElementById("burger")
const navigationMenu = document.getElementById("nav-menu")
let fine1 = document.getElementById("fineSubgrid")

let df = sessionStorage.getItem("deleteFine");
console.log(fine1)

if(df === "true"){
    fine1.style.display = "none"
}

function openMenu() {
    if (navigationMenu.style.visibility === "visible") {
        navigationMenu.style.visibility = "hidden"
    } else {
        navigationMenu.style.visibility = "visible"
    }
    console.log(df)
}

menuButton.addEventListener('click', openMenu);

document.getElementById("tix-pay-button").addEventListener("click", () => {
    // Set a flag in localStorage
    localStorage.setItem("paymentSuccess", "true");
});
