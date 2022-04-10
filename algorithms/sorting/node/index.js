const _ = require('lodash');
// let arr = Array.from(Array(100000).keys());
let arr = [10, 80, 30, 90, 40, 50, 70];

// arr = _.shuffle(arr);

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

module.exports = {
  arr,
  swap,
};
