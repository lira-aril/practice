// #1

// let str = "abcde"

// for (let i = 0; i < str.length; i++) {
//     alert(str[i])
// }

// #2

// let num = "12345"
// let mlt = 1
// for (let i = 0; i < num.length; i++) {
//     mlt *= num[i]
// }
// console.log(mlt)

// #3
// let sc = 60
// let min = sc
// let hr = 60 * min
// let day = 24 * hr
// let mnt = 30 * day

// console.log(hr)
// console.log(day)
// console.log(mnt)

// #4

// let currentTime = new Date()
// let hours = currentTime.getHours()
// let minutes = currentTime.getMinutes()
// let seconds = currentTime.getSeconds()
// let time = `${hours}:${minutes}:${seconds}`

// console.log(time)

// #5

// let num = 35
// console.log(num * num)
// console.log(Math.pow(num, 2))

// #6

// let obj = {a: 1, b: 2, c: 3}
// console.log(obj['c'])
// console.log(obj.c)

// #7

// let week = {
//     1: "Monday",
//     2: "Tuesday",
//     3: "Wednesday",
//     4: "Thursday",
//     5: "Friday",
//     6: "Saturday",
//     7: "Sunday"  
// }

// console.log(week[6])

// let day = 3
// for (let key in week) {
//     if (key = day) console.log(week[key])
// }

// #8

// let lng = {
//     js: ["jQuery", "Angular"],
//     php: "hello",
//     css: "world"
// }
// console.log(lng.js[0])

// #9

// let choose = prompt("Выберите язык", "ru", "en")
// let days_ru = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
// let days_en = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


// let today = new Date()
// let d = today.getDay()


// if(choose === "ru") {
//      alert(`Сегодня ${days_ru[d]}`)
// } else if (choose === "en") {
//     alert(`Today is ${days_en[d]}`)
// }

// #10 

let a = Number(prompt("Введите число"))

if (a > 0) alert("Верно")
else if (a < 0) alert("Неверно")
else if (a === 0) alert("Ноль")





