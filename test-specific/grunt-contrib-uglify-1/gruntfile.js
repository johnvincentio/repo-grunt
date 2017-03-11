/*

mkdir src build

start with package.json with no dependencies.
name = jv
this is pkg.name

added jv.js to src
to test:
node jv.js

remove node_modules

npm install grunt --save-dev
npm install grunt-contrib-uglify --save-dev

grunt

builds minified js in build
cd build
node jv.min.js

*/

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['uglify']);
};
