import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {
  // definir fecha actual
  fechaActual: Date = new Date();

  // Personalizar picker
  customPickerOptions = {
    buttons: [
      {
        text: 'Aceptar',
        handler: (event) => {
          console.log(event);
        },
      },
      {
        text: 'Cancelar',
        handler: () => {
          console.log('has cancelado');
        },
      },
    ],
  };

  constructor() {}

  ngOnInit() {}

  cambioFecha(event) {
    console.log(event);
    console.log(new Date(event.detail.value));
  }
}
