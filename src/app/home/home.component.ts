import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor() { }
  contactform: FormGroup;

  ngOnInit() {
    this.contactform = new FormGroup({
      FullName: new FormControl(),
      Email: new FormControl()
    });
  }
  onSubmit() {
    console.log(this.contactform.value);
  }

}
