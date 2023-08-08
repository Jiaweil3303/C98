var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var thing = "";

function start(){
    
    recognition.start();
    
}
recognition.onresult = function(event) {

    console.log(event);

    var Content = event.results[0][0].transcript;

    console.log(Content);

    if(Content == "take my selfie"){
        thing = "ok";
        speak();
        document.getElementById("I").src = "img1.png";
        
        
        setTimeout(function() {
            Webcam.attach(camera);
            setTimeout(function() {
                take_snapshot();
            }, 500);
            
        }, 1000);
    }
}


function speak(){
    var synth = window.speechSynthesis;
    speak_data = thing;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    
}

Webcam.set({
    width:360,
    height:250,
    image_format: 'png',
    png_quality: 0.3
});
camera = document.getElementById("camera");

function take_snapshot(){
    setTimeout(function() {
        Webcam.snap(function(data_uri) {
            document.getElementById("result").innerHTML = '<img id="selfie_image" src="' + data_uri + '"/>';
            setTimeout(function() {
                Webcam.snap(function(data_uri) {
                    document.getElementById("result1").innerHTML = '<img id="selfie_image1" src="' + data_uri + '"/>';
                });
                setTimeout(function() {
                    Webcam.snap(function(data_uri) {
                        document.getElementById("result2").innerHTML = '<img id="selfie_image2" src="' + data_uri + '"/>';
                        document.getElementById("UP").disabled = false;
                        
                    });
                  }, 3000);
              }, 3000);
        });
      }, 1000);
    
    
}


function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
    link = document.getElementById("link1");
    image = document.getElementById("selfie_image1").src;
    link.href = image;
    link.click();
    link = document.getElementById("link2");
    image = document.getElementById("selfie_image2").src;
    link.href = image;
    link.click();
}
