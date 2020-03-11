const themename = 'gulptheme';

// You can declare multiple variables with one statement by starting with var and seperate the variables with a comma and span multiple lines.
// Below are all the Gulp Plugins we're using.
const gulp          = require('gulp'),
      autoprefixer  = require('gulp-autoprefixer'),
      browserSync   = require('browser-sync').create(),
      reload        = browserSync.reload,
      sass          = require('gulp-sass'),
      concat        = require('gulp-concat'),
      uglify        = require('gulp-uglify');

const root          = '../' + themename + '/',
      scss          = root + 'sass/',
      js            = root + 'src/js/',
      jsDist        = root + 'dist/js/';

const phpWatchFiles   = root + '**/*.php',
      styleWatchFiles = scss + '**/*.scss';

const jsSrc = [
      js + 'bootstrap.bundle.js',
      js + 'bootstrap-hover.js',
      js + 'nav-scroll.js',
      js + 'prism.js',
      js + 'resizeSensor.js',
      js + 'sticky-sidebar.js',
      js + 'sticky-sb.js',
      js + 'skip-link-focus-fix.js'
];

function css() {
  return gulp.src(scss + 'style.scss', { sourcemaps: true })
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest(root, { sourcemaps: '.' }));
}

function editorCSS() {
  return gulp.src(scss + 'style-editor.scss' )
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(gulp.dest(root + 'dist/'));
}

function javascript() {
  return gulp.src(jsSrc)
    .pipe(concat('gulptheme.js'))
    .pipe(uglify())
    .pipe(gulp.dest(jsDist));
}

function watch() {
    browserSync.init({
      open: 'external',
      proxy: 'http://localhost:8888/animal',
    });
    gulp.watch(styleWatchFiles, css);
    gulp.watch(styleWatchFiles, editorCSS);
    gulp.watch(jsSrc, javascript);
    gulp.watch([phpWatchFiles, jsDist + 'gulptheme.js', root + 'style.css']).on('change', reload);
}

exports.css = css;
exports.editorCSS = editorCSS;
exports.javascript = javascript;
exports.watch = watch;

const build = gulp.series(watch);
gulp.task('default', build);