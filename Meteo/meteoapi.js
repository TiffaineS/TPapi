function createDom(element_name, text, parent) {
    const markup = document.createElement(element_name);
    markup.textContent = text;
    parent.appendChild(markup);
    return markup;
}


let city = "Orleans";
let unit = "metric";

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8d1ea57f5c7bb682b127c50f23b95b2b&units=${unit}`)
.then(response => response.json())
.then(response => console.log(response))
.catch(error => console.error(error));


let container = createDom("div","",document.body);
container.setAttribute("id","container");
let card = createDom("div","",container);
card.setAttribute("id","card");


for (let i = 1; i < 11; i++) {
    let loc = document.createElement("div");
    loc.id = "loc" + i;
    card.appendChild(loc);
    let point = document.createElement("div");
    point.id = "point" + i;
    loc.appendChild(point);
    let text = document.createElement("div");
    text.id = "text" + i;
    loc.appendChild(text);
}




text1.textContent = "Montpellier";
text2.textContent = "Toulouse";
text3.textContent = "Bordeaux";
text4.textContent = "Angers";
text5.textContent = "Dijon";
text6.textContent = "Belfort";
text7.textContent = "Paris";
text8.textContent = "Metz";
text9.textContent = "Lille";
text10.textContent = "Brest";

let ville;


async function getData() {

    try {

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=8d1ea57f5c7bb682b127c50f23b95b2b&units=${unit}`);
        const data = await response.json();
        console.log(data);

        let box = createDom("div","",container);
        box.setAttribute("id","box");
        
        let infos = createDom("div","",box);
        infos.setAttribute("id", "informations");

        createDom("h1", data.name ,infos);

        let tps = createDom("div", "",infos);
        tps.setAttribute("id","tps");

        createDom("label", "Temps : " , tps);
        createDom("p", data.weather[0].main, tps);
        
        let boxill = createDom("div", "" ,box);
        boxill.setAttribute("id","boxill");
        let imgtps = createDom("img", "" , boxill);
        imgtps.setAttribute("id","image");
        if (data.weather[0].main === "Clouds") {
            imgtps.setAttribute("src","nuage.png");
        } else if (data.weather[0].main === "Snow") {
            imgtps.setAttribute("src","neige.png");
        } else if (data.weather[0].main === "Clear") {
            imgtps.setAttribute("src","cieldegage.png");
        } else if (data.weather[0].main === "Mist" || data.weather[0].main === "Fog") {
            imgtps.setAttribute("src","brume.png");
        } else if (data.weather[0].main === "Rain") {
            imgtps.setAttribute("src","pluie.png");
        }

        let desc = createDom("div", "", infos);
        desc.setAttribute("id","desc");
        infos.appendChild(desc);
        createDom("label", "Description : " , desc);
        createDom("p", data.weather[0].description, desc);

        let temp = createDom("div", "", infos);
        temp.setAttribute("id","temp");
        infos.appendChild(temp);
        createDom("label", "Température : " , temp);
        createDom("p", `${parseInt(data.main.temp)} °C`, temp);
        if (data.main.temp > 25) {
            $("#temp").css("background-color", "lightyellow");
        } else if (data.main.temp < 10) {
            $("#temp").css("background-color", "lightblue");
        } else {
            $("#temp").css("background-color", "lightgreen");
        }

        let ress = createDom("div", "", infos);
        ress.setAttribute("id","ress");
        infos.appendChild(ress);
        createDom("label", "Ressenti : " , ress);
        createDom("p", `${parseInt(data.main.feels_like)} °C`, ress);

        let hum = createDom("div", "", infos);
        hum.setAttribute("id","hum");
        infos.appendChild(hum);
        createDom("label", "Humidité : " , hum);
        createDom("p", `${data.main.humidity} %`, hum);

        let press = createDom("div", "", infos);
        press.setAttribute("id","press");
        infos.appendChild(press);
        createDom("label", "Pression : " , press);
        createDom("p", `${data.main.pressure} hPa`, press);

        let vitv = createDom("div", "", infos);
        vitv.setAttribute("id","vitv");
        infos.appendChild(vitv);
        createDom("label", "Vitesse du vent : " , vitv);
        createDom("p", `${data.wind.speed} m/s NW`, vitv);

    } catch (error) {
        console.error(error);
        alert("Erreur!");
    }

}


point1.addEventListener("click", () => {
    let text1Div = document.querySelector("#text1");
    ville = text1Div.textContent;
    console.log(ville);
    getData();
    box.remove();
});


point2.addEventListener("click", () => {
    let text2Div = document.querySelector("#text2");
    ville = text2Div.textContent;
    console.log(ville);
    getData();
    box.remove();
});

point3.addEventListener("click", () => {
    let text3Div = document.querySelector("#text3");
    ville = text3Div.textContent;
    console.log(ville);
    getData();
    box.remove();
});

point4.addEventListener("click", () => {
    let text4Div = document.querySelector("#text4");
    ville = text4Div.textContent;
    console.log(ville);
    getData();
    box.remove();
});

point5.addEventListener("click", () => {
    let text5Div = document.querySelector("#text5");
    ville = text5Div.textContent;
    console.log(ville);
    getData();
    box.remove();
});

point6.addEventListener("click", () => {
    let text6Div = document.querySelector("#text6");
    ville = text6Div.textContent;
    console.log(ville);
    getData();
    box.remove();
});

point7.addEventListener("click", () => {
    let text7Div = document.querySelector("#text7");
    ville = text7Div.textContent;
    console.log(ville);
    getData();
    box.remove();
});

point8.addEventListener("click", () => {
    let text8Div = document.querySelector("#text8");
    ville = text8Div.textContent;
    console.log(ville);
    getData();
    box.remove();
});

point9.addEventListener("click", () => {
    let text9Div = document.querySelector("#text9");
    ville = text9Div.textContent;
    console.log(ville);
    getData();
    box.remove();
});

point10.addEventListener("click", () => {
    let text10Div = document.querySelector("#text10");
    ville = text10Div.textContent;
    console.log(ville);
    getData();
    box.remove();
});