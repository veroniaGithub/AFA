import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapPage } from '../../pages/map/map';
import { UsersDataRequests } from '../../providers/users-data-requests';
import { UserSession } from '../../services/user-session';
import { CRDAPage } from '../../pages/crda/crda';
import { FeedPage } from '../../pages/feed/feed';
import { ConfidPage } from '../../pages/confid/confid';
import { AboutPage } from '../../pages/about/about';
import { StepsPage } from '../../pages/steps/steps';
@Component({
  selector: 'page-compte',
  templateUrl: 'compte.html'
})
export class ComptePage {
  total: any = 0;
  constructor(public navCtrl: NavController,public users_datareq: UsersDataRequests,public user_session: UserSession) {
        window.caches.delete;
  }

  public ionViewDidLoad(){
    this.users_datareq.getUsers().then((response)=>{
      let users_json : any = response;
      for(var i =0;i<users_json.length;i++){
        this.total += users_json[i].totalArbres;
      }
    })
  }
  goToFeed(){
    this.navCtrl.push(FeedPage,{},{animate:false});

  }
  goToCRDA(){
    this.navCtrl.push(CRDAPage,{},{animate:false});

  }
  goToMap(){
    this.navCtrl.push(MapPage,{},{animate:false});
  }
  goToConfidentialite(){
    this.navCtrl.push(ConfidPage,{animate:true,animation:'md-transition',duration:1000});

  }
  goToSteps(){
    this.navCtrl.push(StepsPage,{animate:true,animation:'md-transition',duration:1000});

  }
  goToAbout(){
    this.navCtrl.push(AboutPage,{animate:true,animation:'md-transition',duration:1000});

  }
}
