var gulp = require('gulp')
var sass = require('gulp-sass')
var exec = require('child_process').exec

gulp.task('runserver', function(cb) {
    var proc = exec('python manage.py runserver 0.0.0.0:8000')
})

gulp.task('sass', function() {
    return gulp.src('./static/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./static/css'))
})

gulp.task('watch', function() {
    gulp.watch('./static/scss/*.scss', ['sass'])
})

gulp.task('default', ['runserver', 'watch'])
