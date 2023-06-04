const images = ["lion.jpg", "elephant.jpg", "hyena.jpg", "cheetah.jpg", "tiger.jpg"]
const descriptions = ["The Lion, commonly referred to as the king of the jungle",
                      "The Elephant, perhaps one of the wisest animals",
                      "The Striped Hyena, one of the devious species and canonically evil according to the Lion King",
                      "The Cheetah, the fastest land animal ever recorded",
                      "The Bengal Tiger, an animal that might have something to say about the Lion being the king"]
var i = 0;

setInterval(function (){
    addFunction();
    showImage(i);
}, 4000);

function addFunction(){
    i++;
    if(i > 4){
        i = 0;
    }
    showImage(i);
};

function minusFunction(){
    i--;
    if(i < 0){
        i = 4;
    }
    showImage(i);
};

function showImage(i){
    document.getElementById("slide").style.backgroundImage = "url(" + images[i] + ")";
    document.getElementById("description").innerHTML = descriptions[i];
}

window.onload(showImage(0))
