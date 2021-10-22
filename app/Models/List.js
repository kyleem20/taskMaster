import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"


export class List {

  constructor(data) {
    this.id = data.id || generateId()
    this.listName = data.listName
  }

  get Template() {
    return `
        <div class="col-12">
          <div class="row p-2">
            <div class="col-md-3 bg-light shadow rounded  m-3">
              <div class="row">
                <div class="rounded-top bg-secondary col-12 p-2">
                  <div class="row">
                    <div class="col-9">
                      <p><b>${this.listName}</b></p>
                    </div>
                   
                    <button class="btn btn-dark col-2" onclick="app.tasksController.deleteList('${this.id}')">X</button>
                  </div>
                </div>
              </div>
               ${this.getTasks()}
              <div class="row">
                <div class="col-12 m-3 p-2  ">
                  <b>Add Task</b>
                  <div class="">
                    added task
                  </div>
                </div>
              </div>
              <form class="row align-items-end p-2" onsubmit="app.tasksController.createTasks('${this.id}')">
                <div class="col-9">
                  <input type="text" class="form-control" name="listName" id="" aria-describedby="helpId"
                    placeholder="add task">
                </div>
                <button class="btn btn-dark col-3">+</button>
              </form>
            </div>
          </div>
        </div>
    `
  }
}