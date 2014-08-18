/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        modal: {
            deps: ['jquery' ],
            exports: 'moadal'
        },
        tab: {
            deps: ['jquery' ],
            exports: 'tab'
        },
        jasmine: {
          exports: 'jasmine'
        },
        'jasmine-html': {
          deps: ['jasmine'],
          exports: 'jasmine'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        bootstrap: 'vendor/bootstrap',
        modal: '../bower_components/sass-bootstrap/js/modal',
        tab: '../bower_components/sass-bootstrap/js/tab',
        jasmine: '/test/lib/jasmine',
        'jasmine-html': '/test/lib/jasmine-html',
        spec: '/test/jasmine/spec/'
     
    }
});

require(['underscore', 'jquery', 'jasmine-html'], function(_, $, jasmine){
  var jasmineEnv = jasmineRequire.Env();
  jasmineEnv.updateInterval = 1000;
 
  var htmlReporter = new jasmineRequire.HtmlReporter();
 
  console.log(jasmineEnv());
  jasmineEnv.addReporter(htmlReporter);
 
  jasmineEnv.specFilter = function(spec) {
    return htmlReporter.specFilter(spec);
  };
 
  var specs = [];
 
  specs.push('spec/models/TodoSpec');
  specs.push('spec/views/ClearCompletedSpec');
  specs.push('spec/views/CountViewSpec');
  specs.push('spec/views/FooterViewSpec');
  specs.push('spec/views/MarkAllSpec');
  specs.push('spec/views/NewTaskSpec');
  specs.push('spec/views/TaskListSpec');
  specs.push('spec/views/TaskViewSpec');
 
  $(function(){
    require(specs, function(){
      jasmineEnv.execute();
    });
  });
 
});