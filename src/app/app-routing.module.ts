import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from './components/about/about.component'
import { InicioComponent } from './components/inicio/inicio.component';
import {HeaderComponent} from  './components/header/header.component';

const routes: Routes = [
  {
    path: 'about', component: AboutComponent
  },
  {
    path: '', component: InicioComponent, pathMatch:'full'}, ];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
