let a: number = 0.01
let b: string = "string"
let c: boolean = false
let d: number[] = [1, 2, 3]

enum Directions { LEFT = 0, TOP = 1, RIGHT = 2, BOTTOM = 3 }

// TYPE ASSERTION

let x: any = "some"

let e = (x as string).length
let f = (<string>x).length