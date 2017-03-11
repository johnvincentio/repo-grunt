module.exports = function(grunt) {

    grunt.initConfig({
    		pkg: grunt.file.readJSON('package.json'),
            postcss: {
                options: {
                    map: true,
                    processors: [
                        require('autoprefixer-core')({
                            browsers: ['last 2 versions']
                        })
                    ]
                },
                dist: {
                    expand: true,
                    flatten: true,
                    src: 'css/style.css',
                    dest: 'dist/'
                }
            }

    });

	grunt.loadNpmTasks('grunt-postcss');

	grunt.registerTask('default', ['postcss:dist']);

};
