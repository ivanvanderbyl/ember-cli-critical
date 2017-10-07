# `ember-cli-critical`

This addon adds an ember-cli post build hook which runs your built app through [Critical](https://github.com/addyosmani/critical/) 

> Critical extracts & inlines critical-path (above-the-fold) CSS from HTML

It will remove the extracted CSS from your stylesheets andm rewrite the link tags to point to the new files after inlining.

## Installation

    ember install ember-cli-critical

## Configuration

By default this addon will run only on production builds, but you can change this by overwriting
the `enabled` setting in your `ember-cli-build.js`

```js
{
  "ember-cli-critical": {
    enabled: true,
    critical: {
      // critical options
    }
  }
}

```

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`
