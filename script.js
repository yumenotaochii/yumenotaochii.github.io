let questions = {};

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const showAnswerButton = document.getElementById("show-answer");
const nextQuestionButton = document.getElementById("next-question");
const questionForm = document.getElementById("question-form");
const newTagInput = document.getElementById("new-tag");
const newQuestionInput = document.getElementById("new-question");
const newAnswerInput = document.getElementById("new-answer");
const tagListElement = document.getElementById("tag-list");

let currentTag = null;
let currentQuestionIndex = 0;

function loadQuestion() {
    if (currentTag && questions[currentTag] && questions[currentTag].length > 0) {
        const currentQuestion = questions[currentTag][currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        answerElement.textContent = currentQuestion.answer;
        answerElement.style.display = "none";
    } else {
        questionElement.textContent = "質問がありません。";
        answerElement.textContent = "";
    }
}

function updateTagList() {
    tagListElement.innerHTML = '';
    for (const tag in questions) {
        const tagItem = document.createElement("li");
        tagItem.textContent = tag;
        tagItem.addEventListener("click", () => setCurrentTag(tag));
        tagListElement.appendChild(tagItem);
    }
}

showAnswerButton.addEventListener("click", () => {
    answerElement.style.display = "block";
});

nextQuestionButton.addEventListener("click", () => {
    if (currentTag && questions[currentTag]) {
        currentQuestionIndex = (currentQuestionIndex + 1) % questions[currentTag].length;
        loadQuestion();
    }
});

questionForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTag = newTagInput.value.trim();
    const newQuestion = newQuestionInput.value.trim();
    const newAnswer = newAnswerInput.value.trim();

    if (newTag && newQuestion && newAnswer) {
        if (!questions[newTag]) {
            questions[newTag] = [];
        }
        questions[newTag].push({ question: newQuestion, answer: newAnswer });
        newTagInput.value = '';
        newQuestionInput.value = '';
        newAnswerInput.value = '';
        alert("新しい質問が追加されました！");
        updateTagList();
    }
});

function setCurrentTag(tag) {
    currentTag = tag;
    currentQuestionIndex = 0;
    loadQuestion();
}

// 初期設定: デフォルトのタグを設定
setCurrentTag("default");
questions["default"] = [];
updateTagList();
