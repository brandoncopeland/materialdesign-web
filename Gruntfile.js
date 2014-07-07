module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt, {
    scope: 'devDependencies'
  });

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      dist: 'dist',
      demo: 'dist/demo'
    },
    copy: {
      demo: {
        files: [{
          src: 'demo/*.html',
          dest: 'dist/'
        }]
      }
    },
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'dist/css/<%= pkg.name %>.min.css': 'scss/<%= pkg.name %>.scss'
        }
      },
      demo: {
        files: {
          'dist/demo/main.css': 'demo/main.scss'
        }
      }
    }
  });

  grunt.registerTask('demo', ['clean:demo', 'copy:demo', 'sass:demo']);
  grunt.registerTask('dist', ['clean:dist', 'sass:dist']);

  grunt.registerTask('default', 'dist');
};