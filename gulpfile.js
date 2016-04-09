// https://codegaze.github.io/2016/01/09/a-jekyll-workflow-with-gulp/

// Require all the things
const gulp = require('gulp'),
      sass = require('gulp-sass'),
      gutil = require('gulp-util'),
      plumber = require('gulp-plumber'),
      rename = require('gulp-rename'),
      cleanCSS = require('gulp-clean-css'),
      csscomb = require('gulp-csscomb');
      prefixer = require('gulp-autoprefixer'),
      connect = require('gulp-connect');
      cp = require('child_process');
      browserSync = require('browser-sync').create();

// Set the path variables
const base_path = './',
      src = base_path + 'source/assets',
      dist = base_path + 'assets',
      paths = {  
          js: src + '/js/*.js',
          scss: [ src +'/css/*.scss', 
                  src +'/css/**/* .scss', 
                  src +'/css/**/**/*.scss'],
          jekyll: ['index.html', '_posts/*', '_layouts/*', '_includes/*' , 'assets/*', 'assets/**/*', 'collecting/**/*']
      };


// Compile sass to css
gulp.task('compile-sass', () => {  
  return gulp.src(paths.scss)
    .pipe(plumber((error) => {
        gutil.log(gutil.colors.red(error.message));
        gulp.task('compile-sass').emit('end');
    }))
    .pipe(sass())
    .pipe(prefixer('last 3 versions', 'ie 9'))
    .pipe(csscomb())
    .pipe(cleanCSS())
    .pipe(rename({
      dirname: dist + '/css',
      suffix: ".min"
    }))
    .pipe(gulp.dest('./'));
});

// Rebuild Jekyll 
gulp.task('build-jekyll', (code) => {
  return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
    .on('error', (error) => gutil.log(gutil.colors.red(error.message)))
    .on('close', code);
})

// Setup Server
gulp.task('server', () => {
  connect.server({
    root: ['_site'],
    port: 4000
  });
})

// Watch files
gulp.task('watch', () => {  
  gulp.watch(paths.scss, ['compile-sass']);
  gulp.watch(paths.jekyll, ['build-jekyll']);
  
  browserSync.init({server: {baseDir: '_site/'}});
  // Reloads page when some of the already built files changed:
  gulp.watch('_site/**/*.*').on('change', browserSync.reload);
});

// Start Everything with the default task
gulp.task('default', [ 'compile-sass', 'build-jekyll', 'server', 'watch' ]);
