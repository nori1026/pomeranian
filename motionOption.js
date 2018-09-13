
var item = document.querySelector('#cntrbtn');

console.log(item.value);
item.addEventListener('click', colorChanger);

var swap = 0;
function colorChanger(){

    randHex();
    var bkImg = document.querySelector('#pic');   
    
    // not completely random, too lazy
    // need to add random value from list of number and alphabet
    // use RNG to get position in list of item
    // append to color, repeat 8 times

    var colorOne = randHex() + ' 0%';
    var colorTwo = randHex() + ' 100%';
    var orientation = 'to right';
    
    if(swap == 0){
        bkImg.style.backgroundImage = "url('img/bismark.PNG')";
        bkImg.style.backgroundSize = 'cover';
        swap = 1;
    } else{
        bkImg.style.backgroundImage = `radial-gradient( ${colorOne}, ${colorTwo})`;
        swap = 0;
    }
    
    console.log(colorOne);
    console.log(colorTwo);
    console.log('\n');

}

function randHex(){
    var hex = '#';
    var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    var count = 0;
    
    while(count < 6){
        var hexIndex = Math.floor(Math.random()*16); //select random single string position for hex
        hex += arr[hexIndex];
        count++;
    }

    return hex;

}

