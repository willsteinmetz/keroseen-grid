/**
 * @file gulpfile.js
 * @author Will Steinmetz
 * This file runs the gulp tasks for the jQuery notific8 plug-in.
 */

// require modules
var gulp       = require('gulp'),
  sass         = require('gulp-ruby-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  cleanCss     = require('gulp-clean-css'),
  rename       = require('gulp-rename'),
  clean        = require('gulp-clean'),
  header       = require('gulp-header'),
  jade         = require('gulp-jade');

// styles task
gulp.task('styles', ['clean-styles'], function () {
  return gulp.src('src/sass/keroseen-grid.sass')
    .pipe(sass({
      style: 'expanded',
      loadPath: [__dirname + '/src/sass']
    }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('dist'))
    .pipe(rename({suffix: '.min'}))
    .pipe(cleanCss())
    .pipe(header('/**\n\
 * @author Will Steinmetz\n\
 * @license MIT\n\
 * @package keroseen.grid\n\
 * Homepage: https://github.com/willsteinmetz/keroseen-grid\n\
 */\n'))
    .pipe(gulp.dest('dist'));
});

// templates
gulp.task('templates', ['clean-templates'], function() {
  return gulp.src('src/jade/index.jade')
    .pipe(jade())
    .pipe(gulp.dest('demo'));
});

// style clean up task
gulp.task('clean-styles', function () {
  return gulp.src(['dist'], {read: false})
    .pipe(clean());
});

// templates clean up task
gulp.task('clean-templates', function () {
  return gulp.src(['demo/**/*.html'], {read: false})
    .pipe(clean());
});

// default task
gulp.task('default', ['clean-styles', 'clean-templates'], function () {
  gulp.start('styles');
  gulp.start('templates');
  gulp.start('watch');
});

// watch task
gulp.task('watch', function() {
  // Watch .sass files
  gulp.watch('src/sass/**/*.sass', ['styles']);
  // watch .jade files
  gulp.watch('src/jade/**/*.jade', ['templates']);
});
