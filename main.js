
let openBtn=document.querySelector('#openpage');
openBtn.addEventListener('click', ()=>{
    document.querySelector('div').style.display=`block`});
openBtn.addEventListener('click', ()=>{
    document.querySelector('#openpage').style.display=`none`});

let closeBtn=document.querySelector('#closepage');
closeBtn.addEventListener('click', ()=>{
    document.querySelector('div').style.display=`none`});
closeBtn.addEventListener('click', ()=>{
    document.querySelector('#openpage').style.display=`block`});