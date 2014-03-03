module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        compass: {
            dist: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'stylesheets',
                    outputStyle: 'compact',
                    noLineComments: true,
                    httpPath: '/',
                    environment : "production"
                }
            }
        },
        
        cssmin: {
            minify: {
                expand: true,
                cwd: 'stylesheets',
                src: ['*.css', '!*.min.css'],
                dest: 'stylesheets',
                ext: '.min.css'
            },
            add_banner: {
                options: {
                    banner: "/**\n\
 * @author Will Steinmetz\n\
 * @license MIT\n\
 * @package keroseen.grid\n\
 * Homepage: https://github.com/willsteinmetz/keroseen-grid\n\
 */"
                },
                files: {
                    'stylesheets/keroseen-grid.min.css': 'stylesheets/keroseen-grid.min.css'
                }
            }
        },

        watch: {
            options: {
                livereload: true,
            },
            css: {
                files: ['**/*.scss'],
                tasks: ['compass', 'cssmin'],
                options: {
                    spawn: false,
                }
            }
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
//    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['compass', 'cssmin']);

};