// List of words and their answers
const words = [
    { word: "Sun", answer: "sun" },
    { word: "Moon", answer: "moon" },
    { word: "Tree", answer: "tree" },
    { word: "auch", answer: "also" },
    { word: "Sky", answer: "sky" }
];

let currentWord = {}; // Stores the current word object

// Function to load a new word
function loadWord() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    document.getElementById("word").textContent = currentWord.word;
    document.getElementById("answer").value = ""; // Clear input
    document.getElementById("result").textContent = ""; // Clear result
}

// Function to check the answer
function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
    
    if (userAnswer === currentWord.answer) {
        document.getElementById("result").textContent = "✅ Correct!";
        document.getElementById("result").style.color = "green";
        setTimeout(loadWord, 1000); // Load next word after 1s
    } else {
        document.getElementById("result").textContent = "❌ Try again!";
        document.getElementById("result").style.color = "red";
    }
}

// Load the first word when page loads
window.onload = loadWord;
