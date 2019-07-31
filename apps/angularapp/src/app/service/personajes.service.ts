import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  personajes: any[] = [{
    nombre:"Homero",
    apellido: "Simpson",
    foto:"https://media.canalnet.tv/2018/08/Homero-Simpson.jpeg"
  },
  {
    nombre:"Marjorie",
    apellido: "Bouvier",
    foto:"https://vignette.wikia.nocookie.net/lossimpson/images/0/0b/Marge_Simpson.png/revision/latest?cb=20090415001251&path-prefix=es"
  },
  {
    nombre:"Lisa Marie",
    apellido: "Simpson",
    foto:"https://www.stickpng.com/assets/images/5a0c40b85a997e1c2cea116e.png"
  },
  {
    nombre:"Maggie",
    apellido: "Simpson",
    foto:"http://pm1.narvii.com/6313/82d6dbc7dac9649f5a908b5beee071d8e6a01124_00.jpg"
  },
  {
    nombre:"Bart",
    apellido: "Simpson",
    foto:"https://vignette.wikia.nocookie.net/lossimpson/images/6/65/Bart_Simpson.png/revision/latest?cb=20100530014756&path-prefix=es"
  }];

  constructor() { }

  obtenerPersonajes(){
    return of(this.personajes);
  }
}
