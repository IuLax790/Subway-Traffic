
// initialize the count at 0;
// listen for clicks on the increment button
//increment the count variable when the button is clicked 
// change the count-el in the html to reflect the new count
let countEl = document.getElementById('count-el');
let saveEl = document.getElementById("save-el");

let count = 0
function increment(){
    count +=1
    countEl.innerHTML = count;
}

function save(){
    let saving = count + " - " ;
    saveEl.textContent +=  saving;
    countEl.textContent = 0;
    count = 0;
}
// saving number of people which have entered the subway

save()
