module.exports = function(grunt) {
    grunt.initConfig({
        browserify: {
            sample: {
                files: {
                    "hoge.js": ["c.js"]
                },
            }
        }
    });

    grunt.loadNpmTasks("grunt-browserify");
    grunt.registerTask("default", ["browserify"]);
};
