// global vars
const door1 = document.getElementById("door1");
const door2 = document.getElementById("door2");
const door3 = document.getElementById("door3");
const startButton = document.getElementById("start");
const botDoorPath =
  "https://content.codecademy.com/projects/chore-door/images/robot.svg";
const beachDoorPath =
  "https://content.codecademy.com/projects/chore-door/images/beach.svg";
const spaceDoorPath =
  "https://content.codecademy.com/projects/chore-door/images/space.svg";
const closedDoorPath =
  "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";
let numClosedDoors = 3;
let currentlyPlaying = true;
let openDoor1;
let openDoor2;
let openDoor3;

//   random door function
function isBot(door) {
  if (door.src === botDoorPath) {
    return true;
  } else {
    return false;
  }
}
function isClicked(door) {
  if (door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  }
}
function playDoor(door) {
  numClosedDoors--;
  if (numClosedDoors === 0) {
    gameOver("win!");
  } else if (isBot(door)) {
    gameOver();
  }
}
const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  console.log(choreDoor);
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
    openDoor2 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 2) {
    openDoor3 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
  }
};
// Event listeners
door1.addEventListener("click", () => {
  if (currentlyPlaying && !isClicked(door1)) {
    door1.src = openDoor1;
    console.log(numClosedDoors);
    playDoor(door1);
  }
});
door2.addEventListener("click", () => {
  if (currentlyPlaying && !isClicked(door2)) {
    door2.src = openDoor2;
    console.log(numClosedDoors);
    playDoor(door2);
  }
});
door3.addEventListener("click", () => {
  if (currentlyPlaying && !isClicked(door3)) {
    door3.src = openDoor3;
    console.log(numClosedDoors);
    playDoor(door3);
  }
});
function startRound() {
  door1.src = closedDoorPath;
  door2.src = closedDoorPath;
  door3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = "Good Luck!";
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}
startButton.addEventListener("click", () => {
  if (!currentlyPlaying) {
    startRound();
  }
});
function gameOver(status) {
  if (status === "win!") {
    startButton.innerHTML = "You win! Play again?";
  } else {
    startButton.innerHTML = "Game over! Play again?";
  }
  currentlyPlaying = false;
}
startRound();
