var gulp = require('gulp');
var jshint = require('gulp-jshint');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var es = require('event-stream');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');
var runSequence = require('run-sequence');
var rename = require('gulp-rename');


/*Limpa a pasta dist/*/
gulp.task('clean', function(){
	return gulp.src('dist/')
	.pipe(clean());
});

/*Verifica se o JS tem algum erro de sintax*/
gulp.task('jshint', function(){
	return gulp.src('custom_components/js/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

/*Minifica o JS, concatena e um arquivo e copia para a pasta dist/js*/
gulp.task('uglify', function(){
	return es.merge([
		gulp.src([
			'custom_components/js/*.js'
		])
	])
	.pipe(gulp.dest('dist/js'));
});

/*Minifica os arquivos da pasta css, concatena em um arquivo, renomeia e copia para a pasta dist/css*/
gulp.task('cssmin', function(){
	return es.merge([
		gulp.src([
			'dev/css/*.css'
		])
		.pipe(cleanCSS())
	])
	.pipe(gulp.dest('dist/css'));

})

/*Minifica o arquivo index.html, renomeia e copia para a pasta dist/*/
gulp.task('copyIndex', function(){
	return gulp.src('dev/index-prod.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(rename('index.html'))
	.pipe(gulp.dest('dist/'));
});

/*Minifica os arquivos da pasta view, renomeia e copia para a pasta dist/view*/
gulp.task('copyViews', function(){
	return gulp.src('dev/view/*.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('dist/view'));
});

/*Copia os arquivos da pasta images e copia para a pasta dist/view*/
gulp.task('copyimg', function(){
	return gulp.src('dev/images/*')
	.pipe(gulp.dest('dist/images'));
});

gulp.task('prod', function(cb){
	return runSequence('clean', ['jshint','uglify','cssmin','copyIndex','copyViews','copyimg'], cb)
});