var gulp = require('gulp');
var jade = require('gulp-jade');

gulp.task('jade', function () {
    var YOUR_LOCALS = {};
    gulp.src('layout/index.jade')
        .pipe(jade({
            locals: YOUR_LOCALS,
            pretty: true
        }))
        .pipe(gulp.dest(''));
});

gulp.task('watch', function () {
    gulp.watch('layout/**/*.jade', ['jade']);
    // Other watchers
});



//gulp.task('server', function() {
//    gulp.src('./')
//        .pipe(server({
//            port: 3000,
//            livereload: true,
//            //directoryListing: true,
//            directoryListing: {
//                enable: false,
//                path: './'
//            },
//            fallback: 'app/info.html',
//            open: true
//        }))
//        .pipe(debug({title: 'Debugger says:'}));
//});

gulp.task('default', ['jade', 'jade-guide' , 'watch']);