$(document).ready(function(){
	
	
	var i = 0;
	var x = true;
	var q = true;
	var counter = 0;
	var final = 0;
	var rock = true;
	var question;
	var answer;
	var chooseItem = [];
	var scoreTotal = 0;
	$(".rock").hide();
	$("#game-form").hide();
	$(".top").hide();
	$("#start-button").on("click",function(){ 
    $("#splash-screen").hide();
    $("#game-form").show();
    $("input[name='r1']").show();
   	$(".top").show();
   	$("#next").attr('disabled', true);
   	$(".new").hide();
   	$(".rock").show();
   	musicQuiz(i);
	
})

	$(".rock").click(function (event){
         event.preventDefault();

		if(rock == true){
			
  	$("#rock-sound")[0].volume = 0.5;
    $("#rock-sound")[0].load();
    $("#rock-sound")[0].play();
    $( ".line-1" ).text("music by:Rockefeller Horsecollar");
    rock = false;
}else{
	$("#rock-sound")[0].pause();
 	 $( ".line-1" ).text(" ");
 	rock = true;   
}
})


	
   function musicQuiz(i){
   	
		
   	
	var questions = [
	{
		question:"Who is the guitarist of Led Zeppelin?",
		chooseItem:["John Frusciante", "Pete Townshend", "Jimi Hendrix", "Jimmy Page"],
		answer: 3,
		
	},

	{
		question:"Who was the original Drummer of Led Zeppelin?",
		chooseItem:["Ginger Baker", "Matt Cameron", "John Bonham", "Chad Smith"],
		answer: 2,
		
	},

	{
		question:"Who is the Singer of Aerosmith?",
		chooseItem:["Steven Tyler", "Anthony Kiedis", "Robert Plant", "Eddie Vedder"],
		answer: 0,
		
	},

	{
		question:"Who is the Singer of Pearl Jam?",
		chooseItem:["Steven Tyler", "Anthony Kiedis", "Robert Plant", "Eddie Vedder"],
		answer: 3,
		
	},

	{
		question:"Who is the Guitarist of The Who?",
		chooseItem:["John Frusciante", "Pete Townshend", "Jimi Hendrix", "Jimmy Page"],
		answer: 1,
		
	},

	{
		question:"Who was the Bassist of The Who?",
		chooseItem:["Jack Bruce", "John Entwistle", "'Flea' Balzary", "John Paul Jones"],
		answer: 1,
		
	},

	{
		question:"Who was the Bassist of Cream?",
		chooseItem:["Jack Bruce", "John Entwistle", "'Flea' Balzary", "John Paul Jones"],
		answer: 0,
		
	},

	{
		question:"Who is the Singer of Led Zeppelin?",
		chooseItem:["Steven Tyler", "Anthony Kiedis", "Robert Plant", "Eddie Vedder"],
		answer: 2,
		

	},

	{
		question:"Who is the Drummer of Red Hot Chili Peppers?",
		chooseItem:["Ginger Baker", "Matt Cameron", "John Bonham", "Chad Smith"],
		answer: 3,
		
	},	

	{
		question:"Who is the Drummer of Cream?",
		chooseItem:["Ginger Baker", "Matt Cameron", "John Bonham", "Chad Smith"],
		answer: 0,
		
	
}]


loadQandA(questions, i);	
}


		function loadQandA(questions, i){
	
	numOfQuestions = questions.length;
	
	$("#question").html("Question" + " " + (1 + i) +" "+ "of" + " " +questions.length+" " + questions[i].question);
	   		
	$("#a1").append( "Answer 1." + " " +" " +" "+ questions[i].chooseItem[0]);
		
    $("#a2").append( "Answer 2." + " "+" "+" "+ questions[i].chooseItem[1]);
        
    $("#a3").append( "Answer 3." +" "+ " " +" "+ questions[i].chooseItem[2]);
       
    $("#a4").append( "Answer 4." + " "+ " " +" "+ questions[i].chooseItem[3]);
           
  	
  			delete correctAnswer;
  			 
			correctAnswer = questions[i].answer;
			validateAnswer(questions, i);
	
}

	function validateAnswer(questions, i){
		 
		
	
		$(".quiz-check").click(function (event) {
            event.preventDefault();
		if (!$("input[name='r1']:checked").val()) {
       				$("#result").html("Must choose an answer!");
       				 
    					}
    				else {
      				
    				
	$("#final").html("The correct answer is "+ " "+ (correctAnswer + 1));
			if (document.getElementById("r1").checked){
				userAnswer = document.getElementById("r1").value;
			}
			
           		
           		
            else if (document.getElementById("r2").checked){
				 userAnswer = document.getElementById("r2").value;
			} 
           		
           else if (document.getElementById("r3").checked){
				 userAnswer = document.getElementById("r3").value;
			}
           		

			else if (document.getElementById("r4").checked){
				  userAnswer = document.getElementById("r4").value;
			}  
			}
				if(correctAnswer == userAnswer){
				$("input[name='r1']").each(function(){
				$(this).attr('disabled', 'disabled');
							});	
				$(".quiz-check").attr('disabled', true);
				
				x = true;
				scoreTot(x);	
					}

				else if(correctAnswer != userAnswer){
				$("input[name='r1']").each(function(){
				$(this).attr('disabled', 'disabled');
							});	
				$(".quiz-check").attr('disabled', true);

				x = false;
				scoreTot(x);

				}

				
					
           	$("#next").attr('disabled', false);	
			});
			
			
	
			}
		

	

	function nextQuestion(){

	$("#next").click(function (event){
         event.preventDefault();
	
   	$("input[name='r1']").attr('disabled',false);
	$("#a1").html(" ");   
    $("#a2").html(" ");
	$("#a3").html(" ");  
    $("#a4").html(" "); 
   	$("#question").html(" ");
   	$("#r1").attr('checked', false);
   	$("#r2").attr('checked', false);
   	$("#r3").attr('checked', false);
   	$("#r4").attr('checked', false);
   	$("#result").html(" "); 
   	$(".quiz-check").attr('disabled', false);
   	$("#next").attr('disabled', true);
  	$("#final").html("Keep on Rockin'!");
   	

 	
  	if(counter == 10){
		endGame();
	}else{
	 
	questions = [musicQuiz(++i)];
	
	
   	loadQandA(questions, i);
 	}

 	})
  


 	}
 function scoreTot(x){
 	
 	if(x != true){
 		delete correctAnswer;
 		delete userAnswer;
 	scoreTotal = (scoreTotal + 0);
 	$("#result").html("Answer is incorrect!");
    $("#score").html(scoreTotal);
    }else if(x == true){
    	delete correctAnswer;
 		delete userAnswer;
    scoreTotal++;
    $("#result").html("Answer is correct!");
	$("#score").html(scoreTotal);

    }
    counter++;
    final = ((scoreTotal/counter)*100);
   
	nextQuestion();


 }	
 	
function endGame(){
	$(".new").show();
	$(".new").attr('disabled', false);
	$("input[name='r1']").attr('disabled',false);
	$("#a1").html(" ");   
    $("#a2").html(" ");
	$("#a3").html(" ");  
    $("#a4").html(" "); 
   	$("#question").html("Play it again...? ");
   	$("#r1").attr('checked', false);
   	$("#r2").attr('checked', false);
   	$("#r3").attr('checked', false);
   	$("#r4").attr('checked', false);
		$("#next").attr('disabled', true);
		$(".quiz-check").attr('disabled', true);
		$("#final").html("The final score is..." + " "+ final + "%");
		$("#result").html("Click...Play Again! for another round!");
	$("input[name='r1']").hide();
$(".new").click(function (event){
         event.preventDefault();
    	location.reload(true);
});
		
}	
					
});