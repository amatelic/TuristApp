define(['backbone', 'InputGuis', 'TabGuiView', 'ContentGuiView' ], function ( backbone, InputGuis, TabGuiView, ContentGuiView ) {
	var InputGuisViews = Backbone.View.extend({
		el: '.container',
		collection : InputGuis,
		initialize: function() {
			this.collection.getCollection();
			this.$elChildren = this.$el.children();
			this.render();
			this.collection.bind('change', function(){
				this.$elChildren.first().children().remove();
				this.$elChildren.last().children().remove();
				this.render();
			}, this);
		},
		events: {
			"click .nav-tabs > li.active > a": "changeForm",
			"click .tab-content > a": "tabShow",
			
		},
		render: function() {
			this.collection.each( this.addOne, this );
		},
		addOne: function( model, index ) { 
			index++;
			// Appending links to view
			model.set('id', index);
			var tabDisplay =  new TabGuiView( {model: model })
			this.$elChildren.first().append( tabDisplay );
			//Adding all collection models name for select input
			model.set('destination', this.collection.collectionNames);
			// Appending content to view
			var ContentDisplay = new ContentGuiView( {model: model} );
			this.$elChildren.last().append( ContentDisplay.el );	

		},
		//For displaying the content with the help of tabs
		tabShow: function(e) {
			$(this).tab('show');
		},
		changeForm: function() {
			// body...
		}
	});
	return	InputGuisViews;
})