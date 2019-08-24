$('#start').on('click',function(){
    game.start();
})

$(document).on('click','#end',function(){
    game.done();
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
    answers:[" Rat drum  "," Fiddle  "," Viola  ", " Violette  "],
    correctAnswer: " Fiddle  "
}, {
    question: "What do you use to tune the violin when it is VERY out of tune?",
    answers:[" Pegs "," Fine Tuner "," Hammer "],
    correctAnswer: " Pegs "
}, {
    question: "Which is a position on the violin?",
    answers:[" Flat position "," Half position "," Lotus position "],
    correctAnswer: " Half position "
}, {
    question: "What note is the first finger on the E string?",
    answers:[" C "," F "," E1 "],
    correctAnswer: " F "
}, {
    question: "How many violin pegs are there?",
    answers:[" Four "," Six "," Eight "],
    correctAnswer: " Four "
}, {
    question: "What does 'played with fingers' mean?",
    answers:[" Pizzao "," Palazzo "," Pizzicato "],
    correctAnswer: " Pizzicato "
}, {
    question: "When was the violin developed?",
    answers:[" 12th century "," 16th century "," 21st century "," 1900's "],
    correctAnswer: " 16th century "
}, {
    question: "Where was the first violin used?",
    answers:[" Russia "," Italy "," Canada "],
    correctAnswer: " Italy "
}];

// Game counters and FUNCTIONS 
var game = {
    correct: 0,
    incorrect: 0,
    counter: 90,
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
        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">90</span> Seconds</h2>');
        $('#start').remove();
         for(var i=0;i<questions.length;i++){
            $('#subwrapper').append('<h2>'+questions[i].question+'</h2');
            for(var j=0;j<questions[i].answers.length;j++){
                $("#subwrapper").append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
         }
        }
        $('#subwrapper').append('<br><button id="end">Done</button>');
    },
    done: function(){
        $.each($("input[name='question-0']:checked"),function(){
            if($(this).val()==questions[0].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"),function(){
            if($(this).val()==questions[1].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"),function(){
            if($(this).val()==questions[2].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"),function(){
            if($(this).val()==questions[3].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"),function(){
            if($(this).val()==questions[4].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"),function(){
            if($(this).val()==questions[5].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-6']:checked"),function(){
            if($(this).val()==questions[6].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-7']:checked"),function(){
            if($(this).val()==questions[7].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

//Creating the results screen for the game
        this.result();
        },

        result: function(){
            clearInterval(timer);
            $('#subwrapper h2').remove();

            $('#subwrapper').html("<h2>All done!</h2>");
            $('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
            $('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3");
            $('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
        }
    }