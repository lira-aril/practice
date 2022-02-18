// Задача 1

// function camelize (str) {
//     return str
//         .split('-')
//         .map (
//             (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//         )
//         .join('');
// }

// console.log(camelize("background-color"))
// console.log(camelize("list-style-image"))
// console.log(camelize("-webkit-transition"))

// Задача 2

// function filterRange(arr, a, b) {
//     return arr.filter(item => (a <= item && item <= b))
// }

// let arr = [5, 3, 8, 1]

// let filtered = filterRange(arr, 1, 4)

// alert(filtered)
// alert(arr)

// Задача 3

// function filterRangeInPlace(arr, a, b) {
    
//     for (let i = 0; i < arr.length; i++) {
//         let val = arr[i];

//         if(val < a || val > b) {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
// }

// filterRangeInPlace(arr, 1, 4)
// alert(arr);

// Задача 4

// let myArr = [5, 8, 2, 9, -10, 0]

// myArr.sort(function(a, b) {return b - a})
// alert(myArr)

// Задача 5

// function copySorted (array) {
//     return array.slice().sort()
// }

// let arrStr = ["HTML", "JavaScript", "CSS"]
// let sorted = copySorted(arrStr)

// alert(arrStr)
// alert(sorted)

// Задача 6

// function Calculator() {

//     this.methods = {
//         "-": (a, b) => a - b,
//         "+": (a, b) => a + b
//     }

//     this.calculate = function(str) {
//         let split = str.split(' '),
//             a = +split[0],
//             op = split[1],
//             b = +split[2]

//         if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//             return NaN;
//         }
//         return this.methods[op](a, b);
//     }
//     this.addMethods = function(name, func) {
//         this.methods[name] = func
//     }
// }

// Задача 7

// let vasya = {name: "Вася", age: 25}
// let petya = {name: "Петя", age: 30}
// let masha = {name: "Маша", age: 28}

// let users = [vasya, petya, masha]

// let names = users.map(item => item.name )

// alert(names)

// Задача 8

// let vasya = {name: "Вася", surname: "Пупкин", id: 1}
// let petya = {name: "Петя", surname: "Иванов", id: 2}
// let masha = {name: "Маша", surname: "Петрова", id: 3}

// let users = [vasya, petya, masha]

// let usersMapped = users.map (user => ({fullName: `${user.name} ${user.surname}`,
// id: user.id 
// }))

// console.log(usersMapped)
// console.log(usersMapped[0].id)
// console.log(usersMapped[0].fullName)

// Задача 9

// function sortByAge(arr) {
//     arr.sort((a, b) => a.age > b.age ? 1 : -1)
//     }

// let vasya = {name: "Вася", age: 25}
// let petya = {name: "Петя", age: 30}
// let masha = {name: "Маша", age: 28}

// let arr = [vasya, petya, masha]

// sortByAge(arr)

// console.log(arr[0].name)
// console.log(arr[1].name)
// console.log(arr[2].name)

// Задача 10

// function shuffle(array) {
//     array.sort(() => Math.random() - 0.5)
// }

// let arr = [1, 2, 3]
// shuffle(arr)
// alert(arr)

// Задача 11

// function getAverageAge(users) {
//     return users.reduce((prev, user) => prev + user.age, 0) / users.length;
// }

// let vasya = {name: "Вася", age: 25}
// let petya = {name: "Петя", age: 30}
// let masha = {name: "Маша", age: 28}

// let arr = [vasya, petya, masha]

// alert(getAverageAge(arr))

// Задача 12

function unique(arr) {
    let result = []

    for (let str of arr) {
        if(!result.includes(str)) {
            result.push(str)
        }
    }
    return result;
}

let strings = ["hi", "hi", "hi", "hello", "hello", "hello", "hi",
    "hey", "hey", "!"
]

alert(unique(strings))


