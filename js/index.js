function submitAnswers(){
    var totalQuestions=5;
    var score=0;


    //get user input
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;


    //validation
    for(var i=1;i<=totalQuestions;i++){
        if(eval('q'+i) == null || eval('q'+i) == ''){
            alert('you missed question '+i);
            return false;
        } 
    }


    //set correct answers

    var  answers = ["c","b","b","a","a"];

    //check answers
    for(var i=0;i<totalQuestions;i++){
        if(eval('q'+(i+1))==answers[i]){
            score++;
        }
    }

    //display resutls
    var resutls=document.getElementById('#results');
    results.innerHTML = '<h3> You Scored <span>'+score+'</span> out <span>'+totalQuestions+'</span></h3>';
    alert('You Scored '+score+' out of '+totalQuestions);
    
    return false;
}

