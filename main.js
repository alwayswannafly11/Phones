// const phone = [
//     {
//         brand: "iPhone",
//         model: "X",
//         memory: 64,
//         color: "black",
//     },
//
//     {
//         brand: "Xiaomi",
//         model: "Redmi 7",
//         memory: 32,
//         color: "blue",
//     },
//
//     {
//         brand: "iPhone",
//         model: "XR",
//         memory: 128,
//         color: "red",
//     },
// ]

условие ? code : another_code
if (условие) {
    code
} else {
    another_code
}

// let phone = [];
// if (JSON.parse(localStorage.getItem("phone"))) {
//     phone = JSON.parse(localStorage.getItem("phone"))
// }

let phone = JSON.parse(localStorage.getItem("phone")) ?? [];

console.log(phone)

printPhones(phone)

function printPhones(phones) {
    localStorage.setItem("phone", JSON.stringify(phones))
    let getPhones = document.getElementById("phones");
    getPhones.innerHTML = "";
    for (let i = 0; i < phones.length; i++) {
        getPhones.innerHTML += phoneToHTML(phones[i], i)
    }
}

function phoneToHTML(phone, index) {
    let text = phoneToString(phone)
    return `<div class="phone"><div>${text}</div>
<div class="test hidden"><input class="edit-brand" data-editbrand="${index}" value="${phone.brand}" type="text" placeholder="Введите бренд">
<input class="edit-model" data-edit_model="${index}" value="${phone.model}" type="text" placeholder="Введите модель">
<input class="edit-memory" data-edit_memory="${index}" value="${phone.memory}" type="text"  placeholder="Введите объем памяти">
<input class="edit-color" data-edit_color="${index}" value="${phone.color}" type="text"  placeholder="Введите цвет">
<button data-inputapply="${index}" onclick="applyEdit(this)">Apply edit</button>
</div>
<div><button data-id="${index}" onclick="deletePhone(this)">Delete</button>
<button data-test="${index}" onclick="editPhone(this)">Edit</button>
</div>
</div>`
}

function phoneToString(phone) {
    return `${phone.brand} ${phone.model} ${phone.memory} ${phone.color}`
}

function deletePhone(event) {
    let index = event.dataset.id
    phone.splice(index, 1)
    printPhones(phone)
}


const buttonPushToArr = document.getElementById("button-push")
buttonPushToArr.addEventListener('click', function () {
    let getBrand = document.getElementById("brand").value;
    let getModel = document.getElementById("model").value;
    let getMemory = document.getElementById("memory").value;
    let getColor = document.getElementById("color").value;
    if (getBrand == "", getModel == "", getMemory == "", getColor == "") {
        alert("Введите значение!")
    } else {
        phone.push({brand: getBrand, model: getModel, memory: getMemory, color: getColor})
        printPhones(phone)
    }
})

function editPhone(event) {
    let inputUnhidden = document.getElementsByClassName('test');
    let test = event.dataset.test
    for (let i = 0; i < inputUnhidden.length; i++){
        if (i == test) {
            inputUnhidden[i].classList.remove('hidden')
        }
    }
}

function applyEdit(element) {
    let applyIndex = parseInt(element.dataset.inputapply);
    let inputBrand = document.getElementsByClassName("edit-brand");
    let inputModel = document.getElementsByClassName("edit-model");
    let inputMemory = document.getElementsByClassName("edit-memory");
    let inputColor = document.getElementsByClassName("edit-color");
    phone.splice(applyIndex, 1, {
        brand: inputBrand[applyIndex].value,
        model: inputModel[applyIndex].value,
        memory: inputMemory[applyIndex].value,
        color: inputColor[applyIndex].value
    })
    // for (let i = 0; i < inputModel.length; i++) {
    //     phone.splice(i, 1, {
    //         brand: inputBrand[i].value,
    //         model: inputModel[i].value,
    //         memory: inputMemory[i].value,
    //         color: inputColor[i].value
    //
    //     })
    //    } предыдущая версия

    printPhones(phone)
}
// это работает, почти как задумано




