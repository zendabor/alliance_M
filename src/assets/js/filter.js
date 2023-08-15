import {SelectModule} from "./modules/select.js";

const filterSelect = document.querySelector(".filterSelect");
const filterSelect_select = document.querySelector(".filterSelect_select");
const filterSelect_list = document.querySelector(".filterSelect_list");
const filterSelect_value = document.querySelector(".filterSelect_value");

let brands = [];

fetch('api/brands').then(async res => {
    brands = await res.json();
    console.log({brands});
});

const filterSelectMarka = [
    {id: 1, value: "Все марки"},
    {id: 2, value: "Renault"},
    {id: 3, value: "Volkswagen"},
    {id: 4, value: "Kia"},
    {id: 5, value: "Lada"},
    {id: 6, value: "Cherry"},
    {id: 7, value: "Arkana"},
    {id: 8, value: "Arkana"},
];

function renderFilterSelect(array = [], selectedId) {
    const items = array.map((item) => {
        return `
    <div class="flex items-center h22 mb-1">
      <input type="checkbox" class="filterCheckbox" name="${item.id}" id="${item.id}" value="${item.value}">
      <label class="filter_text" for="${item.id}">${item.value}</label><br>
    </div>
    `;
    });
    return `
    <div>${items?.join("")}</div>
  `;
}

if (filterSelect) {
    filterSelect_select.addEventListener("click", () => {
        filterSelect.classList.toggle("show");
    });
    filterSelect_list.innerHTML = renderFilterSelect(filterSelectMarka);
}
document.addEventListener("click", (e) => {
    const isClickInside = filterSelect?.contains(e.target);
    if (!isClickInside) {
        filterSelect?.classList.remove("show");
    }
});
const carList = document.getElementById("filterSelect_list");
const filterCheckboxes = carList?.querySelectorAll(".filterCheckbox");
filteredFunc();

function filteredFunc() {
    const filteredCars = [];
    if (filterCheckboxes?.length) {
        for (let i = 0; i < filterCheckboxes?.length; i++) {
            const checkbox = filterCheckboxes[i];
            if (checkbox.checked) {
                if (!filterCheckboxes[0]?.checked) {
                    const newCar = {
                        id: checkbox.id,
                        value: checkbox.value,
                    };
                    filteredCars.push(newCar);
                }
            }
            filterSelect_value.innerHTML =
                filteredCars.length > 0
                    ? `Выбрано ${filteredCars.length}`
                    : "Выберите марку";
        }
        if (filterCheckboxes[0].checked) {
            filterSelect_value.innerHTML = "Все марки";
            filteredCars.push(...filterSelectMarka);
            // console.log(filteredCars);
        }
    }
}

for (let i = 0; i < filterCheckboxes?.length; i++) {
    const checkbox = filterCheckboxes[i];
    checkbox.addEventListener("change", filteredFunc);
}
if (filterSelect_value) {
    filterSelect_value.innerHTML = "Выберите марку";
}
