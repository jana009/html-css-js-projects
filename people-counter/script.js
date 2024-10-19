//document.getElementById('ppl-count').innerText=5;
let saveEl = document.getElementById('save-el');
let countEl = document.getElementById('ppl-count');
let count =0;

function increment(){
    count++;
    countEl.textContent=count;
}
function save(){
    console.log(count);
    let entries = count + "- "
    saveEl.textContent+=entries;
    count =0;
    countEl.textContent=count;
}

// function increment(){
//     let initialCount = document.getElementById("ppl-count").innerText;
//     console.log(initialCount);
//     initialCount = parseInt(initialCount )+1;
//     console.log(initialCount);
//     document.getElementById("ppl-count").innerText=initialCount;
// }