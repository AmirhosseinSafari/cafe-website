import { Component, OnInit } from '@angular/core';
import { FaqDocService } from '../faq-doc.service';


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  constructor(private post: FaqDocService) { }

  ngOnInit() {
  }

}
