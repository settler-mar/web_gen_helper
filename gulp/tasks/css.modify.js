'use strict';

module.exports = function() {
  $.gulp.task('css.modify', function() {
    return $.gulp.src('./source/css/*.css')
      .pipe($.gp.autoprefixer({ browsers: $.config.autoprefixerConfig }))
      .pipe($.gp.groupCssMediaQueries())
      /*.pipe($.gp.csso({
        restructure: false
      }))*/
      .pipe($.gulp.dest($.config.root + '/css'))
  })
};
