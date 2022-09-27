import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
import { giftsApi } from "./AxiosService.js";



class GiftsService{
  async getAllGifts(){
    const res = await giftsApi.get('/api/gifts')
    AppState.gifts = res.data.map(g => new Gift(g))
  }
  async sendNewGift(formData){
    const res = await giftsApi.post('/api/gifts', formData)
  
    console.log(res.data);
    AppState.gifts = [ new Gift(res.data), ...AppState.gifts]
    
    
  }
  async openGift(id){
    const openedGift = AppState.gifts.find(o=>o.id==id);
    if(!openedGift){
      throw new Error ('bad id')
    }
    openedGift.opened = true;
    const res = await giftsApi.put (`/api/gifts/${id}`, openedGift)
    openedGift.url = res.data.url
    
  }
}

export const giftsService = new GiftsService()