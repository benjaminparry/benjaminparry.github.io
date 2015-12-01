// Require
var gulp = require('gulp');
var shell = require('gulp-shell');
var csso = require('gulp-csso');
var rename = require('gulp-rename');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var imageOptim = require('gulp-imageoptim');
var cp = require('child_process');
var browserSync = require('browser-sync').create();
var cssstats = require('gulp-cssstats');

// TODO
// https://github.com/johnotander/immutable-css
// var immutableCss = require('immutable-css');
// https://github.com/1000ch/gulp-stylestats
// var stylestats = require('gulp-stylestats');



// Tasks

// CSS
gulp.task('css', function () {
  // PostCSS processors
  var processors = [
    autoprefixer
  ];
  // Task source
  return gulp.src('./source/assets/css/*.css')
    // PostCSS
    .pipe(postcss(processors))
    // Minify/Optimise
    .pipe(csso())
    // Rename the minified file
    .pipe(rename('main.min.css'))
    // Task destination
    .pipe(gulp.dest('./assets/css/'));
});

// Performance
gulp.task('images', function() {
    // Task source
    return gulp.src('./source/assets/img/**/*')
      // Optomise images
      .pipe(imageOptim.optimize())
      // Task destination
      .pipe(gulp.dest('./assets/img/'));
});

// Stats: CSS
gulp.task('cssstats', function() {
  gulp.src('./assets/css/main.min.css')
    .pipe(cssstats())
    .pipe(gulp.dest('./performance/css/'));
});

// Jekyll
gulp.task('jekyll', shell.task(['jekyll serve --watch']));

gulp.task('serve', function () {
    browserSync.init({server: {baseDir: '_site/'}});
    // Reloads page when some of the already built files changed:
    gulp.watch('_site/**/*.*').on('change', browserSync.reload);
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
gulp.task('dev', ['css', 'jekyll', 'serve']);

gulp.task('deploy', ['css', 'images', 'cssstats']);
