var score = 0;
var duckContainer = document.querySelector(".duck-container");
var scoreElement = document.querySelector("#score");
var timeLeft = 60;
var timeLeftElement = document.querySelector("#time-left");
var startButton = document.querySelector("#start-button");
var startScreen = document.querySelector("#start-screen");
var gameContainer = document.querySelector("#game-container");
var finalScore = document.getElementById('final-score');
var restartButton = document.getElementById('restart-button');
var endScreen = document.getElementById('end-screen');

endScreen.classList.add('hidden');

// Add a click event listener to the start button
startButton.addEventListener("click", function() {
  startScreen.style.display = "none";
  gameContainer.style.display = "block";
  startGame();
});

// Start the game
function startGame() {
  // Add a click event listener to the duck
  duckContainer.addEventListener("click", function() {
    score++;
    scoreElement.innerHTML = score;
    moveDuck();
  });

  // Move the duck to a random position every 3 seconds
  var moveDuckInterval = setInterval(function() {
    moveDuck();
  }, 3000);

  // Move the duck to a random position
  function moveDuck() {
    var x = Math.floor(Math.random() * (80 - 10)) + 1;
    var y = Math.floor(Math.random() * (80 - 10)) + 1;
    duckContainer.style.left = x + "%";
    duckContainer.style.top = y + "%";
  }

  // Start the timer
  var timerInterval = setInterval(function() {
    timeLeft--;
    timeLeftElement.innerHTML = timeLeft;
    if (timeLeft === 0) {
      endGame(score);
    }
  }, 1000);

  // End the game when the timer reaches 0
  function endGame(score) {
    clearInterval(timerInterval);
    clearInterval(moveDuckInterval);
    duckContainer.removeEventListener("click", function() {
      score++;
      scoreElement.innerHTML = score;
      moveDuck();
    });
    finalScore.textContent = score;
    endScreen.classList.remove('hidden');
  }
}

// When the player clicks the restart button, hide the end screen and restart the game
restartButton.addEventListener('click', function() {
  endScreen.classList.add('hidden');
  restartGame();
});

function restartGame() {
  // Reset score and time left
  score = 0;
  timeLeft = 60;

  // Update score and time left display
  scoreElement.innerText = score;
  timeLeftElement.innerText = timeLeft + " seconds";

  // Reset duck position
  duckContainer.style.left = "0%";
  duckContainer.style.top = "0%";

  // Restart game
  startGame();
}

  




// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}


