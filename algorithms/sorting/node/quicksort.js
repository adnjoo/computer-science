const { Timer } = require('timer-node');
const timer = new Timer({ label: 'test-timer' });
const { arr, swap } = require('./index.js');

/* This function takes last element as pivot, places
   the pivot element at its correct position in sorted
   array, and places all smaller (smaller than pivot)
   to left of pivot and all greater elements to right
   of pivot */
function partition(arr, low, high) {
  // pivot
  let pivot = arr[high];

  // Index of smaller element and
  // indicates the right position
  // of pivot found so far
  let i = low - 1;
  //   console.log('i', i);

  for (let j = low; j < high; j++) {
    // If current element is smaller than the pivot
    if (arr[j] < pivot) {
      // Increment index of smaller element
      i++;
      swap(arr, i, j);
      console.log('swap', arr, i, j);
    }
  }
  swap(arr, i + 1, high);
  console.log('last swap', arr, i + 1, low, high);
  return i + 1;
}

// low --> Starting index, high --> Ending index
function quickSort(arr, low, high) {
  if (low < high) {
    // pi is partitioning index, arr[p]
    // is now at right place
    let pi = partition(arr, low, high);

    // Separately sort elements before
    // partition and after partition
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
  return arr;
}

timer.start();
console.log('before', arr);
quickSort(arr, 0, arr.length - 1);
timer.pause();
let p = timer.pause();
console.log(`${p._accumulatedMs} ms elapsed`);
console.log('after', arr);
