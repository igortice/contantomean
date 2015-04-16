module.exports = function (grunt) {
  grunt.initConfig({
    copy         : {
      project: {
        expand: true,
        cwd   : '.',
        src   : [ '**', '!Gruntfile.js', '!package.json', '!bower.json' ],
        dest  : 'dist'
      }
    },
    clean        : {
      dist: {
        src: 'dist'
      }
    },
    usemin       : {
      html: 'dist/app/views/**/*.jade'
    },
    useminPrepare: {
      options: {
        root: 'dist/public',
        dest: 'dist/public'
      },
      html   : 'dist/app/views/**/*.jade'
    },
    ngAnnotate   : {
      options: {
        singleQuotes: true
      },
      app    : {
        files: [
          {
            expand: true,
            src   : [ 'dist/public/js/**/*.js' ]
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-ng-annotate');

  grunt.registerTask('default', [ 'dist', 'precompile' ]);
  grunt.registerTask('dist', [ 'clean', 'copy' ]);

  grunt.registerTask('precompile', [
    'useminPrepare',
    'ngAnnotate',
    'concat',
    'cssmin',
    'uglify',
    'usemin'
  ]);
};
