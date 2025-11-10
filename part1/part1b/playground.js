// variables
const x = 1
let y = 5

console.log(x, y)
y += 10
console.log(x, y)
y = 'some text'
console.log(x, y)
// x = 4 would yield an error, as x is constant

// arrays and array map method
const t = [1, -1, 3]

t.push(5)

console.log(t.length)
console.log(t[1])

t.forEach(value => {
    console.log('t', value)
})

const t2 = t.concat(5)
console.log(t2)

const m1 = t.map(value => value * 3)
console.log(m1)

const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)

const [first, second, ...rest] = t
console.log(first, second)
console.log(rest)

// Objects
const obj1 = {
    name: 'Arturo Hellas',
    age: 35,
    education: 'Wise',
}

console.log(obj1)

obj1['secret number'] = 123

console.log(obj1['secret number'])
console.log(obj1.name)

// functions
const sum = (p1, p2) => {
    console.log(p1, p2)
    return p1 + p2
}

const result = sum(2, 5)
console.log(result)

// classes
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greet() {
        console.log('Hello, my name is ' + this.name + '!')
    }
}

const Berta = new Person('Berta Gaga', 40)
Berta.greet()