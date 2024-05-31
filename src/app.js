/*
id="search-input"
ai-response
"search-form"
*/
function runApi(event) {
  event.preventDefault();
  console.log(event);
  /*

  userInput = event;
  key = "a5ca0d6dt74bbobcf0c9aa390574f791";
  prompt = `Can you find me a book with the topics of ${userInput}`;
  context =
    "You are a library AI assistant, that enjoys to give readers with unique reading suggestions with conceise reasoning";
  apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

  axios.get(apiUrl).then(displayResponse);*/
}

function displayResponse(data) {
  console.log(data);
}

let searchFromElement = document.querySelector("#search-form");
searchFromElement.addEventListener("submit", runApi);
