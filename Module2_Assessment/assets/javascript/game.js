let teams, guessword, underscores, blanks,lettersGuessed, numberGuessesLeft, guess,correct;
var wins=0;

function initialize(){
guess='';
lettersGuessed=[];
numberGuessesLeft=8;
document.querySelector('#guessnumber').innerHTML=numberGuessesLeft;
document.querySelector('#guessed').innerHTML=lettersGuessed;

teams=["hawks","celtics","nets","hornets","bulls","cavaliers","mavericks","nuggets","pistons","warriors","rockets","pacers","clippers","lakers","grizzlies","heat","bucks","timberwolves","pelicans","thunder","knicks","magic","philly","suns","trailblazers","kings","spurs","raptors"];

document.querySelector('#guessword').innerText="";

guessword="";
guessword=teams[Math.floor(Math.random()*teams.length)];
correct=guessword;
console.log(guessword);

underscores=[];

for (i=0;i<guessword.length;i++){
    underscores.push("_ ");
}

console.log(underscores)
blanks=underscores.join('');
document.querySelector('#guessword').innerHTML=blanks;
console.log(numberGuessesLeft);
}

const imgArray=['assets/images/nba.jpg','assets/images/nba2.jpg','assets/images/nba3.jpg','assets/images/nba4.jpg','assets/images/nba5.jpg','assets/images/nba6.jpg','assets/images/nba7.jpg','assets/images/nba8.jpg','assets/images/nba9.jpg','assets/images/nba10.jpg','assets/images/nba11.jpg','assets/images/nba12.jpg','assets/images/nba13.jpg','assets/images/nba14.jpg'];

let index=0;
let img=document.getElementById('img');

function cycle(){
    if (index<imgArray.length){
        img.src=imgArray[index];
        index++;
    }else{
        index=0;
    }
    setTimeout(cycle,2500);
}



initialize();
cycle();

var letters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

document.onkeypress=function(event){
    let key=event.key
    if (letters.indexOf(key)!=-1){
        guess=key;
        console.log(guess);
    }else if (letters.indexOf(key)=-1){
        event.preventDefault;
    }
        for (var i=0; i<guessword.length;i++){
            if (guess===guessword[i]){
                underscores[i]=guess;
                blanks=underscores.join('');
                console.log(underscores)
                console.log(blanks)
                document.querySelector('#guessword').innerText=blanks;
                if (blanks===guessword){
                    document.querySelector('#guessword').innerText=guessword;
                    document.querySelector('#previous').innerText=correct;
                    wins++;
                    document.querySelector('#wins').innerText=wins;
                    initialize();
                }

            }
        }
            



        if (!guessword.includes(guess)){
            if (!lettersGuessed.includes(guess)){
            lettersGuessed.push(guess);
            numberGuessesLeft=numberGuessesLeft-1;
            document.querySelector('#guessnumber').innerHTML=numberGuessesLeft;
            document.querySelector('#guessed').innerHTML=lettersGuessed;
            console.log(numberGuessesLeft);
            console.log(lettersGuessed);
            }
         }
        if (numberGuessesLeft===0){
            document.querySelector('#guessword').innerHTML=guessword;
            document.querySelector('#previous').innerText=correct;
            setTimeout(initialize(),30000)

        }
        }




