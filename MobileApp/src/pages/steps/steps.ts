import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersDataRequests } from '../../providers/users-data-requests';
import { UserSession } from '../../services/user-session';
@Component({
  selector: 'page-steps',
  templateUrl: 'steps.html'
})
export class StepsPage {
  users :any;
  constructor(public navCtrl: NavController,public users_datareq: UsersDataRequests,public user_session: UserSession) {
        window.caches.delete;
    this.users_datareq.getUsers().then((response)=>{
      this.users =  response;
    })

  }

  public ionViewDidLoad(){
  }
  goToMap(){
    this.navCtrl.pop();
  }
}
