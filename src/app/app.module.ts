import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { ItemPage } from '../pages/item/item';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    ItemPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    ItemPage
  ],
  providers: []
})
export class AppModule {}
