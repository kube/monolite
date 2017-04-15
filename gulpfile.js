
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

gulp.task('build', build)
gulp.task('default', build)
