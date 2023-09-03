
const button = document.querySelector('.button');
button.addEventListener('click', function(evt){
    evt.preventDefault();
    var inputValue = document.getElementById("myInput").value;
    const newLi = document.createElement('li');
    newLi.setAttribute("class", "rmv");
    newLi.appendChild(document.createTextNode(inputValue));
    const ulLength = document.getElementById('myUL').getElementsByTagName('li').length;
    if (inputValue === '' && ulLength < 1) {
        alert("Please add a task to your list");
      } else if (inputValue === '' && ulLength >= 1){
        alert("Please enter a task");
      } else {
        document.getElementById("myUL").appendChild(newLi);
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
        })  
        completeBtn.addEventListener('click', function(evt){
            evt.preventDefault();
            newLi.style.textDecoration = "line-through";
        })   
      }
    document.getElementById("myInput").value = "";
    
})









