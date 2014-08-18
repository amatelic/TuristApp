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
            deps: ['jquery' ],
            exports: 'moadal'
        },
        tab: {
            deps: ['jquery' ],
            exports: 'tab'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        modal: '../bower_components/sass-bootstrap/js/modal',
        tab: '../bower_components/sass-bootstrap/js/tab',
        InputGui: '/scripts/models/InputGui',     
        ContentGuiView: '/scripts/views/ContentGuiView',
        TabGuiView: '/scripts/views/TabGuiView',
        InputGuis: '/scripts/collections/InputGuis',     
        InputGuisView: '/scripts/views/InputGuisView',
        Destinations: '/scripts/models/destinations',
        AttractionsView: '/scripts/views/AttractionsView'        
    }
});

require(['backbone', 'InputGuis', 'InputGuisView', 'tab', 'modal'], function (Backbone, InputGuis, InputGuiViews) {
    var input = [{ name: 'ljubljana'}, { name: 'bovec'}, { name: 'nova_gorica'}];  
    var firstInput = new InputGuis(input);
    new InputGuiViews({collection: firstInput});
 
});
