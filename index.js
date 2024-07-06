const btn = document.querySelector(".btn");
const themeToggle = document.getElementById("theme-toggle");

btn.addEventListener("click", function() {
    const boyname = document.getElementById("boyname").value;
    const girlname = document.getElementById("girlname").value;

    if (validateInput(boyname) && validateInput(girlname)) {
        const randomNumber = lscore();
        if (randomNumber < 30) {
            document.getElementById("score").textContent = "Your love score is " + randomNumber + " - try to spend more time with each other";
        } else if (randomNumber > 30 && randomNumber < 80) {
            document.getElementById("score").textContent = "Your love score is " + randomNumber + " - nice going";
        } else {
            document.getElementById("score").textContent = "Your love score is " + randomNumber + " - you love each other like a pair of shoes";
        }
    }
});

themeToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    document.getElementById("title").classList.toggle("dark-mode");
    document.getElementById("medium").classList.toggle("dark-mode");
    document.getElementById("testimonials").classList.toggle("dark-mode");

    const skillRows = document.querySelectorAll(".skill-row, .bondingStrength-row, .check");
    skillRows.forEach(row => row.classList.toggle("dark-mode"));

    const btns = document.querySelectorAll(".btn");
    btns.forEach(button => button.classList.toggle("dark-mode"));
});

function lscore() {
    return Math.floor(Math.random() * 100);
}

function validateInput(input) {
    if (input.trim().split(/\s+/).length > 10) {
        alert("Input should not contain more than 10 words.");
        return false;
    }

    const letterCount = {};
    for (const char of input.toLowerCase()) {
        if (/[a-z]/.test(char)) {
            letterCount[char] = (letterCount[char] || 0) + 1;
            if (letterCount[char] > 3) {
                alert("Input should not contain more than 3 repeating letters.");
                return false;
            }
        }
    }

    return true;
}
