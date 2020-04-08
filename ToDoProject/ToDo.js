var list = document.getElementById('app')

var input = document.getElementById('NewTask')

var button = document.getElementById('button')

var toDos = JSON.parse(localStorage.getItem('todo_list')) || [];

function renderToDo(){
    var item, text

    list.innerHTML = '';

    for(toDo of toDos){
        item = document.createElement('li')
        text = document.createTextNode(toDo)

        link = document.createElement('a')
        link.setAttribute('href','#')
        linkText = document.createTextNode('Excluir')
        link.appendChild(linkText)

        var pos = toDos.indexOf(toDo);

        link.setAttribute('onclick' , `removeToDo(${pos})`)

        item.appendChild(text)
        list.appendChild(item)
        item.appendChild(link)
    }
}

function addToDo(){
    toDos.push(input.value)
    input.value = ''
    renderToDo()
    saveToStorage()
}

button.onclick = addToDo

function removeToDo(pos){
    toDos.splice(pos,1)

    renderToDo()
    saveToStorage()
}

function saveToStorage(){
    localStorage.setItem('todo_list',JSON.stringify(toDos))
}