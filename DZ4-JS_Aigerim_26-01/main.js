
// 3. ЗАДАЧА
// 1 СПОСОБ

// window.onload = function() {
//     changeColor()
// }

//     function changeColor() {
//     var user = prompt("Введите цвет:").toLowerCase()

//     var lights = document.querySelectorAll(".light")

//     lights.forEach(function (light) {
//     light.style.backgroundColor = "gray"
//     light.querySelector(".text").innerHTML = ""
//     });

//     if (user === "красный") {
//         var redLight = document.querySelector(".red")
//         redLight.style.backgroundColor = "red"
//         redLight.querySelector(".text").innerHTML = "STOP"
//     } else if (user === "желтый") {
//         var yellowLight = document.querySelector(".yellow")
//         yellowLight.style.backgroundColor = "yellow"
//         yellowLight.querySelector(".text").innerHTML = "WAIT"
//     } else if (user === "зеленый") {
//         var greenLight = document.querySelector(".green")
//         greenLight.style.backgroundColor = "green"
//         greenLight.querySelector(".text").innerHTML = "GO"
//     } else {
//     alert("Неверный ввод!")
//     }
// }

// 2 СПОСОБ SWITCH CASE

// window.onload = function() {
//     changeColor()
// }

// function changeColor() {
//     var user = prompt("Введите цвет:").toLowerCase()

//     var lights = document.querySelectorAll(".light")

//     lights.forEach(function (color) {
//         color.style.backgroundColor = "gray";
//         color.querySelector(".text").innerHTML = ""
//     });

//     switch (user) {
//         case "красный":
//             var redLight = document.querySelector(".red")
//             redLight.style.backgroundColor = "red";
//             redLight.querySelector(".text").innerHTML = "STOP"
//         break
//         case "желтый":
//             var yellowLight = document.querySelector(".yellow")
//             yellowLight.style.backgroundColor = "yellow"
//             yellowLight.querySelector(".text").innerHTML = "WAIT"
//         break
//         case "зеленый":
//             var greenLight = document.querySelector(".green")
//             greenLight.style.backgroundColor = "green"
//             greenLight.querySelector(".text").innerHTML = "GO"
//         break
//         default:
//             alert("Неверный ввод!")
//     }
// }



// 2.ЗАДАЧА
// var button = document.getElementById('button')
// var text = document.getElementById('text')
// var counter = 0

// button.addEventListener('click', function() {
//     var user = prompt('Введите текст:')
//     if (user) {
//         text.textContent = `Кол-во текст ${counter + 1}: ${user}`
//         counter++
//     }
// })




// 1.ЗАДАЧА
// var valueElement = document.getElementById("value")
// var decrementButton = document.getElementById("decrement")
// var incrementButton = document.getElementById("increment")
// var value = 0

// decrementButton.addEventListener("click", decrement)
// incrementButton.addEventListener("click", increment)

// function decrement() {
//     if (value > 0) {
//         value--
//         updateValue()
//     }
// }

// function increment() {
//     value++
//     updateValue()
// }

// function updateValue() {
//     valueElement.textContent = value
//     if (value > 0) {
//         valueElement.style.color = "green"
//     } else if (value === 0) {
//         valueElement.style.color = "black"
//     } else {
//         valueElement.style.color = "red"
//     }
// }