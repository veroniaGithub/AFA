import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform,LoadingController,AlertController, NavParams  } from 'ionic-angular';
import { UsersDataRequests } from '../../providers/users-data-requests';
import { FeedsDataRequests } from '../../providers/feeds-data-requests';
import { UserSession } from '../../services/user-session';
import { Geolocation } from '@ionic-native/geolocation';
import firebase, { SDK_VERSION } from 'firebase';
import { Camera } from '@ionic-native/camera';
import { CRDAPage } from '../../pages/crda/crda';
import { RankingPage } from '../../pages/ranking/ranking';
import { FeedPage } from '../../pages/feed/feed';
import { ComptePage } from '../../pages/compte/compte';
import { Verification } from '../../services/verification';
import { PlantationPage } from '../plantation/plantation';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';

declare var google;
@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
    @ViewChild('map') mapElement: ElementRef;
    @ViewChild('nbrAjout') nbrAjoutGray;
    map: any;
    greenClicked : any;grayClicked : any;
    bgImage : any;name: any;totalPlant: any;
    coords: any;
    otherUsersCoords: any;
    selectedMarker : any;
    imgURL: any;
    showEditInputField: any;
    doEditImgeField: any;
    // map: GoogleMap;
  constructor(public navCtrl: NavController,public platform: Platform,public geolocation: Geolocation,public camera: Camera,
              public user_session:UserSession, public users_datareq:UsersDataRequests,public feeds_datareq: FeedsDataRequests,
              public loading : LoadingController,public alert: AlertController,public verification: Verification, public navParams: NavParams) {

    this.greenClicked = false;
    this.grayClicked = false;
    this.bgImage = "" ;
    this.name = "" ;
    this.coords = [];
    this.otherUsersCoords = [];
    this.selectedMarker = {};
    this.totalPlant = 0;
    this.imgURL= null;
    this.showEditInputField = false;
    this.doEditImgeField = false;
    let plantationType = navParams.get('plantation');
    let plantationCoords = navParams.get('coords');
    console.log(plantationType);
    console.log(plantationCoords);
    if(plantationType == 0 || plantationType == 1){
      if(plantationType == 0)
        this.addGrayMarker();
      else if(plantationType == 1 && plantationCoords){
        if(plantationCoords.latitude && plantationCoords.longitude){
          this.plantFromCoords(plantationCoords);
        }
      }
      else {
        let alert = this.alert.create({
          title: "Impossible de planter !",
          subTitle: "Vérifier votre GPS ou bien les coordonnées que vous avez ajoutées",
          buttons: ["OK"]
        });
        alert.present();
      }
    }
  }
  public ionViewDidLoad(){
    this.verification.internet().then(response => {
      this.verification.gps().then(response => {
        this.users_datareq.getCoordsOfOtherUsers(this.user_session.getUser()._id).then(response =>{
          this.otherUsersCoords = response;
          this.bgImage = this.user_session.getUser().photo ;
          this.name = this.user_session.getUser().name ;
          this.coords = this.user_session.getUser().coords;
          if(this.user_session.getUser().totalArbres) 
            this.totalPlant = this.user_session.getUser().totalArbres;
          else this.totalPlant = 0;
          this.loadMap();
        })
      });
    })
  }
  public loadMap(){
    let latlngbounds = new google.maps.LatLngBounds();
    let lats = 0;
    let lngs = 0;
    this.coords = this.coords.concat(this.otherUsersCoords);
    console.log(this.coords);
    if(this.coords.length>0){
      for(let coord of this.coords ){
        lats += coord.lat;
        lngs += coord.lng;
      }
      lats = lats / (this.coords.length);
      lngs = lngs / (this.coords.length);
      let latLng = new google.maps.LatLng(lats, lngs);
      let mapOptions = {
        center: latLng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        minZoom: 6
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      for(let coord of this.coords){
        let latLngMarker = new google.maps.LatLng({lat : coord.lat,lng: coord.lng});
        latlngbounds.extend(coord);
        this.map.fitBounds(latlngbounds);
        if(coord.color){
          let marker = new google.maps.Marker({
            map: this.map,
            position: latLngMarker,
            icon : 'http://www.veronia.tn/data/media/images/'+coord.color+'Marker.png'
          });
          google.maps.event.addListener(marker, 'click', () => {
            this.selectedMarker = coord;
            if(coord.color == "green") this.greenClicked = true;
            else if (coord.color == "gray") {
                this.grayClicked = true;
                let loading = this.loading.create();
                loading.present();
                console.log(coord);
                if(!coord.date_id){
                  this.imgURL = null;
                  loading.dismiss();
                }
                else {
                  let storageRef = firebase.storage().ref().child('PlantationIMG/'+this.user_session.getUser()._id +'id'+coord.date_id+'.png');
                  storageRef.getDownloadURL().then(url => {
                    loading.dismiss();
                    if(url) this.imgURL = url; else this.imgURL = null;
                  }).catch(err=>{
                    loading.dismiss();
                  });
                }
            }
  
          });
        }
        else {
          let infowindow = new google.maps.InfoWindow({
            content: '<div class="infoWindow"><div class="iwOverlay"></div><img border="0" class="infoWindowImg" align="Left" src="'+coord.image+'"> <b>' + coord.number.toString()+'</b></div>'
          });
          let marker = new google.maps.Marker({
            map: this.map,
            position: latLngMarker,
            icon : 'http://www.veronia.tn/data/media/images/otherMarkers.png'
          });
          google.maps.event.addListener(marker, 'click', () => {
            infowindow.open(this.map, marker);
          })
        }
      }
    }
    else {
      this.geolocation.getCurrentPosition().then((resp) => {
        let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
        let mapOptions = {
          center: latLng,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          scrollwheel: false,
          zoom : 8
        }
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      }).catch((error)=>{
        alert(JSON.stringify(error));
      });
    }
  }

  public deleteCoord(){
    let alert = this.alert.create({
      title: 'Supprimer cette plantation',
      message: 'Voulez vous supprimer cette plantation ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Supprimer',
          role: 'ok',
          handler: () => {
            let user = this.user_session.getUser();
            user.coords = user.coords.filter(coord => coord.lat != this.selectedMarker.lat || coord.lng != this.selectedMarker.lng);
            if(parseInt(this.selectedMarker.number))
              user.totalArbres = parseInt(user.totalArbres) - parseInt(this.selectedMarker.number);
            this.users_datareq.changeUser(user).then((result)=>{
              this.user_session.addUser(user);
              this.ionViewDidLoad();
            })
          }
        }
      ]
    });
    alert.present();
  }
  public editMarker(){
    let new_user = null;
    if(this.showEditInputField && this.nbrAjoutGray.nativeElement.value){
      if(!new_user)
      {new_user = this.user_session.getUser();}
      new_user.totalArbres = parseInt(new_user.totalArbres) - this.selectedMarker.number + parseInt(this.nbrAjoutGray.nativeElement.value);
      this.coords[this.coords.indexOf(this.selectedMarker)].number = this.nbrAjoutGray.nativeElement.value;
      this.selectedMarker.number = this.nbrAjoutGray.nativeElement.value;
      new_user.coords = this.coords;
      this.totalPlant = new_user.totalArbres;
      this.users_datareq.changeUser(new_user).then((response)=>{
        this.user_session.addUser(new_user);
        this.ionViewDidLoad();
        this.showEditInputField = false;
        this.doEditImgeField = false;
      })
    }
    else if(this.showEditInputField) {
      let alert = this.alert.create({
          title: "Donnée manquante !",
          subTitle: "Ajoutez le nombre des arbres plantées",
          buttons: ["OK"]
      });
      alert.present();
    }
    if(this.doEditImgeField){
        let d = new Date();
        let loading = this.loading.create();
        loading.present();
        let actualDate = ('0'+(d.getDate())).toString().substr(('0'+(d.getDate())).toString().length-2,2) + '/'+
                         ('0'+(d.getMonth()+1)).toString().substr(('0'+(d.getMonth()+1)).toString().length-2,2)+'/'+
                         d.getFullYear().toString();
        let storageRefUrl: string = 'PlantationIMG/'+this.user_session.getUser()._id +'id'+this.selectedMarker.date_id+'.png';
        let storageRef = firebase.storage().ref().child(storageRefUrl);
        storageRef.getDownloadURL().then(url => {
          loading.dismiss();
          if(url){
            if(!new_user)
              {new_user = this.user_session.getUser();}
            let newCoord = { lat: this.selectedMarker.lat, lng: this.selectedMarker.lng,color : "green" , number : this.selectedMarker.number, date : actualDate,image : url,species:"noSpecies",date_id: this.selectedMarker.date_id};
            this.coords[this.coords.indexOf(this.selectedMarker)] = newCoord;
            new_user.coords[this.coords.indexOf(this.selectedMarker)] = newCoord;
            this.selectedMarker = newCoord;
            let feed = {
              user:this.user_session.getUser(),
              date:actualDate,
              image:url,
              likes:0,
              lat:this.selectedMarker.lat,
              lng:this.selectedMarker.lng,
            }
            this.feeds_datareq.postFeed(feed).then((resultfeed)=>{
            })
            this.users_datareq.changeUser(new_user).then((response)=>{
              this.user_session.addUser(new_user);
              this.ionViewDidLoad();
              this.showEditInputField = false;
              this.doEditImgeField = false;
            })
          } else {
            let alert = this.alert.create({
              title: "Donnée manquante !",
              subTitle: "Ajoutez une photo de la plantation",
              buttons: ["OK"]
            });
            alert.present();
          }
      });
    }
  }
  public plantFromCoords(actual_coords){
    var geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(actual_coords.latitude, actual_coords.longitude);
    var mapsComponent = this;
    geocoder.geocode({ 'latLng': latlng }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[1]) {      
                let countryReceived = results[1].address_components;         
                let country = countryReceived[countryReceived.length - 1].short_name;
                console.log(country);
                if(country == "TN"){
                  let user = mapsComponent.user_session.getUser();
                  mapsComponent.users_datareq.coordsExist(user._id,actual_coords.latitude,actual_coords.longitude).then(responsecoords=>{
                    if(responsecoords == false){
                      user.coords.push({ lat :actual_coords.latitude,lng:actual_coords.longitude, color: "gray"  });
                      mapsComponent.coords.push({ lat :actual_coords.latitude,lng:actual_coords.longitude, color: "gray"  });
                      if(!user.totalArbres)
                        user.totalArbres = 0;
                      mapsComponent.users_datareq.changeUser(user).then((result)=>{
                        mapsComponent.user_session.addUser(user);
                        mapsComponent.ionViewDidLoad();
                      })
                    }
                    else {
                      let alert = mapsComponent.alert.create({
                          title: "Changez votre localisation !",
                          subTitle: "Vous avez déjà utilisé cette position !",
                          buttons: ["OK"]
                      });
                      alert.present();
                    }
                  })
                }
                else {
                  let alert = mapsComponent.alert.create({
                    title: "Essayez de nouveau !",
                    subTitle: "Vérifiez que votre localisation est située dans la Tunisie !",
                    buttons: ["OK"]
                  });
                  alert.present();
                }
            }
        } else {
          let alert = mapsComponent.alert.create({
            title: "Essayez de nouveau !",
            subTitle: "Vérifiez que vous avez autorisé la localisation",
            buttons: ["OK"]
          });
          alert.present();
        }
    });
  }
  public addGrayMarker(){
    console.log(MapPage.prototype);
    console.log(this);
    let loading = this.loading.create();
    loading.present();
    this.verification.gps().then(response => {
      if(response){
        this.geolocation.getCurrentPosition().then((resp) => {
          loading.dismiss();
          let actual_coords : any = {};
          if ('coords' in resp) {
            if ('latitude' in resp.coords) {
                actual_coords.latitude = resp.coords.latitude;
            }
            if ('longitude' in resp.coords) {
                actual_coords.longitude = resp.coords.longitude;
            }
          }
          this.plantFromCoords(actual_coords);
        }).catch((error) => {
          loading.dismiss();
          let alert = this.alert.create({
              title: "Essayez de nouveau !",
              subTitle: "Vérifiez que vous avez autorisé la localisation",
              buttons: ["OK"]
          });
          alert.present();
        });
      }
      else 
        loading.dismiss();
    });
  }

  public turnIntoGreen(){
    let d = new Date();
    let loading = this.loading.create();
    loading.present();
    let actualDate = ('0'+(d.getDate())).toString().substr(('0'+(d.getDate())).toString().length-2,2) + '/'+
                     ('0'+(d.getMonth()+1)).toString().substr(('0'+(d.getMonth()+1)).toString().length-2,2)+'/'+
                     d.getFullYear().toString();
    let storageRefUrl: string = 'PlantationIMG/'+this.user_session.getUser()._id +'id'+this.selectedMarker.date_id+'.png';
    let storageRef = firebase.storage().ref().child(storageRefUrl);
    storageRef.getDownloadURL().then(url => {
      loading.dismiss();
      if((url)&&(this.nbrAjoutGray.nativeElement.value)){
        let newCoord = { lat: this.selectedMarker.lat, lng: this.selectedMarker.lng,color : "green" , number : this.nbrAjoutGray.nativeElement.value, date : actualDate,image : url,species:"noSpecies",date_id: this.selectedMarker.date_id};
        this.coords[this.coords.indexOf(this.selectedMarker)] = newCoord;
        let new_user = this.user_session.getUser();
        new_user.coords = this.coords;
        new_user.totalArbres = parseInt(new_user.totalArbres) + parseInt(this.nbrAjoutGray.nativeElement.value);
        this.totalPlant = new_user.totalArbres;
        this.users_datareq.changeUser(new_user).then((response)=>{
          this.user_session.addUser(new_user);
          this.ionViewDidLoad();
          this.grayClicked = false;
        })
        let feed = {
          user:this.user_session.getUser(),
          date:actualDate,
          image:url,
          likes:0,
          lat:this.selectedMarker.lat,
          lng:this.selectedMarker.lng,
        }
          this.feeds_datareq.postFeed(feed).then((resultfeed)=>{
          })
      } else {
        let alert = this.alert.create({
            title: "Donnée manquante !",
            subTitle: "Ajoutez le nombre des arbres plantées",
            buttons: ["OK"]
        });
        alert.present();
      }
    }).catch((err)=>{
      loading.dismiss();
      let alert = this.alert.create({
          title: "Donnée manquante !",
          subTitle: "Ajoutez une photo de la plantation",
          buttons: ["OK"]
      });
      alert.present();
    });
  }

  public takePhoto(){
    this.camera.getPicture({
        quality : 95,
        destinationType : this.camera.DestinationType.DATA_URL,
        sourceType : this.camera.PictureSourceType.CAMERA,
        allowEdit : false,
        encodingType: this.camera.EncodingType.PNG,
        targetWidth: 500,
        targetHeight: 500,
        saveToPhotoAlbum: false
      }).then(picture => {
        let loading = this.loading.create();
        loading.present();
        let d = new Date();
        let date_id = d.getTime().toString();
        const ref = firebase.storage().ref('PlantationIMG/'+ this.user_session.getUser()._id +'id'+date_id+'.png');
        ref
          .putString(picture, 'base64', {contentType: 'image/png'})
          .then(savedPicture => {
            this.coords[this.coords.indexOf(this.selectedMarker)].date_id = date_id;
            this.selectedMarker.date_id = date_id;
            let new_user = this.user_session.getUser();
            new_user.coords = this.coords;
            this.users_datareq.changeUser(new_user).then((response)=>{
              let storageRef = firebase.storage().ref().child('PlantationIMG/'+this.user_session.getUser()._id +'id'+this.selectedMarker.date_id+'.png');
              storageRef.getDownloadURL().then(url => {
                if(url) {
                  this.imgURL = url; 
                  this.selectedMarker.image = url;
                }
                  else this.imgURL = null;
                loading.dismiss();
              }).catch(err=>{
                console.log(err);
                loading.dismiss();
              });
            })
          });
      }, error => {
      });
  }

  gotoPodium(){
    this.navCtrl.push(RankingPage,{animate:true,animation:'md-transition',duration:1000});
  }
  goToCRDA(){
    this.navCtrl.push(CRDAPage,{},{animate:false});
  }
  goToCompte(){
    this.navCtrl.push(ComptePage,{},{animate:false});
  }
  goToFeed(){
    this.navCtrl.push(FeedPage,{},{animate:false});
  }
  goToPlantation(){
    this.navCtrl.push(PlantationPage, {animate:true,animation:'md-transition',duration:1000});
  }
}
