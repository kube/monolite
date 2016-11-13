
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

const typescriptOptions = require('./tsconfig.json').compilerOptions

gulp.task('build', () => {
  const tsResult =
    gulp.src(path.join(typescriptOptions.rootDir, '*.ts'))
      .pipe(typescript(typescriptOptions))

  return merge(
    tsResult.js
      .pipe(babel())
      .pipe(gulp.dest('dist')),
    tsResult.dts.pipe(gulp.dest('dist'))
  )
})
