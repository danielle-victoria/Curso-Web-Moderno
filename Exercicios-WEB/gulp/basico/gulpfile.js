const gulp = require('gulp')

//Opção 1
//const {series} = require('gulp') //Fazer várias tarefas em série

//Opção 2
const series = gulp.series


function copiar (cb){

    console.log('Tarefa de copiar!')
    return cb()
}

module.exports.default = series(copiar)