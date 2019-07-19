import { LoadingController} from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Verification } from '../services/verification';

@Injectable()
export class UsersDataRequests {
villes : any;
id_ville : any;
  constructor(public http: Http,public loading : LoadingController,public verification: Verification) {

  }
  getUsers(){
    return new Promise(resolve => {
      this.verification.internet().then(response => {
        if(response){
          let loading = this.loading.create();
          loading.present();
            this.http.get('http://www.veronia.tn/mtft/ws_users')
              .map(res => res.json())
              .subscribe(data => {
                loading.dismiss();
                console.log(data)

                resolve(data);
              });
        }
        else {
          return new Promise(resolve => {resolve(false);})
        }
      });
    });
  }
  getCoordsOfOtherUsers(user_id){
    return new Promise(resolve => {
      this.verification.internet().then(response => {
        if(response){
          let loading = this.loading.create();
          loading.present();
            this.http.get('http://www.veronia.tn/mtft/ws_users/'+user_id)
              .map(res => res.json())
              .subscribe(data => {
                loading.dismiss();
                console.log("other coords");
                console.log(data);
                resolve(data);
              });
        }
        else {
          return new Promise(resolve => {resolve(false);})
        }
      });
    });
  }
  coordsExist(user_id,lat,lng){
    return new Promise(resolve => {
      this.verification.internet().then(response => {
        if(response){
          let loading = this.loading.create();
          loading.present();
            this.http.get('http://www.veronia.tn/mtft/ws_users/coords/'+user_id+'/'+lat.toString()+'/'+lng.toString())
              .map(res => res.json())
              .subscribe(data => {
                loading.dismiss();
                console.log(data)

                resolve(data);
              });
        }
        else {
          return new Promise(resolve => {resolve(false);})
        }
      });
    })
  }
  loginUser(user){
    return new Promise(resolve => {
      this.verification.internet().then(response => {
        if(response){
          let loading = this.loading.create();
          loading.present();
            this.http.post('http://www.veronia.tn/mtft/ws_login',user)
              .map(res => res.json())
              .subscribe(data => {
                loading.dismiss();
                console.log(data);

                resolve(data);
              });
        }
        else {
          return new Promise(resolve => {resolve(false);})
        }
      });
    })
  }
  changeMail(user) {
    return new Promise(resolve => {
      this.verification.internet().then(response => {
        if (response) {
          let loading = this.loading.create();
          loading.present();
          this.http.post('http://www.veronia.tn/mtft/ws_changemail', user)
            .map(res => res.json())
            .subscribe(data => {
              loading.dismiss();
              console.log(data);

              resolve(data);
            });
        }
        else {
          return new Promise(resolve => { resolve(false); })
        }
      });
    })
  }
  changeUser(user){
    return new Promise(resolve => {
      this.verification.internet().then(response => {
        if(response){
          let loading = this.loading.create();
          loading.present();
            this.http.post('http://www.veronia.tn/mtft/ws_users/'+user._id,user)
              .map(res => res.json())
              .subscribe(data => {
                loading.dismiss();
                console.log(data)

                resolve(data);
              });
        }
        else {
          return new Promise(resolve => {resolve(false);})
        }
      });
    })
  }
}
