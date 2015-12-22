var gulp = require('gulp')
var util = require('gulp-util')
var coffee = require('gulp-coffee')
var concat = require('gulp-concat')

// create a TASK to compile CoffeeScript to JavaScript using gulp-coffee
gulp.task('compile-coffee', function() {
   gulp.src(['./coffee/*.coffee'])
   .pipe(coffee({bare: true}))
   .on('error', util.log)
   .pipe(gulp.dest('./js/'));
});

// create a TASK to WATCH for changes in your files
// this will "watch" for any changes in your files and rerun gulp if necessary
gulp.task('watch', function() {
   gulp.watch(['./coffee/*.coffee'], ['js']);
});

gulp.task('build-scripts', ['compile-coffee'], function() {
  return gulp.src('./js/**/*.js')
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('./js/'));
});

// Default task to run all
gulp.task('default', ['build-scripts', 'watch'], function() {});
