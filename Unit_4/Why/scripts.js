const htmlDiv = document.getElementById("main-div");
const btn = document.getElementById("fetch-button");

const url =
  "https://api.giphy.com/v1/gifs/random?api_key=aybRuxEsp16RjpQ8Xf4ZNvfmEZAtTnVI&tag=&rating=pg";

const gifFetch = async () => {
  let response = await fetch(url);
  let fetchedData = await response.json();
  displayGif(fetchedData);
};

function displayGif(object) {
  while (htmlDiv.firstChild) {
    htmlDiv.removeChild(htmlDiv.firstChild);
  }

  let div = document.createElement("div");
  let title = document.createElement("h3");
  let gif = document.createElement("img");

  title.innerText = object.data.title;
  gif.src = object.data.images.downsized_large.url;

  div.appendChild(title);
  div.appendChild(gif);
  htmlDiv.appendChild(div);
}

btn.addEventListener("click", (e) => {
  e.preventDefault();

  gifFetch();
});
