var gulp = require("gulp");
var gutil = require("gulp-util");
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var watchify = require("watchify");
var tsify = require("tsify");

//var HTML
var htmlWatchFolder = "src/**/*.html"

//var SASS
var sassWatchFolder = './src/scss/**/*.scss';
var sassInput = './src/scss/**/*.scss';
var sassOutputFolder = './dist/css';
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};
var sassAutoprefixerOptions = {
  browsers: ['> 1%']
};

//var TYPESCRIPT
var tsWatchFolder = './src/js/**/*.ts';
var tsInput = './src/js/main.ts';
var tsOutputFolder = './dist/js'
var tsOutput = 'bundle.js'

//task HTML
gulp.task("copy-html", function () {
    return gulp.src(htmlWatchFolder)
        .pipe(gulp.dest("dist"));
});

//task TYPESCRIPT
gulp.task("typescript", function(){
    return watchify(browserify({
            basedir: '.',
            debug: true,
            entries: [tsInput],
            cache: {},
            packageCache: {}
        }).plugin(tsify))
        .bundle()
        .pipe(source(tsOutput))
        .pipe(gulp.dest(tsOutputFolder));
});

//task SASS
gulp.task('sass', function () {
  return gulp
    .src(sassInput)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer(sassAutoprefixerOptions))
    .pipe(gulp.dest(sassOutputFolder));
});

//task WATCH
gulp.task("watch", function() {
    gulp
        .watch(sassWatchFolder, ["sass"])
        .on("change", function(event) {
            console.log("File " + event.path + " was " + event.type + ", running tasks...");
        });

    gulp
        .watch(tsWatchFolder, ["typescript"])
        .on("change", function(event) {
            console.log("File " + event.path + " was " + event.type + ", running tasks...");
        });
    gulp
        .watch(htmlWatchFolder, ["copy-html"])
        .on("change", function(event) {
            console.log("File " + event.path + " was " + event.type + ", running tasks...");
        });
});


//task DEFAULT
gulp.task("default", ["copy-html","typescript","sass","watch"], function(){
    console.log("Task run!")
});







// var watchedBrowserify = watchify(browserify({
//     basedir: '.',
//     debug: true,
//     entries: ['src/js/main.ts'],
//     cache: {},
//     packageCache: {}
// }).plugin(tsify));
// function bundle() {
//     return watchedBrowserify
//         .bundle()
//         .pipe(source('js/bundle.js'))
//         .pipe(gulp.dest("dist"));
// }
// watchedBrowserify.on("update", bundle);
// watchedBrowserify.on("log", gutil.log);