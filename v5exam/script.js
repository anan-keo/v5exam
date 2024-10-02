let addToDo = document.getElementById("addToDo");           // Deklarerar variabler som är kopplade till HTML-dokumentet 
let toDoContainer = document.getElementById("listContainer");
let inputField = document.getElementById("inputField");

addToDo.addEventListener("click", function() { // Varje gång vi klickar på knappen händer detta
    if(inputField.value === "") {
        alert("Var vänligen ange något!"); // Om fältet är tomt kommer detta felmeddelande upp
    }
    else {
        let li = document.createElement('li'); // Skapar ett nytt element 
        toDoContainer.appendChild(li); // Lägger till elementet i listan
        li.innerHTML = inputField.value; // Sparar värdet av inmatningen
        inputField.value = ""; // Tar bort gamla värdet 
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Skapar span element med unicode för multiplikationstecken
        li.appendChild(span);
        saveData();
    }
});


toDoContainer.addEventListener("click", function(click) { // När vi klickar på listan
    if(click.target.tagName === "LI") { 
        click.target.classList.toggle("strike"); // Om vi klickar på ett li element, lägger den till strike som class och stryker över raden med hjälp av CSS
        saveData();
    }
    else if(click.target.tagName === "SPAN") { // Annars om vi klickar på vårt span, tar den bort föräldern
        click.target.parentElement.remove();
        saveData();
    }
});



function saveData() { // Sparar informationen från listan i localstorage
    localStorage.setItem("data", toDoContainer.innerHTML); 
}

function showTask() { // Visar vår information som är sparad i data
    toDoContainer.innerHTML = localStorage.getItem("data");
}

showTask(); // Kallar på denna funktionen varje gång vi öppnar webbläsaren




