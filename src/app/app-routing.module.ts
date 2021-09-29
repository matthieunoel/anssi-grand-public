import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpcComponent } from './addpc/addpc.component';
import { HomeComponent } from './home/home.component';
import { ViewpcComponent } from './viewpc/viewpc.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'addpc', component: AddpcComponent,
  },
  {
    path: 'viewpc', component: ViewpcComponent,
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
