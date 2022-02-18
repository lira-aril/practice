// // Задача 1. Сумма чисел

// // решение через рекурсию
// function sumTo(n) {
//     if (n == 1) return 1;
//     return n + sumTo(n-1)   
// }

// alert(sumTo(100));

// // решение с помощью цикла
// function sumTo(n) {
//     let sum = 0;
//     for (let i = 0; i < n + 1; i++) {
//         sum += i 
//     }
//     return sum;
// }

// alert(sumTo(100));

// // решение по формуле арифметической прогрессии

// function sumTo(n) {
//     return (n + 1) * n / 2;
// }

// alert(sumTo(100))

// // Задача 2. Факториал

// function faktorial(n) {
//     if (n == 1) return 1;
//      return n * faktorial(n - 1)
// }

// alert(faktorial(5));

// Задача 3. Числа Фиббоначи

// Решение через рекурсию 
// function fib(n) {
//     if (n <= 1) return n;
//     return fib(n - 1) + fib(n - 2)
// }
// alert(fib(3));
// alert(fib(7));
// alert(fib(77)) вычисляется очень долго

// решение с использованием алгоритма

function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

alert(fib(3));
alert(fib(7));
alert(fib(77));

// Задача 4. Вывод односвязного списка

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };


// с использованием цикла

function printList(list) {
    let tmp = list;

    while (tmp) {
        alert(tmp.value);
        tmp = tmp.next
    }
}
printList(list);

// через рекурсию

function printList(list) {
    alert(list.value);

    if (list.next) {
        printList(list.next)   
    }
}
printList(list);

// Задача 5. Вывод односвязного списка в обратном порядке

// через рекурсию

function printReverseList(list) {
    if (list.next) {
        printReverseList(list.next)
    }
    alert(list.value)
}
printReverseList(list);

// с использованием цикла

function printReverseList(list) {
    let arr = [];
    let tmp = list;

    while(tmp) {
        arr.push(tmp.value);
        tmp = tmp.next
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        alert(arr[i])
    }
}
printReverseList(list);
