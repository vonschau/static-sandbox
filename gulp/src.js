module.exports = {
    //
    // PATHS ARE RELATIVE TO Gulpfile.js
    //

    // Browsersync
    //      Choose one of settings bellow:
    //      - server for static file
    //      - proxy for local domain
    browserSyncSettings: {
        server: {
            baseDir: "./web/"
        }
    },
    // browserSyncSettings: {
    // 	  proxy: "domain.name"
    // }

    // Markup
    html: "./web/static/*.html",
    twig: "./src/Magnesia/DefaultBundle/Resources/views/Default/*.html.twig",

    // JavaScript
	js: "./web/js/*.js",
    jsApp: "./web/js/app/*.js",
    folderJS: "./web/js/",

    // RequireJS
    requirejsBaseUrl: "./web/components",
    requirejsMainConfigFile: "web/js/main.js",
    requirejsName: "../js/main",
    requirejsOut: "main.min.js",
    requirejsPatsRequireLib: "../components/requirejs/require",

    // Stylesheet
	sass: "./web/sass/*",
    css: "./web/css/*.css",
    folderCSS: "./web/css/",

    // Images
	imagesSrc: "./web/images/src/*",
    folderImages: "./web/images"

};
