// Grab our gulp packages
var gulp  = require('gulp'),
sass = require('gulp-sass')(require('sass')),
autoprefixer = require('gulp-autoprefixer'),
gs = gulp.series,
gp = gulp.parallel,
cached  = require('gulp-cached'),
dependents = require('gulp-dependents');


gulp.task('compile:styles', (done) => {
  return gulp.src('./src/scss/**/*.scss')
      .pipe(cached('sass'))
      .pipe(dependents())
      // .pipe(sourcemaps.init()) // Start Sourcemaps
      .pipe(sass({
        includePaths: ['node_modules']
      }).on('error', sass.logError))
      .pipe(autoprefixer())
      // .pipe(sourcemaps.write('.')) // Creates sourcemaps for minified styles
      .pipe(gulp.dest('./dist/css/'));

  done()
});

gulp.task('watch:styles', () => {
gulp.watch('./src/scss/**/*.scss', gs('compile:styles'))
    .on('change', function (event) {
        console.log("event happened:"+JSON.stringify(event));
        if (event.type === 'deleted') {
            //delete from gulp-remember cache
            //emember.forget('sass', event.path);
            //delete from gulp-cached cache
            delete cache.caches['sass'][event.path];
        }
    });
});

gulp.task('build', gs(
  'compile:styles',
  'watch:styles'
));
