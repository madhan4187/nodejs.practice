const addDays = require('date-fns/addDays')

function days(n) {
  let date = addDays(new Date(2020, 7, 22), n)
  console.log(`${date.getDays()}-${date.getMonth() + 1}-${date.getFullYear()}`)
}

days(2)
