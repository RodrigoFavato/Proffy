// Procurar o botão
document.querySelector('#add-time')
//Quando clicar no botão
.addEventListener('click', cloneField)
//Executar uma ação
function cloneField(){
//Duplicar os campos. Que campos?
const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

//Pegar os campos.Que campos?
const fields = newFieldContainer.querySelectorAll('input')

//console.log(fields) consigo visualizar no browser o tipo de dado
//Uma forma de limpar os campos...fields[0].value = "";
//fields[1].value = "";

//para cada campo,limpar!
fields.forEach(function(field){
    //Pega o field do momento e limpa ele.
    //console.log(field)
    field.value =""
})

document.querySelector('#schedule-items').appendChild(newFieldContainer)
//Colocar na página
}