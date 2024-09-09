const { series, parallel } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')


function padrao(cb){
    return gulp.src('src/**/*.js')
    .pipe(babel({
        comments: false,  //Não vai copiar os comentários
        presets: ["env"]  //Pega o javascript mais atual
    }))
    .pipe(uglify())
    .on('error', err => console.log(err)) //quando ocorrer um evento
    .pipe(concat('codigo.min.js'))
    .pipe(gulp.dest('build'))
    

    //return cb()
}

function fim(cb){
    console.log('FIM!!!')
    return cb()
}

//exports.default = series(padrao, fim)
exports.default = parallel(padrao, fim)