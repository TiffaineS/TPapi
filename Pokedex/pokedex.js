let submit = document.getElementById("bouton");
document.body.appendChild(submit);

let nom;


function createDom(element_name, text, parent) {
    const markup = document.createElement(element_name);
    markup.textContent = text;
    parent.appendChild(markup);
    return markup;
}


let container = createDom("div","",document.body);

// créer les elements avant puis mettre dans les variables en fonction pour que ça remplace

async function getData() {
    try {
        nom = champsaisi.value;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nom}`);
        const data = await response.json();
        console.log(data);
        let box = createDom("div", "", container);
        box.setAttribute("id","box");
        container.appendChild(box);
        createDom("p",`Name : ${data.name}`,box);
        createDom("p",`Taille : ${data.height/10} m`,box);
        createDom("p",`Poids : ${data.weight/10} kg`,box);
        let image = createDom("img","", box);
        image.setAttribute("id","img");
        image.setAttribute("src",data.sprites.front_default);

        for (var i = 0; i < data.types.length; i++) {
            let typ = createDom("p",`Type ${i+1} : ${data.types[i].type.name}`,box);
            console.log(typ);
        }

        for (var i = 0; i < data.abilities.length; i++) {
            let abi = createDom("p",`Compétence ${i+1} : ${data.abilities[i].ability.name}`,box);
            console.log(abi);
        }

    } catch (error) {
        console.error(error);
    }
}

submit.addEventListener('click', function(){
    getData();
})


