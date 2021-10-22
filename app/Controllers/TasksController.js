import { taskService } from "../Services/TaskService.js"


export class TasksController {
  constructor() {
  }
  createTask(taskId) {
    window.event.preventDefault()
    const form = window.event.target
    let taskData = {
      taskName: form.taskName.value,
      taskId: taskId
    }

    console.log('creating task', taskData)
    taskService.createTask(taskData)
  }


}


