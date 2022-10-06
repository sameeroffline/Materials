import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-check-box-change-event',
  templateUrl: './check-box-change-event.component.html',
  styleUrls: ['./check-box-change-event.component.css']
})
export class CheckBoxChangeEventComponent implements OnInit {
  isIndeterminate = false;
  item = new FormControl();
  allItems = new FormControl();
  item1 = new FormControl();
  item2 = new FormControl();
  item3 = new FormControl();

  isAbcChecked = true;
  constructor() { }

  ngOnInit(): void {}
   
   
    onChangeDemo(ob: MatCheckboxChange) {
      console.log("checked: " + ob.checked);
    }
    onChkChange(ob: MatCheckboxChange) {
       if (ob.checked) {
        this.item1.setValue(true);
        this.item2.setValue(true);
        this.item3.setValue(true);
       } else {
        this.item1.setValue(false);
        this.item2.setValue(false);
        this.item3.setValue(false);
       }
    }
    onChkChildChange(ob: MatCheckboxChange) {
      if (this.item1.value && this.item2.value && this.item3.value) {
        this.isIndeterminate = false;
        this.allItems.setValue(true);
      } else if ((!this.item1.value && !this.item2.value && !this.item3.value)) {
        this.isIndeterminate = false;
        this.allItems.setValue(false);
      } else {
        this.isIndeterminate = true;
        this.allItems.setValue(false);
      }
    }
    onIndeterminateChange(val: boolean) {
      console.log('Indeterminate: ' + val);
    }
  }