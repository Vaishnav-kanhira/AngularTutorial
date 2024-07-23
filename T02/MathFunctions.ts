export class MathFunctions {
    // valueOne: number
    // valueTwo: number

    // constructor(valueOne: number, valueTwo: number) {
    //     this.valueOne = valueOne
    //     this.valueTwo = valueTwo
    // }

    constructor(private _valueOne: number, private _valueTwo: number) { }

    set valueOne(value: number) {
        if (value > 5) {
            this._valueOne = 5
        } else {
            this._valueOne = value
        }
    }

    get valueOne(): number {
        return this._valueOne
    }

    private add: () => number = () => (this._valueOne + this._valueTwo)
    private substract: () => number = () => (this._valueOne - this._valueTwo)
    private multiply: () => number = () => (this._valueOne * this._valueTwo)
    private divide: () => number = () => (this._valueOne / this._valueTwo)
    private modulus: () => number = () => (this._valueOne % this._valueTwo)
    executeAll: () => string = () => {
        return `valueOne = ${this.valueOne} | _valueTwo = ${this._valueTwo}\n` +
            `add = ${this.add()} | substract = ${this.substract()} | multiply = ${this.multiply()} | divide = ${this.divide()} | modulus = ${this.modulus()}`
    }
}
