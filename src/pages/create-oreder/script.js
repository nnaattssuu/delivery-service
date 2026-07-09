const closeHook = document.querySelector(".close")
const checkboxWrapper = document.querySelector(".checkbox-wrapper")
const hookWrapper = document.querySelector(".hook-wrapper")
const square = document.querySelector(".square")
const step5 = document.querySelector(".button-continue")

checkboxWrapper.addEventListener("click", () => {
    hookWrapper.classList.add("active")
    square.classList.add("active")
})

closeHook.addEventListener("click",() => {
    hookWrapper.classList.remove("active")
    square.classList.remove("active")
})

const wrapperDelivery = document.querySelector(".wrapper-delivery-check")
const checkboxDelivery = document.querySelector(".check-delivery")

checkboxDelivery.addEventListener("click", () => {
    wrapperDelivery.classList.toggle("active")
})

step5.addEventListener("click", () => {
    location.href = "step6.html"
})
