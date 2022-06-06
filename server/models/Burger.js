import { generateId } from "../utils/generateId.js"



export class Burger {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.price = data.price
    this.recipe = data.recipe
  }

  get Qty() {
    if (this.recipe[0].ingredient) {
      let ingredientQty = Math.floor(this.recipe[0].ingredient.qty / this.recipe[0].qty)
      let burgerQty = this.recipe[0].ingredient.burgerQty
      for (let i = 1; i < this.recipe.length; t++) {
        ingredientQty = Math.floor(this.recipe[i].ingredient.qty / this.recipe[i].qty)
        if (ingredientQty < burgerQty) {
          burgerQty = ingredientQty
        }
      }
    }
    return burgerQty || 0
  }

  get Cost() {
    let cost = 0
    for (let i = 0; this.recipe.length; i++) {
      cost += this.recipe[i].ingredient.cost * this.recipe[i].qty
    }
    return cost
  }

  get Kcal() {
    let kcal = 0
    for (let i = 0; this.recipe.length; i++) {
      kcal += this.recipe[i].ingredient.kcal * this.recipe[i].qty
    }
    return kcal
  }
}