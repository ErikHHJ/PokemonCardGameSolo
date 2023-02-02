export const charizard = {
    name: "Charizard",
    type1: "Fire",
    type2: "Flying",
    HP: 84,
    move1: "Wing Attack",
    move2: "Flamethrower",
    image: "./images/CharizardCard.webp",
};

export const blastoise = {
    name: "Blastoise",
    type1: "Water",
    HP: 100,
    move1: "Water Gun",
    move2: "Body Slam",
    image: "./images/BlastoiseCard.webp",
};

export const golem = {
    name: "Golem",
    type1: "Rock",
    type2: "Ground",
    HP: 120,
    move1: "Rock Throw",
    move2: "Headbutt",
    image: "./images/GolemCard.webp",
};
const pkmnArr = [blastoise , charizard , golem];

const container = document.querySelector(".container");
const newContainer = document.querySelector(".newcontainer");
const title = document.querySelector(".title");


const renderPokemon =  (elem) => {
    const playerPkmname = document.querySelector(".pkmname");
    playerPkmname.innerHTML = elem.name;

    const playerPkmImg = document.querySelector(".yourpokemonimg");
    playerPkmImg.src = elem.image;

    const moveButton1 = document.querySelector(".playerbtn1");
    moveButton1.innerHTML = elem.move1;
    const movebutton2 = document.querySelector(".playerbtn2");
    movebutton2.innerHTML = elem.move2;

    const playerHealth = document.querySelector(".hp");
    playerHealth.innerHTML = elem.HP;
}


const startBattle = () => {
    img1.onclick = () => {
        container.remove()
        title.innerHTML = "BATTLE!!!"
        newContainer.style.cssText = "display: flex;"
        renderPokemon(pkmnArr[0]);

        

    };
    img2.onclick = () => {
        container.remove()
        title.innerHTML = "BATTLE!!!"
        newContainer.style.cssText = "display: flex;"
        renderPokemon(pkmnArr[1])
    };
    img3.onclick = () => {
        container.remove()
        title.innerHTML = "BATTLE!!!"
        newContainer.style.cssText = "display: flex;"
        renderPokemon(pkmnArr[2])

    };
    
}

startBattle()




