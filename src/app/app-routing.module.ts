import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TutorSearchComponent } from './components/tutor-search/tutor-search.component';
import { TutorComponent } from './components/tutor/tutor.component';
import { TutorAccessGuard } from './guards/tutor-access.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'tutor/signin', component: TutorComponent, pathMatch: 'full' },
  { path: 'tutor/search', canActivate: [TutorAccessGuard], component: TutorSearchComponent, pathMatch: 'full' },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
