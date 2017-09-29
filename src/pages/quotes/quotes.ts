import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams, AlertController } from 'ionic-angular';

import { Quote } from '../../data/quote.interface';

import { QuotesService } from '../../services/quotes';

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quoteGroup: {
    category: string,
    quotes: Quote[],
    icon: string
  };

  constructor(
    private navParams: NavParams,
    private alrtCtrl: AlertController,
    private quoteService: QuotesService) {
  }

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }
  // ionViewDidLoad() {
  //   this.quoteGroup = this.navParams.data;
  // }

  onAddToFavorite(quote: Quote) {
    const alert = this.alrtCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the quote?',
      buttons: [
        {
          text: 'Yes, go ahead',
          handler: () => {
            this.quoteService.addQuoteToFavorites(quote);
          }
        }, {
          text: 'No, i change my mind!',
          role: 'cancel',
          handler: () => {

          }
        }
      ]
    });
    alert.present();
  }

  onRemoveQuoteFromFavorite(quote: Quote) {
    this.quoteService.removeQuoteFromFavorites(quote);
  }

  isFavorite(quote: Quote) {
    return this.quoteService.isFavorite(quote);
  }
}
