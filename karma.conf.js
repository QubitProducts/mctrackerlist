module.exports = function(karma) {
  karma.set({

    frameworks: [ 'browserify', 'mocha', 'chai'],
    files: [
        'test/**/*_test.js',
        {pattern: 'test/**/*.js', included: false}
    ],
    preprocessors: {
      'test/**/*_test.js': [ 'browserify' ]
    },

    browserify: {
      debug: true
    },

    autoWatch: true,

    browsers: ['Chrome']

  });
};