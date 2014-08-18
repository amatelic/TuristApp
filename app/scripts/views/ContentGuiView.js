define(['backbone', 'InputGui','AttractionsView'], function ( backbone, InputGui, AttractionsView) {
	var InputGuiView = Backbone.View.extend({
		el: null,
		model: InputGui,
		Contentemplate: _.template($("#tab-content").html()),
		initialize: function () {
			this.render()
			this.isFirst();
			// this.listenTo(this.model, 'change',this.update);
		},
		events: {
			'change input#people': 'setPeopleNumber',
			'click button[data-toggle]': 'dispayForm' 		
		},
		render: function () {
			//Replace $el with underscore template 

			this.setElement($(this.Contentemplate(this.model.toJSON()))); 
			return this;
		},
		isFirst: function() {
			if (this.model.getID() === "c1") {
				this.model.set( {'active': true } );
			};
			return this;
		},
		setPeopleNumber: function( e ) {
			var element = $( e.target ),
			type = element.data( "person" ),
			value = parseInt(element.val());
			//creting variable with copide refernc
			var model = _.clone(this.model.get( 'people' ));
			model[type] = value;
			this.model.set( "people", model );
			//Changing the transport option
			this.model.countPeople();		
		},
		//creating and siplaying view for choosing 
		dispayForm: function (e) {
			var attractionsView =  new AttractionsView();
		}
	});
	return	InputGuiView;
})