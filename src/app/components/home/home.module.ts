import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    MatTableModule,
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
