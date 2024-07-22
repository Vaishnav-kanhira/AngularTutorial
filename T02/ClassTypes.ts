class MathFunctions {
    valueOne: number
    valueTwo: number

    private add: () => number = () => (this.valueOne + this.valueTwo)
    private substract: () => number = () => (this.valueOne - this.valueTwo)
    private multiply: () => number = () => (this.valueOne * this.valueTwo)
    private divide: () => number = () => (this.valueOne / this.valueTwo)
    private modulus: () => number = () => (this.valueOne % this.valueTwo)
    executeAll: () => string = () => {
        return `add = ${this.add()} | substract = ${this.substract()} | multiply = ${this.multiply()} | divide = ${this.divide()} | modulus = ${this.modulus()}`
    }
}

let mathFunctions = new MathFunctions()

mathFunctions.valueOne = 23
mathFunctions.valueTwo = 89

console.log(mathFunctions.executeAll())