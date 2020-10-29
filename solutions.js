////////////////////////////////
// Easy Going
////////////////////////////////
for (let k = 1 ; k <= 20  ; k++) {
    // console.log(k); 
}

////////////////////////////////
// Get Even
////////////////////////////////
for (let k = 0 ; k <= 200 ; k +=2) {
    // console.log(k);
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////
for (let k = 1 ; k <= 100 ; k ++) {
    // if ((k % 3 === 0) && (k % 5 === 0)) {
    //     console.log("FizzBuzz"); 
    // } else if (k % 5 === 0) {
    //     console.log("Buzz"); 
    // } else if (k % 3 === 0) {
    //     console.log("Fizz");
    // } else {
    //     console.log(k); 
    // }
}

////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// 1. Plantee just had her birthday; change Plantee's array to reflect her being a year older.
plantee[2] = 5001;
// console.log(plantee); 

// 2. Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy[3] = "Gotham City";
// console.log(wolfy); 


// 3. Give Dart a second hometown by adding "Hawkins"
dart[3] = ["Upside Down", "Hawkins"];
// console.log(dart);

// 4. Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
wolfy[0] = "Gameboy";
// console.log(wolfy);


////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for (const ninja of ninjaTurtles) {
    // console.log(ninja.toUpperCase()); 
}

////////////////////////////////
// Where is Waldo
////////////////////////////////
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];
// 1. Remove Eggbert 
whereIsWaldo.splice(1, 1);
  
// 2. Change "Neff" to "No One"
whereIsWaldo[1][2] = "No One"; 

// console.log(whereIsWaldo);

////////////////////////////////
// Excited Kitten
////////////////////////////////
const kittyTalk = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]; 
const kittyLength = kittyTalk.length; 

for (let k = 1 ; k <= 20 ; k ++ ) {
    console.log("Love me, pet me! HSSSSSS");
        if (k % 2 === 0) {
            let meow = Math.floor((Math.random()*kittyLength));
            console.log(kittyTalk[meow]); 
        } 
}


////////////////////////////////
// Find the Median
////////////////////////////////