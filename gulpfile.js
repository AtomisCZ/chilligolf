'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglifyjs');
var ftp = require('gulp-ftp');
var gutil = require('gulp-util');
var csso = require('gulp-csso');


gulp.task('serve', function() {
  	gulp.src('app/scripts/*.js')
    	.pipe(uglify())
    	.pipe(gulp.dest('dist'));

    gulp.src('app/styles/*.scss')
    	.pipe(sass().on('error', sass.logError))
    	.pipe(gulp.dest('dist'));

    gulp.src('app/*.php')
    	.pipe(sass().on('error', sass.logError))
   		.pipe(cleanCSS({compatibility: 'ie8'}))
    	.pipe(gulp.dest('dist'));
});

gulp.task('ftp', function () {
    return gulp.src('dist/*')
        .pipe(ftp({
            host: 'apitest.borec.cz',
            user: 'apitest.borec.cz',
            pass: '8dg3c3u6',
            remotePath: '/wp-content/themes/chilligolf'
        }))
        .pipe(gutil.noop());
});

