import { generateId } from "../Utils/generateId.js"
import { ProxyState } from "../AppState.js"

export class Task {

  constructor(data) {
    this.id = data.id || generateId()
    this.taskName = data.taskName
    this.complete = data.complete
    this.listId = data.listId


  }

  get Template() {
    return `
            <div class="col-12 d-flex align-items-center p-2 form-check">
                <input onclick="app.tasksController.completeTasks('${this.id}')" class="form-check-input m-0" type="checkbox" value="taskComplete" name="${this.id}" id="${this.id}" ${this.complete ? 'checked' : ''}>
                
              <label class ="col-6 form-check-label ps-3" for="taskComplete">
                
                <div>${this.taskName}</div>
              </label>
                <button class ="col-2 btn btn-dark text-center m-0"
                onclick="app.tasksController.deleteTask('${this.id}')">X</button>
            </div>
    `
  }
}
