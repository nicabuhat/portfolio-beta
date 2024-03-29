const { src, dest, watch } = require("gulp");
const scss = require("gulp-sass");
sass.compiler = require("node-sass");

/*
 * directories
 */
let paths = {
  src: "./src/",
  scss: "./src/sass/",
  css: "./build/assets/styles/"
};

//compile sass
function sass() {
  return src(paths.scss + "*.scss")
    .pipe(
      scss({
        includePaths: [paths.scss],
        outputStyle: "compressed"
      })
    )
    .pipe(dest(paths.css));
  // .pipe(browserSync.stream())
}

//watch sass
exports.default = function() {
  watch("src/sass/**/*.scss", sass);
};
