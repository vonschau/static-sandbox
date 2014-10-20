var browserSync = require('browser-sync');
var gulp = require('gulp');
var src = require('../src.js');

gulp.task('browserSync', ['sass'], function () {
	browserSync.init([ src.html, src.js, src.jsApp, src.css, src.twig],
		src.browserSyncSettings
	);
});
