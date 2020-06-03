function hello() {
    console.log('Hello', this)
}

const person = {
    name: 'Dmytro',
    age: 21,
    sayHello: hello,
    sayHelloWindow: hello.bind(document),
    logInfo: function (job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}

const lena = {
    name: 'Elena',
    age: 22
}

person.logInfo.bind(lena, 'Web', '3333333333')()
person.logInfo.call(lena, 'Web', '3333333333')
person.logInfo.apply(lena, ['Web', '3333333333'])

//---------------------------------------------------

const array = [1, 2, 3, 4, 5]

/* function multiBy(arr, n) {
    return arr.map(function (i) {
        return i * n
    })
} */

Array.prototype.multiBy = function (n) {
    return this.map(function (i) {
        return i * n
    })
}

console.log(array.multiBy(2))
