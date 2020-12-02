// Chapter 5. Higher Order Functions.

// flattening
let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
// → [1, 2, 3, 4, 5, 6]
const arr = arrays.reduce((resultArr, currItem) => {
  resultArr = resultArr.concat(currItem)
  return resultArr
}, [])

console.log(arr)

// your own loop
function loop(val, isInteger, decrement, log) {
  let currVal = val

  while(isInteger(currVal)) {
    log(currVal)
    currVal = decrement(currVal)
  }
}

loop(3, n => n > 0, n => n - 1, console.log)