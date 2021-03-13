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
            question: "1. Which among the following represents a stack?", ///// Write the question inside double quotes
            answers: {
                a: "A queue of people waiting at a counter, where the action of popping is when someone has been served at the counter", ///// Write the option 1 inside double quotes
                b: "A hand of bangles where pushing is wearing a new bangle ", ///// Write the option 2 inside double quotes
                c: "Sequence of actions performed by a printer", ///// Write the option 2 inside double quotes
                d: "People going around a merry-go-round ", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "c" ///// Write the correct option inside double quotes
        },

    {
      question: "2. What is the time complexity of finding the minimum element of stack? What is the space complexity if the stack has to be restored to it's original state - how it was before the operation? ",  ///// Write the question inside double quotes
      answers: {
        a: "O(1), O(1)  ",                  ///// Write the option 1 inside double quotes
        b: " O(1), O(n)",                  ///// Write the option 2 inside double quotes
	c: "O(n), O(1) ", ///// Write the option 3 inside double quotes
        d: " O(n), O(n) ", ///// Write the option 4 inside double quotes
             },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },

{
      question: "3. What is the advantage of using linked list implementation of stack over array implementation?  ",  ///// Write the question inside double quotes
      answers: {
        a: "Insertion or pushing into stack is faster in linked list implementation. ",                  ///// Write the option 1 inside double quotes
        b: "Searching for an element is faster in linked list implementation. ",                  ///// Write the option 2 inside double quotes
	c: " Linked list has variable size, unlike an array.", ///// Write the option 3 inside double quotes
        d: " None of the above ", ///// Write the option 4 inside double quotes
             },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },
{
      question: "4. What is the outcome after the following steps, starting with an empty stack of size 5? push(3), push(5), pop(), push(10), push(11), push(100), push(9), push(10) ",  ///// Write the question inside double quotes
      answers: {
        a: "Stack overflow error ",                  ///// Write the option 1 inside double quotes
        b: "The top element is 3",                  ///// Write the option 2 inside double quotes
	c: "Stack underflow error ", ///// Write the option 3 inside double quotes
        d: "  None of the above ", ///// Write the option 4 inside double quotes
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
