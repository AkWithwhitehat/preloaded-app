function preload(){
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO)
    video.hide();

    tint_color = "";
}

function draw() {
    Image(video, 0, 0, 640, 480);
    tint(tint_color);
}

function take_snapshot() {
    save('student_name.png');
}

function filter_tint() {
    tint_color = document.grtElementById('color_name'),value;
}