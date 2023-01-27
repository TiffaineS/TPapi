function createDom(element_name, text, parent) {
  const markup = document.createElement(element_name);
  markup.textContent = text;
  parent.appendChild(markup);
  return markup;
}

console.log(sessionStorage.getItem('search0'));
console.log(sessionStorage.getItem('search1'));
console.log(sessionStorage.getItem('search2'));
console.log(sessionStorage.getItem('search3'));
console.log(sessionStorage.getItem('search4'));
console.log(sessionStorage.getItem('search5'));
console.log(sessionStorage.getItem('search6'));
console.log(sessionStorage.getItem('search7'));
console.log(sessionStorage.getItem('search8'));


let currentUrl = location.hostname;
let currentPort = location.port;
let currentName = location.pathname;
console.log(location.pathname);


if (location.pathname === `/open0.html`) {
  let ma_recherche0 = sessionStorage.getItem('search0');
console.log(ma_recherche0);

fetch(`http://www.omdbapi.com/?apikey=8046a7d5&t=${ma_recherche0}&plot=full`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let boxinfos = document.getElementById("informations");
    let imagela = createDom("img", ``, boxinfos);
    imagela.setAttribute("class", "imgpla");
    imagela.setAttribute("src", `${data.Poster}`)
    createDom("h2", `${data.Title}`, boxinfos);
    createDom("p", `${data.Genre}`, boxinfos);
    createDom("p", `${data.Year}`, boxinfos);
    createDom("p", `${data.Actors}`, boxinfos);
    createDom("p", `${data.Awards}`, boxinfos);
    createDom("p", `${data.Country}`, boxinfos);
    createDom("p", `${data.Language}`, boxinfos);
    createDom("p", `${data.Runtime}`, boxinfos);
    createDom("p", `${data.Writer}`, boxinfos);
    createDom("p", `${data.Plot}`, boxinfos);
  })
  .catch(error => console.error(error))

} else if (location.pathname === `/open1.html`) {
let ma_recherche1 = sessionStorage.getItem('search1');
console.log(ma_recherche1);

fetch(`http://www.omdbapi.com/?apikey=8046a7d5&t=${ma_recherche1}&plot=full`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let boxinfos = document.getElementById("informations");
    let imagela = createDom("img", ``, boxinfos);
    imagela.setAttribute("class", "imgpla");
    imagela.setAttribute("src", `${data.Poster}`)
    createDom("h2", `${data.Title}`, boxinfos);
    createDom("p", `${data.Genre}`, boxinfos);
    createDom("p", `${data.Year}`, boxinfos);
    createDom("p", `${data.Actors}`, boxinfos);
    createDom("p", `${data.Awards}`, boxinfos);
    createDom("p", `${data.Country}`, boxinfos);
    createDom("p", `${data.Language}`, boxinfos);
    createDom("p", `${data.Runtime}`, boxinfos);
    createDom("p", `${data.Writer}`, boxinfos);
    createDom("p", `${data.Plot}`, boxinfos);
  })
  .catch(error => console.error(error))

} else if (location.pathname === `/open2.html`) {
  let ma_recherche2 = sessionStorage.getItem('search2');
console.log(ma_recherche2);

fetch(`http://www.omdbapi.com/?apikey=8046a7d5&t=${ma_recherche2}&plot=full`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let boxinfos = document.getElementById("informations");
    let imagela = createDom("img", ``, boxinfos);
    imagela.setAttribute("class", "imgpla");
    imagela.setAttribute("src", `${data.Poster}`)
    createDom("h2", `${data.Title}`, boxinfos);
    createDom("p", `${data.Genre}`, boxinfos);
    createDom("p", `${data.Year}`, boxinfos);
    createDom("p", `${data.Actors}`, boxinfos);
    createDom("p", `${data.Awards}`, boxinfos);
    createDom("p", `${data.Country}`, boxinfos);
    createDom("p", `${data.Language}`, boxinfos);
    createDom("p", `${data.Runtime}`, boxinfos);
    createDom("p", `${data.Writer}`, boxinfos);
    createDom("p", `${data.Plot}`, boxinfos);
  })
  .catch(error => console.error(error))

} else if (location.pathname === `/open3.html`) {
  let ma_recherche3 = sessionStorage.getItem('search3');
console.log(ma_recherche3);

fetch(`http://www.omdbapi.com/?apikey=8046a7d5&t=${ma_recherche3}&plot=full`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let boxinfos = document.getElementById("informations");
    let imagela = createDom("img", ``, boxinfos);
    imagela.setAttribute("class", "imgpla");
    imagela.setAttribute("src", `${data.Poster}`)
    createDom("h2", `${data.Title}`, boxinfos);
    createDom("p", `${data.Genre}`, boxinfos);
    createDom("p", `${data.Year}`, boxinfos);
    createDom("p", `${data.Actors}`, boxinfos);
    createDom("p", `${data.Awards}`, boxinfos);
    createDom("p", `${data.Country}`, boxinfos);
    createDom("p", `${data.Language}`, boxinfos);
    createDom("p", `${data.Runtime}`, boxinfos);
    createDom("p", `${data.Writer}`, boxinfos);
    createDom("p", `${data.Plot}`, boxinfos);
  })
  .catch(error => console.error(error))

} else if (location.pathname === `/open4.html`) {
  let ma_recherche4 = sessionStorage.getItem('search4');
console.log(ma_recherche4);

fetch(`http://www.omdbapi.com/?apikey=8046a7d5&t=${ma_recherche4}&plot=full`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let boxinfos = document.getElementById("informations");
    let imagela = createDom("img", ``, boxinfos);
    imagela.setAttribute("class", "imgpla");
    imagela.setAttribute("src", `${data.Poster}`)
    createDom("h2", `${data.Title}`, boxinfos);
    createDom("p", `${data.Genre}`, boxinfos);
    createDom("p", `${data.Year}`, boxinfos);
    createDom("p", `${data.Actors}`, boxinfos);
    createDom("p", `${data.Awards}`, boxinfos);
    createDom("p", `${data.Country}`, boxinfos);
    createDom("p", `${data.Language}`, boxinfos);
    createDom("p", `${data.Runtime}`, boxinfos);
    createDom("p", `${data.Writer}`, boxinfos);
    createDom("p", `${data.Plot}`, boxinfos);
  })
  .catch(error => console.error(error))

} else if (location.pathname === `/open5.html`) {
  let ma_recherche5 = sessionStorage.getItem('search5');
console.log(ma_recherche5);

fetch(`http://www.omdbapi.com/?apikey=8046a7d5&t=${ma_recherche5}&plot=full`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let boxinfos = document.getElementById("informations");
    let imagela = createDom("img", ``, boxinfos);
    imagela.setAttribute("class", "imgpla");
    imagela.setAttribute("src", `${data.Poster}`)
    createDom("h2", `${data.Title}`, boxinfos);
    createDom("p", `${data.Genre}`, boxinfos);
    createDom("p", `${data.Year}`, boxinfos);
    createDom("p", `${data.Actors}`, boxinfos);
    createDom("p", `${data.Awards}`, boxinfos);
    createDom("p", `${data.Country}`, boxinfos);
    createDom("p", `${data.Language}`, boxinfos);
    createDom("p", `${data.Runtime}`, boxinfos);
    createDom("p", `${data.Writer}`, boxinfos);
    createDom("p", `${data.Plot}`, boxinfos);
  })
  .catch(error => console.error(error))

} else if (location.pathname === `/open6.html`) {
  let ma_recherche6 = sessionStorage.getItem('search6');
console.log(ma_recherche6);

fetch(`http://www.omdbapi.com/?apikey=8046a7d5&t=${ma_recherche6}&plot=full`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let boxinfos = document.getElementById("informations");
    let imagela = createDom("img", ``, boxinfos);
    imagela.setAttribute("class", "imgpla");
    imagela.setAttribute("src", `${data.Poster}`)
    createDom("h2", `${data.Title}`, boxinfos);
    createDom("p", `${data.Genre}`, boxinfos);
    createDom("p", `${data.Year}`, boxinfos);
    createDom("p", `${data.Actors}`, boxinfos);
    createDom("p", `${data.Awards}`, boxinfos);
    createDom("p", `${data.Country}`, boxinfos);
    createDom("p", `${data.Language}`, boxinfos);
    createDom("p", `${data.Runtime}`, boxinfos);
    createDom("p", `${data.Writer}`, boxinfos);
    createDom("p", `${data.Plot}`, boxinfos);
  })
  .catch(error => console.error(error))

} else if (location.pathname === `/open7.html`) {
  let ma_recherche7 = sessionStorage.getItem('search7');
console.log(ma_recherche7);

fetch(`http://www.omdbapi.com/?apikey=8046a7d5&t=${ma_recherche7}&plot=full`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let boxinfos = document.getElementById("informations");
    let imagela = createDom("img", ``, boxinfos);
    imagela.setAttribute("class", "imgpla");
    imagela.setAttribute("src", `${data.Poster}`)
    createDom("h2", `${data.Title}`, boxinfos);
    createDom("p", `${data.Genre}`, boxinfos);
    createDom("p", `${data.Year}`, boxinfos);
    createDom("p", `${data.Actors}`, boxinfos);
    createDom("p", `${data.Awards}`, boxinfos);
    createDom("p", `${data.Country}`, boxinfos);
    createDom("p", `${data.Language}`, boxinfos);
    createDom("p", `${data.Runtime}`, boxinfos);
    createDom("p", `${data.Writer}`, boxinfos);
    createDom("p", `${data.Plot}`, boxinfos);
  })
  .catch(error => console.error(error))

} else if (location.pathname === `/open8.html`) {
  let ma_recherche8 = sessionStorage.getItem('search8');
console.log(ma_recherche8);

fetch(`http://www.omdbapi.com/?apikey=8046a7d5&t=${ma_recherche8}&plot=full`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let boxinfos = document.getElementById("informations");
    let imagela = createDom("img", ``, boxinfos);
    imagela.setAttribute("class", "imgpla");
    imagela.setAttribute("src", `${data.Poster}`)
    createDom("h2", `${data.Title}`, boxinfos);
    createDom("p", `${data.Genre}`, boxinfos);
    createDom("p", `${data.Year}`, boxinfos);
    createDom("p", `${data.Actors}`, boxinfos);
    createDom("p", `${data.Awards}`, boxinfos);
    createDom("p", `${data.Country}`, boxinfos);
    createDom("p", `${data.Language}`, boxinfos);
    createDom("p", `${data.Runtime}`, boxinfos);
    createDom("p", `${data.Writer}`, boxinfos);
    createDom("p", `${data.Plot}`, boxinfos);
  })
  .catch(error => console.error(error))

}





