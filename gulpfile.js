'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('clean', function() {
	return gulp.src('css')
		.pipe(plugins.clean());
});

gulp.task('less', function() {
	return gulp.src(['less/**/*.less', 'test/**/*.less'])
		.pipe(plugins.plumber({errorHandler: plugins.notify.onError('Error: <%= error.message %>')})) // 防止less出错，自动退出watch
		.pipe(plugins.less())
		.pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
	gulp.watch(['less/**/*.less', 'test/**/*.less'], ['less']);
});

gulp.task('default', ['clean'], function() {
	gulp.run('less', 'watch');
});