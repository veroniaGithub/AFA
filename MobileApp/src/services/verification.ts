import { Injectable } from '@angular/core';
import {AlertController, LoadingController, Platform} from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Network } from '@ionic-native/network';
import { SplashScreen } from '@ionic-native/splash-screen';

@Injectable()
export class Verification {
  constructor(public alert: AlertController,public platform: Platform,public diagnostic: Diagnostic,public loading : LoadingController, public network : Network, public splashScreen: SplashScreen) {
  }
  internet(){
    return new Promise(resolve => {
      this.splashScreen.hide();
      console.log(this.network.type)
      if((this.network.type == 'none')){
        let alert = this.alert.create({
            title: "Problème de connexion !",
            subTitle: "Veuillez activer la connexion internet",
            buttons: [ {
                        text: 'OK',
                        handler: () => {
                          alert.dismiss();
                          this.splashScreen.show();
                          window.location.reload();
                        }
                    }]
        });
        alert.present();
        resolve(false);
      }
      else resolve(true);
    });
  }
  gps(){
    return new Promise(resolve => {
      if(this.platform.is('mobileweb') || this.platform.is('core')) resolve(true)
      else
      this.diagnostic.isLocationEnabled()
       .then((isAvailable) =>
        {
          if(isAvailable) resolve(true);
          else {
            console.log(isAvailable)
            resolve(false);
            let alert = this.alert.create({
                title: "Problème de localisation !",
                subTitle: "Veuillez activer le GPS",
                buttons: ["OK"]
            });
            alert.present();
          }
        })
      .catch((error : any) =>
       {
         console.log(error)
          resolve(false);
          let alert = this.alert.create({
              title: "Problème de localisation !",
              subTitle: "Veuillez activer le GPS",
              buttons: ["OK"]
          });
          alert.present();
       });
    });
  }

}
