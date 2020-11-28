import { NgModule } from '@angular/core';
import { BackendService } from './backend.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    BackendService
  ]
})
export class BackendModule { }
