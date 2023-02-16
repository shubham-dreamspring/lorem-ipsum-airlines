const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss");

function buildStyles() {
  return src("styles/scss/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(purgecss({ content: ["*.html"] }))
    .pipe(dest("styles/css"));
}

function watchTask() {
  watch(["styles/scss/index.scss", "*.html"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
