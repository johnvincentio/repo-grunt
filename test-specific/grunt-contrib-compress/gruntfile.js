/*
ref:
http://grunt-tasks.com/grunt-contrib-compress/

start with package.json with no dependencies.

remove node_modules

npm install grunt --save-dev
npm install grunt-contrib-compress --save-dev
npm install load-grunt-tasks --save-dev

grunt
*/

function compress_dir(filename) {
    return "compressed-files/" + filename;
}

module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    var my_cwd = "local-repo/brackets/project-1/omnifood";

    //   var jv = compress_dir("my-file.tar");
    //    console.log ("compressed file: "+jv);

    grunt.initConfig({
            compress: {
                main: {
                    options: {
                        //    archive: 'compressed-files/omnifood.zip',
                        archive: compress_dir('omnifood.zip'),
                        pretty: true
                    },
                    expand: true,
                    cwd: my_cwd,
                    src: ['**/*'],
                    dest: '/'
                },
                all_css: { // get all css files
                    option
                    archive: compress_dir('all_css.zip'),
                    pretty: true
                },
                expand: true,
                cwd: my_cwd,
                src: ['**/*.css'],
                dest: '/'
            },
            test_tar: { // tar
                options: {
                    archive: compress_dir('test.tar'),
                    mode: 'tar',
                    pretty: true
                },
                expand: true,
                cwd: my_cwd,
                src: ['**/*.css'],
                dest: '/'
            },
            test_multiple_files: { // multiple sets of files
                options: {
                    archive: compress_dir('test_multiple_files.zip'),
                    mode: 'zip',
                    pretty: true
                },
                files: [{
                    expand: true,
                    cwd: my_cwd,
                    src: ['**/*.css'],
                    dest: 'my-css' // copy to my-css directory in the compressed file
                }, {
                    expand: true,
                    cwd: my_cwd,
                    src: ['**/*.js'],
                    dest: 'my-js' // copy to my-js directory in the compressed file
                }]
            },
            test_website: { // actual website files
                options: {
                    archive: compress_dir('test_website.zip'),
                    mode: 'zip',
                    pretty: true
                },
                files: [{
                    expand: true,
                    cwd: my_cwd + '/resources',
                    src: ['**/*'],
                    dest: 'my-resources' // copy to my-resources directory in the compressed file
                }, {
                    expand: true,
                    cwd: my_cwd + '/vendors',
                    src: ['**/*'],
                    dest: 'my-vendors'
                }, {
                    expand: true,
                    cwd: my_cwd,
                    src: ['index.html'],
                    dest: '/'
                }]
            }
        },
    });

grunt.registerTask('default', ['compress']);
};
