import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Listas } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  listamenu: Observable<Listas[]>;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.listamenu = this.dataService.getMenuOptions();
  }
}
