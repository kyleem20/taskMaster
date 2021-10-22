import { generateId } from "../Utils/generateId.js"

export class Task {

  constructor(data) {
    this.id = data.id || generateId()
    this.taskName = data.taskName
    this.complete = false
  }

  get Template() {
    return `
    <div>${this.taskName}</div>
    `
  }
}
