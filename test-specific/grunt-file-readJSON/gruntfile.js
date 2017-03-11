module.exports = function(grunt) {

    grunt.initConfig({
    	pkg: grunt.file.readJSON('package.json'),
    	task: {
    		
    	}
    });

	grunt.registerTask('default', 'Log some stuff', function() {
		grunt.log.write('Logging some stuff...').ok();
		grunt.log.write('Logging more stuff...').ok();
		grunt.log.write('<%= pkg.name %>').ok();
	});

};
