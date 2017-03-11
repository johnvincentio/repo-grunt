/*
ref:
https://www.npmjs.com/package/grunt-git

start with package.json with no dependencies.

remove node_modules

npm install grunt --save-dev
npm install grunt-git --save-dev

grunt
*/

/*
    grunt.initConfig({
        gitclone: {
            clone: {
                options: {
                    repository: 'https://github.com/you/your-git-repo.git',
                    branch: 'my-branch',
                    directory: 'repo'
                }
            }
        },
    });
*/
/*
https://jv2351@bitbucket.org/jv2351/repo_test1.git
*/

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-git');

    grunt.initConfig({
        gitclone: {
            clone: {
                options: {
                    repository: 'https://bitbucket.org/jv2351/repo_test1.git',
                    branch: 'master',
                    directory: 'local-repo'
                }
            }
        },
    });

    grunt.registerTask('default', ['gitclone']);
};
