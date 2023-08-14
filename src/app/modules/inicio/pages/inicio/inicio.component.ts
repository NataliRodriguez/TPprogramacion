import { Component, OnInit } from '@angular/core';
import { Club } from 'src/app/models/club';
import { Estadio } from 'src/app/models/estadio';
import { TarjetaInicio } from 'src/app/models/modelos';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  public info: TarjetaInicio[];
  public infor: Club[]
  public est: Estadio[]

  constructor(){
    this.info = [
      {
        titulo:"Tarjeta 1",
        descripcion:"River Plate el mas grande",
        image:"https://pbs.twimg.com/media/FgC5lLcWQAgo04l.jpg",
        alt:"River Plate",
      }
    ],
    this.infor = [
      {
        nombre:"River Plate",
        anio:1901,
        escudo:"../assets/escudo.jpg",
        titulosNac:52,
        titulosInt:12,
        

      }
    ],
    this.est=[{
      nombre:"Antonio Vespucci Liberti, 'El Monumental'",
      Img:"../assets/monu.jpg",
      anocon:1938,
      capacidad:84.567
    }
    ]
  }
  ngOnInit():void{

  }
}

