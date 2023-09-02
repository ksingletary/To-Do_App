
const button = document.querySelector('.button');
button.addEventListener('click', function(evt){
    evt.preventDefault();
    var inputValue = document.getElementById("myInput").value;
    const newLi = document.createElement('li');
    newLi.appendChild(document.createTextNode(inputValue));
    if (inputValue === '') {
        alert("Please add a task to your list");
      } else {
        document.getElementById("myUL").appendChild(newLi);
      }
    document.getElementById("myInput").value = "";
})


