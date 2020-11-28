import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { SubscribeModule } from '../subscribe/subscribe.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    MatTableModule,
    CommonModule,
    MatButtonModule,
    SubscribeModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
