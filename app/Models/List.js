import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"


export class List {

  constructor(data) {
    this.id = data.id || generateId()
    this.listName = data.listName
    this.color = data.color
    this.complete = data.complete
    console.log('Lists module loaded')
  }

  get Template() {
    return /*html*/`
    <div div class="col-md-3 shadow rounded  m-3" >
      <div class="row d-flex justify-content-space-between rounded-top p-2" style="background-color: ${this.color}">
        <div class="col-md-9 ">
          <h3><b>${this.listName}</b></h3>
        </div>
        <div class="col p-0">
          <button class="btn btn-dark" onclick="app.listsController.deleteList('${this.id}')">X</button>
        </div>
        <div class="col-12 text-light text-center">${this.completeTasks()}</div>
      </div>



      <div class="row">
        <div class="col-12 m-1 p-2">
          <b>Add Task</b>
        
          <div class="row">
          ${this.getTasks()}
            <div class="col-2 d-flex align-items-center p-2 form-check">
                
              
            </div>
          </div>
        </div>
      </div>
      <form class="row align-items-end p-2" onsubmit="app.tasksController.createTask('${this.id}')">
        <div class="col-9">
          <input type="text" class="form-control" name="taskName" id="taskName" aria-describedby="helpId"
            placeholder="add task" minlength="3" maxlength="50" required>
        </div>
        <button class="btn btn-dark col-3">+</button>
      </form>
    </div>



    `
  }


  getTasks() {
    const tasks = ProxyState.tasks.filter(t => this.id == t.listId)
    let template = ''
    tasks.forEach(t => {
      template += t.Template
    })
    return template
  }

  completeTasks() {
    const tasks = ProxyState.tasks.filter(t => this.id == t.listId)
    let totalTasks = tasks.length
    let found = tasks.filter(task => task.complete)
    let totalComplete = found.length
    console.log(totalComplete)
    return `${totalTasks} tasks / ${totalComplete} complete`
  }





}

