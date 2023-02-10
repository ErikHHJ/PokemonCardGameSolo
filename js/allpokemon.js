const container = document.querySelector(".container");

export const charizard = {
    name: "Charizard",
    type1: "Fire",
    type2: "Flying",
    MAXHP: 78,
    HP: 78,
    move1: {name:"Wing Attack", damage: 25},
    move2: {name:"Flamethrower", damage: 75},
    image: "./images/CharizardCard.png",
};

export const blastoise = {
    name: "Blastoise",
    type1: "Water",
    MAXHP: 79,
    HP: 79,
    move1: {name:"Water Gun", damage: 55},
    move2: {name:"Body Slam", damage: 60},
    image: "./images/BlastoiseCard.webp",
};

export const golem = {
    name: "Golem",
    type1: "Rock",
    type2: "Ground",
    HP: 80,
    MAXHP: 80,
    move1: {name:"Rock Throw", damage: 55},
    move2: {name:"Headbutt", damage: 35},
    image: "./images/GolemCard.webp",
};
export const mewtwo = {
    name: "MewTwo",
    type1: "Psychic",
    MAXHP: 106,
    HP: 106,
    move1: {name:"Psybeam", damage: 50},
    move2: {name:"Hyper Beam", damage: 70},
    image: "./images/MewtwoCard.png",
};
export const steelix = {
    name: "Steelix",
    type1: "Steel",
    type2: "Ground",
    MAXHP: 75,
    HP: 75,
    move1: {name:"Rock Slide", damage: 45},
    move2: {name:"Iron Tail", damage: 35},
    image: "./images/SteelixCard.png",
};
export const scizor = {
    name: "Scizor",
    type1: "Bug",
    type2: "Steel",
    MAXHP: 70,
    HP: 70,
    move1: {name:"X-Scissor", damage: 50},
    move2: {name:"Metal Claw", damage: 30},
    image: "./images/ScizorCard.png",
};
export const seadra = {
    name: "Seadra",
    type1: "Water",
    MAXHP: 55,
    HP: 55,
    move1: {name:"Ice Beam", damage: 35},
    move2: {name:"Bubble", damage: 25},
    image: "./images/SeadraCard.png",
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
    moveButton1.innerHTML = elem.move1.name;
    const movebutton2 = document.querySelector(".playerbtn2");
    movebutton2.innerHTML = elem.move2.name;

    const playerHealth = document.querySelector(".hp");
    playerHealth.innerHTML = elem.HP;
};


const renderComputerPokemon = (elem) => {
    const playerPkmname = document.querySelector(".cmppkmname");
    playerPkmname.innerHTML = elem.name;

    const playerPkmImg = document.querySelector(".cmppokemonimg");
    playerPkmImg.src = elem.image;

    const moveButton1 = document.querySelector(".cmpbtn1");
    moveButton1.innerHTML = elem.move1.name;
    const movebutton2 = document.querySelector(".cmpbtn2");
    movebutton2.innerHTML = elem.move2.name;

    const playerHealth = document.querySelector(".cmphp");
    playerHealth.innerHTML = elem.HP;

    
};

const img0 = document.querySelector(".img0");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");
const img4 = document.querySelector(".img4");
const img5 = document.querySelector(".img5");



const headImg = document.querySelectorAll(".headimg");
audio.volume = 0.5;


const initalizePokemons = () => {

    for (let i = 0; i < headImg.length; i++) {
        headImg[i].addEventListener("click", function(){
            container.remove()
            title.innerHTML = "BATTLE!!!";
            newContainer.style.cssText = "display:flex;";
            renderPokemon(pkmnArr[i]);
            renderComputerPokemon(pkmnArr[randomNumber]);
            gameLoop(pkmnArr[i] , pkmnArr[randomNumber]);
            audio.volume = 0.05; 
            audio.play()
            
        })

    }
    
}

initalizePokemons()

//BATTLE FUNCTIONS ------------------------------------------------------------------
const cpuHP = document.querySelector("#cmpprogressBar");
const playerHP = document.querySelector("#myprogressBar");
const showCpuHP = document.querySelector(".cmphp");
const showPlayerHP = document.querySelector(".hp")
const moveMessage = document.createElement("h4");
moveMessage.classList.add("movemessage");

const gameLoop = (pkmn , pkmn2) => {
    initializeButtons(pkmn , pkmn2);
    
    playerHP.style.width = `${getPokemonHpPercent(pkmn)}%`;
    cpuHP.style.width = `${getPokemonHpPercent(pkmn2)}%`

         
}


const initializeButtons = (pkmn , pkmn2) => {
    const moveBtn1 = document.querySelector(".playerbtn1");
    const moveBtn2 = document.querySelector(".playerbtn2");
    
    

    const getComputerChoice = () => {                         
        const randomMove = Math.floor(Math.random() * 2) + 1;
        if (randomMove === 1){
            pkmn.HP -= pkmn2.move1.damage; 
            moveMessage.innerHTML = `${pkmn2.name} used ${pkmn2.move1.name}!!`;   
        } else if (randomMove === 2) {
            pkmn.HP -= pkmn2.move2.damage; 
            moveMessage.innerHTML = `${pkmn2.name} used ${pkmn2.move2.name}!!`;  
        }          
    }  
    
    moveBtn1.onclick = () => {     
        pkmn2.HP -= pkmn.move1.damage;
        cpuHP.style.width = `${getPokemonHpPercent(pkmn2)}%`
        showCpuHP.innerHTML = pkmn2.HP;
        const middlePart = document.querySelector(".middle");

        moveMessage.innerHTML = `${pkmn.name} used ${pkmn.move1.name}!!`;
        middlePart.appendChild(moveMessage)
        if (pkmn2.HP < 1){
            showCpuHP.innerHTML = 0;
            title.innerHTML = `${pkmn.name} WINS!!!`;
            moveBtn1.disabled = true;
            moveBtn2.disabled = true;
        }


        setTimeout(function() {
            getComputerChoice();
            playerHP.style.width = `${getPokemonHpPercent(pkmn)}%`
            showPlayerHP.innerHTML = pkmn.HP;
            if (pkmn.HP < 1){
                showPlayerHP.innerHTML = 0;
                title.innerHTML = `${pkmn2.name} WINS!!!`;
                moveBtn1.disabled = true;
                moveBtn2.disabled = true;
            }   
        }, 3000); 
                                
    }

    moveBtn2.onclick = () => {
        pkmn2.HP -= pkmn.move2.damage;
        cpuHP.style.width = `${getPokemonHpPercent(pkmn2)}%`
        
        showCpuHP.innerHTML = pkmn2.HP;
        const middlePart = document.querySelector(".middle");
        moveMessage.innerHTML = `${pkmn.name} used ${pkmn.move2.name}!!`;
        middlePart.appendChild(moveMessage)

        if (pkmn2.HP < 1){
            showCpuHP.innerHTML = 0;
            title.innerHTML = `${pkmn.name} WINS!!!`;
            moveBtn2.disabled = true;
            moveBtn1.disabled = true;
        } 
        
        setTimeout(function() {
            getComputerChoice();
            playerHP.style.width = `${getPokemonHpPercent(pkmn)}%`
            showPlayerHP.innerHTML = pkmn.HP;
            if (pkmn.HP < 1){
                showPlayerHP.innerHTML = 0;
                title.innerHTML = `${pkmn2.name} WINS!!!`;
                moveBtn2.disabled = true;
                moveBtn1.disabled = true;
            } 
        }, 3000);
        
    }  
    
}

const getPokemonHpPercent = (pkmn) => {
    const hpPercent  = pkmn.HP / pkmn.MAXHP * 100;
    return hpPercent > 0 ? hpPercent : 0;
} 

 const ifDraw = () => {
    console.log(typeof showPlayerHP.innerHTML);
    if (showPlayerHP.innerHTML === "0" && showCpuHP.innerHTML === "0"){
        title.innerHTML = "DRAW!!!";

        clearInterval(ifDraw);
    }    
 }
 setInterval(ifDraw ,1000);
/*setInterval( () => {
    console.log("checking");
    if (showPlayerHP.innerHTML === 0 && showCpuHP.innerHTML === 0){
        title.innerHTML = "DRAW!!!"
        clearInterval()
    }
} ,1000);*/
    












