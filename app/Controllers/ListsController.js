import { ProxyState } from "../AppState.js"
import { listsService } from "../Services/ListsService.js"

function _drawLists() {
  const lists = ProxyState.lists
  let template = ''
  lists.forEach(l => template += l.Template)
  document.getElementById('newList').innerText = this.listName
}

export class ListsController {

  constructor() {
    ProxyState.on('lists', _drawLists)
    // ProxyState.on('lists', saveState)
    console.log('lists controller loaded')
    _drawLists
  }

  createList() {
    window.event.preventDefault()
    const formElem = window.event.target
    const listData = {
      listName: formElem.listName.value
    }

    console.log(listData);

    listsService.createList(listData)

    formElem.reset()

  }


  deleteList(id) {
    listsService.deleteList(id)
  }




}