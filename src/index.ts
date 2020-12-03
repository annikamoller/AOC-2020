import { readFileSync } from "fs"

const input = readFileSync("./src/input.txt").toString()
const reg = /([0-9]*)-([0-9]*) ([a-z]): ([a-z]*)/mg
let ok = 0
let m
while (m = reg.exec(input)) {
  const low = parseInt(m[1],10)
  const high = parseInt(m[2],10)
  const b = m[3]
  const passw = m[4]

  const x = passw[low-1] === b
  const y = passw[high-1] === b
  if (x != y) {
    ++ok
  }

  // let count = 0
  // for(let i = 0; i < passw.length; ++i) {
  //   if (passw[i] === b) {
  //     count++
  //   }
  // }
  // if (low <= count && count <= high) {
  //   ok++
  // }
}

console.log(ok)