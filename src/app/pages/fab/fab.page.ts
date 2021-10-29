import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.page.html',
  styleUrls: ['./fab.page.scss'],
})
export class FabPage implements OnInit {
  //crear lista definimos un arreglo
  arreglo = Array(100);
  constructor() {}

  ngOnInit() {}
}
