// Karma configuration
// Generated on Wed Jan 04 2023 16:14:15 GMT+0200 (Eastern European Standard Time)

module.exports = function (config: {
		set: (arg0: {
			// base path that will be used to resolve all patterns (eg. files, exclude)
			basePath: string;
			// frameworks to use
			// available frameworks: https://www.npmjs.com/search?q=keywords:karma-adapter
			frameworks: string[];
			// list of files / patterns to load in the browser
			files: (string | { pattern: string; included: boolean; })[];
			// list of files / patterns to exclude
			exclude: never[];
			// preprocess matching files before serving them to the browser
			// available preprocessors: https://www.npmjs.com/search?q=keywords:karma-preprocessor
			preprocessors: {};
			// test results reporter to use
			// possible values: 'dots', 'progress'
			// available reporters: https://www.npmjs.com/search?q=keywords:karma-reporter
			reporters: string[];
			// web server port
			port: number;
			// enable / disable colors in the output (reporters and logs)
			colors: boolean;
			// level of logging
			// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
			logLevel // enable / disable colors in the output (reporters and logs)
			: any;
			// enable / disable watching file and executing tests whenever any file changes
			autoWatch: boolean;
			// start these browsers
			// available browser launchers: https://www.npmjs.com/search?q=keywords:karma-launcher
			browsers: string[];
			// Continuous Integration mode
			// if true, Karma captures browsers, runs the tests and exits
			singleRun: boolean // start these browsers
			;
			// Concurrency level
			// how many browser instances should be started simultaneously
			// available browser launchers: https://www.npmjs.com/search?q=keywords:karma-launcher
			concurrency: number;
		}) => void; LOG_INFO: any;
	}) {
	config.set({
		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: './spec',

		// frameworks to use
		// available frameworks: https://www.npmjs.com/search?q=keywords:karma-adapter
		frameworks: ['jasmine', 'requirejs'],

		// list of files / patterns to load in the browser
		files: [
			'karma.main.test.ts',
			{ pattern: 'spec/**/*spec.ts', included: false },
		],

		// list of files / patterns to exclude
		exclude: [],

		// preprocess matching files before serving them to the browser
		// available preprocessors: https://www.npmjs.com/search?q=keywords:karma-preprocessor
		preprocessors: {},

		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://www.npmjs.com/search?q=keywords:karma-reporter
		reporters: ['progress'],

		// web server port
		port: 9876,

		// enable / disable colors in the output (reporters and logs)
		colors: true,

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,

		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,

		// start these browsers
		// available browser launchers: https://www.npmjs.com/search?q=keywords:karma-launcher
		browsers: [
			'Chrome',
			'ChromeHeadless',
			'Firefox',
			'ChromeCanary',
			'Safari',
			'PhantomJS',
			'Opera',
			'IE',
		],

		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false,

		// Concurrency level
		// how many browser instances should be started simultaneously
		concurrency: Infinity,
	});
};
