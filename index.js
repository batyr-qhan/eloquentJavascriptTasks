// Chapter 5. Higher Order Functions.

// flattening
let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
// → [1, 2, 3, 4, 5, 6]
const arr = arrays.reduce((resultArr, currItem) => {
  resultArr = resultArr.concat(currItem)
  return resultArr
}, [])
