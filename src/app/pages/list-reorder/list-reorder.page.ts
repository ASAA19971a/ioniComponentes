import { Component, OnInit } from '@angular/core';
import { IonReorderGroup } from '@ionic/angular';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {
  // boton toggle
  reorderDisabled: boolean = true;

  // Crear un arreglo
  personajes: string[] = [
    'Batman',
    'Superman',
    'Homero Simpson',
    'Bob Esponja',
    'Doraemon',
  ];

  constructor() {}

  ngOnInit() {}

  doReorder(event: any) {
    // Para cmabiar arreglo
    // Primero cortamos el item que vamos a mover con splice
    const itemMover = this.personajes.splice(event.detail.from, 1)[0];
    // Pegar elemento
    this.personajes.splice(event.detail.to, 0, itemMover);

    console.log(event);
    event.detail.complete();

    console.log(this.personajes);
  }
}
