import { readFileSync } from 'fs'

const input = readFileSync('./src/input.txt').toString().split('\n')
const w = input[0].length - 1

let product = 1
const slopeX = [1, 3, 5, 7, 1]
const slopeY = [1, 1, 1, 1, 2]
for (let i = 0; i < 5; i++) {
  const dx = slopeX[i]
  const dy = slopeY[i]

  let x = 0
  let trees = 0
  for (let y = dy; y < input.length; y = y + dy) {
    x = x + dx
    if (input[y][x % w] === '#') {
      trees++
    }
  }
  product = product * trees
  console.log(trees)
}
console.log(product)
