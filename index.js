/* jshint node: true */
'use strict'

const critical = require('critical')
const fs = require('fs')
const path = require('path')
const defaults = require('lodash.defaultsdeep')

module.exports = {
  name: 'ember-cli-critical',

  included(app) {
    let defaultOptions = {
      enabled: app.env === 'production',

      critical: {
        inline: true,
        minify: false,
        extract: true,
        src: 'index.html',
        dest: 'index.html',
        width: 1300,
        height: 900,
      },
    }
    this._options = defaults(this._getAddonOptions()[this.name] || {}, defaultOptions)
  },

  async postBuild(result) {
    let addonOptions = this._options

    if (addonOptions.enabled) {
      let cssFiles = fs
        .readdirSync(path.join(result.directory, 'assets'))
        .filter(path => path.endsWith('.css'))
        .map(file => path.posix.join(result.directory, 'assets', file))

      await critical.generate(
        defaults(addonOptions.critical, {
          inline: true,
          minify: false,
          extract: true,
          base: result.directory,
          src: 'index.html',
          dest: 'index.html',
          css: cssFiles,
          width: 1300,
          height: 900,
        })
      )
    }
  },

  _getAddonOptions: function() {
    return (this.parent && this.parent.options) || (this.app && this.app.options) || {}
  },
}
