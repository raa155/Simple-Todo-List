let input = document.getElementById("userInput");
let button = document.getElementById("submitButton");
let ul = document.querySelector("ul");

let createListElement = () => {

    //create delete button for each list item
    let deleteButton  = document.createElement('button');
    deleteButton.innerHTML = "X";

    //creates new list item
    let li = document.createElement("li");
    li.appendChild(deleteButton)
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li)

    //Set listener to delete button to delete list item on click
    deleteButton.addEventListener('click', function(){
        li.remove();
    })

    // Add done class on toggle for each li item added
    li.addEventListener('click', function(){
        li.classList.toggle('done');
        deleteButton.innerHTML = "&#10004;"
    })

    //resets input field on create
    input.value = ""
}


let addItemOnClick = () =>{
    if(input.value !== ""){
        createListElement()
    }
}

let addItemOnKeypress = (event) => {
    if(input.value !== "" && event.keyCode === 13){
        createListElement()
    }
}

button.addEventListener('click', addItemOnClick)

input.addEventListener('keypress', addItemOnKeypress)