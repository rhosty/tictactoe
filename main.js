
let isCross = true;
let clickCounter = 0;
let winCondition = [];

let firstRow = [];




const inputCell = document.getElementsByClassName('cell');
   for (let i = 0; i < 9; i++) {
      
      inputCell[i].addEventListener('click', function(element){
         
         if(isCross){
            inputCell[i].src = "assets/cross.png";
            inputCell[i].value = 1;
            document.documentElement.style.setProperty('--player1turn', 'rgb(255, 255, 255)');
            document.documentElement.style.setProperty('--player2turn', 'rgb(226, 131, 153)');
            isCross = false;
            clickCounter++
            console.log(inputCell[i].value);
            
           

            if (clickCounter === 9) {
               isWinning = document.getElementsByClassName('cell');
               for (let j = 0; j < 9; j++){
               winCondition.push(isWinning[j].value);
               console.log(winCondition)
                          
               }
               
            }   
         } else {
            
            inputCell[i].src = "assets/circle.png";
            inputCell[i].value = -1;
            document.documentElement.style.setProperty('--player1turn', 'rgb(94, 147, 108)');
            document.documentElement.style.setProperty('--player2turn', 'rgb(255, 255, 255)');
            isCross = true; 
            clickCounter++  
            console.log(inputCell[i].value);    
            
         } 
         
      })
  };







  
 
  
                      








