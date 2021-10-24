import { ProxyState } from "../AppState.js"
import { Task } from "../Models/Task.js"


class TasksService {

  createTask(taskData) {
    console.log('task Data in service', taskData)
    const task = new Task(taskData)
    ProxyState.tasks = [...ProxyState.tasks, task]
  }

  deleteTask(id) {
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
  }

  toggleCheck(taskId) {
    const tasks = ProxyState.tasks
    const found = tasks.find(task => taskId == task.taskId)
    found.completed += true
    ProxyState.tasks = ProxyState.tasks
    saveState()

  }

  // Counts checked boxes
  // document.querySelectorAll('input[type="checkbox"]:checked').length
}

export const tasksService = new TasksService()
