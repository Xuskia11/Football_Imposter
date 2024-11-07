const main = document.getElementById("main");
const body = document.getElementById("body");
const singlePlayer = document.getElementById("btn1");
const multiplayer = document.getElementById("btn2");
const playerOption = document.getElementById("playerOption");
const option = document.getElementById("option");
const btn3 = document.getElementById("btn3");

const main2 = document.getElementById("main2")
const footballer = document.getElementById("footballer");
const card = document.getElementById("card");
const showCard = document.getElementById("showCard");
const desc = document.getElementById("desc");
const countDown = document.getElementById("countDown");
const restBtn = document.getElementById("restart");
let cardShown = false;

const wellKnownPlayers = [
  "Erling Haaland", "Jude Bellingham", "Kylian Mbappé", "Harry Kane", "Rodri",
  "Vinícius Júnior", "Mohamed Salah", "Kevin De Bruyne", "Victor Osimhen", 
  "Lionel Messi", "Bernardo Silva", "Khvicha Kvaratskhelia", "Lautaro Martínez", 
  "Bukayo Saka", "Antoine Griezmann", "Ilkay Gündogan", "Robert Lewandowski", 
  "Martin Ødegaard", "Julián Álvarez", "Jamal Musiala", "Rúben Dias", "Declan Rice", 
  "Ederson", "Son Heung-min", "Luka Modric", "John Stones", "Cristiano Ronaldo", 
  "Gavi", "Nicolò Barella", "Rafael Leão", "Fede Valverde", "Pedri", "Rodrygo", 
  "Marc-André ter Stegen", "Alisson", "Karim Benzema", "Kim Min-jae", "Leroy Sané", 
  "Thibaut Courtois", "William Saliba", "Phil Foden", "Bruno Fernandes", 
  "Eduardo Camavinga", "Virgil van Dijk", "Kyle Walker", "Emiliano Martínez", 
  "Achraf Hakimi", "Florian Wirtz", "Jack Grealish", "Olivier Giroud", 
  "Joshua Kimmich", "Gabriel Martinelli", "Josko Gvardiol", "Hakan Calhanoglu", 
  "Ronald Araújo", "Trent Alexander-Arnold", "Yassine 'Bono' Bounou", 
  "Alexis Mac Allister", "Federico Dimarco", "André Onana", "Xavi Simons", 
  "Marcus Rashford", "Luis Díaz", "Frenkie de Jong", "Toni Kroos", 
  "Álvaro Morata", "Álex Grimaldo", "Randal Kolo Muani", "James Maddison", 
  "Darwin Núñez", "Alessandro Bastoni", "Romelu Lukaku", "David Alaba", 
  "Enzo Fernández", "Ángel Di María", "Mike Maignan", "Gabriel Jesus", 
  "Aurélien Tchouaméni", "Alexander Isak", "Cristian Romero", "Jan Oblak", 
  "Antonio Rüdiger", "Riyad Mahrez", "Granit Xhaka", "Marcelo Brozovic", 
  "Theo Hernández", "Alphonso Davies", "Denzel Dumfries", "Marcus Thuram", 
  "Mario Balloteli", "Aguero", "Suarez", "T.Muller", "Sergio Ramos", 
  "Neymar Jr", "Zinadine", "Buffon", "Robben", "Franck Ribery", 
  "Manuel Neuer", "Iker Casillas", "Lamine Yamal", "Iniesta", 
  "Xavi", "David Villa", "Dani Alves", "Drogba", "Ronaldinho",
];

let random = Math.floor(Math.random() * wellKnownPlayers.length);
const footballers = wellKnownPlayers[random];
let playersRangeElement = document.getElementById("playersRange");
let playersRange = null;


if (singlePlayer && body && main && playerOption && option && multiplayer) {
  singlePlayer.addEventListener("click", function() {
    body.style.backgroundImage = "url(./images/footballback.png)";
    main.style.display = "none";
    singlePlayer.style.display = "none";
    multiplayer.style.display = "none";
    playerOption.style.display = "block";
    option.style.display = "flex";
  });
}

if (btn3 && playersRangeElement) {
  btn3.addEventListener("click", () => {
    playersRange = playersRangeElement.value;
    
    if (Number(playersRange) < 3 || Number(playersRange) > 10) {
      alert("Number of players should be between 3 and 10.");
    } else {
      option.style.display = "none";
      main2.style.display = "block";
      if (footballer) {
        footballer.innerHTML = footballers;
      }
      const Roles = ["Imposter"];
      for (let i = 0; i < Number(playersRange) - 1; i++) {
        Roles.push(footballers);
      }

      const shuffledRoles = Roles.sort(() => 0.5 - Math.random());

      if (card && showCard && desc) {
        let counter = 0;
        console.log(shuffledRoles);
        card.addEventListener("click", () => {
          if (counter < playersRange) {
            if (!cardShown) {
              showCard.style.display = "none";
              card.style.backgroundColor = "transparent";
              desc.style.display = "block";
              footballer.style.display = "block";
              footballer.innerHTML = shuffledRoles[counter];
            } else {
              showCard.style.display = "block";
              card.style.backgroundColor = "black";
              desc.style.display = "none";
              footballer.style.display = "none";
              footballer.innerHTML = "";
              counter++;
              if (counter >= playersRange) {
                showCard.textContent =
                  "All players know the cards you can start the game!";
                restBtn.style.display = "block";
              }
            }

            cardShown = !cardShown;
          }
        });
      }

      let seconds = 0;
      let minutes = 0;

      const targetTimer = setInterval(() => {
          seconds ++
          if(seconds === 60){
              minutes ++
              seconds = 0
          }
          if(minutes === 3 && seconds === 15){
              clearInterval(targetTimer)
              setTimeout(() => {
                  console.log("Done!!!")
              },2000)
          }
          console.log(`${minutes}:${seconds}`)
      },1000)
    }
  });
}

