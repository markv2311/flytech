import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-parrot',
  templateUrl: './parrot.component.html',
  styleUrls: ['./parrot.component.scss']
})
export class ParrotComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  droneform: FormGroup;
  parrotDrones: string[] = [];

  ngOnInit() {
    this.droneform = this.fb.group({dronename: []});
  }

  getanafi() {
    console.log('parrot');
  }

  removeLastDrone(){
    this.parrotDrones.pop();
  }
  addDrone(){
    this.parrotDrones.push( this.droneform.controls['dronename'].value)
  }
}
