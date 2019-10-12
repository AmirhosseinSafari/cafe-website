import { Injectable } from '@angular/core';
import { CafeInfo } from './model.cafe.info';

@Injectable({
  providedIn: 'root'
})
export class InformaitionService {

  private cafesInfo : CafeInfo[] = [
    {name: "کافه نعنا" , location: "خیابان خیام، کوچه مشکی" , imgOfCafe: "https://blackbarnrestaurant.com/wp-content/uploads/2018/03/MZ_Web_blackbarncafe_001.jpg" , extraInformation: "!یک نوع متفاوت از کافه هایی که دیده اید"},
    {name: "کافه کافین" , location: "گاوازنگ، خیابان تربت" , imgOfCafe: "https://www2.le.ac.uk/hosted/attenborougharts/images/pageimages/our-attenborough-cafe" , extraInformation: "راحتی و آرامش در عین حال قیمت پایین"},
    {name: "کافه ویولت" , location: "خیابان شهید حجازی، کوی بهار سوم" , imgOfCafe: "https://b.zmtcdn.com/data/pictures/9/304299/00717efd784bd02ce292e4fe835a0c4c_featured_v2.jpg" , extraInformation: "!دیوانه وار با شما هستیم"}
  ]

  get getCafeInfo(){
    return this.cafesInfo;
  }

  
  // public set setCafesInfo(v : CafeInfo[]) {
  //   this.cafesInfo = v;
  // }
  
}
