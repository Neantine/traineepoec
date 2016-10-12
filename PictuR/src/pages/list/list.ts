import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http:Http) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];

    this.getGalleryImagesList();

    // for(let i = 1; i < 11; i++) {
    //   this.items.push({
    //     title: 'Item ' + i,
    //     note: 'This is item #' + i,
    //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    //   });
    // }
  }

  getGalleryImagesList()
  {
    let listimagesresponse = this.http.get('http://pictu-r.herokuapp.com/api/v1/users/foo/pictures').subscribe( (response) =>{
        let pictureList = response.json();
        console.log("pictureList ", pictureList);
        this.items = pictureList["pictures"];
        for (let i=0; i<this.items.length; i++)
        {
          this.items[i].url = "http://pictu-r.herokuapp.com"+this.items[i].url;
        }
        console.log("pictureList ", this.items);
        return;
      },
      (err)=>{
        console.log('err',err)
      })

  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
