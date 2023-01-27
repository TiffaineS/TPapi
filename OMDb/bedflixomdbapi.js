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


let tableau = [7456722,1345836,10795658,13531468,13406094,1386588,4565380,1103153,1279935,6589330];

console.log(tableau[getRandomInt()]);

fetch(`http://www.omdbapi.com/?apikey=8046a7d5&i=tt${tableau[getRandomInt()]}`)
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
boxcarousel.setAttribute("class", "box1de1");

let titlebox = createDom("h4", "Résultats trouvés", boxcarousel);

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
  link[i].href = `open${i}.html`;
  link[i].id = `lienid${i}`;
}

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

boxcarousel.style.display = "none";


let type = inputext.value; 

async function getData() {
  try {
    
    const response = await fetch(`https://www.omdbapi.com/?apikey=8046a7d5&s=${type}`);
    const data = await response.json();
    console.log(data);

    boxcarousel.style.display = "block";

    let newimg = document.getElementsByClassName("image");
    for (let i = 0; i < newimg.length; i++) {
      newimg[i].setAttribute("src", `${data.Search[i].Poster}`);
      sessionStorage.setItem(`search${i}`, data.Search[i].Title);
    }

  } catch (error) {
    console.log(error);
  }
}


let bout = createDom("button", "", boximgl);
bout.setAttribute("id", "boutloupe");
bout.appendChild(imgl);


bout.addEventListener("click", function () {
  page1.remove();
  console.log(inputext.value);
  type = inputext.value;
  getData();
})

