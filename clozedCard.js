//set module.exports equal to the cloze flashcard variable
module.exports = ClozeFlashCard;

//create the cloze flashcard var and  the function that will but the txt in the flashcard 
var ClozeFlashCard = function(text, cloze) {
    this.text = text;
    this.cloze = cloze;
};