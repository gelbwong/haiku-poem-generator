/*
id="search-input"
ai-response
"search-form"
*/
function runApi(event) {
  event.preventDefault();
  let searchFormElement = document.querySelector("#search-input");

  userInput = searchFormElement.value;
  key = "a5ca0d6dt74bbobcf0c9aa390574f791";
  let prompt = `Can you find me a book with the topics of ${userInput}`;
  context =
    "You are a library AI assistant, that enjoys to give readers with 2 unique reading suggestions with conceise reasoning, please give your response in basic HTML and sign off with SheCodes AI";
  apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

  let aiFeedbackElement = document.querySelector("#ai-feedback");
  aiFeedbackElement.classList.remove("hidden");

  new Typewriter("#ai-feedback", {
    strings: "Please be patient while the AI is thinking ❤️",
    autoStart: true,
    delay: 5,
    cursor: "",
    loop: true,
  });

  axios.get(apiUrl).then(displayResponse);
}

function displayResponse(response) {
  new Typewriter("#ai-feedback", {
    strings: `${response.data.answer}`,
    autoStart: true,
    delay: 20,
    cursor: "",
    loop: false,
  });
}

let searchFromElement = document.querySelector("#search-form");
searchFromElement.addEventListener("submit", runApi);
