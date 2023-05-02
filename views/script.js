quoteButton = document.getElementById("quoteButton");
quoteText = document.getElementById("quoteText");
//menuWorkoutButton = document.getElementById("menu-workouts");

let quoteUrl = "https://api.api-ninjas.com/v1/quotes?category=inspirational"
let apiKey = "eB8MBQ68gY/PPCjzioEUqQ==OruEx0QHdYMVlm6f"
let options = {
    method: 'GET',
    headers: {'X-Api-Key': apiKey},
    contentType: 'application/json'
}
presetQuote = '"This is a preset quote bc generated quote is too long" -Eric'

quoteButton.addEventListener("click", function () {
    setQuoteText()
});

//menuWorkoutButton.addEventListener('click', async () => {
//    console.log("called")
//    await getRequest("http://localhost:3000/workouts")
//})

async function getRequest(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data
}

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




