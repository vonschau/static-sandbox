var changed = require('gulp-changed');
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var src = require("../src.js");

gulp.task('images', function () {
	return gulp.src(src.imagesSrc)
		.pipe(changed(src.folderImages)) // Ignore unchanged files
		.pipe(imagemin()) // Optimize
		.pipe(gulp.dest(src.folderImages));
});
