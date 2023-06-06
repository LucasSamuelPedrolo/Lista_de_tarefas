const tarefa = document.getElementById('inputDeTarefas');
const btnCriarTarefa = document.getElementById('btnCriar');
const listaDeTarefas = document.querySelector('.Tarefas');

const criaLi = () => document.createElement('li');

function botaoDelete() {

}

function criaCheckBox() {
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type','checkbox')
    return checkBox;
}

function adicionarTarefa() {
    listaDeTarefas.appendChild(criaLi());

    const last = listaDeTarefas.lastChild;
    last.innerText = tarefa.value;

}

btnCriarTarefa.addEventListener('click', () => {
    if (tarefa.value) {
        adicionarTarefa();
        tarefa.value = "";
        console.log('passou');
        tarefa.focus();
    }

})

document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        if (tarefa.value) {
            adicionarTarefa();
            tarefa.value = "";
            console.log('passou');
            tarefa.focus();
        }
    }

})