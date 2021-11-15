// @ts-check

/** @type {() => Promise<string[]>} */
const fetchGlobishWords = async () => {
  const response = await fetch("/api/1500-english-globish-words.json", {
    method: "GET",
  });
  return response.json();
};

/** @type {() => HTMLElement} */
const createTitle = () => {
  const title = document.createElement("h1");
  title.classList.add("globish-title");
  title.innerText = "Globish words";
  title.style.textAlign = "center";
  return title;
};

/** @type {() => HTMLElement} */
const createGlobishContainer = () => {
  const globishContainer = document.createElement("div");
  globishContainer.classList.add("globish-words");
  return globishContainer;
};

const initialize = async () => {
  const root = document.getElementById("root");

  if (!root) {
    const text = document.createElement("p");
    text.classList.add("no-root");
    text.innerText = 'You need create a element with id "root"';
    return document.documentElement.appendChild(text);
  }

  const title = createTitle();
  root.appendChild(title);

  const words = await fetchGlobishWords();

  {
    const container = createGlobishContainer();

    words.forEach((word) => {
      const text = document.createElement("p");
      text.classList.add("globish-word");
      text.innerText = word;
      container.appendChild(text);
    });

    root.appendChild(container);
  }
};

document.addEventListener("DOMContentLoaded", initialize);
