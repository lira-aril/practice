let arr = [];
let sum = 0;


for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        arr.push(i);
        sum += arr[i];

    }
}
console.log(arr)

console.log(sum)

