var colorsArray=["green","red","yellow","blue"];
var colorSequence=[];
var clicksequence=[];
var level=0;
var i=0;
function nextsequence(){
    clicksequence=[];
    level++;
    i=0;
    $("h1").text("Level "+level);
    var randomNumber=Math.floor(Math.random()*4);
    var color=colorsArray[randomNumber];
    colorSequence.push(color);
    $("."+color).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(color);
}
$("body").keydown(function(){
    nextsequence();
});
$("button").click(function(event){
    var buttonid=event.target.id;
    clicksequence.push(buttonid);
    playsound(buttonid);
    animatepress(buttonid);
    checkanswer(i);
});

function checkanswer(index){
    if(clicksequence[index]==colorSequence[index]){
        if(index==colorSequence.length-1){
            setTimeout(function(){
                nextsequence();
            },1000);
            
        }
        else{
            i++;
        }
    }
    else{
        var audio= new Audio("./sounds/wrong.mp3");
        audio.play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        level=0;
        $("h1").text("Game Over, Press Any Key to Restart");
        colorSequence=[];
    }
}

function playsound(value){
    var sound=new Audio("./sounds/"+value+".mp3");
    sound.play();
}

function animatepress(value){
    $("#"+value).addClass("pressed");
    setTimeout(function(){
        $("#"+value).removeClass("pressed");
    },100);
}


