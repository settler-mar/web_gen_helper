'use strict';
global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    task: require('./gulp/paths/tasks.js')
  },
  gulp: require('gulp'),
  rimraf: require('rimraf'),
  gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'css.modify',
    'frontend.jade',
    $.gulp.series(
      'fonts',
      'fonts_css:concat',
      'fonts_css:clear'
    )
  )
));

