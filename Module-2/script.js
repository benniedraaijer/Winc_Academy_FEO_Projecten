document.querySelector(".movie").innerHTML = data.movie.reduce(
  (a, c) =>
    a +
    `<a href="https://www.imdb.com/title/${c.imdbID}/" target="_blank"><img src="${c.Poster}" alt="film poster ${c.Title}"></a>`,
  ""
);

document.querySelector(".text").oninput = search => {
  document.querySelector(".movie").innerHTML = data.movie
    .filter(data =>
      data.Title.toLowerCase().includes(search.srcElement.value.toLowerCase())
    )
    .reduce(
      (a, c) =>
        a +
        `<a href="https://www.imdb.com/title/${c.imdbID}/" target="_blank"><img src="${c.Poster}" alt="film poster ${c.Title}"></a>`,
      ""
    );
};

document.querySelectorAll(".options *").forEach(filter => {
  filter.onchange = selection => {
    if (selection.target.value === "latest") {
      document.querySelector(".movie").innerHTML = data.movie
        .filter(data => parseInt(data.Year) >= 2014)
        .reduce(
          (a, c) =>
            a +
            `<a href="https://www.imdb.com/title/${c.imdbID}/" target="_blank"><img src="${c.Poster}" alt="film poster ${c.Title}"></a>`,
          ""
        );
    } else {
      document.querySelector(".movie").innerHTML = data.movie
        .filter(data => data.Title.includes(selection.target.value))
        .reduce(
          (a, c) =>
            a +
            `<a href="https://www.imdb.com/title/${c.imdbID}/" target="_blank"><img src="${c.Poster}" alt="film poster ${c.Title}"></a>`,
          ""
        );
    }
  };
});

document.onkeypress = key => {
  if (key.keyCode === 13) {
    key.preventDefault();
  }
};
