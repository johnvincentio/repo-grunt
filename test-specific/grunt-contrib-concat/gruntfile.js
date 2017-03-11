module.exports = function (grunt) {

grunt.initConfig({
  concat: {
    bar: {
      src: ['src/add.js', 'src/divide.js', 'src/multiply.js', 'src/subtract.js'],
      dest: 'dest/all.js',
    },
  },
});

  // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['concat']);
};

