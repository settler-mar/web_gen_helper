'use strict';

module.exports = function() {
  $.gulp.task('frontend.jade', function() {
    return $.gulp.src('./source/pug_to_js/*.pug')
      .pipe($.gp.pug({
        externalRuntime: true,
        client:true,
        compileDebug:false
      }))
      .on('error', $.gp.notify.onError(function(error) {
        return {
          title: 'Jade-client',
          message:  error.message
        }
      }))
      .pipe($.gp.pugTemplateConcat('templates.js', {templateVariable:"templates"}))

      .pipe($.gulp.dest($.config.root+'/js'));
  });
};
