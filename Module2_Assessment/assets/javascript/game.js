let teams, guessword, underscores, blanks,lettersGuessed, numberGuessesLeft, guess;
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






initialize();

var letters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

document.onkeypress=function(event){
    let key=event.key
    if (letters.indexOf(key)!=-1);{
        guess=key;
        console.log(guess);
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
            setTimeout(initialize(),30000)

        }
        }




