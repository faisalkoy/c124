function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.posenet(video, modelloaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#969A97')
}

function modelloaded() {
    console.log('Posenet Is Initialized!')
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
    }
}