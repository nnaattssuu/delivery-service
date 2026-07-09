const inputCircle = document.querySelectorAll(".input-circle")
const deliveryPayment = document.querySelector(".delivery-payment")
const sender = document.getElementById("sender")
const recipient = document.getElementById("recipient")
const selectionSwitch = document.getElementById("selection-switch")
const recipientId = recipient.getAttribute("id")
const senderId = sender.getAttribute("id")
const step6 = document.querySelector(".button-continue")


inputCircle.forEach(item => {
    item.addEventListener("click", () => {
        inputCircle.forEach((inputItem) => {
            inputItem.classList.remove("active")
        })
        item.classList.add("active")
        deliveryPayment.classList.add("active")
        const itemId = item.getAttribute("id")
        if(itemId === recipientId){
            selectionSwitch.textContent = "Получатель"
        } else if (itemId === senderId){
            selectionSwitch.textContent = "Отправитель"
        }
    })
})

step6.addEventListener("click", () => {
    location.href = "step7.html"
})

