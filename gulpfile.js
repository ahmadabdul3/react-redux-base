var gulp = require('gulp');
var sass = require('gulp-sass');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');

var onWebpackBuild = function(done) {
  return function(err, stats) {
    if (err) console.warn('Error', err);
    else console.warn(stats.toString('minimal'));
    if (done) done();
  };
};

gulp.task('buildStyles', function() {
  return gulp.src('./src/scss/to-prod/main-dashboard.scss')
    .pipe(sass({
        outputStyle: 'compressed',
    }).on('error', sass.logError))
    .pipe(autoprefixer({ browsers: ['last 5 versions'] }))
    .pipe(rename('index.css'))
    .pipe(gulp.dest('./public/stylesheets'));
});
gulp.task('buildStyles:watch', ['buildStyles'], function(done) {
    gulp.watch('src/scss/**/*.scss', ['buildStyles']);
    done();
});


gulp.task('buildJs', function(done) {
  webpack(webpackConfig).run(onWebpackBuild(done));
});
gulp.task('buildJs:watch', ['buildJs'], function() {
  webpack(webpackConfig).watch(100, onWebpackBuild());
})

gulp.task('watch', ['buildStyles:watch', 'buildJs:watch']);
