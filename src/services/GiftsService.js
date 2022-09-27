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
    AppState.gifts = res
    
    
  }
}
export const giftsService = new GiftsService()