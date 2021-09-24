//decleration of Varriable and arrrays

let destination = ['Miami', 'Las Vegas', 'Austin', 'New York',];
let resturant = ['Millers Ale House', 'Ruth Chris', 'McDonalds','Subway'];
let transport = ['Train','Car','Plane','Bus'];
let entertainment = ['A Movie','Top Golf',' A Comedy Show','A Concert'];

let desResult;
let resResult;
let transResult;
let enterResult;
let desChoiceResults;
let foodChoiceResults;


function getRandomTrip(){
    desResult = destinationGen(destination);
    resResult = resturantGen(resturant);
    transResult = transportationGen(transport);
    enterResult = entertainmentGen(entertainment);
}
function randomSelection(){
    getRandomTrip()
    let result = window.confirm('Here is your random vacation options!'+ '\n' + 'Your destination will be: ' + desResult +'\n' + 'Your dining choice will be: ' + resResult +'\n'+ 'You will travel by: ' + transResult +'\n'+ 'While you are there you will enjoy a: ' + enterResult +'\n'+'Please choose OK your confirm or Cancel to choose again!');
    
    if (result === true){
        console.log(result)
        return true 
    }
    else {
        console.log(result)
        return false
        
    }

}


function chooseYes(selectionString){
    let choiceResultTrue = true
    let choiceResultFalse = false
    
    let result = window.confirm('You selection is '+ selectionString + '\n' + 'Enter Yes to confirm No to choose');
    
    if (result === true){
        console.log(result)
        return choiceResultTrue
    }
    else {
        console.log(result)
        return choiceResultFalse
        
    }
    
}   
    
   
let confirmOrNot = randomSelection()






//fuctions to random generate a selection

function destinationGen(local){
    let successful = false
    let selected
    selected = local[Math.floor(Math.random()*local.length)];
    desChoiceResults = chooseYes(selected);
    while (successful === false ){
       
    
    
    if (desChoiceResults === true){
        successful = true
        return selected
    }
    else{
        selected = local[Math.floor(Math.random()*local.length)];
        desChoiceResults = chooseYes(selected)
    }
        
    }
};


function resturantGen(food){

    let successful = false
    let selected
    selected = food[Math.floor(Math.random()*food.length)];
    foodChoiceResults = chooseYes(selected)
    while (successful === false ){
       
    
    
    if (foodChoiceResults === true){
        successful = true
        return selected
    }
    else{
        selected = food[Math.floor(Math.random()*food.length)];
        foodChoiceResults = chooseYes(selected)
    }
        
    }
    
};

function transportationGen(wayAround){
    let selected = wayAround[Math.floor(Math.random()*wayAround.length)];
    return selected
};

function entertainmentGen(enterntainment){
    let selected = entertainment[Math.floor(Math.random()*entertainment.length)];
    return selected
};







//function that combines selections and displays comfirmation box

function randomSelection(){
    getRandomTrip()
    let result = window.confirm('Here is your random vacation options!'+ '\n' + 'Your destination will be: ' + desResult +'\n' + 'Your dining choice will be: ' + resResult +'\n'+ 'You will travel by: ' + transResult +'\n'+ 'While you are there you will enjoy a: ' + enterResult +'\n'+'Please choose OK your confirm or Cancel to choose again!');
    
    if (result === true){
        console.log(result)
        return true 
    }
    else {
        console.log(result)
        return false
        
    }

}


//function that will loop until user has confirmed they are happy with results

function confirmOrDenieTravel(confirmOrNot){
 let confirmResults1 = false;
while(confirmResults1 === false){
        if (confirmOrNot === true){
        
            alert('Your travel plans have been confirms!'+'\n'+ 'Your destination will be: ' + desResult +'\n' + 'Your dining choice will be: ' + resResult +'\n'+ 'You will travel by: ' + transResult +'\n'+ 'While you are there you will enjoy a: ' + enterResult )
            console.log('Your travel plans have been confirms!'+'\n'+ 'Your destination will be: ' + desResult +'\n' + 'Your dining choice will be: ' + resResult +'\n'+ 'You will travel by: ' + transResult +'\n'+ 'While you are there you will enjoy a: ' + enterResult )
            confirmResults1 = true
            return true
            
        }
        else{
        
            alert('Let try again!')
            confirmOrNot = randomSelection()           
        }
}  
}

 let confirmResults = confirmOrDenieTravel(confirmOrNot)

//pops up completion box

function loopConfirm(confirmResults){

    if(confirmResults === true){
        alert('Enjoy your travels!');
    }
       
 };

loopConfirm(confirmResults)

