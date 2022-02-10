const arr = [2,13,26,6,10];
arr.sort(compareNum);
console.log(arr);

///// метод быстрой сортировки в sort выстраивает все чмсла по порядку
function compareNum(a,b) {
    return a - b;
}
// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// })
// arr.pop();
// arr.push(10);
// console.log(arr);

// for (let value of arr) {
//     console.log(value);
// }
// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));
