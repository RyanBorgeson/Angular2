/// <binding AfterBuild='moveToLibs' />
var gulp = require('gulp');
var typescript = require('gulp-typescript');

gulp.task('moveToLibs', function (done) {
    gulp.src([
      'node_modules/angular2/bundles/js',
      'node_modules/angular2/bundles/angular2.*.js*',
      'node_modules/angular2/bundles/angular2-polyfills.js',
      'node_modules/angular2/bundles/http.*.js*',
      'node_modules/angular2/bundles/router.*.js*',
      'node_modules/es6-shim/es6-shim.min.js*',
      'node_modules/angular2/es6/dev/src/testing/shims_for_IE.js',
      'node_modules/systemjs/dist/*.*',
      'node_modules/jquery/dist/jquery.*js',
      'node_modules/bootstrap/dist/js/bootstrap*.js',
      'node_modules/rxjs/bundles/Rx.js'
    ]).pipe(gulp.dest('./Scripts'));

    gulp.src([
      'node_modules/bootstrap/dist/css/bootstrap.css'
    ]).pipe(gulp.dest('./Content/css'));
});

gulp.task('CompileTS', function () {
    return gulp.src('Scripts/app/*.ts')
		.pipe(typescript({
		    noImplicitAny: true,
		    out: 'output.js'
		}))
		.pipe(gulp.dest('Scripts/app/'));
});