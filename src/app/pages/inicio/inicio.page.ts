import { Component, Input, OnInit } from '@angular/core';

interface Listas {
  titulo: string;
  icono: string;
  path: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  lista: Listas[] = [
    {
      titulo: 'Action Sheet',
      icono: 'american-football-outline',
      path: '/action-sheet',
    },
    {
      titulo: 'Alert',
      icono: 'alert-outline',
      path: '/alert',
    },
    {
      titulo: 'Avatar',
      icono: 'person-circle-outline',
      path: '/avatar',
    },
    {
      titulo: 'Badges',
      icono: 'albums-outline',
      path: '/badge',
    },
    {
      titulo: 'Buttons',
      icono: 'radio-button-off-outline',
      path: '/buttons',
    },
    {
      titulo: 'Card',
      icono: 'card-outline',
      path: '/card',
    },
    {
      titulo: 'Checkbox',
      icono: 'checkbox-outline',
      path: '/checkbox',
    },
    {
      titulo: 'Chip',
      icono: 'albums-outline',
      path: '/chip',
    },
    {
      titulo: 'Date Time',
      icono: 'calendar-outline',
      path: '/date-time',
    },

    {
      titulo: 'Fab',
      icono: 'car-outline',
      path: '/fab',
    },
    {
      titulo: 'Infinite Scroll',
      icono: 'infinite-outline',
      path: '/infinite-scroll',
    },

    {
      titulo: 'List',
      icono: 'list-outline',
      path: '/list',
    },
    //final
    {
      titulo: 'Picker',
      icono: 'albums-outline',
      path: '/picker',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
