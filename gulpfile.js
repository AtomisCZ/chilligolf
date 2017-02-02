'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglifyjs');



gulp.task('serve', function() {
  	gulp.src('app/scripts/*.js')
    	.pipe(uglify())
    	.pipe(gulp.dest('dist'));

    gulp.src('app/styles/*.scss')
    	.pipe(sass().on('error', sass.logError))
   		.pipe(cleanCSS({compatibility: 'ie8'}))
    	.pipe(gulp.dest('dist'));
});