/**
 * gulp主文件，用于注册任务
 * @authors Your Name (you@example.org)
 * @date    2017-05-08 09:29:51
 * @version $Id$
 */
 // 载入gulp模块
 var gulp = require('gulp');

 // 注册一个任务

 gulp.task('copy',function(){
 	//console.log('Hello world!');
 	// 复制文件，src取一个文件
 	gulp.src('src/index.html')
 	// dest ,目标
 		.pipe(gulp.dest('dist/'));
 });

gulp.task('dist',function(){
	gulp.watch('src/index.html',['copy']);
});

var browserSync = require('browser-sync').create();

gulp.task('serve',function(){
	browserSync.init({
		server:{
			baseDir:"./"
		}
	});
});