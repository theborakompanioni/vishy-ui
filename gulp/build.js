'use strict';

var fs = require('fs');
var gulp = require('gulp');
var pkg = require('../package.json');
var replace = require('gulp-replace-task');
var mainBowerFiles = require('main-bower-files');

var $ = require('gulp-load-plugins')();

var vishySettings = pkg.vishySettings;

gulp.task('styles', [], function () {

  return $.rubySass('app/styles/main.scss', {style: 'expanded'})
    .pipe($.autoprefixer({browsers: ['last 1 version']}))
    .pipe(gulp.dest('.tmp/styles'))
    .pipe($.size());
});

gulp.task('scripts', function () {
  return gulp.src([
    'app/lib/**/*.js',
    'app/scripts/**/*.js',
    'app/modules/**/*.js'
  ])
    .pipe($.jshint())
    .pipe($.jshint.reporter($.jshintStylish))
    .pipe($.size());
});

gulp.task('partials', function () {
  return gulp.src([
    'app/partials/**/*.html'
  ])
    .pipe(replace({
      patterns: [{
        match: 'vishy_script_src',
        replacement: vishySettings.scriptSrc
      }, {
        match: 'vishy_client_options',
        replacement: JSON.stringify(vishySettings.clientOptions)
      }]
    }))
    .pipe($.minifyHtml({
      empty: true,
      spare: true,
      quotes: true
    }))
    .pipe($.ngHtml2js({
      moduleName: "tbk.vishy-ui",
      prefix: "partials/"
    }))
    .pipe(gulp.dest(".tmp/partials"))
    .pipe($.size());
});

gulp.task('html', ['styles', 'scripts', 'partials'], function () {
  var jsFilter = $.filter('**/*.js');
  var cssFilter = $.filter('**/*.css');

  var assets = $.useref.assets();
  return gulp.src('app/*.html')
    .pipe($.inject(gulp.src('.tmp/partials/**/*.js'), {
      read: false,
      starttag: '<!-- inject:partials -->',
      addRootSlash: false,
      ignorePath: '.tmp'
    }))
    .pipe(assets)
    .pipe($.rev())
    .pipe(jsFilter)
    .pipe($.ngAnnotate())
    .pipe($.uglify())
    .pipe(jsFilter.restore())
    .pipe(cssFilter)
    .pipe($.csso())
    .pipe(cssFilter.restore())
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe($.revReplace())
    .pipe(gulp.dest('dist/app'))
    .pipe($.size());
});

gulp.task('images', function () {
  return gulp.src('app/images/**/*')
    .pipe($.cache($.imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('dist/app/images'))
    .pipe($.size());
});

gulp.task('bower-fonts', function () {
  return gulp.src(mainBowerFiles())
    .pipe($.filter('**/*.{eot,svg,ttf,woff}'))
    .pipe($.flatten())
    .pipe(gulp.dest('dist/app/fonts'))
    .pipe($.size());
});

/* Duplicate fonts into styles folder
 * for compatibility with github pages */
gulp.task('local-fonts', function () {
  return gulp.src(['app/fonts/**'])
    .pipe(gulp.dest('dist/app/styles/fonts'))
    .pipe($.size({title: 'fonts'}));
});

gulp.task('fonts', ['local-fonts', 'bower-fonts'], function () {
  return gulp.src(['app/fonts/**'])
    .pipe(gulp.dest('dist/app/fonts'))
    .pipe($.size({title: 'fonts'}));
});

gulp.task('clean', function () {
  return gulp.src(['.tmp', 'dist'], {read: false}).pipe($.clean());
});

gulp.task('build', ['html', 'partials', 'images', 'fonts']);
