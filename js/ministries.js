let Ministry = document.querySelector(".our_ministry");

function ShowAnimation(){
    
    let FirstRow = document.querySelector(".first");
    FirstRow.classList.add("animated");
    console.log("animation shown");
}

function RemoveAnimation(){
    let FirstRow = document.querySelector(".first");
    FirstRow.classList.remove("animated");
    console.log("animation removed");
}

//add event


window.addEventListener('scroll',function(){
    var scrollPosition = window.scrollY;
    
    var triggerOffset = 200;
    if(scrollPosition > triggerOffset){
        ShowAnimation()
    }
    else{
        RemoveAnimation();
    }
})
