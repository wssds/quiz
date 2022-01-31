let questions = [
    {
        'question': 'Wer starb an dem Tag, als Bill Clinton seinen ersten Amtseid als US-Präsidenten leistete?',
        'answer-1': 'Prinzessin Diana',
        'answer-2': 'Audrey Hepburn',
        'answer-3': 'Freddie Mercury',
        'answer-4': 'Lyndon B. Johnson',
        'right-answer': 2, // 'audrey hepburn'

    },

    {
        'question': 'Wann wurden die ersten Laser hergestellt?',
        'answer-1': '1950',
        'answer-2': '1960',
        'answer-3': '1970',
        'answer-4': '1988',
        'right-answer': 2, //'1960'


    },

    {
        'question': 'Den DFB-Regeln zufolge hat der Schiedsrichterassistent beim Spiel zwangsläufig ...?',
        'answer-1': 'einen Kater',
        'answer-2': 'den Kanal voll',
        'answer-3': 'eine Fahne',
        'answer-4': 'einen im Tee',
        'right-answer': 3, // eine Fahne'


    },

    {
        'question': 'Der Text welches Evergreens beginnt mit dem Songtitel?',
        'answer-1': 'Aber bitte mit Sahne',
        'answer-2': 'Über den Wolken',
        'answer-3': 'Er gehört zu mir',
        'answer-4': 'Marmor, Stein und Eisen bricht',
        'right-answer': 3, //er gehört zu mir'


    },

    {
        'question': 'Was könnte man über einen Dachdecker sagen?',
        'answer-1': 'kostet nichts',
        'answer-2': 'gibt es für lau',
        'answer-3': 'ist umsonst',
        'answer-4': 'geht aufs Haus',
        'right-answer': 4, // geht aufs haus'


    },
];


let rightQuestions = 0;

let currentQuestion = 0;

//let audioSuccess = new Audio ('audio/success.mp3');


function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();

}

function showQuestion() {
    if (gameIsOver()) {
        showEndscreen();
        
    } else {
        updateProgressBar();
        updateToNextQuestion(); 
        

    }

}

function gameIsOver() {
    return currentQuestion >= questions.length;
}

function showEndscreen() {
    document.getElementById('endScreen').style = ``;
    document.getElementById('questionBody').style = `display: none;`;

    document.getElementById('amount-of-questions').innerHTML = questions.length;
    document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
    document.getElementById('header-image').src = `img/business-4271251_960_720.png`;
}

function updateProgressBar() {
    let percent = (currentQuestion + 1) / questions.length;
    percent = percent * 100
    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style = `width: ${percent}%`;

}

function updateToNextQuestion() {
        let question = questions[currentQuestion];

        document.getElementById('question-number').innerHTML = currentQuestion + 1;
        document.getElementById('questiontext').innerHTML = question['question']; // wie question['question'];
        document.getElementById('answer-1').innerHTML = question['answer-1'];
        document.getElementById('answer-2').innerHTML = question['answer-2'];
        document.getElementById('answer-3').innerHTML = question['answer-3'];
        document.getElementById('answer-4').innerHTML = question['answer-4'];
}



function answer(selection) {
    let question = questions[currentQuestion];
    console.log('Selected answer is', selection);
    //document.getElementById('').innerHTML = questions['right-answer'];
    let selectedQuestionNumber = selection.slice(-1);
    console.log('selectedQuestionNumber is ', selectedQuestionNumber);
    console.log('Current question is', question['right-answer']);

    let idOfRightAnswer = `answer-${question['right-answer']}`;

    if (selectedQuestionNumber == question['right-answer']) { //Richtige Frage beantwortet
        console.log('Richtige Antwort');
        document.getElementById(selection).parentNode.classList.add('bg-success');
        document.getElementById('overlay').classList.remove('d-none');
        
        rightQuestions++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        document.getElementById('overlay').classList.remove('d-none');
    }
    document.getElementById('next-button').disabled = false;
}

function rightAnswerSelected(selectedQuestionNumber) { //weil Variable selectedQuestionNumber
    //nicht in der Funktion definiert wurde, Funktion kennt Variable nicht
    //man könnte auch beide selectedQuestionNumber in dieser Funktion anders nennen
    return selectedQuestionNumber == questions['right-answer'];
}

function nextQuestion() {
    currentQuestion++;


    document.getElementById('next-button').disabled = true;

    resetAnswerButtons();
    showQuestion();

}


function resetAnswerButtons() {
    document.getElementById('answer-1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer-1').parentNode.classList.remove('bg-success');

    document.getElementById('answer-2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer-2').parentNode.classList.remove('bg-success');

    document.getElementById('answer-3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer-3').parentNode.classList.remove('bg-success');

    document.getElementById('answer-4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer-4').parentNode.classList.remove('bg-success');

    document.getElementById('overlay').classList.add('d-none');

}



function restartGame() {
    document.getElementById('header-image').src = `img/pencil.jpg`;
    document.getElementById('questionBody').style = ``; //questionBody wieder anzeigen
    document.getElementById('endScreen').style = `display: none;`; //Endscreen ausblenden
    rightQuestions = 0;
    currentQuestion = 0;
    init();
    
    }