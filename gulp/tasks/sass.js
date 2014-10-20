var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var handleErrors = require('../util/handleErrors');
var src = require('../src.js');

gulp.task('sass', ['images'], function () {
	return gulp.src(src.sass + '.{sass, scss}')
		.pipe(sass({
			sourcemapPath: '../sass'
		}))
		.on('error', handleErrors)
		.pipe(gulp.dest(src.folderCSS));
});
