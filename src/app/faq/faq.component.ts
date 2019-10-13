import { Component, OnInit } from '@angular/core';
import { FaqDocService } from '../faq-doc.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false;
  succsess = false;

  constructor(private post: FaqDocService , private formBuilder: FormBuilder) { 
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      place: ['', Validators.required],
      cafe: ['', Validators.required],
      post: ['', Validators.required]
    })
  }

  onSubmit() {
    this.submitted = true;

     if(this.messageForm.invalid){
       return
     }
    
    this.succsess = true;
  }


  ngOnInit() {
  }

}
