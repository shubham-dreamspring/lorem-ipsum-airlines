const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss");
const rename = require("gulp-rename");

function buildStyles() {
  return src("styles/scss/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(purgecss({ content: ["index.html", "pages/*.html"] }))
    .pipe(
      rename(function (file) {
        file.basename = file.basename + ".min";
      })
    )
    .pipe(dest("styles/css"));
}

function watchTask() {
  watch(["styles/scss/index.scss", "index.html", "pages/*.html"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
