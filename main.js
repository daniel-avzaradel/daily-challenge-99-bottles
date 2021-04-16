// let userNum = prompt("Please type in a number for the song");

// while (isNaN(userNum)) {
//     userNum = prompt("Please type in a valid number for the song");
// }

let userNum = 16;
let bottles = userNum;
let down = 1;


    while(bottles - down > 0) {

        console.log(`${bottles} bottles of beer on the wall, ${bottles} bottles of beer.`);

            if(down > 1) {
                console.log(`Take ${down} down and pass them around, ${bottles-down} bottles of beer on the wall.\n`);
            } else if (down == 1) {
                console.log(`Take one down and pass it around, ${bottles-down} bottles of beer on the wall. \n`);
            }
            bottles-= down;
            down++;

        }

    if (bottles - down <= 0) {

            if (bottles == 1) {
                console.log(`${bottles} bottle of beer on the wall, ${bottles} bottle of beer.`);
                console.log(`Take it down and pass it around, no more bottles of beer on the wall.\n`);

            }
            else {
                console.log(`${bottles} bottles of beer on the wall, ${bottles} bottles of beer.`);
                console.log(`Take all of them down and pass them around, no more bottles of beer on the wall.\n`);
            }
            console.log(`No more bottles of beer on the wall, no more bottles of beer. \nGo to the store and buy some more, ${userNum} bottles of beer on the wall.`)
    }
    