import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { IncompanyComponent } from './components/incompany/incompany.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ViewUsuarioComponent } from './components/gestionar-usuario/view-usuario/view-usuario.component';
import { AddUsuarioComponent } from './components/gestionar-usuario/add-usuario/add-usuario.component';
import { ActualizarUsuarioComponent } from './components/gestionar-usuario/actualizar-usuario/actualizar-usuario.component';
import { ViewDocenteComponent } from './components/gestionar-docentes/view-docente/view-docente.component';
import { AddDocenteComponent } from './components/gestionar-docentes/add-docente/add-docente.component';
import { ActualizarDocenteComponent } from './components/gestionar-docentes/actualizar-docente/actualizar-docente.component';
import { ViewCursoComponent } from './components/gestion-curso/view-curso/view-curso.component';
import { AddCursoComponent } from './components/gestion-curso/add-curso/add-curso.component';
import { ActualizarCursoComponent } from './components/gestion-curso/actualizar-curso/actualizar-curso.component';
import { ViewBlogComponent } from './components/gestionar-blog/view-blog/view-blog.component';
import { AddBlogComponent } from './components/gestionar-blog/add-blog/add-blog.component';
import { ActualizarBlogComponent } from './components/gestionar-blog/actualizar-blog/actualizar-blog.component';
import { ViewCategoriaComponent } from './components/gestionar-categoria-curso/view-categoria/view-categoria.component';
import { AddCategoriaComponent } from './components/gestionar-categoria-curso/add-categoria/add-categoria.component';
import { ActualizarCategoriaComponent } from './components/gestionar-categoria-curso/actualizar-categoria/actualizar-categoria.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ViewEventoComponent } from './components/gestionar-evento/view-evento/view-evento.component';
import { AddEventoComponent } from './components/gestionar-evento/add-evento/add-evento.component';
import { ActualizarEventoComponent } from './components/gestionar-evento/actualizar-evento/actualizar-evento.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { ViewModalidadComponent } from './components/gestion-modalidad/view-modalidad/view-modalidad.component';
import { AddModalidadComponent } from './components/gestion-modalidad/add-modalidad/add-modalidad.component';
import { ActualizarModalidadComponent } from './components/gestion-modalidad/actualizar-modalidad/actualizar-modalidad.component';
import { ViewTemarioComponent } from './components/gestionar-temario/view-temario/view-temario.component';
import { AddTemarioComponent } from './components/gestionar-temario/add-temario/add-temario.component';
import { ActualizarTemarioComponent } from './components/gestionar-temario/actualizar-temario/actualizar-temario.component';
const routes: Routes = [
  {
    path: 'nosotros',
    component: AboutComponent,
  },
  {
    path: 'servicios',
    component: ServiciosComponent,
  },
  {
    path: 'cursos',
    component: CursosComponent,
  },
  {
    path: 'incompany',
    component: IncompanyComponent,
  },
  {
    path: 'eventos',
    component: EventosComponent,
  },
  
  {
    path: '',
    component: InicioComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [LoginGuard],
    children: [
        { path: 'ver-usuarios', component: ViewUsuarioComponent,     canActivate: [LoginGuard] },
      { path: 'agregar-usuario', component: AddUsuarioComponent,     canActivate: [LoginGuard]},
      { path: 'actualizar-usuario/:idUsuario', component: ActualizarUsuarioComponent },

      { path: 'ver-docentes', component: ViewDocenteComponent },
      { path: 'agregar-docente', component: AddDocenteComponent },
      { path: 'actualizar-docente/:idDocente', component: ActualizarDocenteComponent },

      { path: 'ver-cursos', component: ViewCursoComponent },
      { path: 'agregar-curso', component: AddCursoComponent },
      { path: 'actualizar-curso/:idCurso', component: ActualizarCursoComponent },

      { path: 'ver-modalidades', component: ViewModalidadComponent },
      { path: 'agregar-modalidad', component: AddModalidadComponent },
      { path: 'actualizar-modalidad/:idModalidad', component: ActualizarModalidadComponent },

      
      { path: 'ver-blogs', component: ViewBlogComponent },
      { path: 'agregar-blog', component: AddBlogComponent },
      { path: 'actualizar-blog/:idBlog', component: ActualizarBlogComponent },

      
      { path: 'ver-categoria-curso', component: ViewCategoriaComponent },
      { path: 'agregar-categoria-curso', component: AddCategoriaComponent },
      { path: 'actualizar-categoria/:idCategoria', component: ActualizarCategoriaComponent },

      
      { path: 'ver-eventos', component: ViewEventoComponent },
      { path: 'agregar-evento', component: AddEventoComponent },
      { path: 'actualizar-evento/:idEvento', component: ActualizarEventoComponent },

      { path: 'ver-temario/:idCurso', component: ViewTemarioComponent },
      { path: 'agregar-temario/:idCurso', component: AddTemarioComponent },
      { path: 'actualizar-temario/:idTemario', component: ActualizarTemarioComponent },
      { path: '', component: PerfilComponent }
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
