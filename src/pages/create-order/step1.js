const expressDelivery = document.querySelector(".express-delivery-card")
const defaultDelivery = document.querySelector(".default-delivery-card")
const availablelDeliveryTypes = JSON.parse(localStorage.getItem("availablelDeliveryTypes"))
const expressDeliveryValue = document.querySelector(".express-delivery-value")
const defaultDeliveryValue = document.querySelector(".default-delivery-value")
const userData = JSON.parse(localStorage.getItem("userData"))
const expressDeliveryItem = availablelDeliveryTypes[1] 
const defualtDeliveryItem = availablelDeliveryTypes[0]

function onMounted(){
expressDeliveryValue.innerHTML = `
<p class ="delivery-option">${expressDeliveryItem.name}</p>
<p class="heading-text">${expressDeliveryItem.price} ₽</p>
<p class="delivery-option active">${expressDeliveryItem.days} рабочих дня</p>
`

defaultDeliveryValue.innerHTML = `
<p class="delivery-option">${defualtDeliveryItem.name}</p>
<p class="heading-text">${defualtDeliveryItem.price}</p>
<p class="delivery-option active">${defualtDeliveryItem.days} рабочих дней</p>
`
}
onMounted()


expressDelivery.addEventListener("click", () => {
  userData.optionType = "express"
  localStorage.setItem("userData", JSON.stringify(userData))
    location.href = "/src/pages/create-order/step2.html"
})

defaultDelivery.addEventListener("click", () => {
  userData.optionType = "default"
  localStorage.setItem("userData", JSON.stringify(userData))
    location.href = "/src/pages/create-order/step2.html"
    
})





