//Seleciona os elementos do input e do body da pagina
const inputEl = document.querySelector('.input')
const bodyEl = document.querySelector('body')

//Checa o armazenamento local da aplicação para ver se o modo escuro ficou ativado ou não
inputEl.checked = JSON.parse(localStorage.getItem('mode'))

// primeiro Update de verificação quando a pagina carregar
updateBody()

//Verificar se o input esta ativo ou não
function updateBody(){
    if(inputEl.checked == true){
        bodyEl.style.background = 'black'
    } else{
        bodyEl.style.background = 'white'
    }
}

//Um escutador de eventos toda vez que clicar no input
inputEl.addEventListener('input', ()=>{
    updateBody()
    updateLocalStorage()
})

// Armazenar a ultima verificação no armazenamento local
function updateLocalStorage(){
    localStorage.setItem('mode', JSON.stringify(inputEl.checked))
}