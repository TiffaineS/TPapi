function createDom(element_name, text, parent) {
    const markup = document.createElement(element_name);
    markup.textContent = text;
    parent.appendChild(markup);
    return markup;
  }
  

function getRandomInt() {
    return Math.floor(Math.random() * 10);
  }

  let page1 = document.getElementById("page1");
  let imgaccueil = createDom("img","",page1);
  let boxlogjum = document.getElementById("boxlogjum");

  let tableau2 = [2442560,7366338,1475582,4574334,2384811,2306299,4158110,1124373,5839732,1796960];

  console.log(getRandomInt());

  console.log(tableau2[getRandomInt()]);

  fetch(`http://www.omdbapi.com/?apikey=8046a7d5&i=tt${tableau2[getRandomInt()]}`)
    .then(response =>  response.json())
    .then(data => {
          console.log(data);
          imgaccueil.setAttribute("src", `${data.Poster}`);
          console.log(`${data.Poster}`);
          createDom("h1", `${data.Title}`, boxlogjum);
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des données', error);
    });


let page1de1 = document.getElementById("page1de1")
let boxcarousel = createDom("div", "", page1de1);
boxcarousel.setAttribute("id", "boxcarou");
boxcarousel.setAttribute("class", "page1de1");

let titlebox = createDom("h4", "Suggestions", boxcarousel);

let bboxcarou = createDom("div", "", boxcarousel);
bboxcarou.setAttribute("id", "carousel");

let prevBtn = createDom("button", "<", carousel);
prevBtn.setAttribute("id", "prevBtn");

for (let i = 0; i < 9; i++) {
    let slides = createDom("div", "", carousel);
    slides.setAttribute("class", "slide");
    let ancres = createDom("a", "", slides);
    ancres.setAttribute("class", "ancre");
    let images = createDom("img", "", ancres);
    images.setAttribute("class", "image");
}

let imgid = document.getElementsByClassName("slide");
for (let i = 0; i < 9; i++) {
    imgid[i].id = "img" + i;
    imgid[i].style.display = "none";
}

for (let i = 0; i < 3; i++) {
    imgid[i].style.display = "block";
}

let nextBtn = createDom("button", ">", carousel);
nextBtn.setAttribute("id", "nextBtn");

let imageid = document.getElementsByClassName("image");
for (let i = 0; i < 9; i++) {
  imageid[i].id = "image" + i;
}

let link = document.getElementsByClassName("ancre");
for (let i = 0; i < 9; i++) {
  link[i].href = `#pageomdbapi2${i}.html`;
}



let titre0 = "breaking+bad"
let titre1 = "Kaamelott"
let titre2 = "Arcane"
let titre3 = "Death Note"
let titre4 = "Dexter"
let titre5 = "Black Mirror"
let titre6 = "Malcolm"
let titre7 = "South Park"
let titre8 = "Scrubs"

fetch(`http://www.omdbapi.com/?apikey=8046a7d5&t=${titre0}`)
.then(response => response.json())
.then(data => {
  image0.setAttribute("src", `${data.Poster}`);
}
  )
.catch(error => console.error(error));

fetch(`http://www.omdbapi.com/?apikey=8046a7d5&t=${titre1}`)
.then(response => response.json())
.then(data => image1.setAttribute("src", `${data.Poster}`))
.catch(error => console.error(error));

fetch(`http://www.omdbapi.com/?apikey=8046a7d5&t=${titre2}`)
.then(response => response.json())
.then(data => image2.setAttribute("src", `${data.Poster}`))
.catch(error => console.error(error));

fetch(`http://www.omdbapi.com/?apikey=8046a7d5&t=${titre3}`)
.then(response => response.json())
.then(data => image3.setAttribute("src", `${data.Poster}`))
.catch(error => console.error(error));

fetch(`http://www.omdbapi.com/?apikey=8046a7d5&t=${titre4}`)
.then(response => response.json())
.then(data => image4.setAttribute("src", `${data.Poster}`))
.catch(error => console.error(error));

fetch(`http://www.omdbapi.com/?apikey=8046a7d5&t=${titre5}`)
.then(response => response.json())
.then(data => image5.setAttribute("src", `${data.Poster}`))
.catch(error => console.error(error));

fetch(`http://www.omdbapi.com/?apikey=8046a7d5&t=${titre6}`)
.then(response => response.json())
.then(data => image6.setAttribute("src", `${data.Poster}`))
.catch(error => console.error(error));

fetch(`http://www.omdbapi.com/?apikey=8046a7d5&t=${titre7}`)
.then(response => response.json())
.then(data => image7.setAttribute("src", `${data.Poster}`))
.catch(error => console.error(error));

fetch(`http://www.omdbapi.com/?apikey=8046a7d5&t=${titre8}`)
.then(response => response.json())
.then(data => image8.setAttribute("src", `${data.Poster}`))
.catch(error => console.error(error));


let count = 0;
nextBtn.addEventListener("click", function () {
    if (count != 6 && count != 7 && count != 8 && count != 9 && count != 10) {
        imgid[count].style.display = "none";
        imgid[count + 3].style.display = "block";
    }
    if (count < 6) {
        count++;
    } else {
        count = 6;
    }
})

prevBtn.addEventListener("click", function () {
    if (count != 0) {
        imgid[count - 1].style.display = "block";
        imgid[count + 2].style.display = "none";
    }
    if (count > 0) {
        count--;
    }
})



let type = inputext.value; 

let allResults = [];
let page = 1;

async function fetchData() {
  const response = await fetch(`http://www.omdbapi.com/?apikey=8046a7d5&s=${type}&page=${page}`);
  const data = await response.json();
  allResults = allResults.concat(data.Search);
  if (data.Search.length === 10 && page < 8) {
    page++;
    fetchData();
  } else {
    console.log(allResults);
    let filteredArray = [];
    for (let i = 0; i < allResults.length; i++) {
      if (allResults[i].Type === "series") {
          filteredArray.push(`Title : ${allResults[i].Title}, Poster : ${allResults[i].Poster}`);
      }
    }
    console.log(filteredArray);
    titlebox.textContent = "Résultats trouvés";
    let newimg = document.getElementsByClassName("image");
    for (let i = 0; i < newimg.length; i++) {
      if (data.Search[i].Poster === "N/A") {
      i++;
    } else {
      newimg[i].setAttribute("src", `${data.Search[i].Poster}`);
      sessionStorage.setItem(`search${i}`, data.Search[i].Title);
    }
    }
  }
}


let bout = createDom("button", "", boximgl);
bout.setAttribute("id", "boutloupe");
bout.appendChild(imgl);


bout.addEventListener("click", function () {
  console.log(inputext.value);
  type = inputext.value;
  fetchData();
})




