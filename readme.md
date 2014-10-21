SYMBIO Static sandbox
=====================

Getting started
---------------

-	`npm install` install gulp dependencies
-	`bower install` install CSS and JS (Bourbon, Neat, normalize, jQuery, Lo-Dash, require.js, domReady and require.js plugins).

Bower dependencies are installed in `./web/components`.

Gulp
----

Gulp settings (mainly paths) are in `./gulp/src.js`.

### Tasks

-	`gulp` (`gulp default`) - task for dev environment. Utilize browsersync for preview and reloading, watch over SASS and Images.
-	`gulp deploy` - prepares website for production environment. Runs r.js + uglify2 and CSSO with depending tasks (SASS and Image optimalization)

### Libraries

-	[browser-sync](https://github.com/shakyShane/browser-sync)
-	[gulp-csso](https://github.com/ben-eb/gulp-csso)
-	[gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin)
-	[gulp-requirejs](https://github.com/robinthrift/gulp-requirejs)
-	[gulp-sass](https://github.com/dlmanning/gulp-sass)
-	[gulp-uglify](https://github.com/terinjokes/gulp-uglify/)
-	and some utilities...

SASS
----

SASS is using [normalize-scss](https://github.com/appleboy/normalize.scss). I'm used to build stylesheets around [Bourbon library](http://bourbon.io/) and [Bourbon Neat grid system](http://neat.bourbon.io/).

All these files are mapped in `./web/sass/style.sass`, which is compiled to `./web/css/style.css` and with `gulp deploy` minified into `./web/css/style.min.css`.

JS
--

As starter there is only jQuery, domReady for require.js and [lodash-amd](https://github.com/lodash/lodash-amd), as utility library.

They are mapped in `./web/js/main.js`. With use of `gulp build` final is build a minified via uglify2 into `./web/js/main.min.js`.

### lodash-amd

This is AMD port of classic Lo-Dash. Allows use only parts of library, so you don't need whole Lo-Dash. See example of use bellow:

```js
require({
  'packages': [
    { 'name': 'lodash', 'location': 'lodash-amd/modern' }
  ]
}, ['lodash/collections/forEach'], function(forEach) {
  // use `forEach`
});
```

Or look on `debounce()` use in app.js.

ToDo
----

-	Different loader? Maybe webpack...
