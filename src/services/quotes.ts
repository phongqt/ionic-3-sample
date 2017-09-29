import { Quote } from './../data/quote.interface';
export class QuotesService {
  private favoriteQuotes: Quote[] = [];

  addQuoteToFavorites(quote: Quote) {
    const position = this.favoriteQuotes.findIndex((quoteEl: Quote) => {
      return quoteEl.id == quote.id;
    });
    if (position == -1) {
      this.favoriteQuotes.push(quote);
    }
  }

  removeQuoteFromFavorites(quote: Quote) {
    const position = this.favoriteQuotes.findIndex((quoteEl: Quote) => {
      return quoteEl.id == quote.id;
    });
    if (position > -1) { }
    this.favoriteQuotes.splice(position, 1);
  }

  getFavoriteQuotes() {
    return this.favoriteQuotes.slice();
  }

  isFavorite(quote: Quote) {
    return this.favoriteQuotes.find((quoteEl: Quote) => {
      return quoteEl.id == quote.id;
    });
  }
}