const menuButton = document.getElementById("burger")
const navigationMenu = document.getElementById("nav-menu")
const filterTab = document.getElementById("filter-tab")
const filterTabClosed = document.getElementById("filter-closed")
const filterUp = document.getElementById("filter-up")
const applyButton = document.getElementById("apply-button")
const regularMap = document.getElementById("regular-map")
const coloredMap = document.getElementById("colored-map")

const parkingLeft = document.getElementById("parking-left")
const parkingRight = document.getElementById("parking-right")
const locationLeft = document.getElementById("location-left")
const locationRight = document.getElementById("parking-right")
// const parkingButtons = document.getElementById("parking-buttons")
// const filterClosed = document.getElementById("filter-closed")
// const filterBottom = document.getElementById("filter-bottom")

function openMenu() {
    if (navigationMenu.style.visibility === "visible") {
        navigationMenu.style.visibility = "hidden"
    } else {
        navigationMenu.style.visibility = "visible"
    }
}

function openFilter() {
    filterTabClosed.style.visibility = "hidden"
    filterUp.style.visibility = "visible"
    
}

function closeFilter() {
    filterTabClosed.style.visibility = "visible"
    filterUp.style.visibility = "hidden"
}

menuButton.addEventListener('click', openMenu);
filterTab.addEventListener('click', closeFilter)
filterTabClosed.addEventListener('click', openFilter)
applyButton.addEventListener('click', () => {
    closeFilter()
    regularMap.style.visibility = "hidden"
    coloredMap.style.visibility = "visible"
})

const parkingButtons = document.querySelectorAll("#parking-buttons button")
parkingButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.style.backgroundColor === "rgb(140, 25, 25)") {
            button.style.backgroundColor = "rgb(212, 32, 32)"
        } else {
            button.style.backgroundColor = "rgb(140, 25, 25)"
        }   
    })
})

const locationButtons = document.querySelectorAll("#location-buttons button")
locationButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.style.backgroundColor === "rgb(140, 25, 25)") {
            button.style.backgroundColor = "rgb(212, 32, 32)"
        } else {
            button.style.backgroundColor = "rgb(140, 25, 25)"
        }   
    })
})

function scrollContainerToCenter(containerId) {
    const container = document.getElementById(containerId)
    const scrollLeft = container.scrollWidth / 2 - container.clientWidth / 2
    const scrollTop = container.scrollHeight / 2 - container.clientHeight / 2
    container.scrollTo(scrollLeft, scrollTop)
}


scrollContainerToCenter("screen")

// DOMContentLoaded needed to prevent bug in carosels
// found on mdn docs
document.addEventListener('DOMContentLoaded', () => {
    function scrollLeft(carouselId) {
        const carousel = document.getElementById(carouselId);
        if (carousel) {
            carousel.scrollBy({
                left: -150,
                behavior: 'smooth'
            });
        }
    }

    function scrollRight(carouselId) {
        const carousel = document.getElementById(carouselId);
        if (carousel) {
            carousel.scrollBy({
                left: 150,
                behavior: 'smooth'
            });
        }
    }

    const locationLeft = document.getElementById('location-left')
    const locationRight = document.getElementById('location-right')
    const parkingLeft = document.getElementById('parking-left')
    const parkingRight = document.getElementById('parking-right')

    locationLeft.addEventListener('click', () => scrollLeft('location-buttons'))
    locationRight.addEventListener('click', () => scrollRight('location-buttons'))
    parkingLeft.addEventListener('click', () => scrollLeft('parking-buttons'))
    parkingRight.addEventListener('click', () => scrollRight('parking-buttons'))
});


