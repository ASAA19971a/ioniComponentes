import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Listas } from './interfaces/interfaces';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  listamenu: Observable<Listas[]>;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.listamenu = this.dataService.getMenuOptions();
  }
}
