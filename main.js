diffrence="";
nosex="";
nosey="";
leftwristx="";
rightwristx="";
leftwristy="";
rightwristy="";
 


function setup(){
  canvas=createCanvas(500,500);
  canvas.center();
  video=createCapture(VIDEO);
  video.size(500,500);
  model=ml5.poseNet(video,modelloded);
  model.on("pose",getresult);

}


function draw(){
background("grey");
fill("red");
textSize(diffrence);
text("santi",10,200);
document.getElementById("square_size").innerHTML="the size of the text  is "+diffrence+"px"

}

function modelloded(){
console.log("model has been loded succesfuly");

}

function getresult(r){
  if(r.length>0){
    //console.log(r);
    nosex=r[0].pose.nose.x;
    nosey=r[0].pose.nose.y;
    leftwristx=r[0].pose.leftWrist.x;
    rightwristx=r[0].pose.rightWrist.x;
   //console.log(leftwristx,rightwristx);
   diffrence= floor( leftwristx-rightwristx); 


  }

}


