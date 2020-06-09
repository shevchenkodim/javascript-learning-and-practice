// Objects

const person = {
    name: 'Dmytro',
    age: 21,
    job: 'Fullstack'
}

const op = new Proxy(person, {
    get(target, prop) {
        return target[prop]
    },
    set(target, prop, value) {
        if (prop in target) {
            target[prop] = value
        } else {
            throw new Error(`No ${prop} field in target`)
        }
    },
    has(target, prop) {
        return ['age', 'name', 'job'].includes(prop)
    },
    defineProperty(target, prop) {
        console.log('Deleting....', prop)
    }
})

// Functions
const log = text => `Log: ${text}`

const fp = new Proxy(log, {
    apply(target, thisArg, args) {
        console.log(target)
        console.log(thisArg)
        console.log(args)
        return target.apply(thisArg, args)
    }
})

// Classes
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const PersonProxy = new Proxy(Person, {
    construct(target, args) {
        console.log('Construct...')

        return new target(...args)
    }
})

const p = new PersonProxy('Dmytro', 21)
