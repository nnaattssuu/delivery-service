const redirectToEditButton = document.querySelector(".button-edit-data")
const redirectButton = document.querySelector("#button-continue")

redirectToEditButton.addEventListener("click", () => {
        location.href = "step2.html"
})

redirectButton.addEventListener("click", () => {
        location.href = "step-complete.html"
})


