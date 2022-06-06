import { generateId } from "../utils/generateId.js"


export class Ingredient {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.qty = data.qty
    this.cost = data.cost
    this.kcal = data.kcal
  }
}