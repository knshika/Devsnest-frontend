// question 1

function is_array(testInput) {
  return Array.isArray(testInput);
}
console.log(is_array("w3resource"));
console.log(is_array([1, 2, 4, 0]));
console.log(is_array({ a: "123" }));

// question 2

function array_Clone(array) {
  arrayCopy = array.slice();
  arrayCopy = array.filter(() => true);
  arrayCopy = array.map((x) => x);
  arrayCopy = [...array];
  arrayCopy = array.concat();
  return arrayCopy;
}
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

// question 3

function first(arr, n) {
  if (!n) {
    return arr[0];
  }
  if (n < 0) {
    return [];
  }
  if (n > arr.length) {
    return arr;
  } else {
    return arr.slice(0, n);
  }
}
console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));

// question 4

function change(arr, symbol) {
  return arr.join(symbol);
}
console.log(change(["Red", "Green", "White", "Black"], ","));
console.log(change(["Red", "Green", "White", "Black"], "+"));

// question 5

// function mode(arr){
//     return arr.sort((a,b) =>
//           arr.filter(v => v===a).length - arr.filter(v => v===b).length
//     ).pop();
// }

function maxCount(arr) {
  let max = 0;
  let val = arr[0];
  let hashmap = {};
  for (let elem of arr) {
    if (elem in hashmap) {
      hashmap[elem] += 1;
      if (hashmap[elem] > max) {
        max = hashmap[elem];
        val = elem;
      }
    } else {
      hashmap[elem] = 1;
    }
  }
  return val + " ( " + max + " times )";
}
console.log(maxCount([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]));
