var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var tsc = require('gulp-typescript');


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
    .pipe(gulp.dest('app'));

});