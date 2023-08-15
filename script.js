const api_url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
const joke = document.getElementById("joke");

async function getquote(url) {
  const response = await fetch(url);
  var data = await response.json();

  joke.innerHTML = data.joke;
}

getquote(api_url);
