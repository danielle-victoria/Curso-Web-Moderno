const gulp = require('gulp')

//Opção 1
//const {series} = require('gulp') //Fazer várias tarefas em série

//Opção 2
//const series = gulp.series

//Executar em paralelo
const {series, parallel} = require('gulp')

const antes1 = cb => {
    console.log('Tarefa Antes 1')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa Antes 2')
    return cb()
}

/*function copiar (cb){

    console.log('Tarefa de copiar!')
    return cb()
}*/


function copiar (cb){
    /*gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt']) //src -> Serve para determinar quais arquivos serão as entradas
    .pipe(gulp.dest('pastaB')) //aplicar transformações nos arquivos que foram de entrada*/

    gulp.src('pastaA/**/*.txt')
    .pipe(gulp.dest('pastaB'))
    return cb()
}

const fim = cb => {
    console.log('Tarefa Fim!')
    return cb()
}



module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim
)