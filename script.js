quoteButton = document.getElementById("quoteButton");
quoteText = document.getElementById("quoteText");
let quoteUrl = "https://api.api-ninjas.com/v1/quotes?category=inspirational"
let apiKey = "eB8MBQ68gY/PPCjzioEUqQ==OruEx0QHdYMVlm6f"
let options = {
    method: 'GET',
    headers: {'X-Api-Key': apiKey},
    contentType: 'application/json',
}
presetQuote = '"This is a preset quote bc generated quote is too long" -Eric'

quoteButton.addEventListener("click", function () {
    setQuoteText()
});

async function apiCall(url) {
    let response = await fetch(url, options)
    let data = await response.json()
    return data
}

async function setQuoteText() {
    let data = await apiCall(quoteUrl);
    const quote = data[0].quote;
    const author = data[0].author;
    if (quote.length > 500) {
        quoteText.innerHTML = presetQuote;
    } else {
        quoteText.innerHTML = '"' + quote + '"' + " -" + author;
    }
    
}



exerciseUrl = "https://api.api-ninjas.com/v1/exercises?difficulty=beginner&muscle="
pushButton = document.getElementById("pushButton");
pullButton = document.getElementById("pullButton");
legsButton = document.getElementById("legsButton");
pushText = document.getElementById("pushText");
pullText = document.getElementById("pullText");
legsText = document.getElementById("legsText");
let muscle = "";


pushButton.addEventListener("click", function () {
    muscle = "chest"
    generateWorkout()
});

pullButton.addEventListener("click", function () {
    muscle = "lower_back"
    generateWorkout()
});

legsButton.addEventListener("click", function () {
    muscle = "glutes"
    generateWorkout()
});


async function generateWorkout() {
    let data = await apiCall(exerciseUrl+muscle);
    const name = data[0].name;
    const instr = data[0].instructions;
    pushText.innerHTML = name;

}



