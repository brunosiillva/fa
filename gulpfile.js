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
gulp.task('jsmin', function(){
	return es.merge([
		gulp.src([
			'custom_components/js/*.js'
		])
	])
	.pipe(uglify())
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

/*Minifica o arquivo sobre-o-futebol-americano.html, renomeia e copia para a pasta dist/*/
gulp.task('copySobre', function(){
	return gulp.src('dev/sobre-o-futebol-americano-prod.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(rename('sobre-o-futebol-americano.html'))
	.pipe(gulp.dest('dist/'));
});

/*Minifica o arquivo os-equipamentos.html, renomeia e copia para a pasta dist/*/
gulp.task('copyEquipamentos', function(){
	return gulp.src('dev/os-equipamentos-prod.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(rename('os-equipamentos.html'))
	.pipe(gulp.dest('dist/'));
});

/*Minifica o arquivo os-equipamentos.html, renomeia e copia para a pasta dist/*/
gulp.task('copyPosicoes', function(){
	return gulp.src('dev/posicoes-jogadores-prod.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(rename('posicoes-jogadores.html'))
	.pipe(gulp.dest('dist/'));
});

gulp.task('copyPosicoesA', function(){
	return gulp.src('dev/posicoes-jogadores-ataque-prod.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(rename('posicoes-jogadores-ataque.html'))
	.pipe(gulp.dest('dist/'));
});

gulp.task('copyPosicoesD', function(){
	return gulp.src('dev/posicoes-jogadores-defesa-prod.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(rename('posicoes-jogadores-defesa.html'))
	.pipe(gulp.dest('dist/'));
});

/*Minifica os arquivos da pasta view e copia para a pasta dist/view*/
gulp.task('copyViews', function(){
	return gulp.src(['dev/view/*.html', 'dev/view/*/*.html'])
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('dist/view'));
});

/*Copia os arquivos da pasta images e copia para a pasta dist/view*/
gulp.task('copyimg', function(){
	return gulp.src(['dev/images/*.jpg','dev/images/*.png','dev/images/*.ico'])
	.pipe(gulp.dest('dist/images'));
});

gulp.task('prod', function(cb){
	return runSequence('clean', ['jshint','jsmin','cssmin','copyIndex','copySobre','copyEquipamentos','copyPosicoes','copyPosicoesA','copyPosicoesD','copyViews','copyimg'], cb)
});