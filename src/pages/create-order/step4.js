const redirectButton = document.querySelector("#button-continue")
const streetId = document.querySelector("#street")
const houseId = document.querySelector("#house")
const apartmentId = document.querySelector("#apartment")
const commentId = document.querySelector("#comment")
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



redirectButton.addEventListener("click", () => {
    userData.senderAddress = {
        house: houseId.value,
        street: streetId.value,
        apartment: apartmentId.value,
        comment: commentId.value
    }
    localStorage.setItem("userData", JSON.stringify(userData))
    location.href = "step5.html"
})