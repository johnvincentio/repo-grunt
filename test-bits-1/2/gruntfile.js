module.exports = function (grunt) {
    grunt.initConfig({
        autoprefixer: {
            dist: {
                files: {
                    'dist/1.css': 'css/1.css',
                    'dist/2.css': 'css/2.css'
                }
            }
        },
        watch: {
            styles: {
                files: ['css/1.css','css/2.css'],
                tasks: ['autoprefixer']
            }
        }
    });
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
};

