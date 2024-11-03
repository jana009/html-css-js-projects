//document.getElementById('ppl-count').innerText=5;
let saveEl = document.getElementById('save-el');
let countEl = document.getElementById('ppl-count');
let sumEl = document.getElementById('sum-el');
let count =0;
let sum=0;

function increment(){
    count++;
    countEl.textContent=count;
}
function save(){
    console.log(count);
    sum+=count;
    let entries = count + " - ";
    saveEl.textContent+=entries;
    sumEl.textContent = sum;
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