define(['domready', 'lodash/functions/debounce', 'jquery'], function (domready, debounce, $) {

	var App = {};


	window.App = App;


	App.cache = {};


	App.fillCache = function () {
		App.cache.window = $(window);
	};


	App.init = function () {

		domready(function () {

			App.fillCache();

			// debounce for resize
			App.cache.window.on('resize', debounce(resize, 100, true));

			// Trigger resize for firing width dependent functions
			App.cache.window.trigger('resize');
		});
	};

	function resize() {
		console.log('resized');
	}

	return App;

});
