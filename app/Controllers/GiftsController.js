import { appState } from "../AppState.js";
import { Gift } from "../Models/Gift.js";
import { giftsService } from "../Services/GiftsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";
//NOTE - this almost worked but didnt why?
// function _drawGifts() {
//     let gifts = appState.gifts
//     // let openedGift = gifts.find(g => g.opened == g.opened)
//     let template = ''
//     gifts.forEach(g => {
//         if (g.opened) {
//             return g.OpenedGiftTemplate
//         } else {
//             return g.UnopenedTemplate
//         }
//     })
//     setHTML('gifts', template)
// }

function _drawGifts() {
    let gift = appState.gifts
    let template = ''
    gift.forEach(g => template += g.GiftTemplate)
    setHTML('gifts', template)
}


export class GiftsController {
    constructor() {
        console.log('controller working');
        this.getGifts()
        appState.on('gifts', _drawGifts)
    }

    async openGifts(id) {
        try {
            await giftsService.openGifts(id)
        } catch (error) {
            Pop.error(error.message)
            console.error(error);
        }
    }

    async getGifts() {
        try {
            await giftsService.getGifts()
        } catch (error) {
            Pop.error(error.message)
        }
    }

    async addGift() {
        window.event.preventDefault()
        let form = window.event.target
        let formData = getFormData(form)
        console.log(formData);
        await giftsService.addGift(formDatad)
    }
}
