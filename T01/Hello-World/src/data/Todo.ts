export class Todo {
    serialNumber: number
    title: string
    description: string
    active: Boolean

    constructor(
        serialNumber: number,
        title: string,
        description: string,
        active: Boolean
    ) {
        this.serialNumber = serialNumber
        this.title = title
        this.description = description
        this.active = active
    }
}