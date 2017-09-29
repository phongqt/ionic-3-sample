import { Quote } from './../../data/quote.interface';
import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  quote: Quote;
  constructor(private viewCtrl: ViewController,
    private navParams: NavParams) {
  }

  ionViewDidEnter() {
    this.quote = this.navParams.data;
  }

  onClose(remove = false) {
    this.viewCtrl.dismiss(remove);
  }

}
