import { burgerService } from "../services/BurgerService.js";
import BaseController  from "../utils/BaseController.js";





export class BurgerController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      .get('', this.getAll())
      // .get('/:burgerId', this.getOne())
      // .put('/:burgerId', this.sellOne())
  }

  async getBurgers(req, res, next) {
    try {
      const burgers = await burgerService.getBurgers()
      return res.send(burgers)
    } catch (error) {
      next(error)
    }
  }
  
}