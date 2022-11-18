import { giftsService } from "../Services/GiftsService.js"



export class Gift {
    constructor(data) {
        this.id = data.id || data._id
        this.tag = data.tag || ''
        this.url = data.url
        this.opened = data.opened
    }

    get GiftTemplate() {
        if (this.opened == true) {

            return `
            <div class="col-3 card text-center" onclick="app.giftsController.openGifts('${this.id}')">
            <img class="img-fluid"
            src="${this.url}"
            alt="">
            <h4>${this.tag}</h4>
            </div>
            `
        }
        else {
            return `
        <div class="col-3 card text-center" onclick="app.giftsController.openGifts('${this.id}')">
        <img class="img-fluid"
        src="https://media.istockphoto.com/id/1128262881/vector/decorative-black-gift-box-with-golden-bow-isolated-on-white.jpg?s=612x612&w=0&k=20&c=Gun3eVyEhbfOTJtGvANml18ARBAqWD8UObeallkbltc="
        alt="">
        <h4>${this.tag}</h4>
    </div>
        `
        }
    }

    // get UnopenedTemplate() {
    //     return `
    //     <div class="col-3 card text-center" onclick="app.giftsController.openGifts()">
    //     <img class="img-fluid"
    //       src="https://media.istockphoto.com/id/1128262881/vector/decorative-black-gift-box-with-golden-bow-isolated-on-white.jpg?s=612x612&w=0&k=20&c=Gun3eVyEhbfOTJtGvANml18ARBAqWD8UObeallkbltc="
    //       alt="">
    //     <h4>${this.tag}</h4>
    //   </div>
    //     `
    // }
}