module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    watch: {

      scripts: {
        files: ['assets/stylesheets/**/*.scss', 'assets/javascripts/**/*.js'], // Watch scss & js files for changes
        tasks: ['sass:build', 'uglify:build'], // Build sass and js files
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

    sass: {
      
      build: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
          style: 'expanded',
          trace: true,
          loadPath: [
            // This allows me to import scss files from this directory.
            'vendor/bootstrap/assets/stylesheets'
          ]
        },
        files: {  // Dictionary of files
          // 'destination': ['sources']
          'build/assets/stylesheets/sjsu.css': ['assets/stylesheets/sjsu.scss'],
          'build/assets/stylesheets/bootstrap.css': 'assets/stylesheets/sjsu-bootstrap.scss',
        }
      }

    }, // sass

    browserSync: {
      
      dev: {
        bsfiles: { // Files you would like to watch for changes to refresh browser page
          src: [
            'build/assets/stylesheets/*.css',
            'build/assets/javascripts/*.js',
            'build/*.html'
          ]
        },
        option: {
          watchTask: true,
          server: './build'
        }
      }

    } // browserSync

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['uglify:build', 'sass:build']);
  grunt.registerTask('test', ['browserSync', 'watch']);
};