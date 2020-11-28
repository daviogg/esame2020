import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorSearchComponent } from './tutor-search.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';



@NgModule({
  declarations: [TutorSearchComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatListModule
  ],
  exports: [TutorSearchComponent]
})
export class TutorSearchModule { }
