var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var tsc = require('gulp-typescript');
var replace = require('gulp-replace-task');
var fs = require('file-system');
var gutil = require('gulp-util');
var conf = require('./fb-config.json');
var del = require('del');


var typescriptOptions = {
  target: 'ES5',
  //module: 'ES6',
  declarationFiles: false,
  noExternalResolve: true,
  experimentalDecorators: true,
  emitDecoratorMetadata: true,
  noEmitOnError: true
};



gulp.task('compile-ts', function() {

  var tsResult = gulp.src(['app/**/*.ts', 'typings/**/*.ts'])
    .pipe(tsc(typescriptOptions))
    .pipe(gulp.dest('build'));

});

gulp.task('replace-keys', function () {

  gulp.src('app/*.html')
    .pipe(replace({
      patterns: [
        {
          match: 'api-key',
          replacement: conf.apiKey
        },
        {
          match: 'auth-domain',
          replacement: conf.authDomain
        },
        {
          match: 'database-url',
          replacement: conf.databaseURL
        },
      ]
    }))
    .pipe(gulp.dest('build'));
});

gulp.task('build', ['compile-ts', 'replace-keys']);

gulp.task('clean', del.bind(null, ['build']));