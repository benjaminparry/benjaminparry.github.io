module.exports = function( grunt ) {
	// load time-grunt and all grunt plugins found in the package.json
	require( 'time-grunt' )( grunt );
	require( 'load-grunt-tasks' )( grunt );
	grunt.initConfig({
		csslint : {
			test : {
				options : {
					import : 2
				},
				src : [
					'src/css/main.css'
				]
			}
		},

		concat : {
			dist : {
				src : [
					'src/css/main.css'
				],
				dest : 'assets/css/main.css',
			}
		},

		cssmin : {
			dist : {
				src : 'assets/css/main.css',
				dest : 'assets/css/main.min.css'
			}
		},

		shell : {
			jekyllBuild : {
				command : 'jekyll build'
			},
			jekyllServe : {
				command : 'jekyll serve'
			}
		},

		watch : {
			files : [
				// Layouts and includess
				'_layouts/*.html',
				'_includes/*.html',
				// Posts
				'_posts/*.md',
				// Collections
				'_thoughts/*.md',
				'_links/*.md',
				'_working/*.md',
				// Pages
				'*.html',
				'*.md',
				// Source
				'src/css/*.css',
				// Assets
				// Jekyll
				'_config.yml'
			],
			tasks : [
				'concat',
				'cssmin',
				'shell:jekyllServe'
			],
			options : {
				spawn : false,
				interrupt : true,
				atBegin : true,
				livereload : true
			}
		}
	});

	// register custom grunt tasks
	grunt.registerTask( 'test', [
			'csslint'
		]
	);
	grunt.registerTask( 'deploy', [
			'concat',
			'cssmin',
			'shell:jekyllBuild'
		]
	)
};