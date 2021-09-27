const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);
generateJoke();

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const result = await fetch("https://icanhazdadjoke.com", config);
    const data = await result.json();
    jokeEl.innerHTML = data.joke;
  } catch (e) {
    console.log(e.mesaage);
  }
}
