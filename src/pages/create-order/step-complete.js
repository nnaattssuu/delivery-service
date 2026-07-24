const redirectButton = document.querySelector("#main-page-link")
const deliveryInfo = document.querySelector(".delivery-info")
const totalSum = document.querySelector("#total-sum")
const userData = JSON.parse(localStorage.getItem("userData"))
const availablelDeliveryTypes = JSON.parse(localStorage.getItem("availablelDeliveryTypes"))
const expressDeliveryItem = availablelDeliveryTypes[1] 
const defualtDeliveryItem = availablelDeliveryTypes[0]
function onMounted(){
deliveryInfo.innerHTML += `
<p class="delivery-info-label">Номер заказа</p>
<p>aasdsds</p>
`

if (userData.Type === "express") {
        deliveryInfo.innerHTML += `
    <p class="delivery-info-label">Тип доставки</p>
    <p>${expressDeliveryItem.name}</p>
    `
} else if (userData.optionType === "default") {
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

if (userData.payer === "sender"){
        deliveryInfo.innerHTML += `
        <p class="delivery-info-label">Кто оплачивает доставку</p>
        <p>Отправитель</p>
        `
} else{
        deliveryInfo.innerHTML += `
        <p class="delivery-info-label">Кто оплачивает доставку</p>
        <p>Получатель</p>
        `
}
if(userData.optionType === "express"){
        totalSum.textContent = `Итого: ${expressDeliveryItem.price}`
} else if (userData.optionType === "default"){
        totalSum.textContent = `Итого: ${defualtDeliveryItem}.price}`
}
}
onMounted()

redirectButton.addEventListener("click", () => {
    location.href = "../index/index.html"
})
