define(['backbone'], function ( backbone ) {
	var GuiInput = Backbone.Model.extend({
		defaults:{
			destination:{
				start: {
					name: "",
					lag: "",
					log: ""
				},
				end:{
					name: "",
					lag: "",
					log: ""
				} 
			},
			people: {
				adult: 0,
				childen: 0
			},
			CanVisit:{
				hotels: [],
				esscursion: [],
				restarounts: []				
			},
			WillVisit: [],
			destination:[],
		},
		initialize: function ( opt ) {
			this.set(opt);
		},
		getID: function () {
			return this.cid;
		}
	});
	return GuiInput;
});