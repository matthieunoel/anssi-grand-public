import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpcComponent } from './addpc/addpc.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'addpc', component: AddpcComponent,
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
