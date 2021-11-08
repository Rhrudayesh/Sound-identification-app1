function click(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/G63HlXdcu/model.json',modelReady);

}
function modelReady(){
    classifier.classify(gotResults);

}
function gotResults(error,results){
    console.log('gotResult')
}