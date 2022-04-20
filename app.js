// array that needs to be sorted
const arrayToBeSorted = [9, 4, 2, 1, 0, 3, 5, 6, 8, 7];

/**
 * The merge() function takes two array.
 * Starting at the first index of each array the two numbers are compared.
 * The lower number gets added to the new sorted array then gets deleted from the array it was added from.
 * The process repeats until one of the left or right arrays are empty.
 * The function then returns the sorted array then any last numbers left in the left or right array.
 * @param {number} left - left half of the array
 * @param {number} right - right half of the array
 * @returns {number[]} sorted array of numbers
 */
function merge(left, right) {
  let arr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  return [...arr, ...left, ...right];
}

/**
 * The mergeSort() function takes in an array that needs to be sorted.
 * The array is divided in half recursively until there is only one element left when halved.
 * Then the function spireles upwards executing the merge function for each recursive division.
 *
 * @param {numbers[]} arr
 * @returns {function} - Calls merge with two recursive mergeSort functions which returns sorted merged array.
 */
function mergeSort(arr) {
  if (arr.length < 2) return arr;
  const half = arr.length / 2;
  const left = arr.splice(0, half);
  return merge(mergeSort(left), mergeSort(arr));
}

const sortedArray = mergeSort(arrayToBeSorted);
console.log(sortedArray);
