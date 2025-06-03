function showJoke(response) {

let jokeElement = document.querySelector("#joke");
jokeElement.innerHTML = response.data.answer;

}

function tellJoke(event) {
    event.preventDefault();

    let apiKey = "od57b07td52499abaaad3f35534b700e";
    let context = "Provide short, funny jokes that are appropriate for all audiences.";
    let prompt = "Tell me a funny joke.";
    let apiUrl =
      `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

      let jokeElement = document.querySelector("#joke");
      jokeElement.innerHTML = "Incoming joke... please wait";

      console.log("called the AI api");
      axios.get(apiUrl).then(showJoke);

}

let jokeButton = document.querySelector("#joke-button");
jokeButton.addEventListener("click", tellJoke);