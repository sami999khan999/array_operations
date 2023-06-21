"use strict";

// slice method -

// splice method -

// reverse method -

// concat method -

// join method -

// at method -

// forEach method -

// forEach method in sets and maps -

// map method -

// filter method -

// reduce method -

// date transformation pipeline -

// find method -

// some and every method {
// some emthod -
// every method -
// }

// flat and flatMap {
// flat method -
// flatMap method -
// }

// sort method {
// custom sorting function -
// }

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // slice method

// // The slice() method in JavaScript is used to extract a portion of an array and returns a new array containing the selected elements. It takes two optional parameters: start and end. The start parameter specifies the index at which the extraction should begin (inclusive). If start is negative, it represents an offset from the end of the array. The end parameter specifies the index at which the extraction should end (exclusive). If end is omitted, the slice extends to the end of the array. If end is negative, it represents an offset from the end of the array. //

//============================================================================================================================================//

// const arr = ["a", "b", "c", "d", "e"];

// console.log(arr.slice(3));
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(2, -1)); // -1 is the last element. //
// console.log(arr.slice()); // slice method without parateater creats a new array. Any changes to the newly created array will net effect the origenal array. //
// console.log(arr.slice(-1)); // -1 in slice method will provides the last element. //
// console.log(arr[arr.length - 1]); // provides the last valuse. //
// console.log(arr.at()); // at method without parameater will proveder the first value. //
// console.log(arr.at(-1)); // -1 in at method in provide the last value. //

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // splice method

// // The splice() method in JavaScript is used to change the contents of an array by removing, replacing, or adding elements. It modifies the original array in place and returns an array containing the removed elements. //

//============================================================================================================================================//

// const arr = ["a", "b", "c", "d", "e"];

// console.log(arr.splice(4)); // splice method does mutate the originat array. //
// console.log(arr);
// console.log(arr.splice(1, 3)); // in splice method, first parameater defined the index and second parameater defined the number of element. //

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // reverse method

// // The reverse() method in JavaScript is used to reverse the order of elements in an array. It modifies the original array in place and returns the reversed array. //

//============================================================================================================================================//

// const arr = [21, 24, 57, 13, 96, 43, 35, 86];

// console.log(arr.reverse()); // reverse method does mutate the origenal array. //
// console.log(arr)

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // concat method

// // The concat() method in JavaScript is used to merge two or more arrays. It does not modify the original arrays but returns a new array containing the combined elements. //

//============================================================================================================================================//

// const arr = [1, 2, 3, 4, 5];
// const arr1 = [6, 7, 8, 9];
// const arr2 = [];
// const jointArray = arr2.concat(arr, arr1); // concate method does not make any changes to the original array. //

// console.log(jointArray);

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // join method

// // The join() method in JavaScript is used to join the elements of an array into a string. It creates and returns a new string by concatenating all the elements of the array, separated by a specified separator. //

//============================================================================================================================================//

// const arr = ["Hello", "World", "!"];

// const joinArray = arr.join(" "); // joun method does not make any changes to the original array. //
// console.log(joinArray);

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // at method

// // The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array. //

//============================================================================================================================================//

// const arr = [21, 24, 57, 13, 96, 43, 35, 86];

// console.log(arr.at(4));
// console.log(arr.at(-1));
// console.log(arr.at(-2));

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // forEach method

// // The forEach() method in JavaScript is used to iterate over the elements of an array and perform a specified operation for each element. It is a higher-order function that takes a callback function as an argument and executes that function once for each element in the array. //

//============================================================================================================================================//

// const arr = [243, 653, 744, 242, 131, 754, 913];
// // forEach method takes a callback function and that function has three parameater, the first is element, the second is index and the last one is the array. //
// arr.forEach(function (element, index, array) {
//   console.log(element, index);
// });

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const arr = [243, 653, 744, 242, 131, 754, 913];
// // firEach method does not support break and continue method. //
// arr.forEach(function (ele, ind) {
//   if (ele >= 400) {
//     console.log(`${ind}: ${ele}`);
//   }
// });

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // forEach method using arrow function

// const arr = [243, 653, 744, 242, 131, 754, 913];

// arr.forEach((ele, ind) => console.log(`${ind + 1}: ${ele}`));

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // forEach method in sets and maps

//============================================================================================================================================//

// // forEach method in maps

// const currencies = new Map([
//   ["BTD", "Bangladesh Taka"],
//   ["USD", "United States Dolar"],
//   ["EUR", "Euro"],
// ]);

// currencies.forEach(function (val, key, map) {
//   console.log(`${key}: ${val}`);
// });

//============================================================================================================================================//

// // forEach method in sets

// const forSet = new Set([243, 653, 744, 242, 131, 754, 913]);

// forSet.forEach(function (element, index, set) {
//   console.log(element, index, set);
// });

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // map method

// // The map method in JavaScript is used to create a new array by applying a given function to each element of an existing array. It iterates over the array, executes the provided function for each element, and returns a new array with the results. //

//============================================================================================================================================//

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// const multiArr = arr.map((val, i, arr) => {
//   return val * 2;
// });

// console.log(multiArr);

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const transactions = [100, 480, 400, -500, 200, -100];

// const furtherTransactions = transactions.map((transaction, i, arr) => {
//   return transaction - 100;
// });

// console.log(furtherTransactions);

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const colors = [
//   "black",
//   "white",
//   "pink",
//   "brown",
//   "orange",
//   "yellow",
//   "purple",
// ];

// const colorsUperCase = colors.map(
//   (color) => color[0].toUpperCase() + color.slice(1)
// );

// console.log(colorsUperCase);

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // filter method

// // The filter method in JavaScript is used to create a new array with all the elements that pass a certain condition. It iterates over the elements of an array, applies a provided function to each element, and includes the elements in the new array if the function returns true. //

//============================================================================================================================================//

// const transactions = [100, 480, 400, -500, 200, -100];

// const furtherTransactions = transactions.filter((transaction, i, arr) => {
//   if (transaction > 0) {
//     return transaction;
//   }
// });

// console.log(furtherTransactions);

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const num = [24, 63, 83, 13, 22, 63, 34];

// const evenNum = num.filter((number, i, arr) => number % 2 === 0);
// console.log(evenNum);

// const oddNum = num.filter((number, i, arr) => number % 2 !== 0);
// console.log(oddNum);

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // reduce method

// // The reduce() method in JavaScript is used to iterate over an array and accumulate a single value based on the elements of the array. It applies a callback function to each element of the array, resulting in a single output value. //

//============================================================================================================================================//

// const num = [1, 2, 3, 4, 5];

// const sum = num.reduce(function (acc, ele, i, arr) {
//   // The callback function takes four parameters: accumulator, currentValue, currentIndex, and array. //
//   return (acc += ele);
//   // The initialValue is optional. Is not provided, the first element of the array is used as the initial value. //
// }, 0);

// console.log(sum);

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const num = [1, 2, 3, 4, 5];

// const mul = num.reduce((acc, ele) => acc * ele, 1);

// console.log(mul);

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const num = [23, 63, 13, 86, 34, 95, 24, 66];

// const maxNum = num.reduce((acc, ele) => (acc > ele ? acc : ele));

// console.log(maxNum);

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const num = [23, 63, 13, 86, 34, 95, 24, 66];

// const minimum = num.reduce((acc, ele) => (acc < ele ? acc : ele));

// console.log(minimum);

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // date transformation pipeline

// // A data transformation pipeline is a series of operations or functions applied to data in a sequential manner to transform it into a desired format or structure. It is a common pattern used in data processing, data analysis, and data engineering workflows. //

//============================================================================================================================================//

// const transactions = [100, 480, 400, -500, 200, -100];

// const totalDeposit = transactions
//   .filter((money) => money > 0)
//   .map((deposit) => deposit * 1.2)
//   .reduce((acc, deposit) => acc + deposit);

// console.log(totalDeposit);

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const bankRober = [25000, 40000, 15000, 7500, 35000, 5000];

// const totalMoneyRobed = bankRober
//   .filter((money) => money >= 10000)
//   .map((money) => money / 2)
//   .filter((money) => money >= 10000)
//   .reduce((acc, money) => acc + money);

// console.log(totalMoneyRobed);

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // find method

// // In JavaScript, the find() method is used to retrieve the first element in an array that satisfies a specified condition. It iterates through the array and returns the first element for which the provided callback function returns a truthy value. If no such element is found, undefined is returned. //

//============================================================================================================================================//

// const transactions = [100, 480, 400, -500, 200, -100];

// const firstWiihdroawl = transactions.find((money) => money < 0);

// console.log(firstWiihdroawl);

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const students = [
//   { id: 1, name: "Sanji", age: 25 },
//   { id: 2, name: "Usap", age: 30 },
//   { id: 4, name: "Nami", age: 35 },
//   { id: 5, name: "Luffy", age: 32 },
//   { id: 6, name: "Zoro", age: 27 },
// ];

// const id4 = students.find((student) => student.id === 4);
// const nameWithL = students.find((student) => student.name.startsWith("L"));

// console.log(id4);
// console.log(nameWithL);

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // some and every method

// // In JavaScript, the some() and every() methods are array methods that allow you to check if elements in an array meet specific conditions. //

//============================================================================================================================================//

// // some method

// // The some() method tests whether at least one element in the array satisfies a provided condition. It returns a Boolean value (true or false). //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const transactions = [100, 480, 400, -500, 200, -100];

// const some = transactions.some((money) => money > 0);

// console.log(some);

//============================================================================================================================================//

// // every method

// // The every() method tests whether all elements in the array satisfy a provided condition. It returns a Boolean value (true or false). //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const transactions = [100, 480, 400, -500, 200, -100];

// const every = transactions.every((money) => money > 0);

// console.log(every);

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // flat and flatMap

// // In JavaScript, the flat() and flatMap() methods are array methods introduced in ECMAScript 2019 (ES10) that facilitate working with nested arrays and performing transformations on array elements. flat() and flatMap() methods return a new array and do not modify the original array. //

//============================================================================================================================================//

// // flat method

// // The flat() method creates a new array by flattening a nested array to a specified depth. It effectively concatenates all nested arrays into a single array. An integer that specifies the depth of flattening. By default, depth is 1. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const arr = [100, 480, 400, [-500, 200, 450], -100];

// console.log(transactions.flat());

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const arr = [100, 480, 400, [[-500, [200]], 450], -100];

// console.log(arr.flat(2))
// console.log(arr.flat(3))

//============================================================================================================================================//

// // flatMap() method

// // The flatMap() method combines the functionalities of map() and flat() in a single method. It first maps each element of the array using a mapping function, and then flattens the result into a new array. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const accounts = [
//   { owner: "Luffi", transactions: [1000, 480, 400, -5000, 200, -1000] },
//   { owner: "Zoro", transactions: [100, 4880, 4000, -500, 2000, -100] },
//   { owner: "Nami", transactions: [100, 480, 400, -500, 200, -100] },
//   { owner: "Usap", transactions: [100, 480, 4000, -500, 200, -10000] },
//   { owner: "Sanji", transactions: [100, 40880, 4000, -50000, 200, -100] },
// ];

// const flatTransactions = accounts.flatMap((account) => account.transactions);
// // flatMap only works in level 1 //
// console.log(flatTransactions);

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// //  sort method

// // In JavaScript, the sort() method is an array method that allows you to sort the elements of an array in place. By default, the sort() method sorts elements alphabetically as strings. However, it can also be used to sort elements in other ways by providing a custom sorting function. //

//============================================================================================================================================//

// const frouts = ["orange", "pineapple", "mango", "apple", "banana"];

// console.log(frouts.sort());
// // sort method sorted this arr in alphabatiacal order. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const numArr = [2, 5, 7, 1, 8, 3, 9, 4, 6];

// console.log(numArr.sort());

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const numArr = [21, 555, 73, 612, 12, 874, 323, 80, 42];

// console.log(numArr.sort());
// // sort method converts the numbers that we got from the array into string and then use slice mehtod to get the first number and sort according to tha value of that number. //

//============================================================================================================================================//

// // custom sorting function

// // A custom compare function takes two arguments, typically referred to as a and b, representing two elements being compared. The function should return a negative value if a should be sorted before b, a positive value if a should be sorted after b, or 0 if the elements are considered equal. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // ascending

// const numArr = [21, 555, 73, 612, 12, 874, 323, 80, 42];

// const sortArr = numArr.sort(function (a, b) {
//   return a > b ? 1 : -1; // (a > b ? 1 : -1) or (a-b)
// });

// console.log(sortArr);

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // descinding

// const numArr = [21, 555, 73, 612, 12, 874, 323, 80, 42];

// const sortArr = numArr.sort(function (a, b) {
//   return a > b ? -1 : 1; // (a > b ? -1 : 1) or (b-a)
// });

// console.log(sortArr);
