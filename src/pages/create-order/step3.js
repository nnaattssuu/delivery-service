const redirectButton = document.querySelector("#button-continue")
const firstnameId = document.querySelector("#firstname")
const lastnameId = document.querySelector("#lastname")
const middlenameId = document.querySelector("#middlename")
const phonenummerId = document.querySelector("#phonenummer")
const deliveryWrapper = document.querySelectorAll(".delivery-wrapper")
const userData = JSON.parse(localStorage.getItem("userData"))
const deliveryInfo = document.querySelector(".delivery-info")
const availablelDeliveryTypes = JSON.parse(localStorage.getItem("availablelDeliveryTypes"))
const expressDeliveryItem = availablelDeliveryTypes[1]
const defualtDeliveryItem = availablelDeliveryTypes[0]

function onMounted() {

    if (userData.optionType === "express") {
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
}
    onMounted()

    function setUpdateSenderItem() {
        userData.sender = {
            lastname: lastnameId.value,
            firstname: firstnameId.value,
            middlename: middlenameId.value,
            phone: phonenummerId.value
        }
        localStorage.setItem("userData", JSON.stringify(userData))
    }
    redirectButton.addEventListener("click", () => {
        setUpdateSenderItem()
        location.href = "step4.html"
    })

