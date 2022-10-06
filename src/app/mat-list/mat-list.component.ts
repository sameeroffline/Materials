import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-mat-list',
  templateUrl: './mat-list.component.html',
  styleUrls: ['./mat-list.component.css']
})
export class MatListComponent implements OnInit {


  techList = [
  {id: 101, lang: 'Java'},
  {id: 102, lang: 'Angular'},
  {id: 103, lang: 'Hibernate'}
];

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
     
  }
  techForm = this.formBuilder.group({
      selectedTech: ''
    });

   

  onFormSubmit() {
      console.log(this.techForm.get('selectedTech')!.value);
    }
}



 