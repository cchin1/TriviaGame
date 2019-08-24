$('#start').on('click',function(){
    game.start();
})

// Audio Setup

    // Create an audio element with JavaScript
    var audioElement = document.createElement("audio");

    // Set its source to the location of Bach song fil
    audioElement.setAttribute("src", "assets/images/bach_bwv1002_jh_3_corrente.mp3");

    // Theme Button
    $(".theme-button").on("click", function() {
    audioElement.play();
    });

    // Pause Button
    $(".pause-button").on("click", function() {
    audioElement.pause();
    });



// Global Variables (accessible by all functions)

var questions =[{
    question: "What's another name for violin?",
    answers:["Rat drum","Fiddle","Viola", "Violette"],
    correctAnswer: "Fiddle"
}, {
    question: "What do you use to tune the violin when it is VERY out of tune?",
    answers:["Pegs","Fine Tuners","Hammer"],
    correctAnswer: "Pegs"
}, {
    question: "Which is a position on the violin?",
    answers:["Flat position","Half position","Lotus position"],
    correctAnswer: "Half position"
}, {
    question: "What note is the first finger on the E string?",
    answers:["C","F","E1"],
    correctAnswer: "F"
}, {
    question: "How many violin pegs are there?",
    answers:["Four","Six","Eight"],
    correctAnswer: "Four"
}, {
    question: "What does 'played with fingers' mean?",
    answers:["Pizzao","Palazzo","Pizzicato"],
    correctAnswer: "Pizzicato"
}, {
    question: "When was the violin developed?",
    answers:["12th century","16th century","21st century","1900's"],
    correctAnswer: "toy story"
}, {
    question: "Where was the first violin used?",
    answers:["Russia","Italy","Canada"],
    correctAnswer: "Italy"
}];

// Game counters and FUNCTIONS 
var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter<=0) {
            console.log("Time is up");
            game.done();
        }
    },
    start: function(){
        timer = setInterval(game.countdown,1000);
        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');
        $('#start'.remove());
        for(var i=0;i<questions.length;i++){
            $('#subwrapper').append('<h2>'+questions[i].question+'</h2)');
            for(var j=0;j<questions[i].answers.length;j++){
                $("#subwrapper").append("<input type='radio' name='question-" +i+ "' value='"+questions[i].answers[j]+" ' > " +questions[i].answers[j])
            }
        }
    },
    done: function(){
        $.each($('input[name="question-1]":checked'),function(){
            if($(this).val()==questions[1].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        })
    }
}

// MAIN PROCESS

// Start the Game

// Initiate the function for capturing key clicks.
document.onkeyup = function(event) {

    // step 1
    // another
    // another
    // End game and reset all

}