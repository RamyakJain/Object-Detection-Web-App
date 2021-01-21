status = "";
object = [];
objectDetector = "";
i = 0;
function preload(){
    img = loadImage('coushins.jpg');
}
function setup(){
    canvas = createCanvas(350, 250);
    
    canvas.center();
    canvas.position(450, 200);
    objectDetector = ml5.objectDetector('cocoSSD', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
function modelLoaded(){
    console.log("CocoSSD Is Initialized");
    status = true;
    console.log(status);
    objectDetector.detect(img, gotResult);
}
function gotResult(results, error){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects = results;
    }
}
function draw(){
    if (status != undefined){
        image(img, 0 ,0, 350, 250);
        for (var i = 0; i < object.length; i++){
            if(object.length == 1){
            document.getElementById("status").innerHTML = "Status: Object Detected";
            document.getElementById("how_many").innerHTML = "Number Of Object Detected Are: " + object.length;
            }
            else{
            document.getElementById("status").innerHTML = "Status: Objects Detected";
            document.getElementById("how_many").innerHTML = "Number Of Objects Detected Are: " + object.length;
            }
            r= random(255);
            g = random(255);
            b = random(255);
            fill(r,g,b);
            percent = floor(objects[i].confidence * 100);
            text(object[i].label +" "+ percent + "%", object[i].x + 5, object[i].y + 15);
            noFill();
            r2= random(255);
            g2 = random(255);
            b2 = random(255);
            stroke(r2, g2, b2);
            rect(object[i].x,object[i].y,object[i].width,object[i].height);
        }
    
    }
}
function back(){
    document.location = "index.html";
}