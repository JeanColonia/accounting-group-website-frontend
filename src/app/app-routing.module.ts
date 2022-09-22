import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from './components/about/about.component'
import { InicioComponent } from './components/inicio/inicio.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { IncompanyComponent } from './components/incompany/incompany.component';
const routes: Routes = [
  
  {
    path: 'nosotros', component: AboutComponent
  },
  {
    path: 'servicios', component: ServiciosComponent
  },
  {
    path: 'cursos', component: CursosComponent
  },
  {
    path: 'incompany', component: IncompanyComponent
  },
  {
    path: '', component: InicioComponent, pathMatch:'full'}, ];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
