const container = document.querySelector(".container");

export const charizard = {
    name: "Charizard",
    type1: "Fire",
    type2: "Flying",
    HP: 78,
    move1: "Wing Attack",
    move2: "Flamethrower",
    image: "./images/CharizardCard.png",
};

export const blastoise = {
    name: "Blastoise",
    type1: "Water",
    HP: 79,
    move1: "Water Gun",
    move2: "Body Slam",
    image: "./images/BlastoiseCard.webp",
};

export const golem = {
    name: "Golem",
    type1: "Rock",
    type2: "Ground",
    HP: 80,
    move1: "Rock Throw",
    move2: "Headbutt",
    image: "./images/GolemCard.webp",
};
export const mewtwo = {
    name: "MewTwo",
    type1: "Psychic",
    HP: 106,
    move1: "Psybeam",
    move2: "Hyper-Beam",
    image: "./images/MewTwoCard.webp",
};
export const steelix = {
    name: "Steelix",
    type1: "Steel",
    type2: "Ground",
    HP: 75,
    move1: "Rock Slide",
    move2: "Iron Tail",
    image: "./images/SteelixCard.png",
};
export const scizor = {
    name: "Scizor",
    type1: "Bug",
    type2: "Steel",
    HP: 70,
    move1: "X-Scissor",
    move2: "Metal Claw",
    image: "./images/ScizorCard.webp",
};
export const seadra = {
    name: "Seadra",
    type1: "Water",
    HP: 55,
    move1: "Ice Beam",
    move2: "Bubble",
    image: "./images/SeadraCard.webp",
}


const pkmnArr = [blastoise , charizard , golem , mewtwo , steelix , scizor, seadra];

for (let i = 0; i < pkmnArr.length; i++) {
    const imgDiv = document.createElement("div");
    const imgDivText = document.createElement("h4");
    imgDivText.innerHTML = pkmnArr[i].name;
    const imgContainer = document.createElement("img");
    imgContainer.classList.add("headimg");
    imgContainer.classList.add("img" + (i));
     imgContainer.src = pkmnArr[i].image;
     imgDiv.appendChild(imgDivText);
    imgDiv.appendChild(imgContainer);
    container.appendChild(imgDiv);
};

const newContainer = document.querySelector(".newcontainer");
const title = document.querySelector(".title");
const randomNumber = Math.floor(Math.random() * pkmnArr.length)
console.log(randomNumber)


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
};


const renderComputerPokemon = (elem) => {
    const playerPkmname = document.querySelector(".cmppkmname");
    playerPkmname.innerHTML = elem.name;

    const playerPkmImg = document.querySelector(".cmppokemonimg");
    playerPkmImg.src = elem.image;

    const moveButton1 = document.querySelector(".cmpbtn1");
    moveButton1.innerHTML = elem.move1;
    const movebutton2 = document.querySelector(".cmpbtn2");
    movebutton2.innerHTML = elem.move2;

    const playerHealth = document.querySelector(".cmphp");
    playerHealth.innerHTML = elem.HP;
};

const img0 = document.querySelector(".img0");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");
const img4 = document.querySelector(".img4");
const img5 = document.querySelector(".img5")


const headImg = document.querySelectorAll(".headimg");


const startBattle = () => {

   /* headImg.forEach((img) => {
        let i = 0;
        img.addEventListener("click", function(){
            container.remove()
            title.innerHTML = "BATTLE!!!";
            newContainer.style.cssText = "display:flex;";
            renderPokemon(pkmnArr[i]);
            renderComputerPokemon(pkmnArr[randomNumber]);
            i++
        })

    })*/
    
    for (let i = 0; i < headImg.length; i++) {
        headImg[i].addEventListener("click", function(){
            container.remove()
            title.innerHTML = "BATTLE!!!";
            newContainer.style.cssText = "display:flex;";
            renderPokemon(pkmnArr[i]);
            renderComputerPokemon(pkmnArr[randomNumber]);
            
        })

    }
}

startBattle()





