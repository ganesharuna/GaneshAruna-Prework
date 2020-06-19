let teams, guessword, underscores, underscores2, underscores3,lettersGuessed, numberGuessesLeft;
var wins=0;

function initialize(){
lettersGuessed=[];
numberGuessesLeft=8;
document.querySelector('#guessnumber').innerHTML=numberGuessesLeft;
document.querySelector('#guessed').innerHTML=lettersGuessed;

teams=["hawks","celtics","nets","hornets","bulls","cavaliers","mavericks","nuggets","pistons","warriors","rockets","pacers","clippers","lakers","grizzlies","heat","bucks","timberwolves","pelicans","thunder","knicks","magic","philly","suns","trailblazers","kings","spurs","raptors"];

document.querySelector('#guessword').innerText="";

guessword="";

guessword=teams[Math.floor(Math.random()*teams.length)];
console.log(guessword);
underscores="";

for (i=0;i<guessword.length;i++){
    underscores+="_ ";
}

underscores2=underscores.split(",");

document.querySelector('#guessword').innerHTML=underscores;
console.log(numberGuessesLeft);
}






initialize();

var letters=["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];


document.onkeypress=function(event){
    const key=event.key
    if (letters.indexOf(key)!=-1);{
        guess=key;
        console.log(guess);
    }
        for (var i=0; i<guessword.length;i++){
            if (guess===guessword[i]){
                underscores2[i]=guess;
                let underscores3=underscores2.join();
                underscores3 = underscores3.replace(/,/g,"");
                console.log(underscores2)
                console.log(underscores3)
                document.querySelector('#guessword').innerText=underscores3;

            }
        }
            
            if ((underscores2.length*2)===underscores.length){
                let underscores3=underscores2.join();
                underscores3 = underscores3.replace(/,/g,"");
                if (underscores3.length==guessword.length){
                document.querySelector('#guessword').innerText=guessword;
                wins++;
                document.querySelector('#wins').innerText=wins;
                setTimeout(initialize(),30000)
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




