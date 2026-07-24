const redirectButton = document.querySelector("#button-continue")
const streetId = document.querySelector("#street")
const houseId = document.querySelector("#house")
const apartmentId = document.querySelector("#apartment")
const commentId = document.querySelector("#comment")
const userData = JSON.parse(localStorage.getItem("userData"))
const deliveryInfo = document.querySelector(".delivery-info")
const deliveryWrapper = document.querySelectorAll(".delivery-wrapper")
const availablelDeliveryTypes = JSON.parse(localStorage.getItem("availablelDeliveryTypes"))
const expressDeliveryItem = availablelDeliveryTypes[1] 
const defualtDeliveryItem = availablelDeliveryTypes[0]

function onMounted(){
if(userData.optionType === "express"){
    deliveryInfo.innerHTML += `
    <p class="delivery-info-label">Тип доставки</p>
    <p>${expressDeliveryItem.name}</p>
    `
} else if(userData.optionType === "default"){
    deliveryInfo.innerHTML += `
    <p class="delivery-info-label">Тип доставки</p>
    <p>${defualtDeliveryItem.name}</p>
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
}
onMounted()

function setUpdateSenderAddressItem (){
    userData.senderAddress = {
        house: houseId.value,
        street: streetId.value,
        apartment: apartmentId.value,
        comment: commentId.value
    }
    localStorage.setItem("userData", JSON.stringify(userData))
}
redirectButton.addEventListener("click", () => {
    setUpdateSenderAddressItem();
    location.href = "step5.html"
})