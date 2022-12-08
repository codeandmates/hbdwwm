var slideIndex = 1;
displaySlide (1);


function displaySlide(n){

    let slideArray = document.getElementsByClassName("slide");
    let dotArray= document.getElementsByClassName("dotSlider");
    let max=slideArray.length;
    let min=1;

    if(n>max){
        slideIndex = 1;
        console.log("+"+ slideIndex);
    }
    else if(n<min){
        slideIndex=max;
        console.log("-");
    }
    else{
        slideIndex = n;
        console.log("=" +slideIndex)
    }
    console.log(slideIndex)
    for (i=0; i< max; i++){
        slideArray[i].style.display="none";    
    }
    for (i=0; i< dotArray.length; i++){
        dotArray[i].className= dotArray[i].className.replace (" active", "");
    }
    slideArray[slideIndex-1].style.display="block";
    dotArray[slideIndex-1].className += " active";
    console.log(slideIndex);


    myTimeout = setTimeout(displaySlide, 6000, slideIndex +1);
}

function dotTriggerSlide(n)
{
    clearTimeout(myTimeout);
    displaySlide(n);
}

