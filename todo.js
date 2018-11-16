

const enterButton = document.getElementById("enter");
const input = document.getElementById("userInput");
const ul = document.querySelector("ul");
const item = document.getElementsByTagName("li");

function inputLength() {
    return input.value.length;
}

function listLength() {
    return item.length;
}

function createListElement() {
    var li = document.createElement("li"); // tworzy element "li"
    li.appendChild(document.createTextNode(input.value)); // tworzy tekst z inputu do "li"
    ul.appendChild(li); // dodaje li do ul
    input.value = ""; // resetuje miejsce na input



    // zaczyna przekreslenie
    function crossOut() {
        li.classList.toggle("done");
    }

    li.addEventListener("click", crossOut);

    // koniec przekreslenia


    // dodaje przycisk usuniecia 
    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click", deleteListItem);

    // dodaje clase usuniecia 
    function deleteListItem() {
        li.classList.add("delete")
    }
}


// upewnia sie ze pusta akcja nie bedzie dodana do listy
function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}


// sprawdza czy nacisniete zostalo "enter" albo "return" 
// 13 to keycode,mozna tez event.keyCode === 13
function addListAfterKeyPress(event) {
    if (inputLength() > 0 && event.which === 13) {
        createListElement();
    }
}

enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeyPress);






























