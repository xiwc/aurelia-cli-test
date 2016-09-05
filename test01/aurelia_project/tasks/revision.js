import gulp from 'gulp';
import replace from 'gulp-replace';
import rev from 'gulp-rev';
import intercept from 'gulp-intercept';
import del from 'del';
import moment from 'moment';
import project from '../aurelia.json';
import path from 'path';

let timestamp = moment().format('YYYYMMDDHHmmss');
let appBundle = null;

export function cacheBuster() {
    return gulp.src('index.html')
        .pipe(replace(/\?rev=\d{14}/g, `?rev=${timestamp}`))
        .pipe(gulp.dest('./'));
}

export function appVersion() {
    return gulp.src('version.json')
        .pipe(replace(/\d{14}/g, timestamp))
        .pipe(gulp.dest('./'));
}

export function revAppBundle() {
    del(['scripts/app-bundle-*.js']).then(paths => {
        console.log('Deleted files and folders:\n', paths.join('\n'));
    });
    return gulp.src('scripts/app-bundle.js')
        .pipe(rev())
        .pipe(intercept((file) => {
            appBundle = path.basename(file.path, '.js');
            console.log('appBundle file name: ' + appBundle);
            return file;
        }))
        .pipe(gulp.dest('scripts/'));
}

export function injectAppBundle() {
    return gulp.src('scripts/vendor-bundle.js')
        .pipe(replace(/\.\.\/scripts\/app-bundle[^"]*"/g, `../scripts/${appBundle}"`))
        .pipe(gulp.dest('./scripts'));
}

export default gulp.series(
    // cacheBuster,
    // appVersion,
    revAppBundle,
    injectAppBundle
);
