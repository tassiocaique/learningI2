import { Component, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Item page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-item',
  templateUrl: 'item.html'
})
export class ItemPage {

  initialIndex: number;
  news: Array<Object>;
  slideOptions: Object;
  elementRef: ElementRef;
  constructor(public navCtrl: NavController, navParams: NavParams, el: ElementRef) {
    this.elementRef = el;
    this.news = navParams.get("news");
    this.initialIndex = navParams.get("index");
    this.slideOptions = {
      initialSlide: this.initialIndex
    }
  }

  ionViewDidLoad() {
    this.appendDisqusScript();
    console.log('Hello ItemPage Page');
  }

  appendDisqusScript() {
    //solução pra carregar o script
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "http://carlosbrittoapp.disqus.com/embed.js";
    this.elementRef.nativeElement.appendChild(s);
  }

}
