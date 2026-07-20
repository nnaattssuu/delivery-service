const closeHook = document.querySelector(".close")
const checkboxWrapper = document.querySelector(".checkbox-wrapper")
const hookWrapper = document.querySelector(".hook-wrapper")
const square = document.querySelector(".square")
const redirectButton = document.querySelector("#button-continue")
const streetId = document.querySelector("#streetId")
const houseId = document.querySelector("#houseId")
const apartmentId = document.querySelector("#apartmentId")
const commentId = document.querySelector("#commentId")
const isNonContactId = document.querySelector("#isNonContactId")
const userData = JSON.parse(localStorage.getItem("userData"))
const deliveryInfo = document.querySelector(".delivery-info")
const deliveryWrapper = document.querySelectorAll(".delivery-wrapper")
const availablelDeliveryTypes = JSON.parse(localStorage.getItem("availablelDeliveryTypes"))

if(userData.optionType === "express"){
    deliveryInfo.innerHTML += `
    <p class="delivery-info-label">Тип доставки</p>
    <p>${availablelDeliveryTypes[1].name}</p>
    `
} else if(userData.optionType === "default"){
    deliveryInfo.innerHTML += `
    <p class="delivery-info-label">Тип доставки</p>
    <p>${availablelDeliveryTypes[0].name}</p>
    `
}
deliveryInfo.innerHTML += `
    <p class="delivery-info-label">Получатель</p>
    <p>${userData.receiver.lastname} ${userData.receiver.firstname} ${userData.receiver.middlename} ${userData.receiver.phone}</p>
    `
    
 deliveryInfo.innerHTML += `
    <p class="delivery-info-label">Отправитель</p>
    <p>${userData.sender.lastname} ${userData.sender.firstname} ${userData.sender.middlename} ${userData.sender.phone}</p>
    `
    deliveryInfo.innerHTML += `
    <p class="delivery-info-label">Откуда забрать</p>
    <p>${userData.senderAddress.street} ${userData.senderAddress.house} ${userData.senderAddress.apartment} ${userData.senderAddress.comment}</p>
    `

checkboxWrapper.addEventListener("click", () => {
    hookWrapper.classList.add("active")
    square.classList.add("active")
})

closeHook.addEventListener("click",() => {
    hookWrapper.classList.remove("active")
    square.classList.remove("active")
})

const wrapperDelivery = document.querySelector(".wrapper-delivery-check")
const checkboxDelivery = document.querySelector(".check-delivery")

checkboxDelivery.addEventListener("click", () => {
    wrapperDelivery.classList.toggle("active")
})

redirectButton.addEventListener("click", () => {

    userData.receiverAddress = {
        street: streetId.value,
        apartment: apartmentId.value,
        house: houseId.value,
        comment: commentId.value,
        isNonContact: isNonContactId.checked
    }
    localStorage.setItem("userData", JSON.stringify(userData))
    location.href = "step6.HTML"
})

