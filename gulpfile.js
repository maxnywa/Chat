const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    return gulp.src('source/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('app/css'));
});

gulp.task('watch', ['sass'], function () {
    gulp.watch('source/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['watch']);