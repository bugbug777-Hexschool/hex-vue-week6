const { src } = require('gulp');
const ghPages = require('gulp-gh-pages');

function deploy(cb) {
  src('dist/**/*').pipe(ghPages());
  cb();
}
exports.deploy = deploy;
