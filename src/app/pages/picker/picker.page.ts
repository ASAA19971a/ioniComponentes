import { Component } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.page.html',
  styleUrls: ['./picker.page.scss'],
})
export class PickerPage {
  animals: string[] = ['Tiger', 'Lion', 'Elephant', 'Fox', 'Wolf'];
  constructor(private PickerCtrl: PickerController) {}

  async showPicker() {
    let options: PickerOptions = {
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Ok',
          handler: (value: any) => {
            console.log(value);
          },
        },
      ],
      columns: [
        {
          name: 'Animals',
          options: this.getColumnOptions(),
        },
      ],
    };

    let picker = await this.PickerCtrl.create(options);
    picker.present();
  }

  getColumnOptions() {
    let options = [];
    this.animals.forEach((x) => {
      options.push({ text: x, value: x });
    });
    return options;
  }
}
