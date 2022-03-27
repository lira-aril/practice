// Глава 2
// наименьший элемент массива


let myArr = [6, 7, 4, 9, 79, 0, 43]

function findSmallest(arr) {
    let smallest = arr[0];
    let smallestIndex = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i
        }
    }
    return smallestIndex  // возвращает индекс элемента
    return smallest       // возвращает сам элемент
}

console.log(findSmallest(myArr))
console.log(myArr[5])

// Глава 4
// 4.1
function sum(list) {
    if(list == []) {
        return 0
    }
    return list[0] + sum(list[1])
}

// 4.2
function count(list) {
    if(list == []) {
        return 0
    }
    return 1 + count(list[1])
}

// 4.3
function max(list) {
    if(list.length == 2) {
        if(list[0] > list[1]) {
            return list[0]
        } else {
            return list[1]
        }
    }
    sub_max = max(list[1])
    if(list[0] > sub_max) {
        return list[0]
    } else {
        return sub_max
    }
}