'use strict';

var Local = require('oc/src/cli/domain/local'),
    Logger = require('./support/logger');

module.exports = function(grunt){

  grunt.registerMultiTask('oc-init', 'initialises a component', function(){

    var done = this.async(),
        options = this.options({}),
        logger = new Logger(grunt);

    var dependencies = {
      local: new Local({ logger: logger }),
      logger: logger
    };

    require('oc/src/li/facade/init')(dependencies)(options, function(err, res){
      if(err){
        grunt.fatal(err);
      }
      done();
    });
  });
};
