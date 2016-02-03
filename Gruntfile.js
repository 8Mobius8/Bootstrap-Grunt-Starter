module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      options:{

      },
      build: {
        
      }
    }, // watch

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'assets/<%= pkg.name %>.js',
        dest: 'build/assets/<%= pkg.name %>.min.js'
      }
    }, // uglify

    sass: {                              // Task
      build: {                           // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          // 'destination': 'source'
          'build/assets/stylesheets/main.css': 'assets/stylesheets/sjsu.scss',
        }
      }
    } // sass

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};