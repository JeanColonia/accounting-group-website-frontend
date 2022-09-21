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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
