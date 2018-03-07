/* Arrays */
// Standard definition: A linear collection of elements, where the elements can be accessed via indices,
//  which are usually integers used to compute offsets.

/* print function */
const print = msg => console.log(msg);

/* Creating Arrays */

const numbers = [1, 2, 3, 4, 5];
print(numbers.length);

const newNumbers = new Array(10);
print(newNumbers.length);

// JS arrays can contain different types:
const objects = [1, 'Joe', true, null];

// Verify an object is an array by calling Array.isArray():
const number = 3;
const arr = [3, 1, 4];
print(Array.isArray(number)); // false
print(Array.isArray(arr)); // true

// Assign 1 - 100 to an array:
const nums = [];
for (let i = 0; i < 100; ++i) {
  nums[i] = i + 1;
}
// print(nums);

/* Creating arrays from strings */
const sentence = 'the quick brown fox jumped over the lazy dog';
const words = sentence.split(' ');
for (let i = 0; i < words.length; i++) {
  print(`word ${i}: ${words[i]}`);
}

/* Aggregate Array Operations */
// Assign one array to another array:
const newNums = [];
for (let i = 0; i < 10; i++) {
  newNums[i] = i + 1;
}
const samenums = newNums;
print(samenums);
