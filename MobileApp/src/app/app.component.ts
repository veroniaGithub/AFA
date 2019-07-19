import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
import { ConnexionPage } from '../pages/connexion/connexion';
import { Verification } from '../services/verification';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = ConnexionPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public verification: Verification) {
    platform.ready().then(() => {
          statusBar.styleDefault();
          splashScreen.hide();
          firebase.initializeApp({
            apiKey: "AIzaSyA02CSPbdyqL1K1CpJb_Aj8to-ITdwguq0",
            authDomain: "million-trees-for-tunisia.firebaseapp.com",
            databaseURL: "https://million-trees-for-tunisia.firebaseio.com",
            storageBucket: "million-trees-for-tunisia.appspot.com",
            messagingSenderId: "870601950983"
          });
    });
  }
}
