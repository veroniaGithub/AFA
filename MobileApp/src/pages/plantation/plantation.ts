import { Component, ViewChild} from '@angular/core';
import { NavController, AlertController} from 'ionic-angular';
import { UsersDataRequests } from '../../providers/users-data-requests';
import { UserSession } from '../../services/user-session';
import {MapPage} from '../map/map';
@Component({
  selector: 'page-plantation',
  templateUrl: 'plantation.html'
})
export class PlantationPage {
  users :any;
  @ViewChild('lat') lat;
  @ViewChild('lng') lng;
  constructor(public navCtrl: NavController,public users_datareq: UsersDataRequests,public user_session: UserSession
    ,public alert: AlertController) {
        window.caches.delete;
  }

  public ionViewDidLoad(){
  }
  plantByLocation(){
    this.navCtrl.pop();
    this.navCtrl.push(MapPage, {plantation: 0});
  }
  plantByCoords(){
    if(this.lat.nativeElement.value && this.lng.nativeElement.value){
      this.navCtrl.pop();
      this.navCtrl.push(MapPage, {plantation: 1, coords: 
        {
          latitude: parseFloat(this.lat.nativeElement.value), 
          longitude: parseFloat(this.lng.nativeElement.value)
        }
      });
    }
    else {
      let alert = this.alert.create({
        title: "Impossible de planter !",
        subTitle: "Vérifier les coordonnées que vous avez ajoutées",
        buttons: ["OK"]
      });
      alert.present();
    }
  }
  goToMap(){
    this.navCtrl.pop();
  }
}
