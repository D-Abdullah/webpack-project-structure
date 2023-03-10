const allTestFiles: any[] = [];
const TEST_REGEXP = /(spec|test)\.ts$/i;

// Get a list of all the test files to include
Object.keys(window["__karma__"].files).forEach(function (file) {
	if (TEST_REGEXP.test(file)) {
		// Normalize paths to RequireJS module names.
		// If you require sub-dependencies of test files to be loaded as-is (requiring file extension)
		// then do not normalize the paths
		const normalizedTestModule: string = file.replace(/^\/spec\/|\.ts$/g, '');
		allTestFiles.push(normalizedTestModule);
	}
});
// @ts-ignore
require.config({
	// Karma serves files under /base, which is the basePath from your config file
	baseUrl: './spec',

	// dynamically load all test files
	deps: allTestFiles,

	// we have to kickoff jasmine, as it is asynchronous
	callback: window["__karma__"].start
});
