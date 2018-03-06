$(document).ready(function(){
    var answer1
    var answer2    
    var answer3
    var answer4
    var answer5
    var time = 90
    var correctAns = 0
    var incorrectAns = 0
    var intervalID 

    $("[id*='q']").hide()

    $("#start").on("click", function(){   
        $("[id*='q']").show()
        clearInterval(intervalID);
        intervalID = setInterval(clockTimer,1000)
        function clockTimer() {
            time --
            $("#timer").text(time)
            // stopTimer()
            if (time === 0) {
                $("#timer").text("Time's Up!");
                stopTimer();
            }
        }
    }) 

    $("#submit").on("click", function(){
        stopTimer();
    })

    $("#reset").on("click", function(){
        clearInterval(intervalID);
        time = 90;
        $("#timer").text(time);
        $("#correct").text("You got this many answers correct: ");
        $("#incorrect").text("You got this many answers incorrect: ");
        $(".answer1").prop("checked", false);
        $(".answer2").prop("checked", false);
        $(".answer3").prop("checked", false);
        $(".answer4").prop("checked", false);
        $(".answer5").prop("checked", false);
        correctAns = 0;
        incorrectAns = 0;
        $("[id*='q']").hide()
    })
    
    function stopTimer() {
            clearInterval(intervalID)
            answer1 = $("input[name=question1]:checked").val()
            answer2 = $("input[name=question2]:checked").val()
            answer3 = $("input[name=question3]:checked").val()
            answer4 = $("input[name=question4]:checked").val()
            answer5 = $("input[name=question5]:checked").val()
            if (answer1 == "Ken Jennings"){
                correctAns = correctAns + 1;
            }else {
                incorrectAns = incorrectAns + 1;
            }

            if (answer2 == "Newscaster"){
                correctAns = correctAns + 1;
            }else {
                incorrectAns = incorrectAns + 1;
            }
            if (answer3 == "566,400"){
                correctAns = correctAns +1;
            }else {
                incorrectAns = incorrectAns +1
            }
            if (answer4 == "65"){
                correctAns = correctAns +1;
            }else {
                incorrectAns = incorrectAns +1
            }
            if (answer5 == "Darrell Hammond"){
                correctAns = correctAns +1;
            }else {
                incorrectAns = incorrectAns +1
            }
            $("#correct").append(correctAns);
            $("#incorrect").append(incorrectAns);
            incorrectAns = 0;
            correctAns = 0;
        }
    })