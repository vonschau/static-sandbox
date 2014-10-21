var version = document.getElementsByTagName('BODY')[0].getAttribute('data-script-version');

require.config({
	baseUrl:  '/components',
	urlArgs: 'version=' + version,
	paths: {
		'app': '../js/app',
		'domready': 'requirejs-domready/domReady',
		'lodash': 'lodash-amd/compat',
		'jquery': 'jquery/dist/jquery.min'
	},
	priority:['jquery']
});

require(['app/app'], function (App) {
	App.init();
});
