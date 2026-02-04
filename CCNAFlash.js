const flashcards = [
  { front: 'What does OSI stand for in the OSI model?', back: 'Open Systems Interconnection' },
];

let remainingIndexes = [...Array(flashcards.length).keys()]; // Stores indexes instead of modifying original array
let currentCardIndex = -1;

const front = document.querySelector('.flashcard .front');
const back = document.querySelector('.flashcard .back');
const flipBtn = document.getElementById('flip-btn');
const nextBtn = document.getElementById('next-btn');

document.addEventListener("DOMContentLoaded", () => {
    getRandomCard();
    updateCard();
    showFront();
});

function updateCard() {
  if (remainingIndexes.length === 0) {
    front.textContent = 'All questions have been answered!';
    back.textContent = '';
    nextBtn.disabled = true;
    return;
  }

  front.textContent = flashcards[currentCardIndex].front;
  back.textContent = flashcards[currentCardIndex].back;
}

function showFront() {
  front.style.display = 'block';
  back.style.display = 'none';
}

function showBack() {
  front.style.display = 'none';
  back.style.display = 'block';
}

function getRandomCard() {
  if (remainingIndexes.length === 0) return;

  let randomIndex = Math.floor(Math.random() * remainingIndexes.length);
  currentCardIndex = remainingIndexes[randomIndex]; // Get the actual flashcard index
  remainingIndexes.splice(randomIndex, 1); // Remove index so it's not picked again
}

nextBtn.addEventListener('click', () => {
  getRandomCard();
  updateCard();
  showFront();
});

flipBtn.addEventListener('click', () => {
  if (back.style.display === 'block') { 
    showFront();
  } else {
    showBack();
  }
});
