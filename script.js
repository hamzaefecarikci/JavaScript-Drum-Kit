var box1 = document.querySelector(".box-1");
var box2 = document.querySelector(".box-2");
var box3 = document.querySelector(".box-3");
var box4 = document.querySelector(".box-4");
var box5 = document.querySelector(".box-5");
var box6 = document.querySelector(".box-6");
var box7 = document.querySelector(".box-7");
var box8 = document.querySelector(".box-8");
var box9 = document.querySelector(".box-9");

window.addEventListener("keydown", keyUp);
window.addEventListener("keyup", keyDown);

function classAdd(box){
    box.classList.add("play");
    box.querySelector("video").currentTime=0;
    box.querySelector("video").play();
}

function classRemove(box){
    box.classList.remove("play");
    box.querySelector("video").video.pause();
    box.querySelector("video").currentTime=0;
}

function keyUp(event)
{
    if(event.key == 'a' || event.key == "A"){
        classAdd(box1);
    }

    else if(event.key == 's'|| event.key == "S"){
        classAdd(box2);
    }

    else if(event.key == 'd'|| event.key == "D"){
        classAdd(box3);
    }

    else if(event.key == 'f'|| event.key == "F"){
        classAdd(box4);
    }

    else if(event.key == 'g'|| event.key == "G"){
        classAdd(box5);
    }

    else if(event.key == 'h'|| event.key == "H"){
        classAdd(box6);
    }   
    else if(event.key == 'j'|| event.key == "J"){
        classAdd(box7);
    }

    else if(event.key == 'k'|| event.key == "K"){
        classAdd(box8);
    }

    else if(event.key == 'l'|| event.key == "L"){
        classAdd(box9);
    }
}

function keyDown(event){
    if(event.key == 'a'|| event.key == "A"){
        classRemove(box1)
    }

    else if(event.key == 's'|| event.key == "S"){
        classRemove(box2)
    }

    else if(event.key == 'd'|| event.key == "D"){
        classRemove(box3);        
    }

    else if(event.key == 'f'|| event.key == "F"){
        classRemove(box4);
    }

    else if(event.key == 'g'|| event.key == "G"){
        classRemove(box5);
    }

    else if(event.key == 'h'|| event.key == "H"){
        classRemove(box6);
    }

    else if(event.key == 'j'|| event.key == "J"){
        classRemove(box7);
    }

    else if(event.key == 'k'|| event.key == "K"){
        classRemove(box8);
    }

    else if(event.key == 'l'|| event.key == "L"){
        classRemove(box9);
    }
}