define(['backbone', 'Destinations'], function ( backbone, Destinations ) {
	var InputGuis = Backbone.Collection.extend({
		model: Destinations,
		collectionNames: [],
		initialize: function() {

		},
		getCollection: function () {
			_.filter(this.models, function( data ) {
				var models = data.toJSON();
				if (_.has(models, 'name')) {
				 	this.collectionNames.push(models.name)
				 }
			}, this);

		}
	});
	return	InputGuis;
})