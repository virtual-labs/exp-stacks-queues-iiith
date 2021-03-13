 /////////////////////////////////////////////////////////////////////////////

 /////////////////////// Do not modify the below code ////////////////////////

 /////////////////////////////////////////////////////////////////////////////

 (function() {
     function buildQuiz() {
         // we'll need a place to store the HTML output
         const output = [];

         // for each question...
         myQuestions.forEach((currentQuestion, questionNumber) => {
             // we'll want to store the list of answer choices
             const answers = [];

             // and for each available answer...
             for (letter in currentQuestion.answers) {
                 // ...add an HTML radio button
                 answers.push(
                     `<label>
           <input type="radio" name="question${questionNumber}" value="${letter}">
           ${letter} :
           ${currentQuestion.answers[letter]}
         </label>`
                 );
             }

             // add this question and its answers to the output
             output.push(
                 `<div class="question"> ${currentQuestion.question} </div>
       <div class="answers"> ${answers.join("")} </div>`
             );
         });

         // finally combine our output list into one string of HTML and put it on the page
         quizContainer.innerHTML = output.join("");
     }

     function showResults() {
         // gather answer containers from our quiz
         const answerContainers = quizContainer.querySelectorAll(".answers");

         // keep track of user's answers
         let numCorrect = 0;

         // for each question...
         myQuestions.forEach((currentQuestion, questionNumber) => {
             // find selected answer
             const answerContainer = answerContainers[questionNumber];
             const selector = `input[name=question${questionNumber}]:checked`;
             const userAnswer = (answerContainer.querySelector(selector) || {}).value;

             // if answer is correct
             if (userAnswer === currentQuestion.correctAnswer) {
                 // add to the number of correct answers
                 numCorrect++;

                 // color the answers green
                 //answerContainers[questionNumber].style.color = "lightgreen";
             } else {
                 // if answer is wrong or blank
                 // color the answers red
                 answerContainers[questionNumber].style.color = "red";
             }
         });

         // show number of correct answers out of total
         resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
     }

     const quizContainer = document.getElementById("quiz");
     const resultsContainer = document.getElementById("results");
     const submitButton = document.getElementById("submit");


     /////////////////////////////////////////////////////////////////////////////

     /////////////////////// Do not modify the above code ////////////////////////

     /////////////////////////////////////////////////////////////////////////////






     /////////////// Write the MCQ below in the exactly same described format ///////////////


     const myQuestions = [{
            question: "1. What will be the front and rear of an initially empty queue after following the following operations on it? enqueue(2), enqueue(11), enqueue(3), dequeue(), enqueue(8), dequeue(), enqueue(5), enqueue(5), dequeue() ", ///// Write the question inside double quotes
            answers: {
                a: " 11,8 ", ///// Write the option 1 inside double quotes
                b: "3,11 ", ///// Write the option 2 inside double quotes
                c: " 8,5 ", ///// Write the option 2 inside double quotes
                d: " 5,8  ", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "c" ///// Write the correct option inside double quotes
        },

    {
      question: "2.You are given a simple queue with elements 2, 3, 8, 1, 9, 7 where 2 is the front of the queue. The elements are dequeued one-by-one and pushed into a stack, until the queue becomes empty. The elements are again popped from the stack one-by-one and enqueued into the original queue. What is the final arrangement of elements in the queue? ",  ///// Write the question inside double quotes
      answers: {
        a: " 7, 9, 1, 3, 8, 2 ",                  ///// Write the option 1 inside double quotes
        b: " 8, 1, 9, 7, 2, 3 ",                  ///// Write the option 2 inside double quotes
	c: "9, 1, 8, 3, 2, 7", ///// Write the option 3 inside double quotes
        d: "7, 9, 1, 8, 3, 2", ///// Write the option 4 inside double quotes
             },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },

{
      question: "3.What is the minimum number of stacks needed to implement a queue? ",  ///// Write the question inside double quotes
      answers: {
        a: " 1",                  ///// Write the option 1 inside double quotes
        b: "3",                  ///// Write the option 2 inside double quotes
	c: "2", ///// Write the option 3 inside double quotes
        d: "Not possible  ", ///// Write the option 4 inside double quotes
             },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },

     ];




     /////////////////////////////////////////////////////////////////////////////

     /////////////////////// Do not modify the below code ////////////////////////

     /////////////////////////////////////////////////////////////////////////////


     // display quiz right away
     buildQuiz();

     // on submit, show results
     submitButton.addEventListener("click", showResults);
 })();


 /////////////////////////////////////////////////////////////////////////////

 /////////////////////// Do not modify the above code ////////////////////////

 /////////////////////////////////////////////////////////////////////////////
