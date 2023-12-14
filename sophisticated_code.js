/* sophisticated_code.js */

// This code calculates the factorial of a number using recursion

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// This code generates a Fibonacci sequence using recursion

function fibonacci(n) {
  if (n === 0) {
    return [0];
  } else if (n === 1) {
    return [0, 1];
  } else {
    let sequence = fibonacci(n - 1);
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    return sequence;
  }
}

// This code sorts an array using the bubble sort algorithm

function bubbleSort(array) {
  let length = array.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}

// This code implements the Sieve of Eratosthenes algorithm to find prime numbers

function sieveOfEratosthenes(n) {
  let primes = [];
  let sieve = new Array(n).fill(true);

  for (let p = 2; p * p <= n; p++) {
    if (sieve[p]) {
      for (let i = p * p; i <= n; i += p) {
        sieve[i] = false;
      }
    }
  }

  for (let i = 2; i <= n; i++) {
    if (sieve[i]) {
      primes.push(i);
    }
  }

  return primes;
}

// This code implements a binary search algorithm

function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

// Test the functions

console.log(factorial(5));
console.log(fibonacci(8));
console.log(bubbleSort([9, 5, 2, 7, 1, 8]));
console.log(sieveOfEratosthenes(30));
console.log(binarySearch([1, 3, 5, 7, 9, 11], 7));