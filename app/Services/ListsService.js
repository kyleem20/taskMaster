import { ProxyState } from "../AppState.js"
import { List } from "../Models/List.js"


class ListsService {

  constructor() {
    console.log('lists service loaded');
  }

  deleteList(id) {
    ProxyState.lists = ProxyState.lists.filter(l => l.id != id)
    ProxyState.tasks = ProxyState.tasks.filter(t => t.taskId != id)
  }

  createList(listData) {
    const list = new List(listData)
    ProxyState.lists = [...ProxyState.lists, list]
  }


}

export const listsService = new ListsService()