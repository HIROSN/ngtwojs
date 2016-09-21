'use strict';

var gulp = require('gulp');
var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');

var sources = [
  'app/**/*.js',
  '*.js'
];

gulp.task('default', function() {
  return gulp.src(sources)
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jscs())
    .pipe(jscs.reporter())
    .pipe(jshint.reporter('fail'))
    .pipe(jscs.reporter('fail'));
});

gulp.task('watch', function() {
  gulp.watch([sources], ['default']);
});
