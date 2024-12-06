const menuButton = document.getElementById("burger")
const navigationMenu = document.getElementById("nav-menu")
const topBanner = document.getElementById("headbar")
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

window.addEventListener("DOMContentLoaded", () => {
    // Check for the flag in localStorage
    const disputed = sessionStorage.getItem("disputed");
    
    if (disputed === "true") {
        // Show success banner
        const banner = document.createElement("div");
        banner.className = "popup-banner";
        banner.textContent = "Dispute Submitted!";
        
        topBanner.appendChild(banner);
        
        // Remove banner after 3 seconds
        setTimeout(() => {
            topBanner.removeChild(banner);
        }, 3000);
        
        // Clear the flag
        sessionStorage.removeItem("disputed");
    }
});