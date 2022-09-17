noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0



function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background("#b9c41e");
    textSize(30);
    fill("#77f341");
    text("Akash", 30, 200);
}

function modelLoaded()
{
    console.log("Posenet Is Intialized!");
}

function gotPoses()
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.wrist.x;
        rightWristX = results[0].pose.wrist.x;
        leftWristX = Math.floor(Math.random() * 100);
        rightWristX = Math.floor(Math.random() * 100);
        
        console.log("leftWristX = " + leftWristX + "rightWristX" + rightWristX + " difference = " + difference);
    }   
}