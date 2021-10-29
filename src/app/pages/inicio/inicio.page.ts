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
      titulo: 'Picker',
      icono: 'albums-outline',
      path: '/picker',
    },
    {
      titulo: 'Fab',
      icono: 'car-outline',
      path: '/fab',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
