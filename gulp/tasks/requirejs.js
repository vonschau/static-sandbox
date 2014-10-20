var gulp = require('gulp');
var rjs = require('gulp-requirejs');
var uglify = require('gulp-uglify');
var src = require('../src.js');

gulp.task('requirejs', function () {
	return rjs({
		baseUrl: src.requirejsBaseUrl,
		mainConfigFile: src.requirejsMainConfigFile,
		name: src.requirejsName,
		out: src.requirejsOut,
		paths: {
			requireLib: src.requirejsPatsRequireLib
		},
		include: ["requireLib"],
		findNestedDependencies: true
	})
		.pipe(uglify())
		.pipe(gulp.dest(src.folderJS));
});
