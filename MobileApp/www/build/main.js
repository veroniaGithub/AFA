webpackJsonp([0],{

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedsDataRequests; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_verification__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FeedsDataRequests = (function () {
    function FeedsDataRequests(http, loading, verification) {
        this.http = http;
        this.loading = loading;
        this.verification = verification;
    }
    FeedsDataRequests.prototype.postFeed = function (feed) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.verification.internet().then(function (response) {
                if (response) {
                    var loading_1 = _this.loading.create();
                    loading_1.present();
                    _this.http.post('http://www.veronia.tn/mtft/ws_feeds', feed)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        loading_1.dismiss();
                        console.log(data);
                        resolve(data);
                    });
                }
                else {
                    return new Promise(function (resolve) { resolve(false); });
                }
            });
        });
    };
    FeedsDataRequests.prototype.getFeeds = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.verification.internet().then(function (response) {
                if (response) {
                    var loading_2 = _this.loading.create();
                    loading_2.present();
                    _this.http.get('http://www.veronia.tn/mtft/ws_feeds/')
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        loading_2.dismiss();
                        console.log(data);
                        resolve(data);
                    });
                }
                else {
                    return new Promise(function (resolve) { resolve(false); });
                }
            });
        });
    };
    FeedsDataRequests.prototype.changeFeed = function (feed) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.verification.internet().then(function (response) {
                if (response) {
                    var loading_3 = _this.loading.create();
                    loading_3.present();
                    _this.http.post('http://www.veronia.tn/mtft/ws_feeds/' + feed._id, feed)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        loading_3.dismiss();
                        console.log(data);
                        resolve(data);
                    });
                }
                else {
                    return new Promise(function (resolve) { resolve(false); });
                }
            });
        });
    };
    return FeedsDataRequests;
}());
FeedsDataRequests = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__services_verification__["a" /* Verification */]])
], FeedsDataRequests);

//# sourceMappingURL=feeds-data-requests.js.map

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 163;

/***/ }),

/***/ 205:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 205;

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersDataRequests; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_verification__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsersDataRequests = (function () {
    function UsersDataRequests(http, loading, verification) {
        this.http = http;
        this.loading = loading;
        this.verification = verification;
    }
    UsersDataRequests.prototype.getUsers = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.verification.internet().then(function (response) {
                if (response) {
                    var loading_1 = _this.loading.create();
                    loading_1.present();
                    _this.http.get('http://www.veronia.tn/mtft/ws_users')
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        loading_1.dismiss();
                        console.log(data);
                        resolve(data);
                    });
                }
                else {
                    return new Promise(function (resolve) { resolve(false); });
                }
            });
        });
    };
    UsersDataRequests.prototype.getCoordsOfOtherUsers = function (user_id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.verification.internet().then(function (response) {
                if (response) {
                    var loading_2 = _this.loading.create();
                    loading_2.present();
                    _this.http.get('http://www.veronia.tn/mtft/ws_users/' + user_id)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        loading_2.dismiss();
                        console.log("other coords");
                        console.log(data);
                        resolve(data);
                    });
                }
                else {
                    return new Promise(function (resolve) { resolve(false); });
                }
            });
        });
    };
    UsersDataRequests.prototype.coordsExist = function (user_id, lat, lng) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.verification.internet().then(function (response) {
                if (response) {
                    var loading_3 = _this.loading.create();
                    loading_3.present();
                    _this.http.get('http://www.veronia.tn/mtft/ws_users/coords/' + user_id + '/' + lat.toString() + '/' + lng.toString())
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        loading_3.dismiss();
                        console.log(data);
                        resolve(data);
                    });
                }
                else {
                    return new Promise(function (resolve) { resolve(false); });
                }
            });
        });
    };
    UsersDataRequests.prototype.loginUser = function (user) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.verification.internet().then(function (response) {
                if (response) {
                    var loading_4 = _this.loading.create();
                    loading_4.present();
                    _this.http.post('http://www.veronia.tn/mtft/ws_login', user)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        loading_4.dismiss();
                        console.log(data);
                        resolve(data);
                    });
                }
                else {
                    return new Promise(function (resolve) { resolve(false); });
                }
            });
        });
    };
    UsersDataRequests.prototype.changeMail = function (user) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.verification.internet().then(function (response) {
                if (response) {
                    var loading_5 = _this.loading.create();
                    loading_5.present();
                    _this.http.post('http://www.veronia.tn/mtft/ws_changemail', user)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        loading_5.dismiss();
                        console.log(data);
                        resolve(data);
                    });
                }
                else {
                    return new Promise(function (resolve) { resolve(false); });
                }
            });
        });
    };
    UsersDataRequests.prototype.changeUser = function (user) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.verification.internet().then(function (response) {
                if (response) {
                    var loading_6 = _this.loading.create();
                    loading_6.present();
                    _this.http.post('http://www.veronia.tn/mtft/ws_users/' + user._id, user)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        loading_6.dismiss();
                        console.log(data);
                        resolve(data);
                    });
                }
                else {
                    return new Promise(function (resolve) { resolve(false); });
                }
            });
        });
    };
    return UsersDataRequests;
}());
UsersDataRequests = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__services_verification__["a" /* Verification */]])
], UsersDataRequests);

//# sourceMappingURL=users-data-requests.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSession; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserSession = (function () {
    function UserSession(http) {
        this.http = http;
        this.sessionUser = [];
    }
    UserSession.prototype.addUser = function (user) {
        if (this.sessionUser.length > 0) {
            this.sessionUser = [];
        }
        this.sessionUser.push(user);
    };
    UserSession.prototype.deleteUser = function () {
        this.sessionUser = [];
    };
    UserSession.prototype.getUser = function () {
        if (this.sessionUser.length > 0) {
            return this.sessionUser[this.sessionUser.length - 1];
        }
        else
            return false;
    };
    return UserSession;
}());
UserSession = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], UserSession);

//# sourceMappingURL=user-session.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnexionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_users_data_requests__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_session__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_map_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_code_code__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_verification__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ConnexionPage = (function () {
    function ConnexionPage(navCtrl, platform, facebook, google, alert, user_session, users_datareq, loading, verification, splashScreen) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.facebook = facebook;
        this.google = google;
        this.alert = alert;
        this.user_session = user_session;
        this.users_datareq = users_datareq;
        this.loading = loading;
        this.verification = verification;
        this.splashScreen = splashScreen;
        this.userProfile = null;
        window.caches.delete;
        this.verification.internet().then(function (response) {
        });
    }
    ConnexionPage.prototype.googleLogin = function () {
        var _this = this;
        this.verification.internet().then(function (response) {
            if (response) {
                if (_this.platform.is('mobileweb')) {
                    console.log('in serve');
                    var user = {
                        _id: "59c95c6fa6822f0004994344",
                        name: "Achraf Hakim",
                        email: "www.achraf.hakim@gmail.com",
                        photo: "https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/18157340_1914055275543035_3013843365488330292_n.jpg?oh=3acfd7a7f02301eb25e9a5b471a3d05c&oe=5A59F29E",
                        coords: [],
                        totalArbres: 0
                    };
                    _this.user_session.addUser(user);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_map_map__["a" /* MapPage */]);
                }
                else {
                    _this.google.login({})
                        .then(function (user) {
                        alert(JSON.stringify(user));
                    }, function (error) {
                        alert(JSON.stringify(error));
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
    };
    ConnexionPage.prototype.facebookLogin = function () {
        var _this = this;
        this.verification.internet().then(function (response) {
            if (response) {
                if (_this.platform.is('mobileweb') || _this.platform.is('core')) {
                    var user = {
                        name: "TEST",
                        email: "test.test@test.test",
                        facebook_email: "test.test@test.test",
                        photo: "https://graph.facebook.com/1994607004154528/picture?type=large",
                        coords: [],
                        totalArbres: 0,
                        code: '',
                        verified: false,
                        likes: []
                    };
                    _this.users_datareq.loginUser(user).then(function (responseLogin) {
                        var user_json = responseLogin;
                        _this.user_session.addUser(user_json.user);
                        if (!user_json.user.verified)
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages_code_code__["a" /* CodePage */]);
                        else
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_map_map__["a" /* MapPage */]);
                    });
                }
                else {
                    var loading_1 = _this.loading.create();
                    loading_1.present();
                    _this.facebook.login(['email']).then(function (response) {
                        _this.facebook.api("/me?fields=name,email", []).then(function (userProfile) {
                            loading_1.dismiss();
                            var user = {
                                name: userProfile.name,
                                facebook_email: userProfile.email,
                                photo: "https://graph.facebook.com/" + response.authResponse.userID.toString() + "/picture?type=large",
                                coords: [],
                                totalArbres: 0,
                                code: '',
                                verified: false,
                                likes: []
                            };
                            _this.users_datareq.loginUser(user).then(function (responseLogin) {
                                var user_json = responseLogin;
                                _this.user_session.addUser(user_json.user);
                                if (!user_json.user.verified)
                                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages_code_code__["a" /* CodePage */]);
                                else
                                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_map_map__["a" /* MapPage */]);
                            });
                        });
                    }).catch(function (error) {
                        var loading = _this.loading.create();
                        loading.present();
                        _this.facebook.login(['email']).then(function (response) {
                            _this.facebook.api("/me?fields=name,email", []).then(function (userProfile) {
                                loading.dismiss();
                                var user = {
                                    name: userProfile.name,
                                    email: userProfile.email,
                                    photo: "https://graph.facebook.com/" + response.authResponse.userID.toString() + "/picture?type=large",
                                    coords: [],
                                    totalArbres: 0,
                                    code: '',
                                    verified: false,
                                    likes: []
                                };
                                _this.users_datareq.loginUser(user).then(function (responseLogin) {
                                    var user_json = responseLogin;
                                    _this.user_session.addUser(user_json.user);
                                    if (!user_json.user.verified)
                                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages_code_code__["a" /* CodePage */]);
                                    else
                                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_map_map__["a" /* MapPage */]);
                                });
                            });
                        }).catch(function (error) {
                            var alert = _this.alert.create({
                                title: "Veuillez essayer de nouveau !",
                                subTitle: "Vérifiez votre connection internet",
                                buttons: ["OK"]
                            });
                            alert.present();
                        });
                    });
                }
            }
        });
    };
    return ConnexionPage;
}());
ConnexionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-connexion',template:/*ion-inline-start:"D:\VERONIA\MTFT\app\src\pages\connexion\connexion.html"*/'<ion-content scroll="false">\n\n  <div class="backgroundContainer">\n    <div class="imgBackground">\n        <img src="assets/images/background.jpg"/>\n        <div class="backgroundImgLayer"></div>\n    </div>\n    <div class="welcomeTitle">\n       <img src="" />\n       <h1>One Million Trees <br>For Tunisia</h1>\n    </div>\n    <div class="connexion">\n      <a>Connectez vous !</a>\n      <div class="connexionbuttons">\n        <div class="facebook" (click)="facebookLogin()">\n          <ion-icon name="logo-facebook"></ion-icon>\n          <!-- <a>Se connecter avec facebook</a> -->\n        </div>\n        <div class="googleplus" (click)="googleLogin()">\n          <ion-icon name="logo-googleplus"></ion-icon>\n          <!-- <>Se connecter avec google+</a> -->\n        </div>\n    </div>\n    </div>\n  </div>'/*ion-inline-end:"D:\VERONIA\MTFT\app\src\pages\connexion\connexion.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__["a" /* GooglePlus */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_6__services_user_session__["a" /* UserSession */], __WEBPACK_IMPORTED_MODULE_5__providers_users_data_requests__["a" /* UsersDataRequests */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_9__services_verification__["a" /* Verification */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */]])
], ConnexionPage);

//# sourceMappingURL=connexion.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfidPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_users_data_requests__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_session__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfidPage = (function () {
    function ConfidPage(navCtrl, users_datareq, user_session) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.users_datareq = users_datareq;
        this.user_session = user_session;
        window.caches.delete;
        this.users_datareq.getUsers().then(function (response) {
            _this.users = response;
        });
    }
    ConfidPage.prototype.ionViewDidLoad = function () {
    };
    ConfidPage.prototype.goToMap = function () {
        this.navCtrl.pop();
    };
    return ConfidPage;
}());
ConfidPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-confid',template:/*ion-inline-start:"D:\VERONIA\MTFT\app\src\pages\confid\confid.html"*/'<ion-content scroll="false">\n\n  <div class="backgroundContainer">\n    <div class="imgBackground">\n        <img src="assets/images/background.jpg"/>\n        <div class="backgroundImgLayer"></div>\n    </div>\n    <div class="title">\n      <b>Confidentialité</b>\n    </div>\n    <div class="aboutContainer">\n      <p>Devant le développement des nouveaux outils de communication, il est nécessaire de porter une attention\nparticulière à la protection de la vie privée.<br> C\'est pourquoi, nous nous engageons à respecter la confidentialité\ndes renseignements personnels que nous collectons.<br>\n\nCollecte des renseignements personnels\nNous collectons les renseignements suivants :\n<br> Nom\n<br> Prénom\n<br> Adresse postale\n<br> Adresse électronique\n<br> Numéro de téléphone / télécopieur\n<br> Numéro de carte de crédit\n<br> Genre / Sexe\n<br> Âge / Date de naissance.<br>\nLes renseignements personnels que nous collectons sont recueillis au travers de formulaires et grâce à\nl\'interactivité établie entre vous et notre site Web.<br> Nous utilisons également, comme indiqué dans la section\nsuivante, des fichiers témoins et/ou journaux pour réunir des informations vous concernant.<br>\n\nFormulaires  et interactivité:\nVos renseignements personnels sont collectés par le biais de formulaire, à savoir :\n<br> Sondage d\'opinion\n<br> Concours\nNous utilisons les renseignements ainsi collectés pour les finalités suivantes :\n<br> Suivi de la commande\n<br> Informations / Offres promotionnelles\n<br> Statistiques\n<br> Contact\n<br> Gestion du site Web (présentation, organisation)\nVos renseignements sont également collectés par le biais de l\'interactivité pouvant s\'établir entre vous et notre\nsite Web et ce, de la façon suivante:\n<br> Statistiques\n<br> Contact\n<br> Gestion du site Web (présentation, organisation)\nNous utilisons les renseignements ainsi collectés pour les finalités suivantes :\n<br> Commentaires\n<br> Informations ou pour des offres promotionnelles.<br>\n\nDroit d\'opposition et de retrait\nNous nous engageons à vous offrir un droit d\'opposition et de retrait quant à vos renseignements personnels.<br>\n\nLe droit d\'opposition s\'entend comme étant la possibilité offerte aux internautes de refuser que leurs\nrenseignements personnels soient utilisées à certaines fins mentionnées lors de la collecte.<br>\nLe droit de retrait s\'entend comme étant la possibilité offerte aux internautes de demander à ce que leurs\nrenseignements personnels ne figurent plus, par exemple, dans une liste de diffusion.<br>\nPour pouvoir exercer ces droits, vous pouvez :\nCode postal : imapsse du Bossu, tunis 1000\nCourriel : medmehdi.<br>ghazzai@gamil.<br>com\nSection du site web : Acaciasforall.<br>org/\n\nDroit d\'accès\nNous nous engageons à reconnaître un droit d\'accès et de rectification aux personnes concernées désireuses de\nconsulter, modifier, voire radier les informations les concernant.<br>\nL\'exercice de ce droit se fera :\nCode postal : imapsse du Bossu, tunis 1000\nCourriel : medmehdi.<br>ghazzai@gamil.<br>com\nSection du site web : Acaciasforall.<br>org/\n\nSécurité\nLes renseignements personnels que nous collectons sont conservés dans un environnement sécurisé.<br> Les\npersonnes travaillant pour nous sont tenues de respecter la confidentialité de vos informations.<br>\nPour assurer la sécurité de vos renseignements personnels, nous avons recours aux mesures suivantes :\n<br> Protocole SSL (Secure Sockets Layer)\n<br> Protocole SET (Secure Electronic Transaction)\n<br> Gestion des accès - personne autorisée\n<br> Gestion des accès - personne concernée\n<br> Logiciel de surveillance du réseau\n<br> Sauvegarde informatique\n<br> Développement de certificat numérique\n<br> Identifiant / mot de passe\n<br> Pare-feu (Firewalls).<br>\nNous nous engageons à maintenir un haut degré de confidentialité en intégrant les dernières innovations\ntechnologiques permettant d\'assurer la confidentialité de vos transactions.<br> Toutefois, comme aucun mécanisme\nn\'offre une sécurité maximale, une part de risque est toujours présente lorsque l\'on utilise Internet pour\ntransmettre des renseignements personnels.<br>\n\nEnfants\nNotre site Web contient des sections destinées aux enfants.<br> La collecte de leurs renseignements personnels se\nfait avec le consentement des parents ou du représentant de l\'enfant.<br>\n\nLabel\nNos engagements en matière de protection des renseignements personnels répondent aux exigences du\nprogramme suivant :\n- GEOTRUST\n\nLégislation\nNous nous engageons à respecter les dispositions législatives énoncées en :  Tunisie.<br></p>\n    </div>\n    <div class="close" (click)="goToMap()">\n      <ion-icon name="close"></ion-icon>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\VERONIA\MTFT\app\src\pages\confid\confid.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_users_data_requests__["a" /* UsersDataRequests */], __WEBPACK_IMPORTED_MODULE_3__services_user_session__["a" /* UserSession */]])
], ConfidPage);

//# sourceMappingURL=confid.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_users_data_requests__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_session__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutPage = (function () {
    function AboutPage(navCtrl, users_datareq, user_session) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.users_datareq = users_datareq;
        this.user_session = user_session;
        window.caches.delete;
        this.users_datareq.getUsers().then(function (response) {
            _this.users = response;
        });
    }
    AboutPage.prototype.ionViewDidLoad = function () {
    };
    AboutPage.prototype.goToMap = function () {
        this.navCtrl.pop();
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"D:\VERONIA\MTFT\app\src\pages\about\about.html"*/'<ion-content scroll="false">\n\n  <div class="backgroundContainer">\n    <div class="imgBackground">\n        <img src="assets/images/background.jpg"/>\n        <div class="backgroundImgLayer"></div>\n    </div>\n    <div class="title">\n      <b>&Agrave; propos de One Million Trees For Tunisia</b>\n    </div>\n    <div class="aboutContainer">\n      <p>Grâce à cette application, votre smartphone devient un outil puissant pour faire l’inventaire de toutes les plantations d’arbres du pays. Par le téléchargement et l’utilisation de cette application, vous soutenez la campagne « Un million d’arbre pour la Tunisie ». Cette application est pour tous les intéressés, les passionnés de la nature, et pour tous ceux qui sont engagés en faveur de la question environnementale.</p>\n    </div>\n    <div class="close" (click)="goToMap()">\n      <ion-icon name="close"></ion-icon>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\VERONIA\MTFT\app\src\pages\about\about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_users_data_requests__["a" /* UsersDataRequests */], __WEBPACK_IMPORTED_MODULE_3__services_user_session__["a" /* UserSession */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StepsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_users_data_requests__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_session__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StepsPage = (function () {
    function StepsPage(navCtrl, users_datareq, user_session) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.users_datareq = users_datareq;
        this.user_session = user_session;
        window.caches.delete;
        this.users_datareq.getUsers().then(function (response) {
            _this.users = response;
        });
    }
    StepsPage.prototype.ionViewDidLoad = function () {
    };
    StepsPage.prototype.goToMap = function () {
        this.navCtrl.pop();
    };
    return StepsPage;
}());
StepsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-steps',template:/*ion-inline-start:"D:\VERONIA\MTFT\app\src\pages\steps\steps.html"*/'<ion-content scroll="false">\n\n  <div class="backgroundContainer">\n    <div class="imgBackground">\n        <img src="assets/images/background.jpg"/>\n        <div class="backgroundImgLayer"></div>\n    </div>\n    <div class="title">\n      <b>Comment ça marche ?</b>\n    </div>\n    <div class="aboutContainer">\n      <p>Les caractéristiques et fonctions les plus importantes en résumé sont :\n<br>- Création de votre profil sur l’application\n<br>- Géolocaliser sa plantation\n<br>-Prendre en photo les différents arbres plantés\n<br>-Aimer et Partager avec ses amis ses plantations\n<br>-Participer au concours du total de plantation le plus élevé\n<br>-Contacter le service des forets le plus proche de sa région\n<br>-Achat de plants pour participer au financement de la campagne\n<br>-Comparer en elles les photos des différentes plantes\n<br>-S’exercer et apprendre les noms au moyen des différentes descriptions de plantes.</p>\n    </div>\n    <div class="close" (click)="goToMap()">\n      <ion-icon name="close"></ion-icon>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\VERONIA\MTFT\app\src\pages\steps\steps.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_users_data_requests__["a" /* UsersDataRequests */], __WEBPACK_IMPORTED_MODULE_3__services_user_session__["a" /* UserSession */]])
], StepsPage);

//# sourceMappingURL=steps.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RankingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_users_data_requests__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_session__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RankingPage = (function () {
    function RankingPage(navCtrl, users_datareq, user_session) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.users_datareq = users_datareq;
        this.user_session = user_session;
        window.caches.delete;
        this.users_datareq.getUsers().then(function (response) {
            _this.users = response;
        });
    }
    RankingPage.prototype.ionViewDidLoad = function () {
    };
    RankingPage.prototype.goToMap = function () {
        this.navCtrl.pop();
    };
    return RankingPage;
}());
RankingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-ranking',template:/*ion-inline-start:"D:\VERONIA\MTFT\app\src\pages\ranking\ranking.html"*/'<ion-content scroll="false">\n\n  <div class="backgroundContainer">\n    <div class="imgBackground">\n        <img src="assets/images/background.jpg"/>\n        <div class="backgroundImgLayer"></div>\n    </div>\n    <div class="userslist">\n      <div [ngClass]="{\'user\': user.email!=user_session.getUser().email, \'usersession\': user.email==user_session.getUser().email}"  *ngFor="let user of users;let i=index">\n        <div class="rank">\n          <b *ngIf="(i+1)>3">{{i+1}}</b>\n          <img *ngIf="(i+1)==1" src="assets/images/gold.png"/>\n          <img *ngIf="(i+1)==2" src="assets/images/silver.png"/>\n          <img *ngIf="(i+1)==3" src="assets/images/bronze.png"/>\n\n        </div>\n        <div class="image" [style.backgroundImage]="\'url(\' + user.photo + \')\'">\n        </div>\n        <div class="name">\n          <b>{{user.name}}</b>\n        </div>\n        <div class="nbrArbres">\n          <b *ngIf="user.totalArbres != 1">{{user.totalArbres}} arbres</b>\n          <b *ngIf="user.totalArbres == 1">{{user.totalArbres}} arbre</b>\n        </div>\n      </div>\n\n    </div>\n    <div class="close" (click)="goToMap()">\n      <ion-icon name="close"></ion-icon>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\VERONIA\MTFT\app\src\pages\ranking\ranking.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_users_data_requests__["a" /* UsersDataRequests */], __WEBPACK_IMPORTED_MODULE_3__services_user_session__["a" /* UserSession */]])
], RankingPage);

//# sourceMappingURL=ranking.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlantationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_users_data_requests__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_session__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map_map__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PlantationPage = (function () {
    function PlantationPage(navCtrl, users_datareq, user_session, alert) {
        this.navCtrl = navCtrl;
        this.users_datareq = users_datareq;
        this.user_session = user_session;
        this.alert = alert;
        window.caches.delete;
    }
    PlantationPage.prototype.ionViewDidLoad = function () {
    };
    PlantationPage.prototype.plantByLocation = function () {
        this.navCtrl.pop();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__map_map__["a" /* MapPage */], { plantation: 0 });
    };
    PlantationPage.prototype.plantByCoords = function () {
        if (this.lat.nativeElement.value && this.lng.nativeElement.value) {
            this.navCtrl.pop();
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__map_map__["a" /* MapPage */], { plantation: 1, coords: {
                    latitude: parseFloat(this.lat.nativeElement.value),
                    longitude: parseFloat(this.lng.nativeElement.value)
                }
            });
        }
        else {
            var alert_1 = this.alert.create({
                title: "Impossible de planter !",
                subTitle: "Vérifier les coordonnées que vous avez ajoutées",
                buttons: ["OK"]
            });
            alert_1.present();
        }
    };
    PlantationPage.prototype.goToMap = function () {
        this.navCtrl.pop();
    };
    return PlantationPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('lat'),
    __metadata("design:type", Object)
], PlantationPage.prototype, "lat", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('lng'),
    __metadata("design:type", Object)
], PlantationPage.prototype, "lng", void 0);
PlantationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-plantation',template:/*ion-inline-start:"D:\VERONIA\MTFT\app\src\pages\plantation\plantation.html"*/'<ion-content scroll="false">\n\n  <div class="backgroundContainer">\n    <div class="imgBackground">\n        <img src="assets/images/background.jpg"/>\n        <div class="backgroundImgLayer"></div>\n    </div>\n    <div class="aboutContainer">\n      <div class="gps">\n        <b class="emptyB">Plantation en position actuelle</b>\n        <p>Planter selon votre position actuelle indiquée par votre appareil.</p>\n        <div class="latLng empty"></div>\n        <button (click)="plantByLocation()">PLANTER<ion-icon name="locate" ></ion-icon></button>\n      </div>\n      <div class="divider"></div>\n      <div class="coordinates">\n        <b>Plantation par coordonnées</b>\n        <p>Planter par saisie manuelle de coordonnées de l\'endroit désiré.</p>\n        <div class="latLng">\n            <h2>Latitude:</h2>\n            <input class="latitude" #lat type="number"/>\n            <h2>Longitude:</h2>\n            <input class="Longitude" #lng type="number"/>\n        </div>\n        <button (click)="plantByCoords()" type="submit">PLANTER <ion-icon name="paper-plane" ></ion-icon></button>\n      </div>\n    </div>\n    <div class="close" (click)="goToMap()">\n      <ion-icon name="close"></ion-icon>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\VERONIA\MTFT\app\src\pages\plantation\plantation.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_users_data_requests__["a" /* UsersDataRequests */], __WEBPACK_IMPORTED_MODULE_3__services_user_session__["a" /* UserSession */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], PlantationPage);

//# sourceMappingURL=plantation.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_users_data_requests__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_session__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_map_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_verification__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CodePage = (function () {
    function CodePage(navCtrl, platform, alert, user_session, users_datareq, loading, verification) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.alert = alert;
        this.user_session = user_session;
        this.users_datareq = users_datareq;
        this.loading = loading;
        this.verification = verification;
        window.caches.delete;
        console.log(this.user_session.getUser());
    }
    CodePage.prototype.validerCode = function () {
        var _this = this;
        if (this.code.nativeElement.value.length != 10) {
            this.messageerror = "Veuillez vérifier le code !";
        }
        else {
            this.messageerror = "";
            if (this.user_session.getUser().code == this.code.nativeElement.value) {
                var new_user_1 = this.user_session.getUser();
                new_user_1.verified = true;
                this.users_datareq.changeUser(new_user_1).then(function (response) {
                    _this.user_session.addUser(new_user_1);
                    _this.navCtrl.pop({ animate: false });
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_map_map__["a" /* MapPage */]);
                });
            }
            else
                this.messageerror = "Veuillez vérifier le code !";
        }
    };
    CodePage.prototype.changerEmail = function () {
        var _this = this;
        console.log(this.email.nativeElement.value);
        var regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        if (!regExp.test(this.email.nativeElement.value)) {
            this.messageerroremail = "Adresse e-mail invalide!";
        }
        else {
            this.messageerroremail = "";
            var new_user_2 = this.user_session.getUser();
            new_user_2.email = this.email.nativeElement.value;
            this.users_datareq.changeMail(new_user_2).then(function (response) {
                var user_json = response;
                if (user_json.user) {
                    if (user_json.user._id) {
                        _this.user_session.addUser(new_user_2);
                        _this.email.nativeElement.value = "";
                        var alert_1 = _this.alert.create({
                            title: "Votre e-mail a été changé !",
                            subTitle: "Vous pouvez trouver votre code dans " + new_user_2.email,
                            buttons: [{
                                    text: 'OK',
                                    handler: function () {
                                        alert_1.dismiss();
                                    }
                                }]
                        });
                        alert_1.present();
                    }
                    else {
                        _this.messageerroremail = "Adresse e-mail utilisée!";
                    }
                }
                else {
                    _this.messageerroremail = "Adresse e-mail invalide!";
                }
            });
        }
    };
    return CodePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('codeNumber'),
    __metadata("design:type", Object)
], CodePage.prototype, "code", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('newEmail'),
    __metadata("design:type", Object)
], CodePage.prototype, "email", void 0);
CodePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-code',template:/*ion-inline-start:"D:\VERONIA\MTFT\app\src\pages\code\code.html"*/'<ion-content scroll="false">\n\n  <div class="backgroundContainer">\n    <div class="imgBackground">\n      <img src="assets/images/background.jpg" />\n      <div class="backgroundImgLayer"></div>\n    </div>\n    <div class="connexion">\n      <a>Veuillez entrer le code de 10 chiffres reçu dans votre e-mail {{user_session.getUser().email}}!</a>\n      <div class="connexionbuttons">\n        <div class="code">\n          <input #codeNumber placeholder="Votre code" type="tel" name="codeNumber" maxlength="10">\n          <div class="next" (click)="validerCode()">\n            <ion-icon name="checkmark"></ion-icon>\n          </div>\n        </div>\n      </div>\n      <div class="messageerror">\n        <b>{{messageerror}}</b>\n      </div>\n    </div>\n    <div class="connexion changeEmail">\n      <a>Vous n\'avez pas reçu le code et vous voulez changer votre e-mail ?</a>\n      <div class="connexionbuttons">\n        <div class="code">\n          <input #newEmail placeholder="Veuillez entrer votre e-mail" type="email" name="codeNumber">\n          <div class="next" (click)="changerEmail()">\n            <ion-icon name="checkmark"></ion-icon>\n          </div>\n        </div>\n      </div>\n      <div class="messageerror">\n        <b>{{messageerroremail}}</b>\n      </div>\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\VERONIA\MTFT\app\src\pages\code\code.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__services_user_session__["a" /* UserSession */], __WEBPACK_IMPORTED_MODULE_2__providers_users_data_requests__["a" /* UsersDataRequests */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__services_verification__["a" /* Verification */]])
], CodePage);

//# sourceMappingURL=code.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(321);



// this is the magic wand
Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_connexion_connexion__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_code_code__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_map_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_crda_crda__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_feed_feed__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_ranking_ranking__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_compte_compte__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_confid_confid__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_about_about__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_steps_steps__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_plantation_plantation__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_users_data_requests__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_feeds_data_requests__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_http__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_user_session__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_geolocation__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_native_geocoder__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_google_plus__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_diagnostic__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_network__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_verification__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_social_sharing__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_google_maps__ = __webpack_require__(438);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_connexion_connexion__["a" /* ConnexionPage */], __WEBPACK_IMPORTED_MODULE_10__pages_map_map__["a" /* MapPage */], __WEBPACK_IMPORTED_MODULE_11__pages_crda_crda__["a" /* CRDAPage */], __WEBPACK_IMPORTED_MODULE_13__pages_ranking_ranking__["a" /* RankingPage */], __WEBPACK_IMPORTED_MODULE_12__pages_feed_feed__["a" /* FeedPage */], __WEBPACK_IMPORTED_MODULE_14__pages_compte_compte__["a" /* ComptePage */], __WEBPACK_IMPORTED_MODULE_9__pages_code_code__["a" /* CodePage */], __WEBPACK_IMPORTED_MODULE_15__pages_confid_confid__["a" /* ConfidPage */], __WEBPACK_IMPORTED_MODULE_16__pages_about_about__["a" /* AboutPage */], __WEBPACK_IMPORTED_MODULE_17__pages_steps_steps__["a" /* StepsPage */], __WEBPACK_IMPORTED_MODULE_18__pages_plantation_plantation__["a" /* PlantationPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_21__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_connexion_connexion__["a" /* ConnexionPage */], __WEBPACK_IMPORTED_MODULE_10__pages_map_map__["a" /* MapPage */], __WEBPACK_IMPORTED_MODULE_11__pages_crda_crda__["a" /* CRDAPage */], __WEBPACK_IMPORTED_MODULE_13__pages_ranking_ranking__["a" /* RankingPage */], __WEBPACK_IMPORTED_MODULE_12__pages_feed_feed__["a" /* FeedPage */], __WEBPACK_IMPORTED_MODULE_14__pages_compte_compte__["a" /* ComptePage */], __WEBPACK_IMPORTED_MODULE_9__pages_code_code__["a" /* CodePage */], __WEBPACK_IMPORTED_MODULE_15__pages_confid_confid__["a" /* ConfidPage */], __WEBPACK_IMPORTED_MODULE_16__pages_about_about__["a" /* AboutPage */], __WEBPACK_IMPORTED_MODULE_17__pages_steps_steps__["a" /* StepsPage */], __WEBPACK_IMPORTED_MODULE_18__pages_plantation_plantation__["a" /* PlantationPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_19__providers_users_data_requests__["a" /* UsersDataRequests */], __WEBPACK_IMPORTED_MODULE_20__providers_feeds_data_requests__["a" /* FeedsDataRequests */], __WEBPACK_IMPORTED_MODULE_28__services_verification__["a" /* Verification */],
            __WEBPACK_IMPORTED_MODULE_22__services_user_session__["a" /* UserSession */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_24__ionic_native_native_geocoder__["a" /* NativeGeocoder */], __WEBPACK_IMPORTED_MODULE_25__ionic_native_google_plus__["a" /* GooglePlus */], __WEBPACK_IMPORTED_MODULE_26__ionic_native_diagnostic__["a" /* Diagnostic */], __WEBPACK_IMPORTED_MODULE_27__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_29__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_30__ionic_native_google_maps__["a" /* GoogleMaps */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_connexion_connexion__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_verification__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, verification) {
        this.verification = verification;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_connexion_connexion__["a" /* ConnexionPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.initializeApp({
                apiKey: "AIzaSyA02CSPbdyqL1K1CpJb_Aj8to-ITdwguq0",
                authDomain: "million-trees-for-tunisia.firebaseapp.com",
                databaseURL: "https://million-trees-for-tunisia.firebaseio.com",
                storageBucket: "million-trees-for-tunisia.appspot.com",
                messagingSenderId: "870601950983"
            });
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\VERONIA\MTFT\app\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\VERONIA\MTFT\app\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_6__services_verification__["a" /* Verification */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Verification; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_diagnostic__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Verification = (function () {
    function Verification(alert, platform, diagnostic, loading, network, splashScreen) {
        this.alert = alert;
        this.platform = platform;
        this.diagnostic = diagnostic;
        this.loading = loading;
        this.network = network;
        this.splashScreen = splashScreen;
    }
    Verification.prototype.internet = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.splashScreen.hide();
            console.log(_this.network.type);
            if ((_this.network.type == 'none')) {
                var alert_1 = _this.alert.create({
                    title: "Problème de connexion !",
                    subTitle: "Veuillez activer la connexion internet",
                    buttons: [{
                            text: 'OK',
                            handler: function () {
                                alert_1.dismiss();
                                _this.splashScreen.show();
                                window.location.reload();
                            }
                        }]
                });
                alert_1.present();
                resolve(false);
            }
            else
                resolve(true);
        });
    };
    Verification.prototype.gps = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (_this.platform.is('mobileweb') || _this.platform.is('core'))
                resolve(true);
            else
                _this.diagnostic.isLocationEnabled()
                    .then(function (isAvailable) {
                    if (isAvailable)
                        resolve(true);
                    else {
                        console.log(isAvailable);
                        resolve(false);
                        var alert_2 = _this.alert.create({
                            title: "Problème de localisation !",
                            subTitle: "Veuillez activer le GPS",
                            buttons: ["OK"]
                        });
                        alert_2.present();
                    }
                })
                    .catch(function (error) {
                    console.log(error);
                    resolve(false);
                    var alert = _this.alert.create({
                        title: "Problème de localisation !",
                        subTitle: "Veuillez activer le GPS",
                        buttons: ["OK"]
                    });
                    alert.present();
                });
        });
    };
    return Verification;
}());
Verification = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_diagnostic__["a" /* Diagnostic */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */]])
], Verification);

//# sourceMappingURL=verification.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_users_data_requests__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_feeds_data_requests__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_session__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_crda_crda__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_ranking_ranking__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_feed_feed__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_compte_compte__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_verification__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__plantation_plantation__ = __webpack_require__(301);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var MapPage = MapPage_1 = (function () {
    // map: GoogleMap;
    function MapPage(navCtrl, platform, geolocation, camera, user_session, users_datareq, feeds_datareq, loading, alert, verification, navParams) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.geolocation = geolocation;
        this.camera = camera;
        this.user_session = user_session;
        this.users_datareq = users_datareq;
        this.feeds_datareq = feeds_datareq;
        this.loading = loading;
        this.alert = alert;
        this.verification = verification;
        this.navParams = navParams;
        this.greenClicked = false;
        this.grayClicked = false;
        this.bgImage = "";
        this.name = "";
        this.coords = [];
        this.otherUsersCoords = [];
        this.selectedMarker = {};
        this.totalPlant = 0;
        this.imgURL = null;
        this.showEditInputField = false;
        this.doEditImgeField = false;
        var plantationType = navParams.get('plantation');
        var plantationCoords = navParams.get('coords');
        console.log(plantationType);
        console.log(plantationCoords);
        if (plantationType == 0 || plantationType == 1) {
            if (plantationType == 0)
                this.addGrayMarker();
            else if (plantationType == 1 && plantationCoords) {
                if (plantationCoords.latitude && plantationCoords.longitude) {
                    this.plantFromCoords(plantationCoords);
                }
            }
            else {
                var alert_1 = this.alert.create({
                    title: "Impossible de planter !",
                    subTitle: "Vérifier votre GPS ou bien les coordonnées que vous avez ajoutées",
                    buttons: ["OK"]
                });
                alert_1.present();
            }
        }
    }
    MapPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.verification.internet().then(function (response) {
            _this.verification.gps().then(function (response) {
                _this.users_datareq.getCoordsOfOtherUsers(_this.user_session.getUser()._id).then(function (response) {
                    _this.otherUsersCoords = response;
                    _this.bgImage = _this.user_session.getUser().photo;
                    _this.name = _this.user_session.getUser().name;
                    _this.coords = _this.user_session.getUser().coords;
                    if (_this.user_session.getUser().totalArbres)
                        _this.totalPlant = _this.user_session.getUser().totalArbres;
                    else
                        _this.totalPlant = 0;
                    _this.loadMap();
                });
            });
        });
    };
    MapPage.prototype.loadMap = function () {
        var _this = this;
        var latlngbounds = new google.maps.LatLngBounds();
        var lats = 0;
        var lngs = 0;
        this.coords = this.coords.concat(this.otherUsersCoords);
        console.log(this.coords);
        if (this.coords.length > 0) {
            for (var _i = 0, _a = this.coords; _i < _a.length; _i++) {
                var coord = _a[_i];
                lats += coord.lat;
                lngs += coord.lng;
            }
            lats = lats / (this.coords.length);
            lngs = lngs / (this.coords.length);
            var latLng = new google.maps.LatLng(lats, lngs);
            var mapOptions = {
                center: latLng,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false,
                minZoom: 6
            };
            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
            var _loop_1 = function (coord) {
                var latLngMarker = new google.maps.LatLng({ lat: coord.lat, lng: coord.lng });
                latlngbounds.extend(coord);
                this_1.map.fitBounds(latlngbounds);
                if (coord.color) {
                    var marker = new google.maps.Marker({
                        map: this_1.map,
                        position: latLngMarker,
                        icon: 'http://www.veronia.tn/data/media/images/' + coord.color + 'Marker.png'
                    });
                    google.maps.event.addListener(marker, 'click', function () {
                        _this.selectedMarker = coord;
                        if (coord.color == "green")
                            _this.greenClicked = true;
                        else if (coord.color == "gray") {
                            _this.grayClicked = true;
                            var loading_1 = _this.loading.create();
                            loading_1.present();
                            console.log(coord);
                            if (!coord.date_id) {
                                _this.imgURL = null;
                                loading_1.dismiss();
                            }
                            else {
                                var storageRef = __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.storage().ref().child('PlantationIMG/' + _this.user_session.getUser()._id + 'id' + coord.date_id + '.png');
                                storageRef.getDownloadURL().then(function (url) {
                                    loading_1.dismiss();
                                    if (url)
                                        _this.imgURL = url;
                                    else
                                        _this.imgURL = null;
                                }).catch(function (err) {
                                    loading_1.dismiss();
                                });
                            }
                        }
                    });
                }
                else {
                    var infowindow_1 = new google.maps.InfoWindow({
                        content: '<div class="infoWindow"><div class="iwOverlay"></div><img border="0" class="infoWindowImg" align="Left" src="' + coord.image + '"> <b>' + coord.number.toString() + '</b></div>'
                    });
                    var marker_1 = new google.maps.Marker({
                        map: this_1.map,
                        position: latLngMarker,
                        icon: 'http://www.veronia.tn/data/media/images/otherMarkers.png'
                    });
                    google.maps.event.addListener(marker_1, 'click', function () {
                        infowindow_1.open(_this.map, marker_1);
                    });
                }
            };
            var this_1 = this;
            for (var _b = 0, _c = this.coords; _b < _c.length; _b++) {
                var coord = _c[_b];
                _loop_1(coord);
            }
        }
        else {
            this.geolocation.getCurrentPosition().then(function (resp) {
                var latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
                var mapOptions = {
                    center: latLng,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    scrollwheel: false,
                    zoom: 8
                };
                _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            }).catch(function (error) {
                alert(JSON.stringify(error));
            });
        }
    };
    MapPage.prototype.deleteCoord = function () {
        var _this = this;
        var alert = this.alert.create({
            title: 'Supprimer cette plantation',
            message: 'Voulez vous supprimer cette plantation ?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Supprimer',
                    role: 'ok',
                    handler: function () {
                        var user = _this.user_session.getUser();
                        user.coords = user.coords.filter(function (coord) { return coord.lat != _this.selectedMarker.lat || coord.lng != _this.selectedMarker.lng; });
                        if (parseInt(_this.selectedMarker.number))
                            user.totalArbres = parseInt(user.totalArbres) - parseInt(_this.selectedMarker.number);
                        _this.users_datareq.changeUser(user).then(function (result) {
                            _this.user_session.addUser(user);
                            _this.ionViewDidLoad();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    MapPage.prototype.editMarker = function () {
        var _this = this;
        var new_user = null;
        if (this.showEditInputField && this.nbrAjoutGray.nativeElement.value) {
            if (!new_user) {
                new_user = this.user_session.getUser();
            }
            new_user.totalArbres = parseInt(new_user.totalArbres) - this.selectedMarker.number + parseInt(this.nbrAjoutGray.nativeElement.value);
            this.coords[this.coords.indexOf(this.selectedMarker)].number = this.nbrAjoutGray.nativeElement.value;
            this.selectedMarker.number = this.nbrAjoutGray.nativeElement.value;
            new_user.coords = this.coords;
            this.totalPlant = new_user.totalArbres;
            this.users_datareq.changeUser(new_user).then(function (response) {
                _this.user_session.addUser(new_user);
                _this.ionViewDidLoad();
                _this.showEditInputField = false;
                _this.doEditImgeField = false;
            });
        }
        else if (this.showEditInputField) {
            var alert_2 = this.alert.create({
                title: "Donnée manquante !",
                subTitle: "Ajoutez le nombre des arbres plantées",
                buttons: ["OK"]
            });
            alert_2.present();
        }
        if (this.doEditImgeField) {
            var d = new Date();
            var loading_2 = this.loading.create();
            loading_2.present();
            var actualDate_1 = ('0' + (d.getDate())).toString().substr(('0' + (d.getDate())).toString().length - 2, 2) + '/' +
                ('0' + (d.getMonth() + 1)).toString().substr(('0' + (d.getMonth() + 1)).toString().length - 2, 2) + '/' +
                d.getFullYear().toString();
            var storageRefUrl = 'PlantationIMG/' + this.user_session.getUser()._id + 'id' + this.selectedMarker.date_id + '.png';
            var storageRef = __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.storage().ref().child(storageRefUrl);
            storageRef.getDownloadURL().then(function (url) {
                loading_2.dismiss();
                if (url) {
                    if (!new_user) {
                        new_user = _this.user_session.getUser();
                    }
                    var newCoord = { lat: _this.selectedMarker.lat, lng: _this.selectedMarker.lng, color: "green", number: _this.selectedMarker.number, date: actualDate_1, image: url, species: "noSpecies", date_id: _this.selectedMarker.date_id };
                    _this.coords[_this.coords.indexOf(_this.selectedMarker)] = newCoord;
                    new_user.coords[_this.coords.indexOf(_this.selectedMarker)] = newCoord;
                    _this.selectedMarker = newCoord;
                    var feed = {
                        user: _this.user_session.getUser(),
                        date: actualDate_1,
                        image: url,
                        likes: 0,
                        lat: _this.selectedMarker.lat,
                        lng: _this.selectedMarker.lng,
                    };
                    _this.feeds_datareq.postFeed(feed).then(function (resultfeed) {
                    });
                    _this.users_datareq.changeUser(new_user).then(function (response) {
                        _this.user_session.addUser(new_user);
                        _this.ionViewDidLoad();
                        _this.showEditInputField = false;
                        _this.doEditImgeField = false;
                    });
                }
                else {
                    var alert_3 = _this.alert.create({
                        title: "Donnée manquante !",
                        subTitle: "Ajoutez une photo de la plantation",
                        buttons: ["OK"]
                    });
                    alert_3.present();
                }
            });
        }
    };
    MapPage.prototype.plantFromCoords = function (actual_coords) {
        var geocoder = new google.maps.Geocoder();
        var latlng = new google.maps.LatLng(actual_coords.latitude, actual_coords.longitude);
        var mapsComponent = this;
        geocoder.geocode({ 'latLng': latlng }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[1]) {
                    var countryReceived = results[1].address_components;
                    var country = countryReceived[countryReceived.length - 1].short_name;
                    console.log(country);
                    if (country == "TN") {
                        var user_1 = mapsComponent.user_session.getUser();
                        mapsComponent.users_datareq.coordsExist(user_1._id, actual_coords.latitude, actual_coords.longitude).then(function (responsecoords) {
                            if (responsecoords == false) {
                                user_1.coords.push({ lat: actual_coords.latitude, lng: actual_coords.longitude, color: "gray" });
                                mapsComponent.coords.push({ lat: actual_coords.latitude, lng: actual_coords.longitude, color: "gray" });
                                if (!user_1.totalArbres)
                                    user_1.totalArbres = 0;
                                mapsComponent.users_datareq.changeUser(user_1).then(function (result) {
                                    mapsComponent.user_session.addUser(user_1);
                                    mapsComponent.ionViewDidLoad();
                                });
                            }
                            else {
                                var alert_4 = mapsComponent.alert.create({
                                    title: "Changez votre localisation !",
                                    subTitle: "Vous avez déjà utilisé cette position !",
                                    buttons: ["OK"]
                                });
                                alert_4.present();
                            }
                        });
                    }
                    else {
                        var alert_5 = mapsComponent.alert.create({
                            title: "Essayez de nouveau !",
                            subTitle: "Vérifiez que votre localisation est située dans la Tunisie !",
                            buttons: ["OK"]
                        });
                        alert_5.present();
                    }
                }
            }
            else {
                var alert_6 = mapsComponent.alert.create({
                    title: "Essayez de nouveau !",
                    subTitle: "Vérifiez que vous avez autorisé la localisation",
                    buttons: ["OK"]
                });
                alert_6.present();
            }
        });
    };
    MapPage.prototype.addGrayMarker = function () {
        var _this = this;
        console.log(MapPage_1.prototype);
        console.log(this);
        var loading = this.loading.create();
        loading.present();
        this.verification.gps().then(function (response) {
            if (response) {
                _this.geolocation.getCurrentPosition().then(function (resp) {
                    loading.dismiss();
                    var actual_coords = {};
                    if ('coords' in resp) {
                        if ('latitude' in resp.coords) {
                            actual_coords.latitude = resp.coords.latitude;
                        }
                        if ('longitude' in resp.coords) {
                            actual_coords.longitude = resp.coords.longitude;
                        }
                    }
                    _this.plantFromCoords(actual_coords);
                }).catch(function (error) {
                    loading.dismiss();
                    var alert = _this.alert.create({
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
    };
    MapPage.prototype.turnIntoGreen = function () {
        var _this = this;
        var d = new Date();
        var loading = this.loading.create();
        loading.present();
        var actualDate = ('0' + (d.getDate())).toString().substr(('0' + (d.getDate())).toString().length - 2, 2) + '/' +
            ('0' + (d.getMonth() + 1)).toString().substr(('0' + (d.getMonth() + 1)).toString().length - 2, 2) + '/' +
            d.getFullYear().toString();
        var storageRefUrl = 'PlantationIMG/' + this.user_session.getUser()._id + 'id' + this.selectedMarker.date_id + '.png';
        var storageRef = __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.storage().ref().child(storageRefUrl);
        storageRef.getDownloadURL().then(function (url) {
            loading.dismiss();
            if ((url) && (_this.nbrAjoutGray.nativeElement.value)) {
                var newCoord = { lat: _this.selectedMarker.lat, lng: _this.selectedMarker.lng, color: "green", number: _this.nbrAjoutGray.nativeElement.value, date: actualDate, image: url, species: "noSpecies", date_id: _this.selectedMarker.date_id };
                _this.coords[_this.coords.indexOf(_this.selectedMarker)] = newCoord;
                var new_user_1 = _this.user_session.getUser();
                new_user_1.coords = _this.coords;
                new_user_1.totalArbres = parseInt(new_user_1.totalArbres) + parseInt(_this.nbrAjoutGray.nativeElement.value);
                _this.totalPlant = new_user_1.totalArbres;
                _this.users_datareq.changeUser(new_user_1).then(function (response) {
                    _this.user_session.addUser(new_user_1);
                    _this.ionViewDidLoad();
                    _this.grayClicked = false;
                });
                var feed = {
                    user: _this.user_session.getUser(),
                    date: actualDate,
                    image: url,
                    likes: 0,
                    lat: _this.selectedMarker.lat,
                    lng: _this.selectedMarker.lng,
                };
                _this.feeds_datareq.postFeed(feed).then(function (resultfeed) {
                });
            }
            else {
                var alert_7 = _this.alert.create({
                    title: "Donnée manquante !",
                    subTitle: "Ajoutez le nombre des arbres plantées",
                    buttons: ["OK"]
                });
                alert_7.present();
            }
        }).catch(function (err) {
            loading.dismiss();
            var alert = _this.alert.create({
                title: "Donnée manquante !",
                subTitle: "Ajoutez une photo de la plantation",
                buttons: ["OK"]
            });
            alert.present();
        });
    };
    MapPage.prototype.takePhoto = function () {
        var _this = this;
        this.camera.getPicture({
            quality: 95,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.CAMERA,
            allowEdit: false,
            encodingType: this.camera.EncodingType.PNG,
            targetWidth: 500,
            targetHeight: 500,
            saveToPhotoAlbum: false
        }).then(function (picture) {
            var loading = _this.loading.create();
            loading.present();
            var d = new Date();
            var date_id = d.getTime().toString();
            var ref = __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.storage().ref('PlantationIMG/' + _this.user_session.getUser()._id + 'id' + date_id + '.png');
            ref
                .putString(picture, 'base64', { contentType: 'image/png' })
                .then(function (savedPicture) {
                _this.coords[_this.coords.indexOf(_this.selectedMarker)].date_id = date_id;
                _this.selectedMarker.date_id = date_id;
                var new_user = _this.user_session.getUser();
                new_user.coords = _this.coords;
                _this.users_datareq.changeUser(new_user).then(function (response) {
                    var storageRef = __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.storage().ref().child('PlantationIMG/' + _this.user_session.getUser()._id + 'id' + _this.selectedMarker.date_id + '.png');
                    storageRef.getDownloadURL().then(function (url) {
                        if (url) {
                            _this.imgURL = url;
                            _this.selectedMarker.image = url;
                        }
                        else
                            _this.imgURL = null;
                        loading.dismiss();
                    }).catch(function (err) {
                        console.log(err);
                        loading.dismiss();
                    });
                });
            });
        }, function (error) {
        });
    };
    MapPage.prototype.gotoPodium = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__pages_ranking_ranking__["a" /* RankingPage */], { animate: true, animation: 'md-transition', duration: 1000 });
    };
    MapPage.prototype.goToCRDA = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages_crda_crda__["a" /* CRDAPage */], {}, { animate: false });
    };
    MapPage.prototype.goToCompte = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__pages_compte_compte__["a" /* ComptePage */], {}, { animate: false });
    };
    MapPage.prototype.goToFeed = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__pages_feed_feed__["a" /* FeedPage */], {}, { animate: false });
    };
    MapPage.prototype.goToPlantation = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__plantation_plantation__["a" /* PlantationPage */], { animate: true, animation: 'md-transition', duration: 1000 });
    };
    return MapPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], MapPage.prototype, "mapElement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('nbrAjout'),
    __metadata("design:type", Object)
], MapPage.prototype, "nbrAjoutGray", void 0);
MapPage = MapPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-map',template:/*ion-inline-start:"D:\VERONIA\MTFT\app\src\pages\map\map.html"*/'<ion-content scroll="false">\n\n  <div class="backgroundContainer">\n    <div class="imgBackground">\n        <img src="assets/images/background.jpg"/>\n        <div class="backgroundImgLayer"></div>\n    </div>\n    <div class="title">\n      <div class="actions">\n        <div class="map">\n          <ion-icon name="pin"></ion-icon>\n        </div>\n        <div class="home">\n          <ion-icon name="home" (click)="goToFeed()"></ion-icon>\n        </div>\n        <div class="compte">\n          <ion-icon name="person" (click)="goToCompte()"></ion-icon>\n        </div>\n        <div class="cart">\n          <ion-icon name="call" (click)="goToCRDA()"></ion-icon>\n        </div>\n      </div>\n    </div>\n    <div  scroll="false" #map id="map" zoom-control="false"></div>\n    <h1 *ngIf="totalPlant != 1">Total: {{totalPlant}} Arbres</h1>\n    <h1 *ngIf="totalPlant == 1">Total: {{totalPlant}} Arbre</h1>\n    <div class="plus" (click)="goToPlantation()">\n      <ion-icon name="add"></ion-icon>\n    </div>\n    <div class="podium" (click)="gotoPodium()">\n      <ion-icon name="podium"></ion-icon>\n    </div>\n    <div *ngIf="greenClicked || grayClicked" class="blackBackground" (click)="imgURL=null;grayClicked=false;greenClicked=false;"></div>\n    <div *ngIf="greenClicked" class="GreenMarker">\n      <div class="delete" (click)="deleteCoord();greenClicked=false;">\n          <ion-icon name="trash" ></ion-icon>\n      </div>\n      <div class="close" (click)="showEditInputField=false;doEditImgeField=false;grayClicked=false;greenClicked=false;imgURL=null;">\n        <ion-icon name="close" ></ion-icon>\n      </div>\n      <div [style.backgroundImage]="\'url(\' + bgImage + \')\'" class="userImage">\n      </div>\n      <div class="content">\n        <div class="left">\n          <img src=\'http://veronia.tn/data/media/images/green.png\' />\n        </div>\n        <div class="right">\n          <h1>{{name}}</h1>\n          <h2 *ngIf="!showEditInputField && selectedMarker.number != 1">{{selectedMarker.number}} Arbres</h2>\n          <h2 *ngIf="!showEditInputField && selectedMarker.number == 1">{{selectedMarker.number}} Arbre</h2>\n          <input class="inputNumberGreen" *ngIf="showEditInputField" #nbrAjout type="number" min="0" placeholder="Nouveau nombre des arbres"/>\n          <div *ngIf="!showEditInputField" class="editNumber" (click)="showEditInputField=true;">\n              <ion-icon name="create" ></ion-icon>\n          </div>\n          <h2>{{selectedMarker.date}}</h2>\n        </div>\n      </div>\n      <div class="photo">\n          <div class="editImage" (click)="doEditImgeField = true;takePhoto()">\n              <ion-icon name="create" ></ion-icon>\n          </div>\n        <img src="{{selectedMarker.image}}"/>\n      </div>\n      <button *ngIf="doEditImgeField || showEditInputField" (click)="editMarker()" type="submit">CONFIRMER</button>\n    </div>\n    <div *ngIf="grayClicked" class="GrayMarker">\n      <div class="delete" (click)="deleteCoord();grayClicked=false;">\n          <ion-icon name="trash" ></ion-icon>\n      </div>\n      <div class="close" (click)="grayClicked=false;greenClicked=false;imgURL=null;">\n        <ion-icon name="close" ></ion-icon>\n      </div>\n      <div [style.backgroundImage]="\'url(\' + bgImage + \')\'" class="userImage">\n      </div>\n      <div class="content">\n          <h1>{{name}}</h1>\n          <h2 *ngIf="totalPlant != 1">Total: {{totalPlant}} Arbres</h2>\n          <h2 *ngIf="totalPlant == 1">Total: {{totalPlant}} Arbre</h2>\n          <h2>Nombre des arbres à ajouter:</h2>\n          <input #nbrAjout type="number" min="0"/>\n          <div *ngIf="!imgURL" class="photo" (click)="takePhoto()">\n            <ion-icon name="camera"></ion-icon>\n            <h2>Prenez une photo de la plantation!</h2>\n          </div>\n          <div *ngIf="imgURL" class="photo">\n            <img src="{{imgURL}}"/>\n          </div>\n          <button (click)="turnIntoGreen()" type="submit">CONFIRMER</button>\n      </div>\n    </div>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\VERONIA\MTFT\app\src\pages\map\map.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_4__services_user_session__["a" /* UserSession */], __WEBPACK_IMPORTED_MODULE_2__providers_users_data_requests__["a" /* UsersDataRequests */], __WEBPACK_IMPORTED_MODULE_3__providers_feeds_data_requests__["a" /* FeedsDataRequests */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_12__services_verification__["a" /* Verification */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], MapPage);

var MapPage_1;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CRDAPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_map_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_feed_feed__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_compte_compte__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CRDAPage = (function () {
    function CRDAPage(navCtrl) {
        this.navCtrl = navCtrl;
        window.caches.delete;
    }
    CRDAPage.prototype.ionViewDidLoad = function () {
    };
    CRDAPage.prototype.goToMap = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_map_map__["a" /* MapPage */], {}, { animate: false });
    };
    CRDAPage.prototype.goToFeed = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_feed_feed__["a" /* FeedPage */], {}, { animate: false });
    };
    CRDAPage.prototype.goToCompte = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_compte_compte__["a" /* ComptePage */], {}, { animate: false });
    };
    CRDAPage.prototype.callIT = function (passedNumber) {
        console.log(passedNumber);
        window.open = passedNumber;
    };
    return CRDAPage;
}());
CRDAPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-crda',template:/*ion-inline-start:"D:\VERONIA\MTFT\app\src\pages\crda\crda.html"*/'<ion-content scroll="false">\n\n  <div class="backgroundContainer">\n    <div class="imgBackground">\n        <img src="assets/images/background.jpg"/>\n        <div class="backgroundImgLayer"></div>\n    </div>\n    <div class="title">\n      <div class="actions">\n        <div class="map">\n          <ion-icon name="pin" (click)="goToMap()"></ion-icon>\n        </div>\n        <div class="home">\n          <ion-icon name="home" (click)="goToFeed()"></ion-icon>\n        </div>\n        <div class="compte">\n          <ion-icon name="person" (click)="goToCompte()"></ion-icon>\n        </div>\n        <div class="cart">\n          <ion-icon name="call"></ion-icon>\n        </div>\n      </div>\n    </div>\n    <div class="list">\n      <div class="card">\n        <div class="name">\n          <b>CRDA Tunis</b>\n\n        </div>\n        <div class="address">\n          <b>35, Avenue Kheireddine Pacha</b>\n        </div>\n        <div class="telephone"><a href="tel:+21671801636" (click)="callIT(\'tel:+21671801636\')">\n          <ion-icon name="call"></ion-icon>\n        </a></div>\n      </div>\n      <div class="card">\n        <div class="name">\n          <b>CRDA Ariana</b>\n\n        </div>\n        <div class="address">\n          <b>Cité Bouchoucha - le Bardo 2000</b>\n        </div>\n        <div class="telephone"><a href="tel:+21671564939" (click)="callIT(\'tel:+21671564939\')">\n          <ion-icon name="call"></ion-icon>\n        </a></div>\n      </div>\n      <div class="card">\n        <div class="name">\n          <b>CRDA Manouba</b>\n\n        </div>\n        <div class="address">\n          <b>35, Avenue Kheireddine Pacha</b>\n        </div>\n        <div class="telephone"><a href="tel:+21671624420" (click)="callIT(\'tel:+21671624420\')">\n          <ion-icon name="call"></ion-icon>\n        </a></div>\n      </div>\n      <div class="card">\n        <div class="name">\n          <b>CRDA Nabeul</b>\n\n        </div>\n        <div class="address">\n          <b>Rue Mongi Bali - Nabeul 8000</b>\n        </div>\n        <div class="telephone"><a href="tel:+21672274434" (click)="callIT(\'tel:+21672274434\')">\n          <ion-icon name="call"></ion-icon>\n        </a></div>\n      </div>\n      <div class="card">\n        <div class="name">\n          <b>CRDA Bizerte</b>\n\n        </div>\n        <div class="address">\n          <b>Avenue Hassen Nouri - Bizerte 7000</b>\n        </div>\n        <div class="telephone"><a href="tel:+21672431438" (click)="callIT(\'tel:+21672431438\')">\n          <ion-icon name="call"></ion-icon>\n        </a></div>\n      </div>\n      <div class="card">\n        <div class="name">\n          <b>CRDA Ben Arous</b>\n\n        </div>\n        <div class="address">\n          <b>Immeuble SPROLS - Nouvelle Médina 2063</b>\n        </div>\n        <div class="telephone"><a href="tel:+21671310037" (click)="callIT(\'tel:+21671310037\')">\n          <ion-icon name="call"></ion-icon>\n        </a></div>\n      </div>\n      <div class="card">\n        <div class="name">\n          <b>CRDA Zaghouan</b>\n\n        </div>\n        <div class="address">\n          <b>Avenue Hédi Chaker - Zaghouan 1100</b>\n        </div>\n        <div class="telephone"><a href="tel:+21672675414" (click)="callIT(\'tel:+21672675414\')">\n          <ion-icon name="call"></ion-icon>\n        </a></div>\n      </div>\n      <div class="card">\n        <div class="name">\n          <b>CRDA Siliana</b>\n\n        </div>\n        <div class="address">\n          <b>Route de Gaâfour - Siliana</b>\n        </div>\n        <div class="telephone"><a href="tel:+21678872790" (click)="callIT(\'tel:+21678872790\')">\n          <ion-icon name="call"></ion-icon>\n        </a></div>\n      </div>\n      <div class="card">\n        <div class="name">\n          <b>CRDA Kef</b>\n\n        </div>\n        <div class="address">\n          <b>Avenue de la Liberté -le Kef 7100</b>\n        </div>\n        <div class="telephone"><a href="tel:+21678224711" (click)="callIT(\'tel:+21678224711\')">\n          <ion-icon name="call"></ion-icon>\n        </a></div>\n      </div>\n      <div class="card">\n        <div class="name">\n          <b>CRDA Béja</b>\n\n        </div>\n        <div class="address">\n          <b>Avenue Habib Bourguiba - Béjà 9000</b>\n        </div>\n        <div class="telephone"><a href="tel:+21678243754" (click)="callIT(\'tel:+21678243754\')">\n          <ion-icon name="call"></ion-icon>\n        </a></div>\n      </div>\n      <div class="card">\n        <div class="name">\n          <b>CRDA Jendouba</b>\n\n        </div>\n        <div class="address">\n          <b>Route de Tunis - Jendouba 8100</b>\n        </div>\n        <div class="telephone"><a href="tel:+21678603426" (click)="callIT(\'tel:+21678603426\')">\n          <ion-icon name="call"></ion-icon>\n        </a></div>\n      </div>\n      <div class="card">\n        <div class="name">\n          <b>CRDA Kasserine</b>\n\n        </div>\n        <div class="address">\n          <b>Avenue Habib Bourguiba - Kasserine 1200</b>\n        </div>\n        <div class="telephone"><a href="tel:+21677474935" (click)="callIT(\'tel:+21677474935\')">\n          <ion-icon name="call"></ion-icon>\n        </a></div>\n      </div>\n      <div class="card">\n        <div class="name">\n          <b>CRDA Sfax</b>\n\n        </div>\n        <div class="address">\n          <b>Rue Commandant Béjaoui</b>\n        </div>\n        <div class="telephone"><a href="tel:+21674226195" (click)="callIT(\'tel:+21674226195\')">\n          <ion-icon name="call"></ion-icon>\n        </a></div>\n      </div>\n      <div class="card">\n        <div class="name">\n          <b>CRDA Sousse</b>\n\n        </div>\n        <div class="address">\n          <b>Rue d\'Alger - Sousse</b>\n        </div>\n        <div class="telephone"><a href="tel:+21673224176" (click)="callIT(\'tel:+21673224176\')">\n          <ion-icon name="call"></ion-icon>\n        </a></div>\n      </div>\n      <div class="card">\n        <div class="name">\n          <b>CRDA Monastir</b>\n\n        </div>\n        <div class="address">\n          <b>Sahel Jabeur - Monastir 5000</b>\n        </div>\n        <div class="telephone"><a href="tel:+21673460328" (click)="callIT(\'tel:+21673460328\')">\n          <ion-icon name="call"></ion-icon>\n        </a></div>\n      </div>\n      <div class="card">\n        <div class="name">\n          <b>CRDA Mahdia</b>\n\n        </div>\n        <div class="address">\n          <b>Hiboun - Mahdia 5119</b>\n        </div>\n        <div class="telephone"><a href="tel:+21673680266" (click)="callIT(\'tel:+21673680266\')">\n          <ion-icon name="call"></ion-icon>\n        </a></div>\n      </div>\n      <div class="card">\n        <div class="name">\n          <b>CRDA Kairouan</b>\n\n        </div>\n        <div class="address">\n          <b>Cité Sidi Layoun - Kairouan 3100</b>\n        </div>\n        <div class="telephone"><a href="tel:+21677303117" (click)="callIT(\'tel:+21677303117\')">\n          <ion-icon name="call"></ion-icon>\n        </a></div>\n      </div>\n      <div class="card">\n        <div class="name">\n          <b>CRDA Sidi Bouzid</b>\n\n        </div>\n        <div class="address">\n          <b>Avenue Habib Bourguiba - Sidi Bouzid 9100</b>\n        </div>\n        <div class="telephone"><a href="tel:+21676632854" (click)="callIT(\'tel:+21676632854\')">\n          <ion-icon name="call"></ion-icon>\n        </a></div>\n      </div>\n      <div class="card">\n        <div class="name">\n          <b>CRDA Gafsa</b>\n\n        </div>\n        <div class="address">\n          <b>Av. Habib Bourguiba - Gafsa 2100</b>\n        </div>\n        <div class="telephone"><a href="tel:+21676220104" (click)="callIT(\'tel:+21676220104\')">\n          <ion-icon name="call"></ion-icon>\n        </a></div>\n      </div>\n      <div class="card">\n        <div class="name">\n          <b>CRDA Gabès</b>\n\n        </div>\n        <div class="address">\n          <b>Rue Abou Kacem Chebbi - 6019Gabès</b>\n        </div>\n        <div class="telephone"><a href="tel:+21675280831" (click)="callIT(\'tel:+21675280831\')">\n          <ion-icon name="call"></ion-icon>\n        </a></div>\n      </div>\n      <div class="card">\n        <div class="name">\n          <b>CRDA Kebili</b>\n\n        </div>\n        <div class="address">\n          <b>Rue Salah B. Youssef Kebili - 4200</b>\n        </div>\n        <div class="telephone"><a href="tel:+21675490330" (click)="callIT(\'tel:+21675490330\')">\n          <ion-icon name="call"></ion-icon>\n        </a></div>\n      </div>\n      <div class="card">\n        <div class="name">\n          <b>CRDA Tozeur</b>\n\n        </div>\n        <div class="address">\n          <b>Route de Nafta Avenue F. Hached</b>\n        </div>\n        <div class="telephone"><a href="tel:+21676452556" (click)="callIT(\'tel:+21676452556\')">\n          <ion-icon name="call"></ion-icon>\n        </a></div>\n      </div>\n      <div class="card">\n        <div class="name">\n          <b>CRDA Medenine</b>\n\n        </div>\n        <div class="address">\n          <b>Rue 2Mai 1966- Medenine 4119</b>\n        </div>\n        <div class="telephone"><a href="tel:+21675640513" (click)="callIT(\'tel:+21675640513\')">\n          <ion-icon name="call"></ion-icon>\n        </a></div>\n      </div>\n      <div class="card">\n        <div class="name">\n          <b>CRDA Tataouine</b>\n\n        </div>\n        <div class="address">\n          <b>Cité 7Novembre - Tataouine</b>\n        </div>\n        <div class="telephone"><a href="tel:+21675870067" (click)="callIT(\'tel:+21675870067\')">\n          <ion-icon name="call"></ion-icon>\n        </a></div>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\VERONIA\MTFT\app\src\pages\crda\crda.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], CRDAPage);

//# sourceMappingURL=crda.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_map_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_crda_crda__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_feeds_data_requests__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_users_data_requests__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_session__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_geocoder__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_compte_compte__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_social_sharing__ = __webpack_require__(299);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var FeedPage = (function () {
    function FeedPage(navCtrl, platform, user_session, social_share, feeds_datareq, users_datareq, geocoder, loading) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.user_session = user_session;
        this.social_share = social_share;
        this.feeds_datareq = feeds_datareq;
        this.users_datareq = users_datareq;
        this.geocoder = geocoder;
        this.loading = loading;
        window.caches.delete;
        this.feeds_datareq.getFeeds().then(function (response) {
            _this.feeds = response;
            var _loop_1 = function (feed) {
                if (_this.platform.is('mobileweb'))
                    _this.feeds[_this.feeds.indexOf(feed)].address = "95 Avenue Fethi Zouhair, Cité La Ghazelle, Ariana";
                else
                    _this.geocoder.reverseGeocode(feed.lat, feed.lng).then(function (response) {
                        _this.feeds[_this.feeds.indexOf(feed)].address = "";
                        //  alert(response);
                        if (response.subThoroughfare)
                            _this.feeds[_this.feeds.indexOf(feed)].address += response.subThoroughfare + " ";
                        if (response.thoroughfare)
                            _this.feeds[_this.feeds.indexOf(feed)].address += response.thoroughfare + " ,";
                        if (response.subLocality)
                            _this.feeds[_this.feeds.indexOf(feed)].address += response.subLocality + " ";
                        if (response.locality)
                            _this.feeds[_this.feeds.indexOf(feed)].address += response.locality + " ,";
                        if (response.subAdministrativeArea)
                            _this.feeds[_this.feeds.indexOf(feed)].address += response.subAdministrativeArea + " ";
                        if (response.administrativeArea)
                            _this.feeds[_this.feeds.indexOf(feed)].address += response.administrativeArea + " ";
                    });
            };
            for (var _i = 0, _a = _this.feeds; _i < _a.length; _i++) {
                var feed = _a[_i];
                _loop_1(feed);
            }
        });
    }
    FeedPage.prototype.ionViewDidLoad = function () {
    };
    FeedPage.prototype.goToMap = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_map_map__["a" /* MapPage */], {}, { animate: false });
    };
    FeedPage.prototype.goToCRDA = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_crda_crda__["a" /* CRDAPage */], {}, { animate: false });
    };
    FeedPage.prototype.goToCompte = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages_compte_compte__["a" /* ComptePage */], {}, { animate: false });
    };
    FeedPage.prototype.like = function (feed) {
        var new_user = this.user_session.getUser();
        if (new_user.likes.indexOf(feed._id) >= 0) {
            new_user.likes.splice(new_user.likes.indexOf(feed._id), 1);
            this.feeds[this.feeds.indexOf(feed)].likes = parseInt(this.feeds[this.feeds.indexOf(feed)].likes) - 1;
        }
        else {
            new_user.likes.push(feed._id);
            this.feeds[this.feeds.indexOf(feed)].likes = parseInt(this.feeds[this.feeds.indexOf(feed)].likes) + 1;
        }
        this.user_session.addUser(new_user);
        this.users_datareq.changeUser(new_user).then(function (response) { });
        console.log(this.feeds[this.feeds.indexOf(feed)]);
        this.feeds_datareq.changeFeed(this.feeds[this.feeds.indexOf(feed)]).then(function (response) { });
    };
    FeedPage.prototype.share = function (feed) {
        var message = 'Plantation le ' + feed.date;
        var subject = "Plantation des arbres avec l'application mobile One Million Trees For Tunisia effectuée le " + feed.date + " par " + feed.user.name;
        var url = [feed.image];
        var loading = this.loading.create();
        loading.present();
        this.social_share.share(message, subject, null, feed.image).then(function (response) {
            loading.dismiss();
            console.log(response);
        });
    };
    return FeedPage;
}());
FeedPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-feed',template:/*ion-inline-start:"D:\VERONIA\MTFT\app\src\pages\feed\feed.html"*/'<ion-content scroll="false">\n\n\n\n  <div class="backgroundContainer">\n\n    <div class="imgBackground">\n\n      <img src="assets/images/background.jpg" />\n\n      <div class="backgroundImgLayer"></div>\n\n    </div>\n\n    <div class="title">\n\n      <div class="actions">\n\n        <div class="map">\n\n          <ion-icon name="pin" (click)="goToMap()"></ion-icon>\n\n        </div>\n\n        <div class="home">\n\n          <ion-icon name="home"></ion-icon>\n\n        </div>\n\n        <div class="compte">\n\n          <ion-icon name="person" (click)="goToCompte()"></ion-icon>\n\n        </div>\n\n        <div class="cart" (click)="goToCRDA()">\n\n          <ion-icon name="call"></ion-icon>\n\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class="list">\n\n      <div class="feed" *ngFor="let feed of feeds">\n\n        <div class="feedHeader" (click)="like(feed)">\n\n          <div class="backgroundFeed"></div>\n\n          <div class="image" [style.backgroundImage]="\'url(\' + feed.image + \')\'"></div>\n\n          <div class="location">\n\n            <ion-icon name="pin" (click)="goToMap()"></ion-icon>\n\n          </div>\n\n          <div class="adresse">\n\n            <b>{{feed.address}}</b>\n\n          </div>\n\n          <div class="like" *ngIf="user_session.getUser().likes.indexOf(feed._id)<0">\n\n            <ion-icon name="heart"></ion-icon>\n\n          </div>\n\n          <div class="like-red" *ngIf="user_session.getUser().likes.indexOf(feed._id)>=0">\n\n            <ion-icon name="heart"></ion-icon>\n\n          </div>\n\n        </div>\n\n        <div class="feedData">\n\n          <div class="userImage" [style.backgroundImage]="\'url(\' + feed.user.photo + \')\'"></div>\n\n          <div class="date">\n\n            <b>{{feed.date}}</b>\n\n          </div>\n\n          <div class="userName">\n\n            <b>{{feed.user.name}}</b>\n\n            <h1>{{feed.likes}}\n\n              <ion-icon name="heart"></ion-icon>\n\n            </h1>\n\n          </div>\n\n          <div class="share" (click)="share(feed)">\n\n            <ion-icon name="md-share"></ion-icon>\n\n\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"D:\VERONIA\MTFT\app\src\pages\feed\feed.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__services_user_session__["a" /* UserSession */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_social_sharing__["a" /* SocialSharing */],
        __WEBPACK_IMPORTED_MODULE_4__providers_feeds_data_requests__["a" /* FeedsDataRequests */], __WEBPACK_IMPORTED_MODULE_5__providers_users_data_requests__["a" /* UsersDataRequests */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_geocoder__["a" /* NativeGeocoder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
], FeedPage);

//# sourceMappingURL=feed.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComptePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_map_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_users_data_requests__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_session__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_crda_crda__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_feed_feed__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_confid_confid__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_about__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_steps_steps__ = __webpack_require__(298);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ComptePage = (function () {
    function ComptePage(navCtrl, users_datareq, user_session) {
        this.navCtrl = navCtrl;
        this.users_datareq = users_datareq;
        this.user_session = user_session;
        this.total = 0;
        window.caches.delete;
    }
    ComptePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.users_datareq.getUsers().then(function (response) {
            var users_json = response;
            for (var i = 0; i < users_json.length; i++) {
                _this.total += users_json[i].totalArbres;
            }
        });
    };
    ComptePage.prototype.goToFeed = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_feed_feed__["a" /* FeedPage */], {}, { animate: false });
    };
    ComptePage.prototype.goToCRDA = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_crda_crda__["a" /* CRDAPage */], {}, { animate: false });
    };
    ComptePage.prototype.goToMap = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_map_map__["a" /* MapPage */], {}, { animate: false });
    };
    ComptePage.prototype.goToConfidentialite = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_confid_confid__["a" /* ConfidPage */], { animate: true, animation: 'md-transition', duration: 1000 });
    };
    ComptePage.prototype.goToSteps = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__pages_steps_steps__["a" /* StepsPage */], { animate: true, animation: 'md-transition', duration: 1000 });
    };
    ComptePage.prototype.goToAbout = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */], { animate: true, animation: 'md-transition', duration: 1000 });
    };
    return ComptePage;
}());
ComptePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-compte',template:/*ion-inline-start:"D:\VERONIA\MTFT\app\src\pages\compte\compte.html"*/'<ion-content scroll="false">\n\n  <div class="backgroundContainer">\n    <div class="imgBackground">\n        <img src="assets/images/background.jpg"/>\n        <div class="backgroundImgLayer"></div>\n    </div>\n    <div class="title">\n      <div class="actions">\n        <div class="map">\n          <ion-icon name="pin" (click)="goToMap()"></ion-icon>\n        </div>\n        <div class="home">\n          <ion-icon name="home" (click)="goToFeed()"></ion-icon>\n        </div>\n        <div class="compte">\n          <ion-icon name="person"></ion-icon>\n        </div>\n        <div class="cart">\n          <ion-icon name="call"  (click)="goToCRDA()"></ion-icon>\n        </div>\n      </div>\n    </div>\n    <div class="contenuCompte">\n      <div class="image" [style.backgroundImage]="\'url(\' + user_session.getUser().photo + \')\'">\n      </div>\n      <div class="name">\n        <b>{{user_session.getUser().name}}</b>\n      </div>\n      <div class="nbrArbres">\n        <p *ngIf="user_session.getUser().totalArbres != 1">{{user_session.getUser().totalArbres}} arbres</p>\n        <p *ngIf="user_session.getUser().totalArbres == 1">{{user_session.getUser().totalArbres}} arbre</p>\n      </div>\n      <!-- <div class="comingsoon">\n        <img src="assets/images/comingsoon.png"/>\n\n      </div> -->\n      <div class="compteContainer">\n        <div class="compteContenu" (click)="goToAbout()">\n          <b>&Agrave; propos</b>\n        </div>\n        <div class="compteContenu" (click)="goToSteps()">\n          <b>Comment ça marche ?</b>\n        </div>\n        <div class="compteContenu" (click)="goToConfidentialite()">\n          <b>Confidentialité</b>\n        </div>\n      </div>\n      <div class="total">\n          <h1>Total des arbres plantées: </h1>\n          <div class="nbr">\n            <b>{{total}}</b>\n          </div>\n          <div class="million">\n            <b>/ 1 million</b>\n          </div>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\VERONIA\MTFT\app\src\pages\compte\compte.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_users_data_requests__["a" /* UsersDataRequests */], __WEBPACK_IMPORTED_MODULE_4__services_user_session__["a" /* UserSession */]])
], ComptePage);

//# sourceMappingURL=compte.js.map

/***/ })

},[303]);
//# sourceMappingURL=main.js.map