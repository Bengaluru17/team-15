import { Component } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { ViewChild } from '@angular/core';

import { ListPage } from '../list/list';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  @ViewChild(Nav) nav: Nav;
  showlists : boolean;
  icons: string[];
  items: Array<{title: string, note: string}>;
  constructor() {
    this.icons = ['flask', 'wifi', 'beer', 'football'];
    this.showlists = false;
    this.items = [
      {
        title: "hello",
        note :"note1"
      }
    ];
   
  }

  onAdd(){
    this.showlists = false;
  }
  onAdded(){
    this.showlists = true;
  }
}
