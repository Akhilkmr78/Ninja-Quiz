const correctAnswers = ['B', 'B', 'B', 'B'];  //Array of correct answer placed at the index according to their question number
const result = document.querySelector('.result');
const resultValue = document.querySelector('#score');
const form = document.querySelector('.quiz-form');  

//event listener is applied to form becoz in the end form is going to submitted not button, so submit event to form
form.addEventListener('submit', e => {
    e.preventDefault();
    
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]; //Array of user answers form.name.value
    
    //iterate over useranswers and give two parameters to callback function.(answer and index for providing correct index position)
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 25; //Add score 25 as there are 4 questions for every correct answer
        }
    });
    // window object method to scroll upto the page top 10 px below 
    scrollTo(0,10);
    //remove the display none class on callback fire
    result.classList.remove('d-none');
    //dynamically display score variable to span element with animation using setInterval method
    let output = 0;
    const timer = setInterval(
       () => {
        resultValue.textContent = `${output}%`;
        
        if(output === score){
            clearInterval(timer);
        }
        output++;
       }, 15
    )  
})


