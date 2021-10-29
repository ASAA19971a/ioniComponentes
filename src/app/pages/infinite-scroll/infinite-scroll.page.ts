import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {
  datos: any[] = Array(20);

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor() {}

  ngOnInit() {}
  loadData() {
    if (this.datos.length > 50) {
      this.infiniteScroll.complete();
      this.infiniteScroll.disabled = true;
      return;
    }

    setTimeout(() => {
      const nuevosDatos = Array(20);
      this.datos.push(...nuevosDatos);

      //event.target.complete();
      this.infiniteScroll.complete();
    }, 1500);
  }
}
