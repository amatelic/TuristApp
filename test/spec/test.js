/* global describe, it */
define(['MainModel', 'MainView'],function (mainGrafModel, mainGrafView) {
	'use strict';

    describe('Give it some context', function () {    
        describe('Test if object is loaded', function () {
            it('Backone', function () {
            	expect(window.Backbone).to.be.an('object');
            });
        });
        describe('Check if mainGraf model and view exsist', function () {
            it('It loads model into view correctli', function () {
            	var MainModel = new mainGrafModel();
            	var MainView = new mainGrafView({ model: MainModel });
            	assert.equal(MainView, window.AppMainView)
            });
        });
    });
})

