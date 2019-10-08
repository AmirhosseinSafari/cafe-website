import { Component, OnInit } from '@angular/core';
import { InformaitionService } from '../informaition.service';
import { CafeInfo } from '../model.cafe.info';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private info : InformaitionService) { }
  
  // cafes: cafeInfo [] = [];

  ngOnInit() {
    // this.cafes = this.info.getCafeInfo();
    // this.info.setCafesInfo = [];
    
  }

}
