import { readFileSync } from 'fs'

const input = readFileSync('./src/input.txt')
  .toString()
  .replace(/[BR]/g, '1')
  .replace(/[FL]/g, '0')
  .split('\r\n')
  .sort()
  .map((s) => parseInt(s, 2))
for (let x = 1; x < input.length; x++) {
  if (input[x] !== input[x - 1] + 1) {
    console.log(input[x] - 1)
  }
}
