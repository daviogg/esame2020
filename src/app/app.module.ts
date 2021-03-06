import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './components/home/home.module';
import { TutorModule } from './components/tutor/tutor.module';
import { BackendModule } from './services/backend.module';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { SubscribeModule } from './components/subscribe/subscribe.module';
import { SuccessOperationPipe } from './pipes/success-operation.pipe';
import { TutorSearchComponent } from './components/tutor-search/tutor-search.component';
import { TutorSearchModule } from './components/tutor-search/tutor-search.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    TutorModule,
    BackendModule,
    SubscribeModule,
    TutorSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
