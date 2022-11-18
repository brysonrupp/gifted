import { appState } from "../AppState.js";
import { Gift } from "../Models/Gift.js";
import { getFormData } from "../Utils/FormHandler.js";
import { GiftApi } from "./AxiosService.js"

class GiftsService {
    async getGifts() {
        const res = await GiftApi.get('/api/gifts')
        console.log('getting gifts', res.data);
        appState.gifts = res.data.map(g => new Gift(g))
        console.log('appstate', appState.gifts)
    }

    async openGifts(id) {
        let gift = appState.gifts.find(g => g.id == id)
        console.log(gift, id);
        gift.opened = true
        const res = await GiftApi.put('/api/gifts/' + id, gift)
        console.log('opening', gift, res.data);
        // NOTE find index of old gift, splice it out and replace with the updated gift (res.data)
        let index = appState.gifts.findIndex(g => g.id == id)
        appState.gifts.splice(index, 1, new Gift(res.data))
        appState.emit('gifts')
    }

    async addGift() {
        const res = await GiftApi.post('/api/gifts')
        console.log(res.data);
    }
}

export const giftsService = new GiftsService()