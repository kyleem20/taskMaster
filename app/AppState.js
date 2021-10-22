import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { List } from "./Models/List.js"


const testList = new List({
  listName: "groceries",
}
)

console.log(testList);
class AppState extends EventEmitter {
  /** @type {import('./Models/List').List[]} */
  lists = [
    new List({ listName: 'Groceries' })
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
