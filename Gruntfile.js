module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

		concat: {   
		    dist: {
		        src: [
		            'application/webroot/js/libs/jquery-1.11.1.min.js',
//		            'application/webroot/js/libs/bootstrap.min.js',
//					'application/webroot/js/libs/isotope.pkgd.min.js',
//					'application/webroot/js/libs/imagesloaded.pkgd.min.js',
//					'application/webroot/js/libs/jquery.infinitescroll.min.js',
		            'application/webroot/js/global.js'
		        ],
		        dest: 'application/webroot/js/production/scripts.js',
		    }
		},
		
		uglify: {
			my_target: {
				files: {
				'application/webroot/js/production/scripts.min.js': ['application/webroot/js/production/scripts.js']
				}
			}
		},
		
		sass: {
			dist: {
				files: [{
					expand: true,
					cwd: 'application/webroot/scss',
					src: ['*.scss'],
					dest: 'application/webroot/css',
					ext: '.css'
				}]
			}
		},

		watch: {	
		    scripts: {
		        files: ['application/webroot/js/*.js'],
		        tasks: ['concat'],
		        options: {
		            spawn: false
		        },
		    },			
			sass: {
			    files: ['application/webroot/scss/*.scss'],
			    tasks: ['sass'],
			    options: {
			        spawn: false,
			    }
			}
		}

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'sass']);

};