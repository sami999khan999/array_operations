"use strict";

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
// console.log(arr.slice()); // slice method without parateater creats the new array. Any changes to the newly created array will net effect the origenal array. //
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

const arr = [21, 24, 57, 13, 96, 43, 35, 86];

console.log(arr.at(4));
console.log(arr.at(-1));
console.log(arr.at(-2));
