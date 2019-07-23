angular.module("myApp", ["homeModule", "mtftModule", "ngRoute"])
    .run(function ($rootScope) {
        $(window).load(function () {
            // Animate loader off screen
            $(".se-pre-con").fadeOut("slow");
        });
        $rootScope.$on("$routeChangeSuccess", function (event, toState) {});

    })
    .config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "pages/home/home_en.min.html",
                controller: "HomeCtrl",
                name: "Home_fr"
            })
            .when("/fr", {
                templateUrl: "pages/home/home_fr.min.html",
                controller: "HomeCtrl",
                name: "Home_fr"
            })
            .when("/mtft_admin", {
                templateUrl: "pages/MTFT/mtft.html",
                controller: "MTFTCtrl",
                name: "MTFT"
            })
    });