import { Component } from '@angular/core';

import { LibraryPage } from './../library/library';
import { FavoritesPage } from './../favorites/favorites';
import { IonicPage } from "ionic-angular";

@IonicPage()
@Component({
  selector: 'page-tab',
  template: `
  <ion-tabs selectedIndex="0">
    <ion-tab [root]="favoritePage" tabTitle="Favorites" tabIcon="star"></ion-tab>
    <ion-tab [root]="libraryPage" tabTitle="Library" tabIcon="book"></ion-tab>
  </ion-tabs>
  `
})

export class TabsPage {
 favoritePage = FavoritesPage;
 libraryPage = LibraryPage
}
