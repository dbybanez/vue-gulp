const gulp        = require("gulp");
const sass        = require("gulp-sass");
const cleanCSS    = require('gulp-clean-css');
const rename      = require("gulp-rename");

sass.compiler = require('node-sass');

// Compile SCSS into CSS

function style() {
  // 1. where is my scss files or 'app/scss/**/*.scss'
  return gulp.src('src/assets/scss/app.scss', {sourcemaps: true})
  // 2. pass that file through the sass compiler
    .pipe(sass().on('error', sass.logError))
  // 3. rename the output
    .pipe(rename('custom-style.css'))
  // 4. where do i save the compiled CSS?
    .pipe(gulp.dest('src/assets/css', {sourcemaps: true}))
  // 5. minify and check compatibility
    .pipe(cleanCSS({compatibility: 'ie8'}))
  // 6. rename to .min
    .pipe(rename({suffix: '.min'}))
  // 7. add to app/css directory
    .pipe(gulp.dest('src/assets/css', {sourcemaps: true}))
}

function bootstrap() {
  // 1. where is my scss files or 'app/scss/**/*.scss'
  return gulp.src('src/assets/scss/bootstrap.scss', {sourcemaps: true})
  // 2. pass that file through the sass compiler
    .pipe(sass().on('error', sass.logError))
  // 3. rename the output
    .pipe(rename('custom-bootstrap.css'))
  // 3. where do i save the compiled CSS?
    .pipe(gulp.dest('src/assets/css', {sourcemaps: true}))
  // 5. minify and check compatibility
    .pipe(cleanCSS({compatibility: 'ie8'}))
  // 6. rename to .min
    .pipe(rename({suffix: '.min'}))
  // 7. add to app/css directory
    .pipe(gulp.dest('src/assets/css', {sourcemaps: true}))
}

function watch() {
  gulp.watch('src/assets/scss/**/*.scss', style);
  gulp.watch('src/assets/scss/**/*.scss', bootstrap);
}

exports.style = style;
exports.watch = watch;