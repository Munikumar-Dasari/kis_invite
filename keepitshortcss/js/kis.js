const question1El = document.getElementById("question1");
const question2El = document.getElementById("question2");
const question3El = document.getElementById("question3");
const question4El = document.getElementById("question4");
const question5El = document.getElementById("question5");
const question6El = document.getElementById("question6");
const question7El = document.getElementById("question7");

const answere1El =  document.getElementById("answere1");
const answere2El =  document.getElementById("answere2");
const answere3El =  document.getElementById("answere3");
const answere4El =  document.getElementById("answere4");
const answere5El =  document.getElementById("answere5");
const answere6El =  document.getElementById("answere6");
const answere7El =  document.getElementById("answere7");



function functionQae1(){
    answere1El.style.display = "block";
    answere2El.style.display = "none";
    answere3El.style.display = "none";
    answere4El.style.display = "none";
    answere5El.style.display = "none";
    answere6El.style.display = "none";
    answere7El.style.display = "none";

    question1El.classList.add("questions-active");
    question2El.classList.remove("questions-active");
    question3El.classList.remove("questions-active");
    question4El.classList.remove("questions-active");
    question5El.classList.remove("questions-active");
    question6El.classList.remove("questions-active");
    question7El.classList.remove("questions-active");

}

function functionQae2(){
    answere1El.style.display = "none";
    answere2El.style.display = "block";
    answere3El.style.display = "none";
    answere4El.style.display = "none";
    answere5El.style.display = "none";
    answere6El.style.display = "none";
    answere7El.style.display = "none";

    question1El.classList.remove("questions-active");
    question2El.classList.add("questions-active");
    question3El.classList.remove("questions-active");
    question4El.classList.remove("questions-active");
    question5El.classList.remove("questions-active");
    question6El.classList.remove("questions-active");
    question7El.classList.remove("questions-active");

}

function functionQae3(){
    answere1El.style.display = "none";
    answere2El.style.display = "none";
    answere3El.style.display = "block";
    answere4El.style.display = "none";
    answere5El.style.display = "none";
    answere6El.style.display = "none";
    answere7El.style.display = "none";

    question1El.classList.remove("questions-active");
    question2El.classList.remove("questions-active");
    question3El.classList.add("questions-active");
    question4El.classList.remove("questions-active");
    question5El.classList.remove("questions-active");
    question6El.classList.remove("questions-active");
    question7El.classList.remove("questions-active");

}

function functionQae4(){
    answere1El.style.display = "none";
    answere2El.style.display = "none";
    answere3El.style.display = "none";
    answere4El.style.display = "block";
    answere5El.style.display = "none";
    answere6El.style.display = "none";
    answere7El.style.display = "none";

    question1El.classList.remove("questions-active");
    question2El.classList.remove("questions-active");
    question3El.classList.remove("questions-active");
    question4El.classList.add("questions-active");
    question5El.classList.remove("questions-active");
    question6El.classList.remove("questions-active");
    question7El.classList.remove("questions-active");

}

function functionQae5(){
    answere1El.style.display = "none";
    answere2El.style.display = "none";
    answere3El.style.display = "none";
    answere4El.style.display = "none";
    answere5El.style.display = "block";
    answere6El.style.display = "none";
    answere7El.style.display = "none";

    question1El.classList.remove("questions-active");
    question2El.classList.remove("questions-active");
    question3El.classList.remove("questions-active");
    question4El.classList.remove("questions-active");
    question5El.classList.add("questions-active");
    question6El.classList.remove("questions-active");
    question7El.classList.remove("questions-active");

}

function functionQae6(){
    answere1El.style.display = "none";
    answere2El.style.display = "none";
    answere3El.style.display = "none";
    answere4El.style.display = "none";
    answere5El.style.display = "none";
    answere6El.style.display = "block";
    answere7El.style.display = "none";

    question1El.classList.remove("questions-active");
    question2El.classList.remove("questions-active");
    question3El.classList.remove("questions-active");
    question4El.classList.remove("questions-active");
    question5El.classList.remove("questions-active");
    question6El.classList.add("questions-active");
    question7El.classList.remove("questions-active");

}


function functionQae7(){
    answere1El.style.display = "none";
    answere2El.style.display = "none";
    answere3El.style.display = "none";
    answere4El.style.display = "none";
    answere5El.style.display = "none";
    answere6El.style.display = "none";
    answere7El.style.display = "block";

    question1El.classList.remove("questions-active");
    question2El.classList.remove("questions-active");
    question3El.classList.remove("questions-active");
    question4El.classList.remove("questions-active");
    question5El.classList.remove("questions-active");
    question6El.classList.remove("questions-active");
    question7El.classList.add("questions-active");

}


question1El.addEventListener("click", functionQae1);
question2El.addEventListener("click", functionQae2);
question3El.addEventListener("click", functionQae3);
question4El.addEventListener("click", functionQae4);
question5El.addEventListener("click", functionQae5);
question6El.addEventListener("click", functionQae6);
question7El.addEventListener("click", functionQae7);