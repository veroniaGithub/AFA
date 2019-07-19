import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapPage } from '../../pages/map/map';
import { FeedPage } from '../../pages/feed/feed';
import { ComptePage } from '../../pages/compte/compte';
@Component({
  selector: 'page-crda',
  templateUrl: 'crda.html'
})
export class CRDAPage {

  constructor(public navCtrl: NavController) {
        window.caches.delete;
  }

  public ionViewDidLoad(){
  }
  goToMap(){
    this.navCtrl.push(MapPage,{},{animate:false});
  }
  goToFeed(){
    this.navCtrl.push(FeedPage,{},{animate:false});

  }
  goToCompte(){
    this.navCtrl.push(ComptePage,{},{animate:false});
  }
  callIT(passedNumber){
    console.log(passedNumber);
    window.open = passedNumber;
  }
}
