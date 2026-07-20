const expressDelivery = document.querySelector(".express-delivery-card")
const defaultDelivery = document.querySelector(".default-delivery-card")
const availablelDeliveryTypes = JSON.parse(localStorage.getItem("availablelDeliveryTypes"))
const expressDeliveryValue = document.querySelector(".express-delivery-value")
const defaultDeliveryValue = document.querySelector(".default-delivery-value")
const userData = JSON.parse(localStorage.getItem("userData"))


console.log(availablelDeliveryTypes)

expressDeliveryValue.innerHTML = `
<p class ="delivery-option">${availablelDeliveryTypes[1].name}</p>
<p class="heading-text">${availablelDeliveryTypes[1].price} ₽</p>
<p class="delivery-option active">${availablelDeliveryTypes[1].days} рабочих дня</p>
`

defaultDeliveryValue.innerHTML = `
<p class="delivery-option">${availablelDeliveryTypes[0].name}</p>
<p class="heading-text">${availablelDeliveryTypes[0].price}</p>
<p class="delivery-option active">${availablelDeliveryTypes[0].days} рабочих дней</p>
`



expressDelivery.addEventListener("click", () => {
  userData.optionType = "express"
  console.log(localStorage.setItem("userData", JSON.stringify(userData)))
    location.href = "/src/pages/create-order/step2.html"
})

defaultDelivery.addEventListener("click", () => {
  userData.optionType = "default"
  console.log(localStorage.setItem("userData", JSON.stringify(userData)))
    location.href = "/src/pages/create-order/step2.html"
    
})





