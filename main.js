prediction1 ="";
prediction2 = "";
Webcam.set({
    width : 250,
    height :250,
    image_format :'png',
    png_quality: 60
});

camera = document.getElementById("your_cam");
Webcam.attach('#camera');
function CAPTURE(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML='<img id="final_img" src="'+data_uri+'">';
    });
    }
    console.log("ml5version",ml5.version);
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json',modelLoaded);
    function modelLoaded(){
        console.log("modelloaded");
        speak();

    }
    function speak(){
        var synth = window.speechSynthesis;
        speak_data_1="The first prediction is "+prediction1;
        speak_data_2="The second prediction is "+prediction2;
        var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2); synth.speak(utterThis);
    }
  function PREDICT(){
    
  }  
