const people = [
    { name: 'Dmytro', age: 21, budget: 40000 },
    { name: 'Kristina', age: 20, budget: 12000 },
    { name: 'Lena', age: 22, budget: 17000 },
    { name: 'Max', age: 20, budget: 20000 },
    { name: 'Petro', age: 16, budget: 1000 },
    { name: 'Victor', age: 19, budget: 1500 },
]

/* for (let i = 0; i < people.length; i++) {
    console.log(people[i])
} */

/* for (let person of people) {
    console.log(person)
} */


// ForEach
//ES5
/* people.forEach(function (person, index, pArr) {
    console.log(person)
}) */

// ES6
/* people.forEach(person => console.log(peson)) */


//Map
/* const newPeople = people.map(person => person.name)
console.log(newPeople) */


// Filter
/* const adults = people.filter(person => {
    if (person.age >= 18) {
        return true
    }
}) */
/* const adults = people.filter(person => person.age >= 18)
console.log(adults) */


//Reduce
/* let amount = 0
for (let i = 0; i < people.length; i++) {
    amount += people[i].budget
}
console.log(amount) */

/* const amount = people.reduce((total, person) => total + person.budget, 0)
console.log(amount) */


//Find
/* const test = people.find(person => person.name === 'Kristina')
console.log(test) */


//FindIndex
/* const indexTest = people.findIndex(person => person.name == 'Kristina')
console.log(indexTest)
 */

//=========================================================================//

const amount = people
    .filter(person => person.budget > 15000)
    .map(person => {
        return {
            info: `${person.name} (${person.age})`,
            budget: person.budget
        }
    })
    .reduce((total, person) => total + person.budget, 0)

console.log(amount)
