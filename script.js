const h1=document.querySelector('h1');
const btn=document.querySelector('button');

var count=0;
function a(){
    count++;
    h1.innerHTML=count;
    

    
    

}

function play(){
    let audio=new Audio('untitled.wav');
    
    audio.play();
}
btn.addEventListener('click', play);