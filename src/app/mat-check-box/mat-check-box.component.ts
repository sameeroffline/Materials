import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-mat-check-box',
  templateUrl: './mat-check-box.component.html',
  styleUrls: ['./mat-check-box.component.css']
})
export class MatCheckBoxComponent implements OnInit {

  isChkChecked = true;
  isRippleDisabled = true;
  isDisabled = true;
  isChkIndeterminate = true; 
  isIndeterminate = false; 
  vns = false;
  svk = false;
  allChecked= false;
  i=0;

  constructor() { }

  ngOnInit(): void {
  }


  onChkChange(ob: MatCheckboxChange) {
    if(ob.checked) {
      this.vns = true;
      this.svk = true;
      this.i = 2;
    } else {
      this.vns = false;
      this.svk = false;       
    }
 }
 onChildChkChange(ob: MatCheckboxChange) {
   if(ob.checked) {
     this.i++;
   } else {
     this.i--;
   }
   if(this.i==2) {
     this.allChecked = true;
     this.isIndeterminate = false;
   } else if (this.i==1) {
     this.isIndeterminate = true;
     this.allChecked = false;
   } else {
     this.isIndeterminate = false;
     this.allChecked = false;
   }
 }
 onIndeterminateChange(val: boolean) {
     console.log('isIndeterminate: ' + val);
 }
 onChange(ob: MatCheckboxChange) {
   console.log("checked: " + ob.checked);
 }
}
