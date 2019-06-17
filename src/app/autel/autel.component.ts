import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-autel',
  templateUrl: './autel.component.html',
  styleUrls: ['./autel.component.scss']
})
export class AutelComponent implements OnInit {

  yes: boolean = false;
  constructor(private fb: FormBuilder) { }
  droneform: FormGroup;
  auteldrones: string[] = [];

  ngOnInit() {
    this.droneform = this.fb.group({dronename: []});
  }

  getEvo(){
    this.yes = !this.yes;
  }


  removedrone(){
    this.auteldrones.pop();
  }
  adddrone(){
    this.auteldrones.push(this.droneform.controls['dronename'].value);
  }

}
