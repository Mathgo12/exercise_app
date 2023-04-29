quoteButton = document.getElementById("quoteButton");
quoteText = document.getElementById("quoteText");
let quoteUrl = "https://api.api-ninjas.com/v1/quotes?category=inspirational"
let apiKey = "eB8MBQ68gY/PPCjzioEUqQ==OruEx0QHdYMVlm6f"
let options = {
    method: 'GET',
    headers: {'X-Api-Key': apiKey},
    contentType: 'application/json',
}

quoteButton.addEventListener("click", function () {
    setQuoteText();
});

async function getQuoteData() {
    let data = await apiCall(quoteUrl);
    return {
        "content": data[0].quote,
        "author": data[0].author,
    }
}

async function setQuoteText() {
    let quoteData = await getQuoteData();
    const content = quoteData.content;
    const author = quoteData.author;
    quoteText.innerHTML = '"' + content + '"' + " -" + author;
}



async function apiCall(url) {
    let response = await fetch(url, options)
    let data = await response.json()
    return data
}



