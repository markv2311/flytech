import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dji',
  templateUrl: './dji.component.html',
  styleUrls: ['./dji.component.scss']
})
export class DJIComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  yesd: boolean = false;
  droneform: FormGroup;
  djiDrones: string[] = [];

  ngOnInit() {
    this.droneform = this.fb.group({dronename: []})
  }

  getMavic() {
    this.yesd = !this.yesd;
  }

  removeLastDrone(){
    this.djiDrones.pop();

    // so you have an array this.djiDrones
    // you want to find the index of an element in that array
    // then splice based on that index
    // var index = this.djiDrones.indexOf('value you want to find')
    // then google how to splice with an index
    console.log(this.droneform.value);
  }
  addDrone(){
    this.djiDrones.push( this.droneform.controls['dronename'].value)
    console.log(this.droneform.value)
  }

}
