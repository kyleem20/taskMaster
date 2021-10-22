import { ProxyState } from "../AppState.js"
import { Task } from "../Models/Task.js"




class TaskService {

  createTask(taskData) {
    console.log('task Data in service', taskData)
    const task = new Task(taskData)
    ProxyState.tasks = [...ProxyState.tasks, task]
  }

}

export const taskService = new TaskService()
