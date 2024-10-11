// Array for Quote of the Day
const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Do what you can, with what you have, where you are.",
    "The best way to predict your future is to create it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts."
];

// Questions and Answers for Trivia
const questions = [
    "What color is Garfield the Cat?",
    "What animal says 'neigh'?",
    "What is 8 + 2?"
];
const answers = ["orange", "horse", "10"];

// Function to display the quote of the day
function displayQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerHTML = "Quote of the day: " + quotes[randomIndex];
}

// Function to get a user-friendly date
function displayDate() {
    let currentDate = new Date();
    let dateString = currentDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    document.getElementById("date").innerHTML = "Today is " + dateString;
}

// Function to get user name and create a greeting
function getGreeting() {
    let userName = prompt("Enter your name:");
    userName = capitalizeFirstLetter(userName);

    let currentHour = new Date().getHours();
    let greetingMessage;

    switch (true) {
        case (currentHour < 12):
            greetingMessage = "Good Morning, " + userName + "!";
            break;
        case (currentHour < 18):
            greetingMessage = "Good Afternoon, " + userName + "!";
            break;
        default:
            greetingMessage = "Good Evening, " + userName + "!";
            break;
    }

    document.getElementById("greeting").innerHTML = greetingMessage;
}

// Function to capitalize the first letter of the name
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Function to validate email
function validateEmail() {
    let email;
    let isValid = false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    while (!isValid) {
        email = prompt("Enter your email address:");
        if (emailRegex.test(email)) {
            isValid = true;
        } else {
            alert("Invalid email address. Please try again.");
        }
    }

    let [username, domain] = email.split("@");
    username = username.toUpperCase();
    alert("Username: " + username + "\nDomain: " + domain);
}

// Trivia quiz function
function quiz() {
    let score = 0;

    for (let i = 0; i < questions.length; i++) {
        let guesses = 3;
        let correct = false;

        while (guesses > 0 && !correct) {
            let userAnswer = prompt(questions[i]);
            if (userAnswer.toLowerCase() === answers[i].toLowerCase()) {
                correct = true;
                if (guesses === 3) score += 3;
                else if (guesses === 2) score += 2;
                else score += 1;
            } else {
                guesses--;
            }
        }
    }

    return score;
}

// Function to display the final score and percentage
function displayScore() {
    let totalScore = quiz();
    let percentage = (totalScore / 9 * 100).toFixed(2);
    document.getElementById("score").innerHTML = "Your score is: " + totalScore + " (Percentage: " + percentage + "%)";
}

// Call functions to execute the game
getGreeting();
validateEmail();
displayDate();
displayQuote();
displayScore();
