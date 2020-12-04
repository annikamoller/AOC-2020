// import { readFileSync } from 'fs'

// const input = readFileSync('./src/input.txt')
//   .toString()
//   .split('\r\n\r\n')
//   .map((s) => s.replace(/\r\n/g, ' '))

// let validPassports = 0
// const fields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid', 'cid']
// for (const i of input) {
//   const y = [...fields]
//   const f = i.split(' ')
//   for (const x of f) {
//     const key = x.split(':')[0]
//     y.splice(y.indexOf(key), 1)
//   }
//   if (y.length == 0 || y[0] == 'cid') validPassports++
// }
// console.log(validPassports)

import { readFileSync } from 'fs'

const input = readFileSync('./src/input.txt')
  .toString()
  .split('\r\n\r\n')
  .map((s) => s.replace(/\r\n/g, ' '))

const fields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid', 'cid']

let ok = 0
for (const i of input) {
  const pairs = i.split(' ')
  const res = [...fields]
  for (const p of pairs) {
    const [key, value] = p.split(':')
    let valid = false
    const n = parseInt(value)
    switch (key) {
      case 'byr':
        valid = 1920 <= n && n <= 2002
        break
      case 'iyr':
        valid = 2010 <= n && n <= 2020
        break
      case 'eyr':
        valid = 2020 <= n && n <= 2030
        break
      case 'hgt':
        switch (value.slice(value.length - 2)) {
          case 'cm':
            valid = 150 <= n && n <= 193
            break
          case 'in':
            valid = 59 <= n && n <= 76
            break
          default:
        }
        break
      case 'hcl':
        valid = value.length === 7 && value.match(/#[a-zA-Z0-9]{6}/) !== null
        break
      case 'ecl':
        valid = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(value)
        break
      case 'pid':
        valid = value.length === 9 && !isNaN(n)
        break
      case 'cid':
        valid = true
        break
      default:
    }
    if (valid) {
      res.splice(res.indexOf(key), 1)
    }
  }
  if (res.length === 0 || res[0] === 'cid') {
    ++ok
  }
}

console.log(ok)
