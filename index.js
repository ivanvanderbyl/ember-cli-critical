/* jshint node: true */
'use strict'

var critical = require('critical')
module.exports = {
  name: 'ember-cli-critical-css',

  async postBuild(result) {
    await critical
      .generate({
        inline: true,
        minify: true,
        base: result.directory,
        src: 'index.html',
        dest: 'index.html',
        width: 1300,
        height: 900,
      })
  },
}
