module.exports = function(grunt) {

    console.log("stage 1");
    grunt.loadNpmTasks('grunt-autoprefixer');
    var autoprefixer = require('autoprefixer-core');
    console.log("stage 2");

    grunt.initConfig({
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 8', 'ie 9', '> 1%']
            },
            main: {
                expand: true,
                flatten: true,
                src: 'css/*.css',
                dest: 'dist/'
            }
        }  
    });

    grunt.registerTask('default', ['autoprefixer']);
};
