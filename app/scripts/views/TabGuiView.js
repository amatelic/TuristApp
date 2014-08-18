define(['backbone', 'Destinations'], function( backbone, destination) {
	var TabGuiView = Backbone.View.extend({
		model: destination,
		el: '.container ul',
		template: _.template($("#tab-links").html()),
		initialize: function () {
			this.isFirst();
			this.render();
		},
		render: function () {
			var formView = this.template(this.model.toJSON());
			this.$el.append( formView );
		},
		isFirst: function() {
			if (this.model.getID() === "c1") {
				this.model.set( {'active': true } );
			};
		}	
	});
	return	TabGuiView;
});