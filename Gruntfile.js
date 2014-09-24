module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

		concat: {   
		    dist: {
		        src: [
		            'js/libs/jquery-1.11.1.min.js',
		            'js/libs/bootstrap.min.js',
		            'js/global.js'
		        ],
		        dest: 'js/production/scripts.js',
		    }
		},
		
		uglify: {
			my_target: {
				files: {
				'js/production/scripts.min.js': ['js/production/scripts.js']
				}
			}
		},
		
		sass: {
			dist: {
				files: [{
					expand: true,
					cwd: 'scss',
					src: ['*.scss'],
					dest: 'css',
					ext: '.css'
				}]
			}
		},

		watch: {	
		    scripts: {
		        files: ['js/*.js'],
		        tasks: ['concat'],
		        options: {
		            spawn: false
		        },
		    },			
			sass: {
			    files: ['scss/*.scss'],
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