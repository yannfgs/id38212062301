function adicionarTarefa() {
    const tarefa = document.getElementById('tarefa').value;
    if (tarefa) {
        const li = document.createElement('li');
        li.innerTet = tarefa;
        document.getElementById('lista').appendChild(li);
        document.getElementById('tarefa').value = '';
    }
}