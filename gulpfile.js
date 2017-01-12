
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
const sequence = require('run-sequence')
const typescript = require('gulp-typescript')

const tsOptions = require('./tsconfig.json').compilerOptions
const tsProject = typescript.createProject(tsOptions)

// Compile with Typescript and pipe to Babel
gulp.task('build', () => {
  const tsResult =
    gulp.src(path.join(tsOptions.rootDir, '*.ts'))
      .pipe(tsProject())

  return merge(
    tsResult.js
      .pipe(babel())
      .pipe(gulp.dest(tsOptions.outDir)),
    tsResult.dts
      .pipe(gulp.dest(tsOptions.outDir))
  )
})

// Run Mocha tests
gulp.task('test', () =>
  gulp.src(path.resolve(tsOptions.outDir, 'test.js'))
    .pipe(mocha())
)

// Build and run tests
gulp.task('build+test', () =>
  sequence('build', 'test')
)

// Watch mode for development
gulp.task('dev', ['build+test'], () =>
  gulp.watch(
    path.resolve(tsOptions.rootDir, '**/*.ts'), ['build+test']
  )
)

gulp.task('default', ['build+test'])
