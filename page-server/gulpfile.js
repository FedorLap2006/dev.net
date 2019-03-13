var gulp = require('gulp');

var less = require('gulp-less');

gulp.task('css-compile',() => {
	return gulp.src('public/test.less')
		.pipe(less())
		.pipe(gulp.dest('public/'));
});

gulp.task();

gulp.task('watch',() => {
		gulp.watch('public/*.less',gulp.series(['css-compile']));
});

gulp.task('default',gulp.series('watch'));