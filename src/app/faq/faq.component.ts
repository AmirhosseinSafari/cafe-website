import { Component, OnInit } from '@angular/core';
import { FaqDocService } from '../faq-doc.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Posts } from '../model.cafe.posts';

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

    var newPost : Posts =
    {name:this.messageForm.controls['name'].value 
    , location:this.messageForm.controls['place'].value
    , textOfPost: this.messageForm.controls['post'].value
    , cafeUsed: this.messageForm.controls['cafe'].value};
    this.post.insertingItemToArray(newPost);
  }


  ngOnInit() {
  }

}
