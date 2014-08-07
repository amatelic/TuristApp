define([ 'backbone' ], function ( Backbone) {
	var CityInfoView = Backbone.View.extend({
		el: '.plan',
        template: _.template($('#artist-list-template').html()),
	});
	return	CityInfoView;
})