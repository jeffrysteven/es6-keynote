// Allows you to represent an indefinite number of elements as an array.

function sum(...nums) {
  let total = 0
  for (const num of nums) {
    total += num
  }
  return total
}

sum(1,2,3) // 6