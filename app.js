// import functions

// reference needed DOM elements


// set event listeners 
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)

//CAT
const playCat = document.getElementById('play-cat');
const catSound = document.getElementById('cat-sound');
const cat = document.getElementById("cat")

playCat.addEventListener('click', ()=>{
    catSound.play();
});

cat.addEventListener('click', () => {
    catSound.play();
});

//Dog
const playDog = document.getElementById('play-dog');
const dogSound = document.getElementById('dog-sound')
const dog = document.getElementById("dog")

playDog.addEventListener('click', () => {
  dogSound.play();
})
dog.addEventListener('click', () => {
  dogSound.play();
})

//HORSE
const playHorse = document.getElementById('play-horse');
const horseSound = document.getElementById('horse-sound');
const horse = document.getElementById("horse");

playHorse.addEventListener('click', () => {
  horseSound.play();
})
horse.addEventListener('click', () => {
  horseSound.play();
})

