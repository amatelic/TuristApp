/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        modal: {
            deps: ['jquery', ],
            exports: 'moadal'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        bootstrap: 'vendor/bootstrap',
        MainModel: 'planing/planingModel',
        MainView:  'planing/planingView',
        mapView:  'map/mapView',
        modal: '../bower_components/sass-bootstrap/js/modal',
        CityInfoView:  'planing/CityInfoView',
        CityInfoModel: 'planing/CityInfo'
    }
});

require(['backbone','MainModel', 'MainView', 'mapView','modal'], function (Backbone, MainModel, MainView, Map) {
    Backbone.history.start();
    window.app ={};
    window.app.usersData = [{name:'ljubljana', lat: 46.056947, lon: 14.505751}, {name:'maribor', lat: 46.554650, lon: 15.645881}, {name:'nova gorica', lat: 45.954976, lon: 13.649304}];
    // window.usersData = [];
    window.app.map =  {};//new Map();
    window.ljubljana ={
        escorsions:{


        },
        hotels:{
            cityhotel:{
                text:"For the beginning of the story, we must go back to the early 1800’s. On the spot of today’s City Hotel, there was “Bitenc”, a well-known pub, frequented even by the most celebrated Slovene poet, France Prešeren. In 1899, the land was sold to Štrukelj family, the pub was demolished and in 1903, a new inn opened in its place – Hotel Štrukelj.",
                img:"http://www.cityhotel.si/cms/index.xhtml",
                link:"http://www.cityhotel.si/"
            },
            unionhotel:{
                text:"Four excellent hotels in the city centre offer 574 comfortable and pleasantly furnished rooms, where our guests will be happy to return after a day of business obligations or sightseeing.",
                img:"http://www.union-hotels.eu/assets/Union-Hotels/Home-page/_resampled/croppedimage1980604-Union-Hotels-Ljubljana-Tromostovje.jpg",
                link:"http://www.union-hotels.eu/"
            }

        },
        restarounts:{

        }
    };
    var modelP =  new MainModel({locations: window.app.usersData, map: window.app.map});
    window.app.AppMainView =  new MainView({ model: modelP });
    //new Map();



});
