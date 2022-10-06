import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSelectionListChange } from '@angular/material/list';

@Component({
  selector: 'app-list-checkbox',
  templateUrl: './list-checkbox.component.html',
  styleUrls: ['./list-checkbox.component.css']
})
export class ListCheckboxComponent implements OnInit {

  isSelected = true;
  onListSelectionChange(ob: MatSelectionListChange) {
     console.log("Selected Item: " + ob.source.selectedOptions.selected.length);
  }
  techList = [
    {id: 101, lang: 'HTML'},
    {id: 102, lang: 'ANGULAR'},
    {id: 103, lang: 'BOOTSTRAP'}
  ];
  constructor(private formBuilder: FormBuilder) { }
  techForm = this.formBuilder.group({
    selectedTech: ''
  });
  ngOnInit(): void {
  }
  onFormSubmit() {
    console.log(this.techForm.get('selectedTech')!.value);
  }
} 

  


