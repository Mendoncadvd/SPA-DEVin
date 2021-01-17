const linhas =[{
    id: 1, 
    numero: "000", 
    assunto: "qualquer", 
    interessado: "fulano", 
    descricao: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla"
}]
const linha = linhas.map(element => element.numero)
console.log(linha)
