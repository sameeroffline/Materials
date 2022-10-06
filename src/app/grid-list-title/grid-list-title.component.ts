import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-list-title',
  templateUrl: './grid-list-title.component.html',
  styleUrls: ['./grid-list-title.component.css']
})
export class GridListTitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'Materials';

  cards = [
    {title: 'Title 1', content: 'Content 1'},
    {title: 'Title 2', content: 'Content 2'},
    {title: 'Title 3', content: 'Content 3'},
    {title: 'Title 4', content: 'Content 4'}
  ];

}
