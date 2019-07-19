import { Component} from '@angular/core';
import { NavController,Platform,LoadingController } from 'ionic-angular';
import { MapPage } from '../../pages/map/map';
import { CRDAPage } from '../../pages/crda/crda';
import { FeedsDataRequests } from '../../providers/feeds-data-requests';
import { UsersDataRequests } from '../../providers/users-data-requests';
import { UserSession } from '../../services/user-session';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { ComptePage } from '../../pages/compte/compte';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage {
  feeds : any;
  constructor(public navCtrl: NavController,public platform: Platform,public user_session: UserSession,public social_share: SocialSharing,
              public feeds_datareq: FeedsDataRequests,public users_datareq: UsersDataRequests,public geocoder: NativeGeocoder,public loading : LoadingController) {
        window.caches.delete;
    this.feeds_datareq.getFeeds().then((response)=>{
      this.feeds = response;
      for(let feed of this.feeds){
        if(this.platform.is('mobileweb')) this.feeds[this.feeds.indexOf(feed)].address = "95 Avenue Fethi Zouhair, Cité La Ghazelle, Ariana";
         else
         this.geocoder.reverseGeocode(feed.lat, feed.lng).then((response)=>{
           this.feeds[this.feeds.indexOf(feed)].address = "";
          //  alert(response);
           if(response.subThoroughfare) this.feeds[this.feeds.indexOf(feed)].address += response.subThoroughfare+" ";
           if(response.thoroughfare) this.feeds[this.feeds.indexOf(feed)].address += response.thoroughfare+" ,";
           if(response.subLocality) this.feeds[this.feeds.indexOf(feed)].address += response.subLocality+" ";
           if(response.locality) this.feeds[this.feeds.indexOf(feed)].address += response.locality+" ,";
           if(response.subAdministrativeArea) this.feeds[this.feeds.indexOf(feed)].address += response.subAdministrativeArea+" ";
           if(response.administrativeArea) this.feeds[this.feeds.indexOf(feed)].address += response.administrativeArea+" ";
         })
      }
    })
  }

  public ionViewDidLoad(){
  }
  goToMap(){
    this.navCtrl.push(MapPage,{},{animate:false});
  }
  goToCRDA(){
    this.navCtrl.push(CRDAPage,{},{animate:false});

  }
  goToCompte(){
    this.navCtrl.push(ComptePage,{},{animate:false});
  }
  like(feed){
    let new_user = this.user_session.getUser();
    if(new_user.likes.indexOf(feed._id)>=0) {
      new_user.likes.splice(new_user.likes.indexOf(feed._id),1);
      this.feeds[this.feeds.indexOf(feed)].likes = parseInt(this.feeds[this.feeds.indexOf(feed)].likes) - 1;
    }
    else {
      new_user.likes.push(feed._id);
      this.feeds[this.feeds.indexOf(feed)].likes = parseInt(this.feeds[this.feeds.indexOf(feed)].likes) + 1;
    }
    this.user_session.addUser(new_user);
    this.users_datareq.changeUser(new_user).then((response)=>{});
    console.log(this.feeds[this.feeds.indexOf(feed)]);
    this.feeds_datareq.changeFeed(this.feeds[this.feeds.indexOf(feed)]).then((response)=>{});
  }
  share(feed){
    let message = 'Plantation le '+feed.date;
    let subject = "Plantation des arbres avec l'application mobile One Million Trees For Tunisia effectuée le "+feed.date+" par "+feed.user.name;
    let url = [feed.image];
    let loading = this.loading.create();
    loading.present();
    this.social_share.share(message,subject,null,feed.image).then((response)=>{
      loading.dismiss();
      console.log(response);
    })
  }

}
