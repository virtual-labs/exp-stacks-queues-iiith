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
            question: "1. Given only a single array of size 10 and no other available memory, which of the following operation is not feasible to implement (Given only push and pop operation)? ", ///// Write the question inside double quotes
            answers: {
                a: "Push or Enqueue ", ///// Write the option 1 inside double quotes
                b: " Pop", ///// Write the option 2 inside double quotes
 		c: "Returntop", ///// Write the option 3 inside double quotes
                d: " Both a and b", ///// Write the option 4 inside double quotes
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },

    {
      question: "2. The following sequence of operations are performed on a stack :PUSH(10),PUSH(20),POP,PUSH(10),PUSH(20),POP,POP,POP,PUSH(20),POP The sequence of values popped out is",  ///// Write the question inside double quotes
      answers: {
        a: "20,10,20,10,20",                  ///// Write the option 1 inside double quotes
        b: "20,20,10,10,20",                  ///// Write the option 2 inside double quotes
	c: "10,20,20,10,20 ", ///// Write the option 3 inside double quotes
        d: " 20,20,10,20,10", ///// Write the option 4 inside double quotes
              },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },

{
      question: "3. Stacks can be implemented using _________ and ________ ?",  ///// Write the question inside double quotes
      answers: {
        a: "Array and Binary tree",                  ///// Write the option 1 inside double quotes
        b: "Linked list and Graph",                  ///// Write the option 2 inside double quotes
	c: "Array and Linked list ", ///// Write the option 3 inside double quotes
        d: "Queue and Linked list", ///// Write the option 4 inside double quotes
	e: "Both c and d", ///// Write the option 4 inside double quotes
              },
      correctAnswer: "e"                ///// Write the correct option inside double quotes
    },

{
      question: "4. Stack data structure cannot be used for",  ///// Write the question inside double quotes
      answers: {
        a: " Implementation of recursive function ",                  ///// Write the option 1 inside double quotes
        b: "Allocation of Resources and Scheduling",                  ///// Write the option 2 inside double quotes
	c: "Reversing a string ", ///// Write the option 3 inside double quotes
        d: "Evaluation of string in postfix form ", ///// Write the option 4 inside double quotes
	 
              },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },

{
      question: "5. Insertion and Deletion operation in Queue and Stack are known as ? ",  ///// Write the question inside double quotes
      answers: {
        a: "Enqueue and Dequeue, Push and Pop",                  ///// Write the option 1 inside double quotes
        b: "Push and Pop, Enqueue and Dequeue ",                  ///// Write the option 2 inside double quotes
	c: "Pop and Push, Dequeue and Enqueue ", ///// Write the option 3 inside double quotes
        d: "Dequeue and Enqueue, Pop and Push ", ///// Write the option 4 inside double quotes
	 
              },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },
     {
      question: "6. In linked list implementation of a queue, where does a new element get inserted? ",  ///// Write the question inside double quotes
      answers: {
        a: " At the head of link list",                  ///// Write the option 1 inside double quotes
        b: " At the tail of the link list ",                  ///// Write the option 2 inside double quotes
	c: "At the centre position in the link list ", ///// Write the option 3 inside double quotes
        d: "None of these ", ///// Write the option 4 inside double quotes
	 
              },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },
{
      question: "7. In linked list implementation of queue, if only front pointer is maintained, which of the following operation take worst case linear time?  ",  ///// Write the question inside double quotes
      answers: {
        a: "Enqueue",                  ///// Write the option 1 inside double quotes
        b: "Dequeue  ",                  ///// Write the option 2 inside double quotes
	c: "To empty a queue ", ///// Write the option 3 inside double quotes
        d: "both a and c ", ///// Write the option 4 inside double quotes
	 
              },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
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
