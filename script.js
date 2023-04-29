quoteButton = document.getElementById("quoteButton");
quoteText = document.getElementById("quoteText");
let quoteUrl = "https://api.api-ninjas.com/v1/quotes?category=inspirational"
let apiKey = "eB8MBQ68gY/PPCjzioEUqQ==OruEx0QHdYMVlm6f"

quoteButton.addEventListener("click", function () {
    setQuoteText();
});

async function getQuoteData() {
    let data = await apiCall(quoteUrl);
    return {
        "cotent": data.quote,
        "author": data.author,
    }
}

async function setQuoteText() {
    let quoteData = await getQuoteData();
    const content = quoteData.content;
    const author = quoteData.author;
    quoteText.innerHTML = content;
}

let options = {
    headers: {'X-Api-Key': apiKey},
}

async function apiCall(url) {
    let response = await fetch(url, options)
    let data = await response.json()
    return data
}



