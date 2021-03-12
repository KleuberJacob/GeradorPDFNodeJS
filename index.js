const pdf = require('html-pdf')

let nomeDoUsuario = 'Kleuber Jacob'
let curso = 'Formacao em NodeJS'

let conteudoHTML = `
    <h1 style='color: red'>Agora sim ein</h1>
    <hr>
    <p>Esse PDF possui muito conteudo</p>
    <p>A dfdjsfksmb km;ldmfg;ldmfg;lm mg;frlm lrm g;lrm dfor orjporjgprejgiegnjg  aihioioghihi h</p>
    <p>Nome: ${nomeDoUsuario}, Curso: ${curso}</p>
    <img src='https://t2.tudocdn.net/511030?w=660&h=413'>
` 

pdf.create(conteudoHTML, {}).toFile('./meupdf.pdf', (err, res) => {
    if(err){
        console.log('Erro:' + err)
    }else{
        console.log(res)
    }
})