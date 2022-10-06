import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { GridListTitleComponent } from './grid-list-title/grid-list-title.component';
import { MatCardsComponent } from './mat-cards/mat-cards.component';
import { MatListComponent } from './mat-list/mat-list.component';
import { ListCheckboxComponent } from './list-checkbox/list-checkbox.component';
import { CheckBoxChangeEventComponent } from './check-box-change-event/check-box-change-event.component';
import { CheckBoxCheckedComponent } from './check-box-checked/check-box-checked.component';
import { MatCheckBoxComponent } from './mat-check-box/mat-check-box.component';
import { MatRadioButtonComponent } from './mat-radio-button/mat-radio-button.component'; 

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';


@NgModule({
  declarations: [
    AppComponent,
    GridListTitleComponent,
    MatCardsComponent,
    MatListComponent,
    ListCheckboxComponent,
    CheckBoxChangeEventComponent,
    CheckBoxCheckedComponent,
    MatCheckBoxComponent,
    MatRadioButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
