const _ = require('lodash');
const { Timer } = require('timer-node');
const timer = new Timer({ label: 'test-timer' });

let arr = Array.from(Array(50000).keys());

arr = _.shuffle(arr);

let bubble = async (array) => {
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
let s = timer.time();
bubble(arr);
timer.pause();
let p = timer.pause();
console.log('start', s, 'pause', p, 'arr', arr);
