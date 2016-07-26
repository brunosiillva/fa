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
var jsonMinify = require('gulp-json-minify');
var imagemin = require('gulp-imagemin');


/*Limpa a pasta dist/*/
gulp.task('clean', function(){
	return gulp.src('dist/')
	.pipe(clean());
});

/*Verifica se o JS tem algum erro de sintax*/
gulp.task('jshint', function(){
	return gulp.src('dev/js/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

/*Minifica o JS, concatena e um arquivo e copia para a pasta dist/js*/
gulp.task('jsmin', function(){
	return es.merge([
		gulp.src([
			'dev/js/*.js'
		])
	])
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
});

/*Minifica os arquivos da pasta css, concatena em um arquivo, renomeia e copia para a pasta dist/css*/
gulp.task('cssmin', function(){
	return es.merge([
		gulp.src([
			'dev/css/*.css',
			'node_modules/angular-ui-bootstrap/src/tooltip/tooltip.css'
		])
		.pipe(cleanCSS())
	])
	.pipe(gulp.dest('dist/css'));

})

/*Minifica o arquivo index.html e copia para a pasta dist/*/
gulp.task('copyIndex', function(){
	return gulp.src('dev/index.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('dist/'));
});

/*Minifica o arquivo sobre-o-futebol-americano.html e copia para a pasta dist/*/
gulp.task('copySobre', function(){
	return gulp.src('dev/sobre-o-futebol-americano.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('dist/'));
});

/*Minifica o arquivo os-equipamentos.html e copia para a pasta dist/*/
gulp.task('copyEquipamentos', function(){
	return gulp.src('dev/os-equipamentos.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('dist/'));
});

/*Minifica o arquivo os-equipamentos.html e copia para a pasta dist/*/
gulp.task('copyPosicoes', function(){
	return gulp.src('dev/posicoes-jogadores.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('dist/'));
});

gulp.task('copyPosicoesA', function(){
	return gulp.src('dev/posicoes-jogadores-ataque.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('dist/'));
});

gulp.task('copyPosicoesD', function(){
	return gulp.src('dev/posicoes-jogadores-defesa.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('dist/'));
});

gulp.task('copyTermos', function(){
	return gulp.src('dev/termos.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('dist/'));
});

gulp.task('copyTimes', function(){
	return gulp.src('dev/os-times-prod.html')
	.pipe(htmlmin({collapseWhitespace: true}))
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
	return gulp.src(['dev/images/*.{jpg,png}'])
	.pipe(imagemin())
	.pipe(gulp.dest('dist/images'));
});

/*Copia os arquivos da pasta json, minifica e copia para a pasta dist/json*/
gulp.task('jsonminify', function() {
	return gulp.src('dev/json/*.json')
	.pipe(jsonMinify())
	.pipe(gulp.dest('dist/json'));
});

gulp.task('prod', function(cb){
	return runSequence('clean', ['jshint','jsmin','cssmin','copyIndex','copySobre','copyEquipamentos','copyPosicoes','copyPosicoesA','copyPosicoesD','copyTermos','copyViews','copyimg','jsonminify'], cb)
});