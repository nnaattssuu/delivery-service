const initiatorCheckbox = document.querySelectorAll(".initiator-checkbox")
const deliveryPayment = document.querySelector(".delivery-payment")
const senderId = document.getElementById("sender")
const recipientId = document.getElementById("recipient")
const selectionSwitch = document.getElementById("selection-switch")
const recipientAttributeId = recipientId.getAttribute("id")
const senderAttributeId = senderId.getAttribute("id")
const redirectButton = document.querySelector("#button-continue")
const userData = JSON.parse(localStorage.getItem("userData"))
const deliveryInfo = document.querySelector(".delivery-info")
const deliveryWrapper = document.querySelectorAll(".delivery-wrapper")
const availablelDeliveryTypes = JSON.parse(localStorage.getItem("availablelDeliveryTypes"))

if (userData.Type === "express") {
    deliveryInfo.innerHTML += `
    <p class="delivery-info-label">Тип доставки</p>
    <p>${availablelDeliveryTypes[1].name}</p>
    `
} else if (userData.optionType === "default") {
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
deliveryInfo.innerHTML += `
    <p class="delivery-info-label">Куда доставить</p>
    <p>${userData.receiverAddress.street} ${userData.receiverAddress.house} ${userData.receiverAddress.apartment} ${userData.receiverAddress.comment}</p>
    `
if (userData.receiverAddress.isNonContact === true) {
    deliveryInfo.innerHTML += `
        <p class="delivery-info-label">Примечание</p>
        <p>${userData.receiverAddress.isNonContact = "Оставить заказ у двери"}</p>
        `
}



initiatorCheckbox.forEach(item => {
    item.addEventListener("click", () => {
        initiatorCheckbox.forEach((inputItem) => {
            inputItem.classList.remove("active")
        })
        item.classList.add("active")
        deliveryPayment.classList.add("active")
        const itemId = item.getAttribute("id")
        if (itemId === recipientAttributeId) {
            selectionSwitch.textContent = "Получатель"

        } else if (itemId === senderAttributeId) {
            selectionSwitch.textContent = "Отправитель"
        }
    })
})

redirectButton.addEventListener("click", () => {
    if (recipientId.classList.contains("active")) {
        userData.payer = "receiver"
        localStorage.setItem("userData", JSON.stringify(userData))
        console.log("asdasd")
    } else if (senderId.classList.contains("active")) {
        userData.payer = "sender"
        localStorage.setItem("userData", JSON.stringify(userData))
    }
    location.href = "step7.html"
})




