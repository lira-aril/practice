// Задача глава 2.1 построение треугольника в цикле

// for (let line = "#"; line.length < 8; line += "#") {
//     console.log(line)
// }

//Задача 2.2 FizzBuzz

// for (let i = 1; i < 101; i++) {
//     let output = "";
//     if (i % 3 === 0) output += "Fizz";
//     if (i % 5 === 0) output += "Bazz";
//     console.log(output || i)
// }

//Задача 2.3 Шахматная доска

// let size = 8;
// let board = " ";

// for (let x = 0; x < size; x++) {
//     for (let y = 0; y < size; y++) {
//         if ((x + y) % 2 === 0) board += " "
//         else board += "#"
//     }
//     board += "\n"
// }

// console.log(board)

// Задача 3.1 Минимум

// function min (a, b) {
//     if (a < b ) return a;
//     else return b;
// }
// console.log(min(5, 11))
// console.log(min (0, 7))
// console.log(min(3, -12))

// Задача 3.2 Рекурсия

// function isEven (n) {
//     if (n == 0) return true;
//     else if (n == 1) return false;
//     else if (n < 0) return isEven(-n);
//     else return isEven(n - 2);
// };

// console.log(isEven(50));
// console.log(isEven(75));
// console.log(isEven(-1));
// console.log(isEven(44));

// Задача 3.3 Подсчет букв

function countChar(string, ch) {
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == ch){
            counted += 1;
        }
    }
    return counted;
};

function countBs (string) {
    return countChar(string, "B")
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"))

