define(['backbone'], function ( Backbone ) {
	var mapView = Backbone.View.extend({
		el: '.map',
        mapOptions:{},
        markers : [],
		template: _.template($('#google-map').html()),
		initialize: function(){
			this.render();
		},
		update:function( map_data ){
            this.clearMarkers();
            var marker, location;
			 _.each(map_data, function(coords) {
                 location = new google.maps.LatLng(coords.lat, coords.log);
                 marker =  new google.maps.Marker({
                    position: location,
                    map: this[0],
                    title: coords.name
                 });
                this[1].push(marker);

            } , [this.map, this.markers]);
            
            // checking if object is empty and setting new position of map
			if (_.isEmpty(map_data.end)) {
				this.map.setCenter(new google.maps.LatLng(map_data.start.lat, map_data.start.log));
			}else{
            	this.map.setCenter(new google.maps.LatLng(map_data.end.lat, map_data.end.log));
				this.direction(map_data.start, map_data.end);
			};

		}, 
		// displaying the map on the webpage
		render:function () {

			this.mapOptions = {
          		center: new google.maps.LatLng(-34.397, 150.644),
          		zoom: 8
        	};
        	this.$el.html(this.template(this));
        	this.map = new google.maps.Map(this.$el.children()[0], this.mapOptions);
			
			return this;
		},
		// removing markers form webpage
		clearMarkers:function () {
			this.showMarkers( null );
		},
		// displaying markers on webpage
		showMarkers: function ( map ) {
			for (var i = 0; i < this.markers.length; i++) {
    			this.markers[i].setMap(map);
  			}
		},
		direction: function (startDestination, endDestination) {
		//define an array that will hold all the waypoints

					//initialize directionsService object
					directionsService = new google.maps.DirectionsService();
					
					//initialize directionsRenderer object
					directionsRenderer = new google.maps.DirectionsRenderer();

					var waypnts = [];
					//define an directionsRequest object
					var directionRequest;
					
					var markers = this.markers;
			
					//if there are stops other than the origin and the final destination
					if (markers.length > 2)
					{
						for (var i=1, l=markers.length;i<=l-2;i++)
						{
							//add them to the waypnts array
							waypnts.push({
								location: markers[i].getPosition(),
								stopover: true
							});
						}
					
						//prepare the directionsRequest by including waypoints property
						directionRequest = {
							origin:markers[0].getPosition(),
							destination:markers[markers.length-1].getPosition(),
							waypoints: waypnts,
							travelMode: google.maps.TravelMode.DRIVING
						};						
					}
					else
					{
						//this time, do not include waypoints property as there is no waypoints
						directionRequest = {
							origin:markers[0].getPosition(),
							destination: markers[markers.length-1].getPosition(),
							travelMode: google.maps.TravelMode.DRIVING
						};
					}
					
					//send the request to the directionsService
					directionsService.route(directionRequest, function(result, status) {
						console.log(result)
						if (status == google.maps.DirectionsStatus.OK) {
							directionsRenderer.setDirections(result);
						}
						else
						{
							alert('Cannot find directions because: ' + status);
						}
					});
		}
	});
	return mapView;
});
