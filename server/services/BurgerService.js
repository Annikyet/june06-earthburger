import { Ingredient } from "../models/Ingredient.js";
import { Burger } from "../models/Burger.js";


// Fakeabase
let ingredients = [
  new Ingredient({name: 'lettuce', qty: 40, cost: 20, kcal: 5}),
  new Ingredient({name: 'tomato', qty: 30, cost: 20, kcal: 30}),
  new Ingredient({name: 'onion', qty: 60, cost: 20, kcal: 30}),
  new Ingredient({name: 'bun', qty: 30, cost: 60, kcal: 200}),
  new Ingredient({name: 'patty', qty: 20, cost: 200, kcal: 160}),
  new Ingredient({name: 'mayonnaise', qty: 7, cost: 40, kcal: 80}),
  new Ingredient({name: 'pickles', qty: 90, cost: 20, kcal: 5})]

let burgers = [
  new Burger({
    name: 'The Atherosclerosis',
    price: 3000,
    recipe: [
      {qty: 2, Ingredient: ingredients.find(i => i.name == 'bun')},
      {qty: 6, Ingredient: ingredients.find(i => i.name == 'patty')},
      {qty: 4, Ingredient: ingredients.find(i => i.name == 'mayonnaise')}]
  }),
  new Burger({
    name: 'The Everything',
    price: 1500,
    recipe: [
      {qty: 1, Ingredient: ingredients.find(i => i.name == 'bun')},
      {qty: 1, Ingredient: ingredients.find(i => i.name == 'patty')},
      {qty: 1, Ingredient: ingredients.find(i => i.name == 'mayonnaise')},
      {qty: 1, Ingredient: ingredients.find(i => i.name == 'lettuce')},
      {qty: 1, Ingredient: ingredients.find(i => i.name == 'tomato')},
      {qty: 1, Ingredient: ingredients.find(i => i.name == 'onion')},
      {qty: 1, Ingredient: ingredients.find(i => i.name == 'pickles')}]
  }),
  new Burger({
    name: 'The Rabbit',
    price: 800,
    recipe: [
      {qty: 1, Ingredient: ingredients.find(i => i.name == 'bun')},
      {qty: 3, Ingredient: ingredients.find(i => i.name == 'lettuce')},
      {qty: 3, Ingredient: ingredients.find(i => i.name == 'tomato')},
      {qty: 3, Ingredient: ingredients.find(i => i.name == 'onion')},
      {qty: 3, Ingredient: ingredients.find(i => i.name == 'pickles')}]
  })]


  class BurgerService {
    constructor() {

    }
  }

  export const burgerService = new BurgerService()