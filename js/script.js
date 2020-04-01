document.addEventListener('keydown', event => {
    if(document.querySelector(`.container .key.${event.code}`)){
         document.querySelector(`.container .key.${event.code}`).classList.add("press");
         document.querySelector(`audio.${event.code}`).currentTime = 0;
         document.querySelector(`audio.${event.code}`).play();
         }
        }
    );
document.addEventListener('keyup', event => {if(document.querySelector(`.container .key.${event.code}.press`)){
    document.querySelector(`.container .key.${event.code}`).classList.remove("press");
}

});



function changeColor(code){
    if(document.querySelector(`.container .key.${code}.press`)){
    }
    else{
        document.querySelector(`.container .key.${code}`).classList.add("press"); 
    }
}