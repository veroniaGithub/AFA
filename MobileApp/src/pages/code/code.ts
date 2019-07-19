import { Component,ViewChild } from '@angular/core';
import { NavController, Platform ,LoadingController,AlertController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UsersDataRequests } from '../../providers/users-data-requests';
import { UserSession } from '../../services/user-session';
import { MapPage } from '../../pages/map/map';
import { Verification } from '../../services/verification';
@Component({
  selector: 'page-code',
  templateUrl: 'code.html'
})
export class CodePage {
  @ViewChild('codeNumber') code;
  @ViewChild('newEmail') email;  
  messageerror : any;
  messageerroremail: any;  
  constructor(public navCtrl: NavController,public platform: Platform,public alert: AlertController,
    public user_session:UserSession,public users_datareq:UsersDataRequests,public loading : LoadingController,public verification: Verification) {
    window.caches.delete;
    console.log(this.user_session.getUser());
  }
  public validerCode(){
    if(this.code.nativeElement.value.length != 10) {
      this.messageerror = "Veuillez vérifier le code !";
    }
    else {
      this.messageerror = "";
      if(this.user_session.getUser().code == this.code.nativeElement.value){
        let new_user = this.user_session.getUser();
        new_user.verified = true;
        this.users_datareq.changeUser(new_user).then((response)=>{
          this.user_session.addUser(new_user);
          this.navCtrl.pop({animate:false});
          this.navCtrl.push(MapPage);
        })
      }
      else this.messageerror = "Veuillez vérifier le code !";
    }
  }
  public changerEmail(){
    console.log(this.email.nativeElement.value);
    let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (!regExp.test(this.email.nativeElement.value)) {
      this.messageerroremail = "Adresse e-mail invalide!";
    }
    else {
      this.messageerroremail = "";
      let new_user = this.user_session.getUser();
      new_user.email = this.email.nativeElement.value;
      this.users_datareq.changeMail(new_user).then((response) => {
        let user_json: any = response;
        if (user_json.user){
          if(user_json.user._id){
            this.user_session.addUser(new_user);
            this.email.nativeElement.value = "";
            let alert = this.alert.create({
              title: "Votre e-mail a été changé !",
              subTitle: "Vous pouvez trouver votre code dans "+new_user.email,
              buttons: [{
                text: 'OK',
                handler: () => {
                  alert.dismiss();
                }
              }]
            });
            alert.present();
          }
          else {
            this.messageerroremail = "Adresse e-mail utilisée!";
          }
        }
        else{
          this.messageerroremail = "Adresse e-mail invalide!";
        }
      })
    }
    
  }

}
