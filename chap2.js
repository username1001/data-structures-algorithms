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

// Note: when assigning one array to another, you are assigning a reference to the assigned array.
// When you make a change to the original array, that change is reflected in the other array as well.
// AKA a "shallow copy"
const numero = [];
for (let i = 0; i < 100; i++) {
  numero[i] = i + 1;
}

const sameNumero = numero;
numero[0] = 400;
print(sameNumero[0]); // 400

// a "deep copy", using a function:
const copy = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    arr2[i] = arr1[i];
  }
};

const n = [];
for (let i = 0; i < 100; i++) {
  n[i] = i + 1;
}
const sameN = [];
copy(n, sameN);
n[0] = 400;
print(sameN[0]); // 1

/* Accessor Functions */

// Searching for a Value with indexOf()
// const names = ['David', 'Cynthia', 'Raymond', 'Clayton', 'Jennifer'];
// // putstr() not defined in book.
// putstr('Enter a name to search for: ');
// // readline() not defined in book.
// const name = readline();
// const position = names.indexOf(name);
// if (position >= 0) {
//   print(`Found ${name} at position ${position}`);
// } else {
//   print(`${name} not found in array.`);
// }

// Different version:
const newNames = [
  'Kaitlyn',
  'Cassandra',
  'Mike',
  'Adam',
  'John',
  'Sarah',
  'Mike'
];
const name = 'Mike';
const firstPos = newNames.indexOf(name);
print(`First found ${name} at position ${firstPos}`);
const lastPos = newNames.lastIndexOf(name);
print(`Last found ${name} at position ${lastPos}`);
