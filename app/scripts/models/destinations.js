define(['backbone'], function ( backbone ) {
	var Destinations = Backbone.Model.extend({
		defaults:{
			name:"",
			destinations: [],
			active: false,
			people: {
				adults: 0,
				childrens: 0,
				babys: 0
			},
			transport: "car",
			id: 0,
		},
		initialize: function() {
			// console.log(this.collection);
		},
		getID: function () {
			return this.cid;
		},
		countPeople: function () {
			var sum = 0;
			var peopleNumber =  _.values( this.get('people') );
			for(var key in peopleNumber) {
			    sum+= peopleNumber[key];
			}
			this.transport(sum);
		},
		transport: function ( number ) {
			if(number > 0 && number < 5 ){
				this.set("transport", "car");
			}else if(number >= 5 && number <= 10){
				this.set("transport", "van");
			}else{
				this.set("transport", "bus");
			}			
		}
	});
	return Destinations;
});