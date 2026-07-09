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

const boxes = document.querySelectorAll(".wrapper-box_list");

boxes.forEach(box => {
    box.addEventListener("click", () => {
        boxes.forEach(item => item.classList.remove("active"));
        box.classList.add("active");
    });
});

const citySending = document.querySelectorAll(".city-open")
const sizeBox = document.querySelector(".size-box_list")

citySending.forEach(item => {
    item.addEventListener("click", () => {
        sizeBox.classList.toggle("open")
    })
})




