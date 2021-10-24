import { tasksService } from "../Services/TasksService.js"


export class TasksController {
  constructor() {
    document.querySelectorAll('input[type="checkbox"]:checked').length;

  }
  createTask(taskId) {
    window.event.preventDefault()
    const form = window.event.target
    let taskData = {
      taskName: form.taskName.value,
      listId: taskId,
      completed: false
    }
    // countCheckboxes()
    console.log('creating task', taskData)
    tasksService.createTask(taskData)
  }


  // toggleCheck(taskId) {
  //   tasksService.toggleCheck(taskId)
  //   saveState()
  // }

  // countCheckboxes() {
  //   let countInput = document.getElementById('count');
  //   let checkboxes = document.querySelectorAll('input[type="checkbox"]');
  //   for (let i = 0; i < checkboxes.length; i++) {
  //     checkboxes[i].onchange = countCheckboxes;
  //   }


  //   let count = 0;
  //   for (let i = 0; i < checkboxes.length; i++) {
  //     if (checkboxes[i].checked)
  //       count++;
  //   }
  //   countInput.value = count;
  // }

  completeTasks() {
    tasksService.completeTasks
  }

  deleteTask(id) {
    if (window.confirm('Are you sure you want delete this task?')) {
      tasksService.deleteTask(id)
      console.log('task deleted');
    }

  }
}

