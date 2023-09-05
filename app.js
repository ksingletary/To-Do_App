
const button = document.querySelector('.button');
const Todos = [];
button.addEventListener('click', function(evt){

    //setting variables/classes

    evt.preventDefault();
    var inputValue = document.getElementById("myInput").value;
    const newLi = document.createElement('li');
    newLi.setAttribute("class", "rmv");
    newLi.appendChild(document.createTextNode(inputValue));
    const ulLength = document.getElementById('myUL').getElementsByTagName('li').length;
    const firstUL = document.getElementById('myUL').getElementsByTagName('li');

    //if input is empty alert user, otherwise add it to list

    if (inputValue === '' && ulLength < 1) {
        alert("Please add a task to your list");
      } else if (inputValue === '' && ulLength >= 1){
        alert("Please enter a task");
      } else {
        document.getElementById("myUL").appendChild(newLi);
        Todos.push({task: newLi.innerText, isCompleted: false });

        //add to localstorage

        function addToLocalStorage(todos) {
            localStorage.setItem('todos', JSON.stringify(Todos));
          }
        addToLocalStorage(Todos);

        //adding delete and complete buttons to list item

        let deleteBtn = document.createElement("button");
        let completeBtn = document.createElement("button");
        completeBtn.textContent = "Completed"
        deleteBtn.innerText = "X"
        deleteBtn.setAttribute("id", "delete-btn")
        completeBtn.setAttribute("class", "complete");
        newLi.append(completeBtn);
        newLi.append(deleteBtn);
        deleteBtn.addEventListener('click', function(evt){
            evt.preventDefault();
            newLi.remove();
            const displayList = items => {
                items.forEach((todos) => {
                    if (JSON.parse(localStorage.getItem('todos')) !==""){
                        const name = JSON.parse(localStorage.getItem("todos")) || [];
                        const arrToSave = name.filter(todo => todo.task !== todos.task);
                        localStorage.setItem('todos', JSON.stringify(arrToSave))
                        displayList(name);
                    }   else{
                        Todos = [];
                    }
                })
            }
        })  
        completeBtn.addEventListener('click', function(evt){
            var node = document.querySelector("li");
            newLi.style.textDecoration = "line-through";
            document.getElementById("compUL").appendChild(node);
        })   
      }
    document.getElementById("myInput").value = "";
    
})

//retrieve from local storage

const displayList = items => {
        items.forEach((todos) => {
            const li = document.createElement("li");
            li.innerHTML = todos.task;
            let deleteBtn = document.createElement("button");
            let completeBtn = document.createElement("button");
            completeBtn.textContent = "Completed"
            deleteBtn.innerText = "X"
            deleteBtn.setAttribute("id", "delete-btn")
            completeBtn.setAttribute("class", "complete");
            li.append(completeBtn);
            li.append(deleteBtn);
            deleteBtn.addEventListener('click', function(evt){
                li.remove();
                const name = JSON.parse(localStorage.getItem("todos")) || [];
                const arrToSave = name.filter(todo => todo.task !== todos.task);
                localStorage.setItem('todos', JSON.stringify(arrToSave));
            })  
            completeBtn.addEventListener('click', function(evt){
                var node = document.querySelector("li");
                li.style.textDecoration = "line-through";
                document.getElementById("compUL").appendChild(node);
                const name = JSON.parse(localStorage.getItem("todos")) || [];
                const arrToSave = name.filter(todo => todo.task !== todos.task);
                localStorage.setItem('todos', JSON.stringify(arrToSave));
            })   
            
            document.getElementById("myUL").appendChild(li);
        });
        };
        if (JSON.parse(localStorage.getItem('todos')) !==""){
            const name = JSON.parse(localStorage.getItem("todos")) || [];
            displayList(name);
        }   else{
            Todos = [];
        }

const toggleSwitch = document.querySelector('input[type="checkbox"]');

if (localStorage.getItem('darkModeEnabled')){
    document.body.className = 'dark';
    toggleSwitch.checked = true;
}

toggleSwitch.addEventListener('click', function(evt){
    const {checked} = toggleSwitch;
    if(checked){
        localStorage.setItem('darkModeEnabled', true)
    } else{
        localStorage.removeItem('darkModeEnabled');
    }
    document.body.className = checked ? 'dark' : ""
})






