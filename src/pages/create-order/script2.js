const redirectButton = document.querySelector("#button-continue")
const lastnameId = document.querySelector("#lastname")
const firstnameId = document.querySelector("#name")
const middlenameId = document.querySelector("#middlename")
const phoneId = document.querySelector("#phonenummer")
const deliveryInfo = document.querySelector(".delivery-info")
const availablelDeliveryTypes = JSON.parse(localStorage.getItem("availablelDeliveryTypes"))
const userData = JSON.parse(localStorage.getItem("userData"))
const expressDeliveryItem = availablelDeliveryTypes[1] 
const defualtDeliveryItem = availablelDeliveryTypes[0]


function onMounted(){
    if(userData.optionType === "express"){
        deliveryInfo.innerHTML = `
        <p class="delivery-info-label">Тип доставки</p>
        <p>${expressDeliveryItem.name}</p>
        `
    } else if(userData.optionType === "default"){
        deliveryInfo.innerHTML = `
        <p class="delivery-info-label">Тип доставки</p>
        <p>${defualtDeliveryItem.name}</p>
        `
    }
}
onMounted()

 function setUpdateReceiverItem(){
    userData.receiver = {
            lastname: lastnameId.value,
            firstname: firstnameId.value,
            middlename: middlenameId.value,
            phone: phoneId.value
        }
    localStorage.setItem("userData", JSON.stringify(userData))
}

    redirectButton.addEventListener("click",() => {
        setUpdateReceiverItem
        location.href = "step3.html"
    })
    
    