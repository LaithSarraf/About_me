'use strict';
let score=0;

let userName = prompt('Please Introduce yourself')
alert(`Hello ` +  userName + `, welcome to my personal website, it is time to know me`)


function questions (){ 

    let myCoffee = prompt('Do i love Coffee with sugar?').toLowerCase();
firstLoop: while ((myCoffee !== 'yes' || myCoffee !== 'y' || myCoffee !== 'no' || myCoffee !== 'n')){

    if(myCoffee === 'yes' || myCoffee === 'y') {
        score++;
    alert('Correct! You know how i like my Coffee!'); 
    break firstLoop;
}


else if (myCoffee === 'no' || myCoffee === 'n') {
    alert('Oh No! I can not drink coffee with sugar!');
}
myCoffee =prompt('Please try again by entering yes, no, y, or n')
}


let favSport = prompt('Since you know how I drink my Coffee, is Boxing my favorite sport?').toLowerCase();
secondLoop: while ((favSport !== 'yes' || favSport !== 'y' || favSport !== 'no' || favSport !== 'n')){
    if(favSport === 'yes' || favSport === 'y'){
       score++;
        alert('Good Job my Friend! you know my favorite sport');
        break secondLoop;
    } 

    else if (favSport === 'no' || favSport === 'n'){
        alert('It is ok, Boxing is my favorite sport!:)');
    } 
    favSport =prompt('Please type (Yes) or (Y) or (No) or (N)');
    }
     

    let favCar = prompt('Since you know my favorite sport, is Porsche my favorite car?').toLowerCase();
    thirdLoop: while ((favCar !== 'yes' || favCar !== 'y' || favCar !== 'no' || favCar !== 'n')){
        if(favCar === 'yes' || favCar === 'y') {
            score++;
            alert('Nice!! You know my favorite car now!')
            break thirdLoop;
        }
        else if (favCar === 'no' || favCar === 'n'){
            alert('Ooops! Porsche is my favorite car')
        }
         favCar =prompt('Please type (Yes) or (Y) or (No) or (N)');
    }

 let myAge = prompt('Now it is time to know my age, was I born in 1991?').toLowerCase();
    fourthLoop: while((myAge !== 'yes' || myAge !== 'y' || myAge !== 'no' || myAge !== 'n')){
        if (myAge === 'yes' || myAge === 'y') {
            score++;
            alert('Good guess, am I older than you?');
            break fourthLoop;
        }
        else if (myAge === 'no' || myAge === 'n'){
            alert('Tough luck! Yes I was born in 1991!');
        }
            myAge = prompt('Please type (Yes) or (Y) or (No) or (N)');
              
    }
    alert(`Hello ` +  userName + `, now you know me a little bit better, see you soon`)
}
questions();
    
    let favNumber = Number(prompt('What is my favorite number?'));
    function numbers (favNum){
       fifthLoop: for(let i = 0; i < 4; i++){
            
            if (favNum === 7){
                score++; 
                alert('Correct, you got it right!')
                break fifthLoop;
            }   
            else if (favNum < 7 ){
               alert('Too Cold, Enter Another Number!!');
            }
            else if (favNum > 7 ){
              alert('Too Hot, Enter Another Number!!!');
            }
       favNum = Number (prompt('please try again'));
        }
    }
   numbers(favNumber); 
        let boxer = prompt('Which boxer won a championship in the 1988?')
        function Champ (champName){
           
            let boxingChamp = ['Mike Tyson', 'Michael Spinks', 'Bone Crusher Smith',
         'Trevor Berbick','Laith Sarraf',
          'Floyd Money Mayweather',
           'Evander Holyfield',
            'Anthoney Joshua', 'Vasyl Lomachenko', 'George Foreman'];    
        outerloop: for(let i = 0; i < 6; i++){
            for(let j = 0; j < boxingChamp.length; j++){
            if(champName === boxingChamp[j]){
                alert('Correct!!');
                break outerloop;
            }else {champName = prompt('Which boxer won a championship in the 1988?')
            }
            
        } 
   }
}
     Champ(boxer);