import { Component, OnInit } from '@angular/core';
import { EventoService } from 'src/app/services/evento.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  listaEventos:any;
  constructor(private eventoService:EventoService) { }

  ngOnInit(): void {
    this.eventoService.listarEventos().subscribe(
      data =>{
        this.listaEventos = data;
        console.log(this.listaEventos);
      }
    );

  }

}
