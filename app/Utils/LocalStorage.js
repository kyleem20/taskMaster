
//TODO add storage



import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";
import { Task } from "../Models/Task.js";




export function saveState() {
  localStorage.setItem('ListApp', JSON.stringify({
    lists: ProxyState.lists,
    tasks: ProxyState.tasks,
    complete: ProxyState.complete
  }))
}

export function loadState() {
  let data = JSON.parse(localStorage.getItem('ListApp'))
  console.log('loaded data', data)
  if (data != null) {
    ProxyState.lists = data.lists.map(p => new List(p))
    ProxyState.tasks = data.tasks.map(t => new Task(t))
    ProxyState.complete = data.complete.map(c => new Complete(c))
  }
}
