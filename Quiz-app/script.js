const quizData = [
    {
        question: 'Taj Mahal is in which Country?',
        a: 'USA',
        b: 'India',
        c: 'Japan',
        d: 'Australia',
        correct: 'b'
    },
    {
        question: 'Most Used Programming Language',
        a: 'JavaScript',
        b: 'PHP',
        c: 'C++',
        d: 'Ruby',
        correct: 'a'

    },
    {
        question: 'What does CSS stands for ?',
        a: 'Color Style Sceme',
        b: 'Cascading Style Sheet',
        c: 'Color Style Sheet',
        d: 'Cascading Sceme Sheet',
        correct: 'b'
    },
    {
        question: 'What does HTML stands for ?',
        a: 'Hometext Markup Language',
        b: 'Hypertext Makeup Language',
        c: 'Hightext Making Language ',
        d: 'Hypertext Markup Language',
        correct: 'd'
    },
    {
        question: 'Javascript is launched in ?',
        a: '1999',
        b: '1991',
        c: '1995',
        d: '1997',
        correct: 'c'
    }

];

const q1 = document.getElementById('question');
const a1 = document.getElementById('a_text');
const b1 = document.getElementById('b_text');
const c1 = document.getElementById('c_text');
const d1 = document.getElementById('d_text');
const sb = document.getElementById('submit');

let cq = 0;
let score = 0;
//let answer = undefined;

loadquiz();

function loadquiz() {


    //console.log(answerEls);
    deselectans();// to deselect the tick  
    const cqd = quizData[cq];
    q1.innerHTML = cqd.question;
    a1.innerHTML = cqd.a;
    b1.innerHTML = cqd.b;
    c1.innerHTML = cqd.c;
    d1.innerHTML = cqd.d;






}

function getans() {
    const answerEls = document.querySelectorAll('.answer');// answer class in all radio will be store here in this variable

    let answer = undefined;// if value changes in run time
    // to check if ans is checked or not if checked this will return option no if not it will return undefined
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }

    });

    return answer;
}

function deselectans() {
    const answerEls = document.querySelectorAll('.answer');// answer class in all radio will be store here in this variable

    answerEls.forEach((answerEl) => {

        answerEl.checked = false;


    });
}


sb.addEventListener("click", () => {

    const ans = getans();
    console.log(ans);
    if (ans) {

        cq++;// for index zero it is lenght 1 .
        const sol = quizData[cq - 1].correct;
        console.log(sol);
        if (sol == ans) { score++; }


        if (cq < quizData.length) // index start from 0 but length will be 1-N so thats why cq++ before check
        {

            loadquiz();
        }
        else {
            //alert("Finished!!  Score is : "+ score +" Out Of 5");

            const quiz = document.getElementById('quiz');
            quiz.innerHTML = `<h2>You Have Scored ${score} out of ${quizData.length} <h2/>
      <button onclick="location.reload()">Reload Quiz !!</button>
      `;// location reload is for reloading page or refresh it to original state
        }
    }
});