define(['backbone', 'InputGui'], function ( backbone, InputGui ) {
	var InputGuiView = Backbone.View.extend({
		el: '#profile',
		model: InputGui,
		template: _.template($("#single-destination").html()),
		initialize: function () {
			this.render();
			this.isFirst();
		},
		render: function () {
			var formView = this.template(this.model.toJSON());
			this.$el.append( formView );
		},
		isFirst: function() {
			if (this.model.getID() === "c1") {
				console.log(this.$el);	
			};
		}
	});
	return	InputGuiView;
})