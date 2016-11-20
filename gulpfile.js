
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
const typescript = require('gulp-typescript')

const tsOptions = require('./tsconfig.json').compilerOptions

gulp.task('build', () => {
  const tsResult =
    gulp.src(path.join(tsOptions.rootDir, '*.ts'))
      .pipe(typescript(tsOptions))

  return merge(
    tsResult.js
      .pipe(babel())
      .pipe(gulp.dest(tsOptions.outDir)),
    tsResult.dts.pipe(gulp.dest(tsOptions.outDir))
  )
})
