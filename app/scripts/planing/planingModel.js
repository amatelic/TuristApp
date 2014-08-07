define([ 'backbone' ], function ( Backbone ) {
	var planModel = Backbone.Model.extend({
		defaults: {
    		"Locations":  [],
    		"destination_start": {},
    		"distination__end": {},
    		"peopleNumber": 1, 
    		"transport": ""
  		},
  		initialize: function( options ) {
  			this.map = options.map;
  			this.transportChose();
     		this.on("invalid", function(model, error){
				console.log(error[0].name);
			});
   		},

		validate: function(attribs){
			var errors = [];
			if(_.isEmpty(attribs.locations) || attribs.locations == 'undefined'){
				errors.push({name:"Empty data", descritpion: "There  are no location in the array"})
			}
			if(!_.isEmpty(errors)) return errors;
		},
		//cheching witch transport to choose
		transportChose: function(){
			if(this.get('peopleNumber')  >= 10 ){
				this.set('transport', 'bus');
			}else if(this.get('peopleNumber')  >= 5 && this.get('peopleNumber')  < 10){
				this.set('transport', 'van');
			}else{
				this.set('transport', 'car');
			}
		},
		addDestinations: function( data ) {
             this.map.update( data );
		}
	});

	return  planModel;
});