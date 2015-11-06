
module.exports = function(grunt){

	require("load-grunt-tasks")(grunt);

    var banner = grunt.template.process(
        grunt.file.read("src/banner.js"),
        {data: grunt.file.readJSON("package.json")}
    );

	grunt.initConfig({
		uglify: {
			build: {
				options: {
					banner: banner,
					preserveComments: "some"
				},
				files: {
					"dist/head.import.min.js": ["src/head.import.js"]
				}
			},
			unify: {
				options: {
					preserveComments: "some"
				},
				files: {
					"dist/head.import.unified.min.js": [
						"dist/head.import.unified.js"
					]
				}
			}
		},
		concat: {
			build: {
				options: {
					banner: banner
				},
				files: {
					"dist/head.import.js": ["src/head.import.js"],
				}
			},
			unify: {
				files: {
					"dist/head.import.unified.js": [
						"bower_components/headjs/dist/1.0.0/head.load.js",
						"dist/head.import.js"
					]
				}
			}
		}
	});

	grunt.registerTask("devault", []);
	grunt.registerTask("build", ["uglify:build", "concat:build", "concat:unify", "uglify:unify"]);

};
