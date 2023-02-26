

// Cache all needed elements into variables for quick retrieval. 
let button = document.getElementById("submitbutton");
let input = document.getElementById("input");
let ul = document.querySelector("ul");
let listCollection = document.querySelectorAll("li");


//Function To Create List Element
let createListElement = () => {

   //create new delete button for each li element in the parent UL
   let deleteButton = document.createElement("button");
   deleteButton.innerHTML = "&#10004;";

   //creates new li item with the input value of input field and appends it to the parent UL.
   let li = document.createElement("li");
   li.appendChild(deleteButton)
   li.appendChild(document.createTextNode(input.value));
   ul?.appendChild(li);

   //listen to deletebutton click and delete the li element
   deleteButton.addEventListener('click', function () {
      li.remove();
   })

   //add class active to toggle done on item once it is clicked.
   li.addEventListener('click', function () {
      li.classList.toggle('done')
   })
   //Resets the input field to empty.
   input.value = "";   

}
// Function to add Item to Ul list once the submit button is clicked.
let addItemOnClick = () => {
   if (input.value !== "") {
      createListElement()
   }
}


// Function to add Item to UL list once the enter key is pressed.
let addItemOnKeypress = (event) => {
   if (input.value !== "" && event.keyCode === 13) {
      createListElement()
    }
}

let addCheckedClasstoItems = () => {
   listCollection.forEach((listItem) => {
      listItem.addEventListener('click', function () {
         listItem.classList.toggle('active')
      })
   })
}



// Listens to clicks on a button and adds Items to list once clicked.
button?.addEventListener("click", addItemOnClick)

// Listens to the enter keypress and adds Items to list once enter is pressed.
input?.addEventListener("keypress", addItemOnKeypress)
