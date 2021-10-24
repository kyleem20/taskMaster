import { ProxyState } from "../AppState.js"
import { listsService } from "../Services/ListsService.js"
import { loadState, saveState } from "../Utils/LocalStorage.js";

function _drawLists() {
  const lists = ProxyState.lists
  let template = ''
  lists.forEach(l => template += l.Template)
  document.getElementById('newList').innerHTML = template
}

export class ListsController {

  constructor() {
    ProxyState.on('lists', _drawLists)
    ProxyState.on('lists', saveState)
    console.log('lists controller loaded')
    ProxyState.on('tasks', _drawLists)
    ProxyState.on('tasks', saveState)
    _drawLists
    loadState()
  }

  createList() {
    window.event.preventDefault()
    const formElem = window.event.target
    const listData = {
      listName: formElem.listName.value,
      color: formElem.color.value
    }

    console.log(listData);

    listsService.createList(listData)

    formElem.reset()
    // bootstrap.Modal.getInstance(document.getElementById('form-modal')).toggle()
  }


  deleteList(id) {
    if (window.confirm('Are you sure you want delete this list?')) {
      listsService.deleteList(id)
      console.log('list deleted');
    }

  }

  showLists() {
    _drawLists()
    document.getElementById('newList').innerHTML = listData()
  }


}