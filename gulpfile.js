var gulp = require('gulp')
var util = require('gulp-util')
var coffee = require('gulp-coffee')
var concat = require('gulp-concat')

// create a TASK to compile CoffeeScript to JavaScript using gulp-coffee
gulp.task('compile', function() {
   gulp.src(['./coffee/*.coffee'])
   .pipe(coffee({bare: true}))
   .on('error', util.log)
   .pipe(gulp.dest('./js/'));
});

// create a TASK to WATCH for changes in your files
// this will "watch" for any changes in your files and rerun gulp if necessary
gulp.task('watch', function() {
   gulp.watch(['./coffee/*.coffee'], ['compile']);
});

//gulp.task('concat', function() {
//  return gulp.src('./coffee/**/*.coffee')
//    .pipe(concat('app.coffee'))
//    .pipe(gulp.dest('./bin/'));
//});

// Default task to run all
gulp.task('default', ['compile', 'watch'], function() {});
