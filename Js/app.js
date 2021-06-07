'use strick';

let myName = prompt('What is my name?').toLowerCase();
    if(myName === 'Laith' || myName === 'L') {
    alert('You know my first name! ');
}
//console.log(myName)

else if (myName !== 'Laith' || myName !== 'L') {
    alert ('Please know my name! Enter Laith or L : ))');
}   

let favSport = prompt('Since you know my name, what is my favorite sport?').toLowerCase();
    if(favSport === 'Boxing' || favSport === 'Box') {
        alert('Good Job Friend! you know my favorite sport');
    } 
    //console.log(favSport)

    else if (favSport !== 'Boxing' || favSport !== 'Box'){
        alert('It is ok, enter Boxing or Box:)');
    }
    
    let favCar = prompt('Since you know my favorite sport, what is my favorite car?').toLowerCase();
        if (favCar === 'Porsche' || favCar === 'Carrera') {
            alert('Nice!! You know my favorite car now!')
        }
        else if (favCar !== 'Porsche' || favCar !== 'Carrera') {
            alert('Enter Porsche or Carrera to know my favorite car')
            
        }

    let yearBorn = prompt('Now it is time to guess in which year i was born!').toLowerCase
    if (yearBorn === 1991 || yearBorn === 91) {
        prompt('Good guess, am I older than you?')
        //console.log(yearBorn)
        
    }
    else if (yearBorn !== 1991 || yearBorn !== 91) {
        alert('Hmm, bad luck! enter 1991 or 91 =)')
    }
        
