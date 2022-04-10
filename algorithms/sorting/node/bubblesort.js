const { Timer } = require('timer-node');
const timer = new Timer({ label: 'test-timer' });
const { arr } = require('./index.js');

let bubble = (array) => {
  let n = array.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (array[j] > array[j + 1]) {
        // swap if bigger
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};

timer.start();
console.log('before', arr);
bubble(arr, 0, arr.length - 1);
timer.pause();
let p = timer.pause();
console.log(`${p._accumulatedMs} ms elapsed`);
console.log('after', arr);
