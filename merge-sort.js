// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {
  let splitIndex = 0
  if(arr.length % 2 == 0){
    splitIndex = arr.length/2
  }
  else{
    splitIndex = (arr.length/2) - 0.5
  }

  // Check if the input is length 1 or less
  // If so, it's already sorted: return
    if(arr.length <= 1){
      return arr
    }

  // Divide the array in half
  let arrA = arr.slice(0,splitIndex)
  let arrB = arr.slice(splitIndex)

  // Recursively sort the left half
  arr  = mergeSort(arrA)
  // Recursively sort the right half
  arr = mergeSort(arrB)

  // Merge the halves together and return
  return merge(arrA,arrB)

}

// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {
  // Create an empty return array
  let results = []

  // Point to the first value of each array
  let pointerA = arrA[0]
  let pointerB = arrB[0]

  // While there are still values in each array...
  while(arrA.length !== 0 && arrB.length!== 0){

    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array
    if(pointerA < pointerB ){
    results.push(pointerA)
    arrA.splice(0,1)
    pointerA = arrA[0]
    }
    if(pointerA > pointerB){
    results.push(pointerB)
    arrB.splice(0,1)
    pointerB = arrB[0]
    }
  }
  // Return the return array
  results =  results.concat(arrA).concat(arrB)
  return results
}

module.exports = [merge, mergeSort];
