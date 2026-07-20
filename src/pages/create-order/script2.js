const redirectButton = document.querySelector("#button-continue")
const lastnameId = document.querySelector("#lastname")
const firstnameId = document.querySelector("#name")
const middlenameId = document.querySelector("#middlename")
const phoneId = document.querySelector("#phonenummer")
const deliveryInfo = document.querySelector(".delivery-info")
const availablelDeliveryTypes = JSON.parse(localStorage.getItem("availablelDeliveryTypes"))
const userData = JSON.parse(localStorage.getItem("userData"))

if(userData.optionType === "express"){
    deliveryInfo.innerHTML = `
    <p class="delivery-info-label">Тип доставки</p>
    <p>${availablelDeliveryTypes[1].name}</p>
    `
} else if(userData.optionType === "default"){
    deliveryInfo.innerHTML = `
    <p class="delivery-info-label">Тип доставки</p>
    <p>${availablelDeliveryTypes[0].name}</p>
    `
}

redirectButton.addEventListener("click",() => {
    userData.receiver = {
        lastname: lastnameId.value,
        firstname: firstnameId.value,
        middlename: middlenameId.value,
        phone: phoneId.value
    }
    console.log(localStorage.setItem("userData", JSON.stringify(userData)))
    location.href = "step3.html"
})

