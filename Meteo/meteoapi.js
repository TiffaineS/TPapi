let city = prompt('Choisir une ville.');
let unit = "metric";

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8d1ea57f5c7bb682b127c50f23b95b2b&units=${unit}`)
.then(response => response.json())
.then(response => console.log(response))
.catch(error => console.error(error));


function createDom(element_name, text, parent) {
    const markup = document.createElement(element_name);
    markup.textContent = text;
    parent.appendChild(markup);
    return markup;
}


async function getData() {

    try {

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8d1ea57f5c7bb682b127c50f23b95b2b&units=${unit}`);
        const data = await response.json();
        console.log(data);
        let infos = createDom("div","",document.body);
        infos.setAttribute("id", "informations");

        createDom("h1", data.name , infos);

        let tps = createDom("div", "", infos);
        tps.setAttribute("id","tps");
        infos.appendChild(tps);
        createDom("label", "Temps : " , tps);
        createDom("p", data.weather[0].main, tps);
        

        let desc = createDom("div", "", infos);
        desc.setAttribute("id","desc");
        infos.appendChild(desc);
        createDom("label", "Description : " , desc);
        createDom("p", data.weather[0].description, desc);

        let temp = createDom("div", "", infos);
        temp.setAttribute("id","temp");
        infos.appendChild(temp);
        createDom("label", "Température : " , temp);
        createDom("p", `${data.main.temp} °C`, temp);
        if (data.main.temp > 25) {
            $("#temp").css("background-color", "yellow");
            $("#temp").css("border", "yellow");
        } else if (data.main.temp < 10) {
            $("#temp").css("background-color", "blue");
            $("#temp").css("border", "blue");
        }

        let ress = createDom("div", "", infos);
        ress.setAttribute("id","ress");
        infos.appendChild(ress);
        createDom("label", "Ressenti : " , ress);
        createDom("p", `${data.main.feels_like} °C`, ress);

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
        alert("Erreur, veuillez saisir une autre ville!");
        city = prompt('choisir une ville');
    }

}


getData();



