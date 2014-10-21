/**
 * @file gulpfile.js
 * @author Will Steinmetz
 * This file runs the gulp tasks for the jQuery notific8 plug-in.
 */

// require modules
var gulp       = require('gulp'),
  sass         = require('gulp-ruby-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  minifycss    = require('gulp-minify-css'),
//  uglify       = require('gulp-uglify'),
  rename       = require('gulp-rename'),
  clean        = require('gulp-clean'),
  header       = require('gulp-header');//,
//  sourcemaps   = require('gulp-sourcemaps');

// styles task
gulp.task('styles', function () {
  return gulp.src('src/sass/keroseen-grid.scss')
    .pipe(sass({
      style: 'expanded',
      loadPath: [__dirname + '/src/sass']
    }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('src/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(header('/**\n\
 * @author Will Steinmetz\n\
 * @license MIT\n\
 * @package keroseen.grid\n\
 * Homepage: https://github.com/willsteinmetz/keroseen-grid\n\
 */\n'))
    .pipe(gulp.dest('dist'));
});

// clean up task
gulp.task('clean', function () {
  return gulp.src(['dist', 'src/css/**/*.css'], {read: false})
    .pipe(clean());
});

// default task
gulp.task('default', ['clean'], function () {
  gulp.start('styles');
});

// watch task
gulp.task('watch', function() {
  // Watch .scss files
  gulp.watch('src/sass/**/*.scss', ['styles', 'fonts']);
});
