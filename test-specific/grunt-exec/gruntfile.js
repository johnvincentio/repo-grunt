/*
http://grunt-tasks.com/grunt-exec/

start with package.json with no dependencies.

create files to be deleted:
1. jv.log
2. .tmp

remove node_modules

npm install grunt --save-dev
npm install grunt-exec --save-dev
npm install load-grunt-tasks --save-dev

grunt
*/

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    exec: {
        list_files: {
            cmd: 'echo hello'
        },
        removeLogs: {
            cmd: 'rm *.log',
            stderr: false
        },
        removeTmp: {
            cmd: 'rm -rf .tmp',
            stderr: false
        }
    }
  });

  grunt.registerTask('default', ['exec:list_files', 'exec:removeLogs', 'exec:removeTmp']);
};
