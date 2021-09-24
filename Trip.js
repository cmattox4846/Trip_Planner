let destination = ['Miami', 'Las Vegas', 'Austin', 'New York',];
let resturant = ['Millers Ale House', 'Ruth Chris', 'McDonalds','Subway'];
let transport = ['Train','Car','Plane','Bus'];
let entertainment = ['A Movie','Top Golf',' A Comedy Show','A Concert'];

let desResult;
let resResult;
let transResult;
let enterResult;






function destinationGen(local){
    let selected = local[Math.floor(Math.random()*local.length)];
    return selected
};

function resturantGen(food){
    let selected = food[Math.floor(Math.random()*food.length)];
    return selected
};

function transportationGen(wayAround){
    let selected = wayAround[Math.floor(Math.random()*wayAround.length)];
    return selected
};

function entertainmentGen(enterntainment){
    let selected = entertainment[Math.floor(Math.random()*entertainment.length)];
    return selected
};

function randomSelection(){
    getRandomTrip()
    console.log(desResult,resResult,transResult,enterResult)
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

function getRandomTrip(){
    desResult = destinationGen(destination);
    resResult = resturantGen(resturant);
    transResult = transportationGen(transport);
    enterResult = entertainmentGen(entertainment);
}




let confirmOrNot = randomSelection()

function confirmOrDenieTravel(confirmOrNot){
 let confirmResults1 = false;
while(confirmResults1 === false){
        if (confirmOrNot === true){
        
            alert('Your travel plans have been confirms!'+'\n'+ 'Your destination will be: ' + desResult +'\n' + 'Your dining choice will be: ' + resResult +'\n'+ 'You will travel by: ' + transResult +'\n'+ 'While you are there you will enjoy a: ' + enterResult )
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

function loopConfirm(confirmResults){

    if(confirmResults === true){
        alert('Enjoy your travels!');
    }
       
 };

loopConfirm(confirmResults)

