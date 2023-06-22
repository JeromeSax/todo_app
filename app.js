// bring in elements from todo list
const form = document.getElementById("form");
const input = document.getElementById('input');
const todoUL = document.getElementById('todos');
const todos = JSON.parse(localStorage.getItem('todos'))


form.addEventListener('submit', (e) => {
    e.preventDefault();

addTodo()

})

function addTodo(todo) {
    // saving the input value (text) to a var
    let todoText = input.value 
    
    if(todo) {
        todoText = todo.text 
    }
    // if the text exists
    if(todoText) {
        // create a new lest item
        const todoEL = document.createElement('li');

        // 
        if(todo && todo.completed) {
            todoEL.classList.add('completed')
        }
        // make the text of li same as input value
        todoEL.innerText = todoText;
        // append the todo li item to the todo unordered 1
        todoUL.appendChild(todoEL);
        // clear out after enter
        input.value = " "

        todoEL.addEventListener('click', ()=> {
            todoEL.classList.toggle('completed');
        })

        todoEL.addEventListener('contextmenu' , (e)=> {
            e.preventDefault();

            todo.remove();
            updateLS();
        });
    }
    updateLS()
}

function updateLS() {
    const todosEl = document.querySelectorAll('li');

    const todos = []

    todosEl.forEach((todoEl)=> {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })

    localStorage.setItem("todos", JSON.stringify(todos))
}