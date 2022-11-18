import { GiftsController } from "./Controllers/GiftsController.js";


class App {
  // valuesController = new ValuesController();
  giftsController = new GiftsController()
}

window["app"] = new App();
