import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Facebook } from '@ionic-native/facebook';
import { Camera } from '@ionic-native/camera';
import { MyApp } from './app.component';
import { ConnexionPage } from '../pages/connexion/connexion';
import { CodePage } from '../pages/code/code';
import { MapPage } from '../pages/map/map';
import { CRDAPage } from '../pages/crda/crda';
import { FeedPage } from '../pages/feed/feed';
import { RankingPage } from '../pages/ranking/ranking';
import { ComptePage } from '../pages/compte/compte';
import { ConfidPage } from '../pages/confid/confid';
import { AboutPage } from '../pages/about/about';
import { StepsPage } from '../pages/steps/steps';
import { PlantationPage } from '../pages/plantation/plantation';
import { UsersDataRequests } from '../providers/users-data-requests';
import { FeedsDataRequests } from '../providers/feeds-data-requests';
import { HttpModule } from '@angular/http';
import { UserSession } from '../services/user-session';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { GooglePlus } from '@ionic-native/google-plus';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Network } from '@ionic-native/network';
import { Verification } from '../services/verification';
import { SocialSharing } from '@ionic-native/social-sharing';
import { GoogleMaps } from '@ionic-native/google-maps';
@NgModule({
  declarations: [
    MyApp,
    ConnexionPage,MapPage,CRDAPage,RankingPage,FeedPage,ComptePage,CodePage,ConfidPage,AboutPage,StepsPage,PlantationPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ConnexionPage,MapPage,CRDAPage,RankingPage,FeedPage,ComptePage,CodePage,ConfidPage,AboutPage,StepsPage,PlantationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    UsersDataRequests,FeedsDataRequests,Verification,
    UserSession,
    Geolocation, Camera, NativeGeocoder, GooglePlus, Diagnostic, Network, SocialSharing, GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
