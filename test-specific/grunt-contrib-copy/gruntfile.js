/*
ref:
https://github.com/gruntjs/grunt-contrib-copy

start with package.json with no dependencies.

remove node_modules

npm install grunt --save-dev
npm install grunt-contrib-copy --save-dev

rm -rf dist
grunt
*/

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        dirs: {
            cwd: 'local-repo/brackets/project-1/',
            test: 'local-repo/brackets/project-1/omnifood',
            parts: 'dist/parts'
        },

        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: '<%= dirs.cwd %>',
                    src: ['omnifood/**'],
                    dest: 'dist/all'
                }]
            },
            today: {
                expand: true,
                cwd: '<%= dirs.test %>',
                src: 'index.html',
                dest: 'dist/build-<%= grunt.template.today("yyyy-mm-dd") %>'
            },
            parts: {
                files: [{
                    expand: true,
                    cwd: 'local-repo/brackets/project-1/omnifood',
                    src: ['resources/**'],
                    dest: '<%= dirs.parts %>'
                }, {
                    expand: true,
                    cwd: 'local-repo/brackets/project-1/omnifood',
                    src: ['vendors/**'],
                    dest: 'dist/parts'
                }, {
                    expand: true,
                    cwd: 'local-repo/brackets/project-1/omnifood',
                    src: ['index.html'],
                    dest: 'dist/parts'
                }]
            },
            html: {
                expand: true,
                cwd: 'local-repo/brackets/project-1/omnifood',
                src: 'index.html',
                dest: 'dist/update-html',
                options: {
                    process: function(content, srcpath) { // content is the contents of index.html
                        console.log("in update html");
                        // this works
                        //                        return content.replace(/[sad ]/g, "_").replace(/[ver ]/g, "Z");

                        /*
                        must be of form return content.{method} 
                        */
                        return content.replace(/vendors\/css/g, "my-vendors\/css")
                            .replace(/resources\/css/g, "my-resources\/css");
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', ['copy']);
};
