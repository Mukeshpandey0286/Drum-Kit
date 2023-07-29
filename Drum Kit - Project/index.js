let totalButtons= document.querySelectorAll("button").length;

for (let i = 0; i < totalButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        let buttonInnerHTML = this.innerHTML;

        sound(buttonInnerHTML);
        addAnimation(buttonInnerHTML);
    });
    }

document.addEventListener("keypress", function(event){
    sound(event.key);
    addAnimation(event.key);
})

function sound(key) {
    switch (key) {
        case "w":{
            let tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
             break;
        }

        case "a":{
            let tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
             break;
        }

        case "s":{
            let tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
             break;
        }

        case "d":{
            let tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
             break;
        }

        case "j":{
            let snare=new Audio("sounds/snare.mp3");
            snare.play();
             break;
        }

        case "k":{
            let crash=new Audio("sounds/crash.mp3");
            crash.play();
             break;
        }

        case "l":{
            let kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
             break;
        }
        default:
            console.log(key);
            break;
    }
}

function addAnimation(currentkey) {
    let activeButton=document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100   )
}
