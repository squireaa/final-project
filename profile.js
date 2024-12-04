import data from "./profileData.json" with {type: 'json'};

// DOM elements
const profileContent = document.getElementById("profile-content");
const profileEditContent = document.getElementById("profile-edit-content");
const editButton = document.getElementById("profile-edit-id");
const saveButton = document.getElementById("profile-save-id");
const logoutButton = document.querySelector(".profile-logout-button");
const menuButton = document.getElementById("burger");
const navigationMenu = document.getElementById("nav-menu");
const screen = document.getElementById("screen");
// Populate Content
function renderContent(isEditMode = false) {
    const container = isEditMode ? profileEditContent : profileContent;
    container.innerHTML = data.map((item, index) => `
        <div class="profile-data">
            <div class="profile-item">${item.item_text}</div>
            <div class="profile-ans">
                ${isEditMode 
                    ? `<input class="profile-answer-input" id="input-${index}" type="text" value="${item.answer}" />`
                    : `<span>${item.answer}</span>`}
            </div>
        </div>`).join("");
}

// Switch Modes
function toggleMode(isEditMode) {
    profileContent.classList.toggle("profile-edit-hidden", isEditMode);
    profileEditContent.classList.toggle("profile-edit-hidden", !isEditMode);
    editButton.classList.toggle("profile-edit-hidden", isEditMode);
    saveButton.classList.toggle("profile-edit-hidden", !isEditMode);
    logoutButton.classList.toggle("profile-edit-hidden", isEditMode); // Hide Logout button in edit mode

    renderContent(isEditMode); // Render appropriate mode
}

// Save Updated Data
function saveData() {
    document.querySelectorAll(".profile-answer-input").forEach((input, index) => {
        data[index].answer = input.value;
    });
    console.log("Updated Data:", data); // Log or save the updated data
    showSuccessBanner(); // Show success banner
}

// Show Success Banner
function showSuccessBanner() {
    const banner = document.createElement("div");
    banner.className = "profile-popup-banner";
    banner.textContent = "Successfully Edited!";

    // Append the banner to the #screen div    
    screen.appendChild(banner);
    // Remove banner after 3 seconds
    setTimeout(() => {
        screen.removeChild(banner);
    }, 3000);
}

// Event Listeners
editButton.addEventListener("click", () => toggleMode(true));
saveButton.addEventListener("click", () => {
    saveData();
    toggleMode(false);
});

function openMenu() {
    if (navigationMenu.style.visibility === "visible") {
        navigationMenu.style.visibility = "hidden"
    } else {
        navigationMenu.style.visibility = "visible"
    }
}

menuButton.addEventListener('click', openMenu);

// Initial Render in View Mode
renderContent();