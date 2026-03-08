const words = [
    // Ουσιαστικά σε -ι
    { article: 'το', stem: 'πουλ', option: 'ι', correct: 'ί', full: 'πουλί' },
    { article: 'το', stem: 'παιδ', option: 'ι', correct: 'ί', full: 'παιδί' },
    { article: 'το', stem: 'σκυλ', option: 'ι', correct: 'ί', full: 'σκυλί' },
    { article: 'το', stem: 'χέρ', option: 'ι', correct: 'ι', full: 'χέρι' },
    { article: 'το', stem: 'πόδ', option: 'ι', correct: 'ι', full: 'πόδι' },
    { article: 'το', stem: 'μαχαίρ', option: 'ι', correct: 'ι', full: 'μαχαίρι' },
    { article: 'το', stem: 'σπίτ', option: 'ι', correct: 'ι', full: 'σπίτι' },
    { article: 'το', stem: 'κουτ', option: 'ι', correct: 'ί', full: 'κουτί' },
    
    // Ουσιαστικά σε -η
    { article: 'η', stem: 'φων', option: 'η', correct: 'ή', full: 'φωνή' },
    { article: 'η', stem: 'βρύσ', option: 'η', correct: 'η', full: 'βρύση' },
    { article: 'η', stem: 'νίκ', option: 'η', correct: 'η', full: 'νίκη' },
    { article: 'η', stem: 'αγάπ', option: 'η', correct: 'η', full: 'αγάπη' },
    { article: 'η', stem: 'αυλ', option: 'η', correct: 'ή', full: 'αυλή' },
    { article: 'η', stem: 'βροχ', option: 'η', correct: 'ή', full: 'βροχή' },
    { article: 'η', stem: 'αράχν', option: 'η', correct: 'η', full: 'αράχνη' },

    // Ρήματα (-ει ή -ω)
    // Εδώ βάζουμε και ρήματα σε -ει και ρήματα σε -ω
    { article: 'αυτός', stem: 'τρέχ', option: 'ει', correct: 'ει', full: 'τρέχει' },
    { article: 'εγώ', stem: 'παίζ', option: 'ω', correct: 'ω', full: 'παίζω' },
    { article: 'αυτή', stem: 'γράφ', option: 'ει', correct: 'ει', full: 'γράφει' },
    { article: 'αυτός', stem: 'διαβάζ', option: 'ει', correct: 'ει', full: 'διαβάζει' },
    { article: 'εγώ', stem: 'βλέπ', option: 'ω', correct: 'ω', full: 'βλέπω' },
    { article: 'αυτό', stem: 'κλαί', option: 'ει', correct: 'ει', full: 'κλαίει' },
    { article: 'αυτή', stem: 'τραγουδά', option: 'ει', correct: 'ει', full: 'τραγουδάει' },
    { article: 'εγώ', stem: 'τρέχ', option: 'ω', correct: 'ω', full: 'τρέχω' },

    // Πληθυντικός Ουσιαστικών σε -οι
    { article: 'οι', stem: 'άνθρωπ', option: 'οι', correct: 'οι', full: 'άνθρωποι' },
    { article: 'οι', stem: 'δρόμ', option: 'οι', correct: 'οι', full: 'δρόμοι' },
    { article: 'οι', stem: 'φίλ', option: 'οι', correct: 'οι', full: 'φίλοι' },
    { article: 'οι', stem: 'λύκ', option: 'οι', correct: 'οι', full: 'λύκοι' },
    { article: 'οι', stem: 'κήπ', option: 'οι', correct: 'οι', full: 'κήποι' },
    { article: 'οι', stem: 'γιατρ', option: 'οι', correct: 'οί', full: 'γιατροί' },
    { article: 'οι', stem: 'δάσκαλ', option: 'οι', correct: 'οι', full: 'δάσκαλοι' },

    // Ουσιαστικά σε -ο
    { article: 'το', stem: 'βάζ', option: 'ο', correct: 'ο', full: 'βάζο' },
    { article: 'το', stem: 'μήλ', option: 'ο', correct: 'ο', full: 'μήλο' },
    { article: 'το', stem: 'βιβλί', option: 'ο', correct: 'ο', full: 'βιβλίο' },
    { article: 'το', stem: 'νερ', option: 'ο', correct: 'ό', full: 'νερό' },
    { article: 'το', stem: 'βουν', option: 'ο', correct: 'ό', full: 'βουνό' },
    { article: 'το', stem: 'δέντρ', option: 'ο', correct: 'ο', full: 'δέντρο' },
    { article: 'το', stem: 'φύλλ', option: 'ο', correct: 'ο', full: 'φύλλο' },
    { article: 'το', stem: 'χωρι', option: 'ο', correct: 'ό', full: 'χωριό' }
];

let currentWordIndex = 0;
let correctScore = 0;
let wrongScore = 0;
let attemptsForWord = 0; // tracking if they missed the first try

// DOM Elements
const wordArticleEl = document.getElementById('word-article');
const wordStemEl = document.getElementById('word-stem');
const wordEndingEl = document.getElementById('word-ending');
const wordCardEl = document.getElementById('word-card');
const feedbackMessageEl = document.getElementById('feedback-message');
const optionBtns = document.querySelectorAll('.option-btn');
const nextBtn = document.getElementById('next-btn');
const correctScoreEl = document.getElementById('correct-score');
const wrongScoreEl = document.getElementById('wrong-score');

// Ήχοι (Προαιρετικό, αν θέλεις να προσθέσεις στο μέλλον)
const playCorrectSound = () => {
    try {
        const audio = new Audio('https://www.myinstants.com/media/sounds/correct-chime.mp3');
        audio.volume = 0.5;
        audio.play().catch(e => console.log('Audio error:', e));
    } catch (e) {}
};

const playWrongSound = () => {
    try {
        const audio = new Audio('https://www.myinstants.com/media/sounds/error-sound-effect.mp3');
        audio.volume = 0.3;
        audio.play().catch(e => console.log('Audio error:', e));
    } catch (e) {}
};

// Initialize Game
function initGame() {
    shuffleArray(words);
    currentWordIndex = 0;
    correctScore = 0;
    wrongScore = 0;
    updateScore();
    loadWord();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function loadWord() {
    attemptsForWord = 0;
    const currentWord = words[currentWordIndex];
    
    // Reset UI
    if (currentWord.article) {
        wordArticleEl.textContent = currentWord.article + ' ';
        wordArticleEl.style.display = 'inline';
    } else {
        wordArticleEl.style.display = 'none';
        wordArticleEl.textContent = '';
    }
    wordStemEl.textContent = currentWord.stem;
    wordEndingEl.textContent = '\u00A0';
    wordEndingEl.className = 'missing';
    wordCardEl.className = 'word-card';
    feedbackMessageEl.textContent = '';
    feedbackMessageEl.className = 'feedback-message';
    nextBtn.classList.add('hidden');
    
    // Ενεργοποίηση κουμπιών με εφε
    optionBtns.forEach(btn => {
        btn.disabled = false;
        btn.style.opacity = '1';
        btn.style.transform = 'scale(1)';
    });
}

function updateScore() {
    correctScoreEl.textContent = correctScore;
    wrongScoreEl.textContent = wrongScore;
}

function handleOptionClick(event) {
    const selectedOption = event.target.getAttribute('data-ending');
    const currentWord = words[currentWordIndex];

    if (selectedOption === currentWord.option) {
        // Correct Answer
        playCorrectSound();
        wordEndingEl.textContent = currentWord.correct; // Βάζουμε το τονισμένο αν χρειάζεται
        wordEndingEl.className = 'missing filled-correct';
        wordCardEl.className = 'word-card correct-anim';
        
        feedbackMessageEl.textContent = 'Τέλεια! 🌟';
        feedbackMessageEl.className = 'feedback-message success pop-in';
        
        if (attemptsForWord === 0) {
            correctScore++;
            updateScore();
        }

        // Fire Confetti
        confetti({
            particleCount: 200,
            spread: 90,
            origin: { y: 0.5 },
            colors: ['#FF4757', '#2ED573', '#FFA502', '#1E90FF', '#FF69B4']
        });

        // Disable buttons
        optionBtns.forEach(btn => {
            btn.disabled = true;
            if (btn.getAttribute('data-ending') !== currentWord.option) {
                btn.style.opacity = '0.4';
                btn.style.transform = 'scale(0.95)';
            } else {
                btn.classList.add('pulse-btn');
            }
        });
        
        // Show next button
        if (currentWordIndex === words.length - 1) {
            nextBtn.textContent = 'Παίξε ξανά 🔄';
        } else {
            nextBtn.textContent = 'Επόμενη Λέξη ➔';
        }
        nextBtn.classList.remove('hidden');
        
    } else {
        // Wrong Answer
        playWrongSound();
        attemptsForWord++;
        
        wordCardEl.classList.remove('shake');
        void wordCardEl.offsetWidth; // trigger reflow
        wordCardEl.classList.add('shake');
        
        feedbackMessageEl.textContent = 'Ωχ! Δοκίμασε ξανά... 🤔';
        feedbackMessageEl.className = 'feedback-message error';
        
        if (attemptsForWord === 1) {
            wrongScore++;
            updateScore();
        }
        
        // Disable the clicked wrong button
        event.target.disabled = true;
        event.target.style.opacity = '0.4';
        event.target.style.transform = 'scale(0.9)';
    }
}

// Event Listeners
optionBtns.forEach(btn => {
    btn.addEventListener('click', handleOptionClick);
});

nextBtn.addEventListener('click', () => {
    // Αφαίρεση pulse animation
    optionBtns.forEach(btn => btn.classList.remove('pulse-btn'));
    
    currentWordIndex++;
    if (currentWordIndex >= words.length) {
        // restart array
        initGame();
        feedbackMessageEl.textContent = 'Μπράβο! Τελείωσες όλες τις λέξεις και ξεκινάμε νέο γύρο! 🏆';
        feedbackMessageEl.className = 'feedback-message success pop-in';
    } else {
        loadWord();
    }
});

// Start the game on load
window.onload = initGame;
