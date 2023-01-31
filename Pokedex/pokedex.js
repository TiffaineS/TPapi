function createDom(element_name, text, parent) {
    const markup = document.createElement(element_name);
    markup.textContent = text;
    parent.appendChild(markup);
    return markup;
}


let container = createDom("div","",document.body);
container.setAttribute("id","container");
let book = createDom("div","",container);
book.setAttribute("id","book");
let box1 = createDom("div","",book);
box1.setAttribute("id","box1");
let box2 = createDom("div","",book);
box2.setAttribute("id","box2");
let titlecover = createDom("h1","POKEDEX",box2);
titlecover.setAttribute("id","titlecover");
let textcover = createDom("p","(Cliquez pour ouvrir le livre!)",box2);
textcover.setAttribute("id","textcover");
let boxsearch = createDom("div","",book);
boxsearch.setAttribute("id","boxsearch");
let label = createDom("div","Entrez un nom de pokémon :",boxsearch);
let labelinfos = createDom("p","(écrire tout en minuscule et en anglais)",boxsearch);
labelinfos.setAttribute("id","labelinfos");
let input = createDom("input","",boxsearch);
input.setAttribute("id","champsaisi");
let button = createDom("button","Valider",boxsearch);
let box3 = createDom("div","",book);
box3.setAttribute("id","box3");
let box1de1 = createDom("div", "", box1);
box1de1.setAttribute("id","box1de1");
let imagepok = createDom("img","", box1de1);
imagepok.setAttribute("id","imgp");

box3.style.display = "none";
box1de1.style.display = "none";


fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
.then(response => response.json())
.then(data => {
    console.log(data);
    console.log(data.results[0].name)})
.catch(error => console.error(error));


let nom;
let number = 1;

async function getData0() {
    try {
        nom = champsaisi.value;
        console.log(nom);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nom}`);
        const data = await response.json();
        console.log(data);
        box2.style.display = "none";
        box3.style.display = "block";
        box1de1.style.display = "block";

        imagepok.setAttribute("src",data.sprites.front_default);

        let box3de1 = createDom("div", "", box3);
        box3de1.setAttribute("id","box3de1");
        let namepok = createDom("p",`Name : ${data.name}`,box1de1);
        namepok.setAttribute("id","namepok");
        let heightpok = createDom("p",`Taille : ${data.height/10} m`,box3de1);
        heightpok.setAttribute("id","heightpok");
        let weightpok = createDom("p",`Poids : ${data.weight/10} kg`,box3de1);
        weightpok.setAttribute("id","weightpok");

        let boxtyp = createDom("div","",box3de1);
        boxtyp.setAttribute("id","boxtyp");
        for (let i = 0; i < data.types.length; i++) {
            let typ = createDom("p",`Type ${i+1} : ${data.types[i].type.name}`,boxtyp);
            console.log(typ);
        }

        let boxabi = createDom("div","",box3de1);
        boxabi.setAttribute("id","boxabi");
        for (let i = 0; i < data.abilities.length; i++) {
            let abi = createDom("p",`Compétence ${i+1} : ${data.abilities[i].ability.name}`,boxabi);
            console.log(abi);
        }

        number = data.order;
        console.log(number);

        document.getElementById("champsaisi").value = "";


    } catch (error) {
        console.error(error);
    }
}

button.addEventListener('click', function(){
    getData0();
    document.getElementById("box3de1");
    box3de1.remove();
    document.getElementById("namepok");
    namepok.remove();
})


async function getData() {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`);
        const data = await response.json();
        console.log(data);

        box3.style.display = "block";
        box1de1.style.display = "block";

        imagepok.setAttribute("src",data.sprites.front_default);

        let namepok = createDom("p",`Name : ${data.name}`,box1de1);
        namepok.setAttribute("id","namepok");

        let box3de1 = createDom("div", "", box3);
        box3de1.setAttribute("id","box3de1");
        let heightpok = createDom("p",`Taille : ${data.height/10} m`,box3de1);
        heightpok.setAttribute("id","heightpok");
        let weightpok = createDom("p",`Poids : ${data.weight/10} kg`,box3de1);
        weightpok.setAttribute("id","weightpok");

        let boxtyp = createDom("div","",box3de1);
        boxtyp.setAttribute("id","boxtyp");
        for (let i = 0; i < data.types.length; i++) {
            let typ = createDom("p",`Type ${i+1} : ${data.types[i].type.name}`,boxtyp);
            console.log(typ);
        }

        let boxabi = createDom("div","",box3de1);
        boxabi.setAttribute("id","boxabi");
        for (let i = 0; i < data.abilities.length; i++) {
            let abi = createDom("p",`Compétence ${i+1} : ${data.abilities[i].ability.name}`,boxabi);
            console.log(abi);
        }

        let boxinfos = createDom("p","Vous pouvez appuyer sur la flèche gauche et droite du clavier pour naviguer.",box3de1);
        boxinfos.setAttribute("id","boxinfos");

    } catch (error) {
        console.error(error);
    }
}


$(document).ready(function(){
    $("#box2").click(function covpag(){
        box2.style.display = "none";
        $("#box3").animate({
            width: "50%",
        });
        getData();
    });
});


$(document).ready(function(){
    $("#box3").click(function(){
        number++;
        console.log(number);
        $("#box3").animate({
            width: "0",
            marginRight: "100%"
        }, 500);
        setTimeout(function() {
            $("#box3").animate({
                width: "100%",
                marginRight: "0"
            }, 500);
        }, 500);
        $("#box1").animate({
            width: "0",
            marginLeft: "100%"
        }, 500);
        setTimeout(function() {
            $("#box1").animate({
                width: "100%",
                marginLeft: "0"
            }, 500);
        }, 500);
        getData();
        namepok.remove();
        box3de1.remove()
    });
});


$(document).ready(function(){
    $("#box1").click(function(){
        number--;
        console.log(number);
        if (number > 0){
        document.getElementById("box3de1");
        box3de1.remove()
        $("#box3").animate({
            width: "0",
            marginRight: "100%"
        }, 500);
        setTimeout(function() {
            $("#box3").animate({
                width: "100%",
                marginRight: "0"
            }, 500);
        }, 500);
        $("#box1").animate({
            width: "0",
            marginLeft: "100%"
        }, 500);
        setTimeout(function() {
            $("#box1").animate({
                width: "100%",
                marginLeft: "0"
            }, 500);
        }, 500);
        getData();
        namepok.remove();
        box3de1.remove()
        } else {
            box2.style.display = "block";
            $("#box1").animate({
                width: "0",
                marginLeft: "50%"
            }, 500);
            box1de1.remove();
            box3.remove();
            location.reload();
        }
    });
});


document.addEventListener("keydown", function(event) {
    if (event.code === "ArrowLeft") {
      console.log("Left arrow key is pressed");
            number--;
            console.log(number);
            if (number > 0){
            document.getElementById("box3de1");
            box3de1.remove()
            $("#box3").animate({
                width: "0",
                marginRight: "100%"
            }, 500);
            setTimeout(function() {
                $("#box3").animate({
                    width: "100%",
                    marginRight: "0"
                }, 500);
            }, 500);
            $("#box1").animate({
                width: "0",
                marginLeft: "100%"
            }, 500);
            setTimeout(function() {
                $("#box1").animate({
                    width: "100%",
                    marginLeft: "0"
                }, 500);
            }, 500);
            getData();
            namepok.remove();
            } else {
                box2.style.display = "block";
                $("#box1").animate({
                    width: "0",
                    marginLeft: "50%"
                }, 500);
                box1de1.remove();
                box3.remove();
                location.reload();
            }
    } else if (event.code === "ArrowRight") {
      console.log("Right arrow key is pressed");
            document.getElementById("box3de1");
            box3de1.remove()
            number++;
            console.log(number);
            $("#box3").animate({
                width: "0",
                marginRight: "100%"
            }, 500);
            setTimeout(function() {
                $("#box3").animate({
                    width: "100%",
                    marginRight: "0"
                }, 500);
            }, 500);
            $("#box1").animate({
                width: "0",
                marginLeft: "100%"
            }, 500);
            setTimeout(function() {
                $("#box1").animate({
                    width: "100%",
                    marginLeft: "0"
                }, 500);
            }, 500);
            getData();
            namepok.remove();
    }
})