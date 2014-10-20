var gulp = require('gulp');
var csso = require('gulp-csso');
var rename = require("gulp-rename");
var handleErrors = require('../util/handleErrors');
var src = require('../src.js');

gulp.task('csso', ['sass'], function () {
	return gulp.src(src.css)
		.pipe(csso())
		.pipe(rename({
			suffix: ".min"
		}))
		.on('error', handleErrors)
		.pipe(gulp.dest(src.folderCSS));
});
