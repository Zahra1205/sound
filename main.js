var link="https://teachablemachine.withgoogle.com/models/Z7pkk-agg/model.json";
var classifier;
function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Z7pkk-agg/model.json", modelReady);
}
function modelReady(){
    console.log("model loded");
    classifier.classify(gotResults);
}
function gotResults(error, results){
console.log(results);
}