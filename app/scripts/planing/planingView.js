define([ 'backbone' , 'MainModel', 'CityInfoView'], function ( Backbone, planModel, CityInfo ) {
    var planView = Backbone.View.extend({
        el: '.plan',
        template: _.template($('#artist-list-template').html()),
        initialize:function(){
                this.render();
                this.numberPeople = this.$el.find('#number_of_people');
                this.transport = this.$el.find('#transport');

        },
        events: {
            "change input#number_of_people": "updateTransport",
            "click select#start": "updateMap",
            "click select#end": "loadData",
            "click button#restarounts": "cityInformation",
            "click button#hotels": "cityInformation",
            "click button#escorsions": "cityInformation"
        },
        render: function () {
            this.model.transportChose();
            var template =  this.template(this.model.toJSON());
            this.$el.html(template);

            return this;

        },
        updateTransport: function(){
            var value = this.numberPeople.val();
                this.model.set('peopleNumber', parseInt(value));
                this.model.transportChose();
                this.transport.val(this.model.get('transport'));
        },
        updateMap:function ( event , end ) {
            this.start = this.$el.find('#start');
            var start = this.transform( this.start );
            if(start) {
                this.end = this.$el.find('#end');
                this.end.prop('disabled', false);
                var end = end || {};
                this.data = {
                    start: start,
                    end: end
                };
                this.model.addDestinations(this.data)
            }
        },
        loadData:function () {
            var end = this.transform( this.end );
            if (end.name === this.data.start.name) {
                alert("Sorry but you can not choose two times the same place.");
            }else{
                this.updateMap( null, end );
            };
        },
        transform: function (values, type) {
            // get the value of option then converts into string and then it splits into an array
            if (values.val()) {
                var map_data = values.val().toString().split('-');
                var obj = {
                    name: map_data[0],
                    lat: map_data[1],
                    log: map_data[2]
                };
            }else{
                obj = null;
            }
            return	obj;
        },
        cityInformation: function ( event ) {
            // checking that the event object is realy a button
            var value = $(event.currentTarget).attr("id");
            switch(value){
                case "restarounts":
                    var view = new CityInfo();
                    console.log(view);
                    // var template =  this.template(this.model.toJSON());
                    //     this.$el.html(template);    
                case "hotels":
                    console.log("hotels");
                    break;
                case "escorsions":
                    console.log("escorsions");
                    break;
                default:
                    break; 
            }
        }
    });
    return  planView;
});