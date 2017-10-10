import { QuotePage } from './../quote/quote';
import { Quote } from './../../data/quote.interface';
import { Component } from '@angular/core';
import { IonicPage, ModalController, reorderArray } from 'ionic-angular';

import { QuotesService } from '../../services/quotes';
import { SettingsService } from '../../services/settings';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes: Quote[];

  constructor(private quotesService: QuotesService,
    private modalCtrl: ModalController,
    private settingsService: SettingsService) {
  }

  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad FavoritesPage');
  // }

  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if (remove) {
        this.onRemoveFromFavorites(quote);
      }
    })
  }

  onRemoveFromFavorites(quote: Quote) {
    this.quotesService.removeQuoteFromFavorites(quote);
    const position = this.quotes.findIndex((quoteEl: Quote) => {
      return quoteEl.id == quote.id;
    });
    if (position > -1) {
      this.quotes.splice(position, 1);
    }
  }

  getBackground() {
    return this.settingsService.isAltBackground() ? 'altQuoteBackground' : 'quoteBackground';
  }

  isAltBackground() {
    return this.settingsService.isAltBackground();
  }

  reorderItems(indexes) {
    this.quotes = reorderArray(this.quotes, indexes);
  }
}
