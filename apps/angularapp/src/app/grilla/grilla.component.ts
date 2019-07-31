import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'angularapp-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css']
})
export class GrillaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  abrirTarjeta(personaje) {
    if (!personaje) {
      personaje = {nombre: 'Homero', apellido: 'Simpson', foto: 'https://media.canalnet.tv/2018/08/Homero-Simpson.jpeg'};
    }

    const modal = document.querySelector('tarjeta-foto');

    const nombreCompleto = personaje.nombre + ' ' + personaje.apellido;
    modal.setAttribute('nombre', nombreCompleto);
    modal.setAttribute('foto', personaje.foto);
    modal.setAttribute('visible', 'true');

  }

}
