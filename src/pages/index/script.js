const approxTab = document.getElementById("approx-tab");
const exactTab = document.getElementById("exact-tab");
const boxSelection = document.getElementById("box-selection");
const exactSize = document.querySelector(".exact-size");
const listDropdown = document.querySelector("#list-dropdown");
const targetListDropdown = document.querySelector(".target-list-dropdown");
const itemCard = document.createElement("div");
const boxes = document.querySelectorAll(".size-variants-list");
const sizeSelector = document.querySelector("#size-selector");
const sizeWindow = document.querySelector(".size-window");
const initiatorCityDropdown = document.querySelector("#initiator-city-dropdown",);
const citySending = document.querySelector("#city-sending");
const targetCitySending = document.querySelector("#target-city-sending");
const targetCityDropdown = document.querySelector("#target-city-dropdown");
const sizeVariant = document.querySelectorAll(".size-variant");
const sizeVariantlist = document.querySelector("#size-variant-list");
const textSizeList = document.querySelector(".text-size-list");
const calcButton = document.querySelector("#calc-button");
let sendCity = null;
let targetCity = null;
let lengthDelivery = null;
let widhtDelivery = null;
let weightDelivery = null;
let heightDelivery = null;
let idPoint = null
const userData = {
    price: null,
    package: {
      id: null,
      name: null,
      length: null,
      width: null,
      weight: null,
      height: null,
    },
    optionType: null,
    senderPoint: {
      id: null,
      name: null,
      latitude: null,
      longitude: null,
    },
    senderAddress: {
      street: null,
      house: null,
      apartment: null,
      comment: null,
    },
    sender: {
      firstname: null,
      lastname: null,
      middlename: null,
      phone: null,
    },
    receiverPoint: {
      id: null,
      name: null,
      latitude: null,
      longitude: null,
    },
    receiverAddress: {
      street: null,
      house: null,
      apartment: null,
      comment: null,
      isNonContact: null,
    },
    receiver: {
      firstname: null,
      lastname: null,
      middlename: null,
      phone: null,
    },
    payer: null,
    status: "in_processing",
    cancellable: true,
  }


citySending.addEventListener("click", () => {
  initiatorCityDropdown.classList.toggle("open");
  targetCityDropdown.classList.remove("open");
});

targetCitySending.addEventListener("click", () => {
  targetCityDropdown.classList.toggle("open");
  initiatorCityDropdown.classList.remove("open");
});

exactTab.addEventListener("click", () => {
  approxTab.classList.remove("active");
  exactTab.classList.add("active");
  boxSelection.classList.add("hidden");
  exactSize.classList.add("active");
});

approxTab.addEventListener("click", () => {
  exactTab.classList.remove("active");
  approxTab.classList.add("active");
  boxSelection.classList.remove("hidden");
  exactSize.classList.remove("active");
});

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    boxes.forEach((item) => item.classList.remove("active"));
    box.classList.add("active");
  });
});

sizeSelector.addEventListener("click", () => {
  sizeWindow.classList.toggle("open");
});

async function getPoints() {
  try {
    const response = await fetch(
      "https://juniorsbootcamp.ru/api/delivery/points",
      {
        method: "GET",
      },
    );
    const result = await response.json();
    result.points.forEach((res) => {
      const itemCard = document.createElement("div");
      itemCard.classList.add("item-dropdown");
      itemCard.innerHTML += `
            <p>${res.name}</p>
            <img src="/assets/icons/vector-right.svg">
            `;
      const itemCardTarget = itemCard.cloneNode(true);

      listDropdown.append(itemCard);
      targetCityDropdown.append(itemCardTarget);

      const changeCity = document.querySelector("#change-city");
      const targetChangeCity = document.querySelector("#target-change-city");

      function setTargetCity(){
        targetChangeCity.textContent = res.name;
        targetCity = {
          id: res.id,
          latitude: res.latitude,
          longitude: res.longitude,
        };
      }

      itemCardTarget.addEventListener("click", setTargetCity);

      function setSendCity(){
         changeCity.textContent = res.name;
        sendCity = {
          id: res.id,
          latitude: res.latitude,
          longitude: res.longitude,
        };
      }
      itemCard.addEventListener("click", setSendCity);
    });
  } catch {
    alert("Ошибка");
  }
}

async function getTypePackage() {
  try {
    const response = await fetch(
      "https://juniorsbootcamp.ru/api/delivery/package/types",
      {
        method: "GET",
      },
    );
    const result = await response.json();
    result.packages.forEach((res, index) => {
      const itemSizeList = document.createElement("div");

      itemSizeList.classList.add("size-variant-text");
      itemSizeList.innerHTML = `
            <p class="variant-size-label">${res.name}</p>
            <p class="size-variant-size">${res.length}x${res.width}x${res.height}x${res.height} см</p>
            `;
      sizeVariant[index].append(itemSizeList);

      boxes[index].addEventListener("click", () => {
        lengthDelivery = res.length;
        widhtDelivery = res.width;
        heightDelivery = res.height;
        weightDelivery = res.weight;
        idPoint = res.id
      });
    });
  } catch {
    console.log("Ошибка");
  }
}

function setPackageItem(){
  userData.package = {
    length: lengthDelivery,
    width: widhtDelivery,
    weight: weightDelivery,
    height: heightDelivery,
  },
    userData.senderPoint = {
      id: sendCity.id,
      latitude: sendCity.latitude,
      longitude: sendCity.longitude,
    };
  userData.receiverPoint = {
    id: targetCity.id,
    latitude: targetCity.latitude,
    longitude: targetCity.longitude,
  };
  userData.packageId = idPoint 
  userData.senderPointId = sendCity.id
  userData.receiverPointId = targetCity.id

  localStorage.setItem("userData", JSON.stringify(userData));
  location.href = "/src/pages/create-order/step1.html";
}

calcButton.addEventListener("click", () => {
  calcDelivery();
  setPackageItem()
});

async function calcDelivery() {
  try{
  const response = await fetch("https://juniorsbootcamp.ru/api/delivery/calc", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      package: {
        length: lengthDelivery,
        width: widhtDelivery,
        weight: weightDelivery,
        height: heightDelivery,
      },
      senderPoint: {
        id: sendCity.id,
        latitude: sendCity.latitude,
        longitude: sendCity.longitude,
      },
      receiverPoint: {
        id: targetCity.id,
        latitude: targetCity.latitude,
        longitude: targetCity.longitude,
      },
    }),
  });
  const result = await response.json();
  localStorage.setItem(
    "availablelDeliveryTypes",
    JSON.stringify(result.options),
  );

  } catch{
          console.log("Ошибка пост запроса")
      }
}
getTypePackage();
getPoints();
