import { Injectable } from '@angular/core';
import { Posts } from './model.cafe.posts';

@Injectable({
  providedIn: 'root'
})
export class FaqDocService {

  private post: Posts[] = [
    {name: "حسین" , location: "ایران، زنجان" , textOfPost: "!خیلی عالی بود، محیطی صمیمی و گرم و غذا های عالی:)) ممنون کافه تهران" , cafeUsed: "کافه نعنا"},
    {name: "شروین" , location: "ایران، قزوین"  , textOfPost: "با اسمش خیلی حال کردم ولی با محیطش اون همه نه... در کل توصیه نمی کنم " , cafeUsed: "کافه ویولت"},
    {name: "محمد امین" , location: "ایران، تهران"  , textOfPost: "سلام، محیط کافه بد نبود ولی قیمت هاش خیلی خوب بود" , cafeUsed: "کافه کافین"},
    {name: "میلاد" , location: "کانادا، کبک"  , textOfPost: "قلیونش خیلی گرون بود، قهوه شم غلیظ نبود، توصیه نمی کنم" , cafeUsed: "کافه کافین"},
    {name: "مانی" , location: "برزیل، ریو"  , textOfPost: "شیر موز سفارش دادم با کلوچ;) طعمش دلپذیر بود" , cafeUsed: "کافه ویولت"},
    {name: "هستی" , location: "روسیه، مسکو"  , textOfPost: "شیک نوتلا سفارش دادم، عالی بود، مرسی کافه نعنا" , cafeUsed: "کافه نعنا"}
  ]

  get getPostInfo(){
    return this.post;
  }

  public insertingItemToArray(item : Posts){
    this.post.splice(0,0,item);
  }
}
