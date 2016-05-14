'use strict'

var gulp = require('gulp');
var glob = require('glob');
var merge = require('merge2');
var concat = require('gulp-concat');
var less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');

var CSS = 'app/src/css/**/*';
var CSS_DEST = 'build/';

function onError(err) {
  console.log(err);
  this.emit('end');
}

// prod
gulp.task('prod', function () {
  var lessStream = gulp.src(CSS + '.less')
    .pipe(less())
    .on('error', onError)
    .pipe(concat('less-files.less'));

  var cssStream = gulp.src(CSS + '.css')
    .pipe(concat('css-files.css'));

  return merge(lessStream, cssStream)
    .pipe(concat('style.min.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest(CSS_DEST));
});

// dev
gulp.task('dev', function(){
  var lessStream = gulp.src(CSS + '.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    .on('error', onError)
    .pipe(concat('less-files.css'))
    .pipe(sourcemaps.write());

  var cssStream = gulp.src(CSS + '.css')
    .pipe(sourcemaps.init())
    .pipe(concat('css-files.css'))
    .pipe(sourcemaps.write());

  return merge(lessStream, cssStream)
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest(CSS_DEST));
});

gulp.task('watch', ['dev'], function(){
  gulp.watch([CSS], ['dev'])
});

gulp.task('default', ['watch']);
