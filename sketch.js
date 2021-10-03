var words=["Never","Look","Back"];
var input,button,element;
var i=0;
var ival;
var value;
var gameState=0;
var yes;
var no;
var y,n;

function setup(){
    createCanvas(1200,600);


    element=createElement('h2');
    element.position(width/2,150);
    
    input=createInput("",'text').attribute("placeholder","Write the above text");
    input.position(width/2-100,250);

    button=createButton("SUBMIT");
    button.position(width/2-30,350);

    yes=createSprite(50,50,10,10);
    yes.shapeColor="green"
    yes.visible=false;
    no=createSprite(50,70,10,10);
    no.shapeColor="red"
    no.visible=false;
}

function draw(){
background("aqua");

textSize(40);
text("Press N for next word",450,500);
element.html(words[i]);

if(keyWentDown('N') && gameState===1 && i<words.length-1){
    gameState=0;
    yes.visible=false;
    no.visible=false;
  
    i++;
}

ival=input.value();
button.mousePressed(()=>{
    gameState=1
    if(ival===words[i]){
        value=1;
    }
    else{
        value=2;
    }
    if(value===1){
        yes.visible=true;
    }
    if(value===2){
        no.visible=true;
    }
    
})

drawSprites();

}
