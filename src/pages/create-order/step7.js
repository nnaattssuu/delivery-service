const redirectToEditButton = document.querySelector(".button-edit-data");
const redirectButton = document.querySelector("#button-continue");
const deliveryInfo = document.querySelector(".delivery-info")
const totalSum = document.querySelector("#total-sum")
const userData = JSON.parse(localStorage.getItem("userData"))
const availablelDeliveryTypes = JSON.parse(localStorage.getItem("availablelDeliveryTypes"))

if (userData.optionType === "express") {
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
        totalSum.textContent = `Итого: ${availablelDeliveryTypes[1].price}`
} else if (userData.optionType === "default"){
        totalSum.textContent = `Итого: ${availablelDeliveryTypes[0].price}`
}

let OptionTypeValue = null;

redirectToEditButton.addEventListener("click", () => {
        location.href = "step2.html";
});

redirectButton.addEventListener("click", () => {
        location.href = "step-complete.html";
        createOrder()

});


async function createOrder() {
        const response = await fetch(
                "https://juniorsbootcamp.ru/api/delivery/order",
                {
                        method: "POST",
                        headers: {
                                "Content-Type": "application/json",
                        },
                        body: JSON.stringify(userData)
                },
        );
        const result = await response.json()
}
