import watchify from "watchify";
import browserify from "browserify";
import gulp from "gulp";
import source from "vinyl-source-stream";
import buffer from "vinyl-buffer";
import gutil from "gulp-util";
import sourcemaps from "gulp-sourcemaps";
import cssModules from "css-modulesify";
import babelify from "babelify";

// add custom browserify options here
const customOpts = {
  entries: ['./app.js'],
  debug: true
};
const opts = Object.assign({}, watchify.args, customOpts);
const b = watchify(browserify(opts));

b.transform(babelify.configure({
  stage: 0
}));
b.plugin(cssModules, {
  rootDir: __dirname,
  output: './dist/app.css',
  postcssAfter: ['cssnext']
});

gulp.task('js', bundle);
b.on('update', bundle); // on any dep update, runs the bundler
b.on('log', gutil.log); // output build logs to terminal

gulp.task('manifest', function() {
    gulp
        .src('manifest.json')
        .pipe(gulp.dest('./dist/'));
});

gulp.task('dev', ['default'], function() {
    gulp.watch('manifest.json', ['manifest']);
});

gulp.task('default', ['js', 'manifest'])

function bundle() {
  return b.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
    .pipe(sourcemaps.write('./')) // writes .map file
    .pipe(gulp.dest('./dist'));
}
