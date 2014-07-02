module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt, {
    scope: 'devDependencies'
  });

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      dist: 'dist'
    },
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'dist/css/<%= pkg.name %>.min.css': 'scss/<%= pkg.name %>.scss'
        }
      }
    }
  });

  grunt.registerTask('dist', ['clean', 'sass:dist']);

  grunt.registerTask('default', 'dist');
};