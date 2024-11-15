import data from "./profiledata.json" with {type:'json'}
let contentContainer = document.getElementById("profile-content")
let gridHTML = "";

data.forEach(item => {
    gridHTML += `
    <div class="profile-data">
        <div class="profile-item">${item.item_text}</div>
        <div class="profile-ans">${item.answer}</div>
    </div>`
})

contentContainer.innerHTML = gridHTML;