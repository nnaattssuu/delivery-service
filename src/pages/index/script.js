const approxTab = document.getElementById("approx-tab")
const exactTab = document.getElementById("exact-tab")
const boxSelection = document.getElementById("box-selection")
const exactSize = document.querySelector(".exact-size")

exactTab.addEventListener("click", () => {
    approxTab.classList.remove("active")
    exactTab.classList.add("active")
    boxSelection.classList.add("hidden")
    exactSize.classList.add("active")
})

approxTab.addEventListener("click", () => {
    exactTab.classList.remove("active")
    approxTab.classList.add("active")
    boxSelection.classList.remove("hidden")
    exactSize.classList.remove("active")
})

const boxes = document.querySelectorAll(".size-variants-list");

boxes.forEach(box => {
    box.addEventListener("click", () => {
        boxes.forEach(item => item.classList.remove("active"));
        box.classList.add("active");
    });
});

const citySending = document.querySelector("#size-selector")
const sizeWindow = document.querySelector(".size-window")

citySending.addEventListener("click", () => {
    sizeWindow.classList.toggle("open")
})




