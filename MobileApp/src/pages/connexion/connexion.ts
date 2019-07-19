import { Component } from '@angular/core';
import { NavController, Platform ,LoadingController,AlertController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import firebase from 'firebase';
import { UsersDataRequests } from '../../providers/users-data-requests';
import { UserSession } from '../../services/user-session';
import { MapPage } from '../../pages/map/map';
import { CodePage } from '../../pages/code/code';

import { Verification } from '../../services/verification';
@Component({
  selector: 'page-connexion',
  templateUrl: 'connexion.html'
})
export class ConnexionPage {
  userProfile: any = null;
  constructor(public navCtrl: NavController,public platform: Platform, private facebook: Facebook,private google: GooglePlus,public alert: AlertController,
    public user_session:UserSession,public users_datareq:UsersDataRequests,public loading : LoadingController,public verification: Verification, public splashScreen: SplashScreen) {
    window.caches.delete;
      this.verification.internet().then(response => {
      })
  }
  public googleLogin(){
    this.verification.internet().then(response => {
      if(response){
        if(this.platform.is('mobileweb')){
          console.log('in serve')
          let user = {
            _id: "59c95c6fa6822f0004994344",
            name: "Achraf Hakim",
            email: "www.achraf.hakim@gmail.com",
            photo: "https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/18157340_1914055275543035_3013843365488330292_n.jpg?oh=3acfd7a7f02301eb25e9a5b471a3d05c&oe=5A59F29E",
            coords: [],
            totalArbres: 0
          }
          this.user_session.addUser(user);
          this.navCtrl.push(MapPage);
        }
        else {
          this.google.login({})
            .then(function (user) {
              alert(JSON.stringify(user))
            }, function (error) {
              alert(JSON.stringify(error))
              
            });
    //               let loading = this.loading.create();
    //               loading.present();
    //               const googleCredential = firebase.auth.GoogleAuthProvider
    //                   .credential(res.idToken);
    //
    //               firebase.auth().signInWithCredential(googleCredential)
    //             .then( response => {
    //               loading.dismiss();
    //                 // this.userProfile = success;
    //                 // let user = {
    //                 //   name: this.userProfile.displayName,
    //                 //   email: this.userProfile.email,
    //                 //   photo: this.userProfile.photoURL,
    //                 //   totalArbres: 0,
    //                 //   coords: []
    //                 // }
    //                 //
    //                 // this.users_datareq.isRegistred(this.userProfile.email.toString()).then((responseregistered)=>{
    //                 //   let response_isRegistres : any = responseregistered;
    //                 //   if(response_isRegistres.length >0) {
    //                 //     this.user_session.addUser(response_isRegistres[0]);
    //                 //     this.navCtrl.push(MapPage);
    //                 //   }
    //                 //   else {
    //                 //     this.users_datareq.addUser(user).then((result)=>{
    //                 //       this.user_session.addUser(user);
    //                 //       this.navCtrl.push(MapPage);
    //                 //     })
    //                 //   }
    //                 // })
    //             }).catch((error)=>{
    //               loading.dismiss();
    //             });
    //       }).catch((err) => {
    //         let alert = this.alert.create({
    //             title: "Ce service est temporairement indisponible !",
    //             subTitle: "La nouvelle version va autoriser ce type de login",
    //             buttons: ["OK"]
    //         });
    //         alert.present();
        }
      }
    });
  }
  public facebookLogin(){
    this.verification.internet().then(response => {
      if(response){
        if(this.platform.is('mobileweb') || this.platform.is('core')){
          let user = {
            name: "TEST",
            email: "test.test@test.test",
            facebook_email: "test.test@test.test",
            photo: "https://graph.facebook.com/1994607004154528/picture?type=large",
            coords: [],
            totalArbres: 0,
            code: '',
            verified: false,
            likes: []
          }
            this.users_datareq.loginUser(user).then((responseLogin) =>{
            let user_json : any = responseLogin;
            this.user_session.addUser(user_json.user);
            if(!user_json.user.verified)  this.navCtrl.push(CodePage);
            else this.navCtrl.push(MapPage);
          })
        }
        else {
          let loading = this.loading.create();
          loading.present();
          this.facebook.login(['email']).then( (response) => {
            this.facebook.api("/me?fields=name,email",[]).then((userProfile)=> {
              loading.dismiss()
              let user = {
                name: userProfile.name,
                facebook_email: userProfile.email,
                photo: "https://graph.facebook.com/" + response.authResponse.userID.toString() + "/picture?type=large",
                coords: [],
                totalArbres: 0,
                code: '',
                verified: false,
                likes: []
              }
              this.users_datareq.loginUser(user).then((responseLogin) =>{
                let user_json : any = responseLogin;
                this.user_session.addUser(user_json.user);
                if(!user_json.user.verified)  this.navCtrl.push(CodePage);
                else this.navCtrl.push(MapPage);
              })
            });

      }).catch((error) => {
        let loading = this.loading.create();
        loading.present();
        this.facebook.login(['email']).then( (response) => {
          this.facebook.api("/me?fields=name,email",[]).then((userProfile)=> {
            loading.dismiss()
            let user = {
              name: userProfile.name,
              email: userProfile.email,
              photo: "https://graph.facebook.com/" + response.authResponse.userID.toString() + "/picture?type=large",
              coords: [],
              totalArbres: 0,
              code: '',
              verified: false,
              likes: []
            }
            this.users_datareq.loginUser(user).then((responseLogin) =>{
              let user_json : any = responseLogin;
              this.user_session.addUser(user_json.user);
              if(!user_json.user.verified)  this.navCtrl.push(CodePage);
              else this.navCtrl.push(MapPage);
            })
          });

        }).catch((error) => {
          let alert = this.alert.create({
              title: "Veuillez essayer de nouveau !",
              subTitle: "Vérifiez votre connection internet",
              buttons: ["OK"]
          });
          alert.present(); });
          });
        }

      }
    });
  }

}
