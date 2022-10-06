import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-check-box-checked',
  templateUrl: './check-box-checked.component.html',
  styleUrls: ['./check-box-checked.component.css']
})
export class CheckBoxCheckedComponent implements OnInit {


  isXyzChecked = false;
  isAbcChecked = true;

  constructor() { }

  ngOnInit(): void {
  }


  toggleChk() {
    this.isXyzChecked = (this.isXyzChecked)? false : true;
  }  
  onChange(ob: MatCheckboxChange) {
    console.log("PQR checked: " + ob.checked);
  }
  
}
