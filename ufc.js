const main = document.getElementById("main");
const body = document.getElementById("body");
const singlePlayer = document.getElementById("btn1");
const multiplayer = document.getElementById("btn2");
const playerOption = document.getElementById("playerOption");
const option = document.getElementById("option");
const btn3 = document.getElementById("btn3");

const main2 = document.getElementById("main2");
const footballer = document.getElementById("footballer");
const card = document.getElementById("card");
const showCard = document.getElementById("showCard");
const desc = document.getElementById("desc");
const countDown = document.getElementById("countDown");
const restBtn = document.getElementById("restart");
let cardShown = false;

const wellKnownPlayers = [
  "Conor McGregor",
  "Khabib Nurmagomedov",
  "Jon Jones",
  "Israel Adesanya",
  "Georges St-Pierre",
  "Francis Ngannou",
  "Alexander Volkanovski",
  "Max Holloway",
  "Daniel Cormier",
  "Dustin Poirier",
  "Justin Gaethje",
  "Jose Aldo",
  "Henry Cejudo",
  "Brock Lesnar",
  "Nate Diaz",
  "Nick Diaz",
  "Tony Ferguson",
  "Robert Whittaker",
  "Kamaru Usman",
  "Charles Oliveira",
  "Sean O'Malley",
  "Jorge Masvidal",
  "Demetrious Johnson",
  "Merab Dvalishvili",
  "Aleksandre Topuria",
  "Ilia Topuria",
  "Islam Makhachev",
  "Khabib Nurmagomedov",
  "Khamzat Chimaev",
  "Alex Pereira"
];

let random = Math.floor(Math.random() * wellKnownPlayers.length);
const footballers = wellKnownPlayers[random];
let playersRangeElement = document.getElementById("playersRange");
let playersRange = null;

if (singlePlayer && body && main && playerOption && option && multiplayer) {
  singlePlayer.addEventListener("click", function () {
    body.style.backgroundImage = "url(./images/ufcBack.jpeg)";
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
              if (shuffledRoles[counter] == "Imposter") {
                footballer.style.color = "red";
              }
            } else {
              footballer.style.color = "white";
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
        seconds++;
        if (seconds === 60) {
          minutes++;
          seconds = 0;
        }
        if (minutes === 3 && seconds === 15) {
          clearInterval(targetTimer);
          setTimeout(() => {
            console.log("Done!!!");
          }, 2000);
        }
        console.log(`${minutes}:${seconds}`);
      }, 1000);
    }
  });
}
