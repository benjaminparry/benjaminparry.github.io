// Require
var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var imageOptim = require('gulp-imageoptim');

// TODO
// https://github.com/johnotander/immutable-css
// var immutableCss = require('immutable-css');
// https://github.com/1000ch/gulp-stylestats
// var stylestats = require('gulp-stylestats');



// Tasks

// CSS
gulp.task('css', function () {
  var processors = [
    autoprefixer
  ];
  return gulp.src('./source/assets/css/*.css')
    .pipe(postcss(processors))
    .pipe(minifyCSS())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('./assets/css/'));
});

// Performance
gulp.task('images', function() {
    return gulp.src('./source/assets/img/**/*')
        .pipe(imageOptim.optimize())
        .pipe(gulp.dest('./assets/img/'));
});

// CSS Stats
// gulp.task('stylestats', function () {
//   gulp.src('./assets/css/*.css')
//     .pipe(stylestats());
// });



// Watch
gulp.task('watch', function () {
   gulp.watch('./source/assets/css/*.css', ['css']);
});

// Commands
gulp.task('default', ['css', 'images']);
