module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    watch: {
      scripts: {
        files: ['stylesheets/*.scss'],
        tasks: ['sass:build', 'uglify:build'],
        options: {
          spawn: false,
        },
      },
    }, // watch

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'assets/javascript/sjsu.js',
        dest: 'build/assets/javascripts/sjsu.min.js'
      }
    }, // uglify

    sass: {                              // Task
      
      build: {                           // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          // 'destination': ['sources']
          'build/assets/stylesheets/sjsu.css': ['assets/stylesheets/sjsu.scss'],
        }
      }

    } // sass

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify:build']);
  grunt.registerTask('watch', ['watch:scripts']);
  grunt.registerTask('buildjs', ['uglify:build']);
  grunt.registerTask('buildcss', ['sass:build']);

};