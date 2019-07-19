import { LoadingController} from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Verification } from '../services/verification';

@Injectable()
export class FeedsDataRequests {
villes : any;
id_ville : any;
  constructor(public http: Http,public loading : LoadingController,public verification: Verification) {

  }
  postFeed(feed){
    return new Promise(resolve => {
      this.verification.internet().then(response => {
        if(response){
          let loading = this.loading.create();
          loading.present();
            this.http.post('http://www.veronia.tn/mtft/ws_feeds',feed)
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
  getFeeds(){
    return new Promise(resolve => {
      this.verification.internet().then(response => {
        if(response){
          let loading = this.loading.create();
          loading.present();
            this.http.get('http://www.veronia.tn/mtft/ws_feeds/')
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
  changeFeed(feed){
    return new Promise(resolve => {
      this.verification.internet().then(response => {
        if(response){
          let loading = this.loading.create();
          loading.present();
            this.http.post('http://www.veronia.tn/mtft/ws_feeds/'+feed._id,feed)
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
