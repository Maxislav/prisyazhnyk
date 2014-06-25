module.exports = function (grunt) {

    // Задачи
    grunt.initConfig({
        // Склеиваем

        uglify: {
            options: {
                //sourceMap: true
				mangle: false
            },
            main: {
                files: {
                    // Результат задачи concat
                    'build/scripts.min.js': [
                        "lib/jquery/jquery-min.js",
						'js/app.js',
						'js/timer.js',
						'js/main.js',
						'lib/jquery/dateFormat.js'
                    ]

                }
            }
        },

        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2,
                    sourceMap: false
                    /*sourceMap: true,
                    sourceMapFilename: 'css/css.min.css.map',
                    sourceMapRootpath: '../'*/
                },
                files: {
                    //  "module/dtp/dtp.css": "module/dtp/dtp.less",
                    "build/index.css": [
                        "css/index.less"
                    ]

                }
            }
        },

        watch: {
            styles: {
                // Which files to watch (all .less files recursively in the less directory)
                files: [
					"css/index.less"
                ],
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        }

    });

    // Загрузка плагинов, установленных с помощью npm install
    grunt.loadNpmTasks('grunt-contrib-uglify');//
    grunt.loadNpmTasks('grunt-contrib-less');//
    grunt.loadNpmTasks('grunt-contrib-watch');//

    // Задача по умолчанию
    grunt.registerTask('default', ['less','watch' ]);
	//grunt.registerTask('default', ['uglify' ]);

};