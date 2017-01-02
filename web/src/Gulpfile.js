var gulp = require('gulp')
var sass = require('gulp-sass')
var spawn = require('child_process').spawn

gulp.task('runserver', function(cb) {
    var proc = spawn('python', ['manage.py' ,'runserver', '0.0.0.0:8000'])
    proc.stdout.on('data', function(data){
        console.log(data.toString())
    })

    proc.stderr.on('data', function(data){
        console.log(data.toString())
    })

    proc.on('exit', function(code){
        console.log('child process exited with code: ', code.toString())
    })
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
