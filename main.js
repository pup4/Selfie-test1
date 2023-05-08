var SpeechRecognition=window.webkitSpeechRecognition;

var recognition=new SpeechRecognition();

function start(){
    document.getElementById("textbax").innerHTML="";
    recognition.start();
}

recognition.onresult=function(event){

    console.log(event);

    var Content=event.results[0][0].transcipt;
    console.log(Content);

    document.getElementById("textbox").innerHTML=Content;
}