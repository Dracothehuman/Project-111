prediction_1 = "";
prediction_2 = "";
prediction_3 = "";

Webcam.set({
    height: 300,
    width: 350,
    image_format: "png",
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');


function snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img id='captured_image' src='" + data_uri + "'/>";
    })
}

console.log("ml5 version is", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/H9hM4Vdci/model.json", modalReady)

function modalReady() {
    console.log("Modal Is Loaded")
}
