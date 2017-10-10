import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  tapped: number = 0;
  pressed: number = 0;

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

  onDidReset(resetType: string) {
    switch (resetType) {
      case 'all':
        this.tapped = 0;
        this.pressed = 0;
        break;
      case 'tap':
        this.tapped = 0;
        break;
      case 'press':
        this.pressed = 0;
        break;
    }
  }

  onTap() {
    this.tapped++;
  }

  onPress() {
    this.pressed++;
  }

  didWin() {
    return this.tapped == 2 && this.pressed == 4;
  }

}
