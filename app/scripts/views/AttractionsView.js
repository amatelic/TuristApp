define(['backbone'], function ( backbone ) {
	var AttractionsView = Backbone.View.extend({
		template: _.template($('#modal-form').html()),
		el:'.models',
		disaplay: 'trg',
		initialize: function () {
			this.render();
		},
		events:{
			'click  #canVisit': 'Informationdy'
		},
		render: function () {
			var obj = {
				name: 'escorsions',
				info: 'To je samo  test haha',
				collection: [
				{
					'trg':{
						name: "bla",
						text: " to je kar nek"
					}
				}, 
				{	
					'hribi':{
						name: "bla211323",
						text: " hghg"
					}
				}, 
				{
					'voda':{
						name: "34435",
						text: " to 5453bb55436k"
					}
				}]
			};
			var template = this.template(obj);
			this.$el.html(template);
		},
		Informationdy: function ( e ) {
			console.log( e.target );
		}
	});
	return	AttractionsView;
});