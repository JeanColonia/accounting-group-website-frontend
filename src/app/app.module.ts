import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './components/shared/material/shared.module';
import { InicioComponent } from './components/inicio/inicio.component';
import { SliderComponent } from './components/inicio/slider/slider.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ExpertsComponent } from './components/experts/experts.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { RouterLink } from '@angular/router';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { IncompanyComponent } from './components/incompany/incompany.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { PublicacionesComponent } from './components/publicaciones/publicaciones.component';
import { DocentesComponent } from './components/docentes/docentes.component';

import { FormsModule } from '@angular/forms';

/**http */
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ViewCursoComponent } from './components/gestion-curso/view-curso/view-curso.component';
import { AddCursoComponent } from './components/gestion-curso/add-curso/add-curso.component';
import { ActualizarCursoComponent } from './components/gestion-curso/actualizar-curso/actualizar-curso.component';
import { CursoComponent } from './components/curso/curso.component';
import { ViewBlogComponent } from './components/gestionar-blog/view-blog/view-blog.component';
import { AddBlogComponent } from './components/gestionar-blog/add-blog/add-blog.component';
import { ActualizarBlogComponent } from './components/gestionar-blog/actualizar-blog/actualizar-blog.component';
import { BlogComponent } from './components/blog/blog.component';
import { ViewEventoComponent } from './components/gestionar-evento/view-evento/view-evento.component';
import { ActualizarEventoComponent } from './components/gestionar-evento/actualizar-evento/actualizar-evento.component';
import { AddEventoComponent } from './components/gestionar-evento/add-evento/add-evento.component';
import { ViewUsuarioComponent } from './components/gestionar-usuario/view-usuario/view-usuario.component';
import { AddUsuarioComponent } from './components/gestionar-usuario/add-usuario/add-usuario.component';
import { ActualizarUsuarioComponent } from './components/gestionar-usuario/actualizar-usuario/actualizar-usuario.component';
import { ViewDocenteComponent } from './components/gestionar-docentes/view-docente/view-docente.component';
import { AddDocenteComponent } from './components/gestionar-docentes/add-docente/add-docente.component';
import { ActualizarDocenteComponent } from './components/gestionar-docentes/actualizar-docente/actualizar-docente.component';
import { ViewCategoriaComponent } from './components/gestionar-categoria-curso/view-categoria/view-categoria.component';
import { AddCategoriaComponent } from './components/gestionar-categoria-curso/add-categoria/add-categoria.component';
import { ActualizarCategoriaComponent } from './components/gestionar-categoria-curso/actualizar-categoria/actualizar-categoria.component';
import { ViewImagenesComponent } from './components/gestionar-imagenes/view-imagenes/view-imagenes.component';
import { ViewTemarioComponent } from './components/gestionar-temario/view-temario/view-temario.component';
import { AddTemarioComponent } from './components/gestionar-temario/add-temario/add-temario.component';
import { ActualizarTemarioComponent } from './components/gestionar-temario/actualizar-temario/actualizar-temario.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { ViewModalidadComponent } from './components/gestion-modalidad/view-modalidad/view-modalidad.component';
import { AddModalidadComponent } from './components/gestion-modalidad/add-modalidad/add-modalidad.component';
import { ActualizarModalidadComponent } from './components/gestion-modalidad/actualizar-modalidad/actualizar-modalidad.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { SwiperModule } from 'swiper/angular';
import { CursoService } from './services/curso.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    SliderComponent,
    ExpertsComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ServiciosComponent,
    CursosComponent,
    IncompanyComponent,
    EventosComponent,
    PublicacionesComponent,
    DocentesComponent,
    ViewCursoComponent,
    AddCursoComponent,
    ActualizarCursoComponent,
    CursoComponent,
    ViewBlogComponent,
    AddBlogComponent,
    ActualizarBlogComponent,
    BlogComponent,
    ViewEventoComponent,
    ActualizarEventoComponent,
    AddEventoComponent,
    ViewUsuarioComponent,
    AddUsuarioComponent,
    ActualizarUsuarioComponent,
    ViewDocenteComponent,
    AddDocenteComponent,
    ActualizarDocenteComponent,
    ViewCategoriaComponent,
    AddCategoriaComponent,
    ActualizarCategoriaComponent,
    ViewImagenesComponent,
    ViewTemarioComponent,
    AddTemarioComponent,
    ActualizarTemarioComponent,
    DashboardComponent,
    PerfilComponent,
    SpinnerComponent,
    LoginComponent,
    ViewModalidadComponent,
    AddModalidadComponent,
    ActualizarModalidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    SwiperModule,
    AngularEditorModule
    
  ],
  providers: [CursoService, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
