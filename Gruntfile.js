/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        }
      },
      js: {
        src: 'js/**/*.js'
      }
    },
    validation: {
      options: {
        reset: grunt.option('reset') || false,
        stoponerror: false,
        relaxerror: ['Bad value X-UA-Compatible for attribute http-equiv on element meta.'] //ignores these errors
      },
      files: {
        src: '*.html'
      }
    },

    csslint: {
      options: {
        'important': false,
        'adjoining-classes': false,
        'known-properties': true,
        'box-sizing': false,
        'box-model': true,
        'overqualified-elements': true,
        'display-property-grouping': false,
        'bulletproof-font-face': true,
        'compatible-vendor-prefixes': true,
        'regex-selectors': true,
        'errors': true,
        'duplicate-background-images': true,
        'duplicate-properties': true,
        'empty-rules': true,
        'selector-max-approaching': true,
        'gradients': false,
        'fallback-colors': true,
        'font-sizes': false,
        'font-faces': true,
        'floats': true,
        'star-property-hack': false,
        'outline-none': false,
        'import': true,
        'ids': false,
        'underscore-property-hack': false,
        'rules-count': false,
        'qualified-headings': true,
        'selector-max': false,
        'shorthand': false,
        'text-indent': true,
        'unique-headings': false,
        'universal-selector': false
      },
        src: ['css/**/*.css', '!css/normalize.css']
     }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-html-validation');
  grunt.loadNpmTasks('grunt-contrib-csslint');

  // Default task.
  grunt.registerTask('default', ['jshint', 'validation', 'csslint']);

};
