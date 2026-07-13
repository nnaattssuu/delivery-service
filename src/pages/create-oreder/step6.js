const initiatorCheckbox = document.querySelectorAll(".initiator-checkbox")
const deliveryPayment = document.querySelector(".delivery-payment")
const sender = document.getElementById("sender")
const recipient = document.getElementById("recipient")
const selectionSwitch = document.getElementById("selection-switch")
const recipientId = recipient.getAttribute("id")
const senderId = sender.getAttribute("id")
const redirectButton = document.querySelector("#button-continue")


initiatorCheckbox.forEach(item => {
    item.addEventListener("click", () => {
        initiatorCheckbox.forEach((inputItem) => {
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

redirectButton.addEventListener("click", () => {
    location.href = "step7.html"
})

