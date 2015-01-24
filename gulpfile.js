var gulp = require('gulp');
var react = require('gulp-react');
var inlinesource = require('gulp-inline-source');
var concat = require('gulp-concat');
var stylus = require('gulp-stylus');
var nib = require('nib');

gulp.task('copystatic', function() {
  return gulp.src(['src/index.html'])
    .pipe(gulp.dest('./build'));
});

gulp.task('compilecss', function() {
  return gulp.src('src/styles/*')
    .pipe(stylus({
      use: nib()
    }))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./build'));
});

gulp.task('buildcomponents', function() {
  return gulp.src('src/components/*')
    .pipe(react())
    .pipe(concat('components.js'))
    .pipe(gulp.dest('./build'));
});

gulp.task('buildapp', function() {
  return gulp.src('src/app.js')
    .pipe(react())
    .pipe(gulp.dest('./build'));
});

gulp.task('tumblrify', ['copystatic', 'compilecss', 'buildcomponents', 'buildapp'], function() {
  var options = {
    compress: false
  }

  return gulp.src('build/index.html')
    .pipe(inlinesource(options))
    .pipe(gulp.dest('./build'));
});

gulp.task('watch', ['tumblrify'], function() {
  gulp.watch('src/**', ['tumblrify']);
});

gulp.task('default', ['tumblrify']);