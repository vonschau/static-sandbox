var gulp = require('gulp');
var src = require('../src.js');

gulp.task('watch', ['setWatch', 'browserSync'], function() {

  gulp.watch(src.sass+'*', ['sass', 'scss']);
  gulp.watch(src.imagesSrc + '*', ['images']);
});
