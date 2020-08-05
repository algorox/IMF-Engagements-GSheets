function total(row) {
  
  var resultsSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Results");
  //var resultsColumn = resultsSheet.getRange(2, 2, resultsSheet.getLastRow())
  
  if(row != null) {
    
    startingColumn = 4
    numberOfRows = 1
    numberOfColumns = 20
    resultsCounter = 0;
    
    resultsArray = []
        
    
    for(resultsCounter = 0; resultsCounter < numberOfColumns; resultsCounter++)
    {
      resultsRange = resultsSheet.getRange(row, startingColumn + resultsCounter)
      resultsArray.push(resultsRange.getValues());
    }  
     
    
    total = 0;
    
    for (i = 0; i < resultsArray.length; i++) {
    
    ///////////////////////////////////////
    //DO NOT CHANGE ORDER OF CONDITIONALS//
    ///////////////////////////////////////
    if (resultsArray[i].toString().indexOf("Strongly Disagree") > -1) {
    
    total = total + 1;
    
    }
    
    ///////////////////////////////////////
    //DO NOT CHANGE ORDER OF CONDITIONALS//
    ///////////////////////////////////////
    else if (resultsArray[i].toString().indexOf("Strongly Agree") > -1) {
    
    total = total + 5;
    
    }
    
    ///////////////////////////////////////
    //DO NOT CHANGE ORDER OF CONDITIONALS//
    ///////////////////////////////////////
    else if (resultsArray[i].toString().indexOf("Disagree") > -1) {
    
    total = total + 2;
    
    }
    
    ///////////////////////////////////////
    //DO NOT CHANGE ORDER OF CONDITIONALS//
    ///////////////////////////////////////
    else if (resultsArray[i].toString().indexOf("To some extent") > -1) {
    
    total = total + 3;
    
    }
    
    ///////////////////////////////////////
    //DO NOT CHANGE ORDER OF CONDITIONALS//
    ///////////////////////////////////////
    else if (resultsArray[i].toString().indexOf("Agree") > -1) {
    
    total = total + 4;
    
    }
    
    ///////////////////////////////////////
    //DO NOT CHANGE ORDER OF CONDITIONALS//
    ///////////////////////////////////////
    else {
    
    total = total + 0;
    
    } 
    
    }
    
    outcome = total;
    //outcome = resultsArray[0]
    
  }
  
  else {
    
     outcome = 'No row provided'
  }

  return outcome
  
}


function findCapabiltyFocus(row, startingColumn, numberOfRows, numberOfColumns, string, threshold) {

var resultsSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Results");
  //var resultsColumn = resultsSheet.getRange(2, 2, resultsSheet.getLastRow())
  
  if(row != null) {
    
    //startingColumn = 4
    //numberOfRows = 1
    //numberOfColumns = 4
    resultsCounter = 0;
    total = 0;
    resultsArray = [];
    outcome = ''
        
    for(resultsCounter = 0; resultsCounter < numberOfColumns; resultsCounter++)
    {
      resultsRange = resultsSheet.getRange(row, startingColumn + resultsCounter)
      resultsArray.push(resultsRange.getValues());
    }  
   
    
    for (i = 0; i < resultsArray.length; i++) {
    
    ///////////////////////////////////////
    //DO NOT CHANGE ORDER OF CONDITIONALS//
    ///////////////////////////////////////
    if (resultsArray[i].toString().indexOf("Strongly Disagree") > -1) {
    
    total = total + 1;
    
    }
    
    ///////////////////////////////////////
    //DO NOT CHANGE ORDER OF CONDITIONALS//
    ///////////////////////////////////////
    else if (resultsArray[i].toString().indexOf("Strongly Agree") > -1) {
    
    total = total + 5;
    
    }
    
    ///////////////////////////////////////
    //DO NOT CHANGE ORDER OF CONDITIONALS//
    ///////////////////////////////////////
    else if (resultsArray[i].toString().indexOf("Disagree") > -1) {
    
    total = total + 2;
    
    }
    
    ///////////////////////////////////////
    //DO NOT CHANGE ORDER OF CONDITIONALS//
    ///////////////////////////////////////
    else if (resultsArray[i].toString().indexOf("To some extent") > -1) {
    
    total = total + 3;
    
    }
    
    ///////////////////////////////////////
    //DO NOT CHANGE ORDER OF CONDITIONALS//
    ///////////////////////////////////////
    else if (resultsArray[i].toString().indexOf("Agree") > -1) {
    
    total = total + 4;
    
    }
    
    ///////////////////////////////////////
    //DO NOT CHANGE ORDER OF CONDITIONALS//
    ///////////////////////////////////////
    else {
    
    total = total + 0;
    
    } 
    
    }
    
    if(total < threshold) {
    
    outcome = string
    
    }
    
    //outcome = resultsArray[0]
    
  }
  
  else {
    
     outcome = ' '
  }

  return outcome

}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function focus(row) {
  
  //Arguments: row, startingColumn, numberOfRows, numberOfColumns, string, threshold
  
  enduserExperience = findCapabiltyFocus(row, 4, 1, 4, 'End-user Experience, ', 12)
  security = findCapabiltyFocus(row, 8, 1, 3, 'Security, ', 7)
  operability = findCapabiltyFocus(row, 11, 1, 3, 'Operability, ', 7)
  strategy = findCapabiltyFocus(row, 14, 1, 3, 'Strategy, ', 7)
  adminEx = findCapabiltyFocus(row, 17, 1, 4, 'AdminEx, ', 12)
  devEx = findCapabiltyFocus(row, 21, 1, 3, 'DevEx, ', 7)


  outcome = enduserExperience + security + operability + strategy + adminEx + devEx;

  return outcome
  
}


const crawlThreshold = 50
const runThreshold = 75

/////////////////////
//Identity Maturity//
/////////////////////

function identityMaturity0(totalValue) {
  

 
  if(totalValue <= crawlThreshold) {
    
    outcome = 'Walk: ' + totalValue + '/100'
  
  }
    
  else if(totalValue > crawlThreshold && totalValue <= runThreshold) {
    
    outcome = 'Jog: ' + totalValue + ' /100'
  
  }
    
  else if(totalValue > runThreshold) {
    
    outcome = 'Run: ' + totalValue + ' /100'
  
  }    
  
  else {
    
     outcome = 'Error. Check values'
  }

  return outcome
  
}

/////////////////////////
//PS Package Calculator//
/////////////////////////
function professionalServicesPackage(totalValue, useCase) {
  
////////////////
/*
Complex Use Case
*/
////////////////
  
  if (useCase === 'Complex'){
  
  if(totalValue <= crawlThreshold) {
    
     outcome = 'Refer to PS'
  
  }
    
  else if(totalValue > crawlThreshold && totalValue <= runThreshold) {
    
     outcome = 'Advanced'
  
  }
    
  else if(totalValue > runThreshold) {
    
     outcome = 'Standard'
  
  }    
  
  else {
    
     outcome = 'Error. Check values'
  }
    
  }

///////////////  
/*
Simple Use Case
*/  
///////////////
  
  else if (useCase === 'Simple'){
  
  if(totalValue <= crawlThreshold) {
    
     outcome = 'Standard'
  
  }
    
  else if(totalValue > crawlThreshold && totalValue <= runThreshold) {
    
     outcome = 'Standard'
  
  }
    
  else if(totalValue > runThreshold) {
    
     outcome = 'Basic'
  
  }    
  
  
  else {
    
     outcome = 'Error. Check values'
  }
    
  }

///////  
/*
Default
*/
///////
  
  else {
    
     outcome = 'Assessment not completed'
    
  }
 
  return outcome
  
}
