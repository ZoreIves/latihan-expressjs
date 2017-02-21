var gulp        = require('gulp');
var uglify      = require('gulp-uglify');
var html2jade   = require('gulp-html2jade');
var options     = {nmspaces: 2};

 gulp.task('scripts', function() {
     // Minify and copy all JavaScript (except vendor scripts)

 });

 gulp.task('jade', function() {
        gulp.src('html/*.html')
            .pipe(html2jade(options))
            .pipe(gulp.dest('views'))
 });


 gulp.task('default', ['scripts', 'jade']);
