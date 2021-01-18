status = "";
function preload(){
    img = loadImage('car_and_remote.jpg');
}
function setup(){
    canvas = createCanvas(300, 200);
    
    canvas.center();
    canvas.position(40, 200);
    objectDetector = ml5.objectDetector('cocoSSD', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
function modelLoaded(){
    console.log("CocoSSD Is Initialized");
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(results, error){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}
function draw(){
    image(img, 0, 0, 300, 200);
}