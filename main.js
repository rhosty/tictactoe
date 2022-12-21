
let isCross = true;
let clickCounter = 0;
let winCondition = [];

const playerOneHasWon = [1, 1, 1];
const playerTowHasWon = [-1, -1, -1];


let firstCol = [];
let secondCol = [];
let thirdCol = [];
let firstRow = [];
let secondRow = [];
let thirdRow = [];
let firstDiagonal = [];
let secondDiagonal = [];

//checks who is thw inner of the game in the first column

let  checkForWin = document.getElementById('won');
      checkForWin.addEventListener('click', function(){
         for (let w = 0; w < winCondition.length; w += 3){
                  firstCol.push(winCondition[w]);
                  if(firstCol.toString() === playerOneHasWon.toString()){
                     alert("player one has won");
                  } else if(firstCol.toString() === playerTowHasWon.toString()){
                     alert("player Two has won!");
                  }
         }
      })

   // second column
      checkForWin.addEventListener('click', function(){
         for (let w = 1; w < winCondition.length; w += 3){
                  secondCol.push(winCondition[w]);
                  if(secondCol.toString() === playerOneHasWon.toString()){
                     alert("player one has won");
                  } else if(secondCol.toString() === playerTowHasWon.toString()){
                     alert("player Two has won!");
                  }
         }
      })

   // thric column
      checkForWin.addEventListener('click', function(){
         for (let w = 1; w < winCondition.length; w += 3){
                  thirdCol.push(winCondition[w]);
                  if(thirdCol.toString() === playerOneHasWon.toString()){
                     alert("player one has won");
                  } else if(thirdCol.toString() === playerTowHasWon.toString()){
                     alert("player Two has won!");
                  }
         }
      })


    // first Row
      checkForWin.addEventListener('click', function(){
         for (let w = 0; w < 3; w++){
                  firstRow.push(winCondition[w]);
                  if(firstRow.toString() === playerOneHasWon.toString()){
                     alert("player one has won");
                  } else if(firstRow.toString() === playerTowHasWon.toString()){
                     alert("player Two has won!");
                  }
         }
      })

   // second Row
      checkForWin.addEventListener('click', function(){
         for (let w = 3; w < 3; w++){
                  secondRow.push(winCondition[w]);
                  if(secondRow.toString() === playerOneHasWon.toString()){
                     alert("player one has won");
                  } else if(secondRow.toString() === playerTowHasWon.toString()){
                     alert("player Two has won!");
                  }
         }
      })

   // thric Row
      checkForWin.addEventListener('click', function(){
         for (let w = 6; w < 3; w++){
                  thirdRow.push(winCondition[w]);
                  if(thirdRow.toString() === playerOneHasWon.toString()){
                     alert("player one has won");
                  } else if(thirdRow.toString() === playerTowHasWon.toString()){
                     alert("player Two has won!");
                  }
         }
      })

   // first Diagonal

      checkForWin.addEventListener('click', function(){
         for (let w = 0; w < winCondition.length; w += 4){
                  firstDiagonal.push(winCondition[w]);
                  if(firstDiagonal.toString() === playerOneHasWon.toString()){
                     alert("player one has won");
                  } else if(firstDiagonal.toString() === playerTowHasWon.toString()){
                     alert("player Two has won!");
                  }
         }
      })
   
   // second Diagonal   

      checkForWin.addEventListener('click', function(){
         for (let w = 2; w < winCondition.length; w += 2){
                  secondDiagonal.push(winCondition[w]);
                  if(secondDiagonal.toString() === playerOneHasWon.toString()){
                     alert("player one has won");
                  } else if(secondDiagonal.toString() === playerTowHasWon.toString()){
                     alert("player Two has won!");
                  }
         }
      })




  


// lets players put down and X or an 0

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
            
            
           

            if (clickCounter === 9) {
               isWinning = document.getElementsByClassName('cell');
               for (let j = 0; j < 9; j++){
               winCondition.push(isWinning[j].value);
               
                          
               }
               
            }   
         } else {
            
            inputCell[i].src = "assets/circle.png";
            inputCell[i].value = -1;
            document.documentElement.style.setProperty('--player1turn', 'rgb(94, 147, 108)');
            document.documentElement.style.setProperty('--player2turn', 'rgb(255, 255, 255)');
            isCross = true; 
            clickCounter++  
              
            
         } 
         
      })
  };







 
  
                      








