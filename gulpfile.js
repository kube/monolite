
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

const gulp = require('gulp')
const path = require('path')
const merge = require('merge-stream')
const babel = require('gulp-babel')
const mocha = require('gulp-mocha')
const typescript = require('gulp-typescript')

const tsOptions = require('./tsconfig.json').compilerOptions
const tsProject = typescript.createProject(tsOptions)
const tsSources = path.join(tsOptions.rootDir, '*.ts')

// Compile with Typescript and pipe to Babel
const build = () => {
  const tsResult =
    gulp.src(tsSources)
      .pipe(tsProject())

  return merge(
    tsResult.js
      .pipe(babel())
      .pipe(gulp.dest(tsOptions.outDir)),
    tsResult.dts
      .pipe(gulp.dest(tsOptions.outDir))
  )
}

// Run Mocha tests
const test = () =>
  gulp.src(path.join(tsOptions.outDir, 'test.js'))
    .pipe(mocha())

// Watch mode for development
const watch = () =>
  gulp.watch(tsSources, gulp.series(build, test))

gulp.task('build', build)
gulp.task('test', test)
gulp.task('default', gulp.series(build, test))
gulp.task('dev', gulp.series(build, test, watch))
