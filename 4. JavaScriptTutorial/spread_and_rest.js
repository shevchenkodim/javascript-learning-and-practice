cities = ['Київ', 'Львів', 'Харків', 'Суми', 'Черкаси', 'Конотоп']

const citiesUkrainePopulations = {
    Kyiv: 10,
    Konotop: 1,
    Lviv: 5
}

const citiesEvropePopulations = {
    Kyiv: 20,
    Berlin: 10,
    Praga: 1,
    Paris: 5
}

/// Spread
/* allCities = [...cities]

console.log(allCities) */

/* console.log({ ...citiesUkrainePopulations, ...citiesEvropePopulations }) */

/// Practice
//const numbers = [1, 5, 9, 3, 7, 2]
//console.log(Math.max(1, 5, 9, 3, 7, 2))
//console.log(Math.max(...numbers))
//console.log(Math.max.apply(null, numbers))

/* const divs = document.querySelectorAll('div')
console.log(divs, Array.isArray(divs))
const nodes = [...divs]
console.log(nodes, Array.isArray(nodes)) */


///Rest

function sum(a, b, ...rest) {
    return a + b + rest.reduce((a, i) => a + i, 0)
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8]

console.log(sum(...nums))

// const a = nums[0]
// const b = nums[1]

const [a, b, ...other] = nums
console.log(a, b, other)

const person = {
    name: 'Max',
    age: 20,
    city: 'Kyiv',
    country: 'Ukraine'
}

const { name, age, ...address } = person

console.log(name, age, address)