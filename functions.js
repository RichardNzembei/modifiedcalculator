function appendToDisplay(value){
    document.getElementById('display').value+=value;
    
}

function clearDisplay(value){
    document.getElementById('display').value='';
}
function showDisplay() {
    const displayElement = document.getElementById('display');
    const currentExpression = displayElement.value;
    const result = calculateResult(currentExpression);
  
    // Update the display with the result or an error message
    displayElement.value = result !== null ? result : 'Error';
  }
  
function calculateResult(value){
    try{
        document.getElementById('display').value=eval(document.getElementById('display').value);
    }
    catch(error){
        document.getElementById('display').value="error";
    }   
}
function calculateSin() {
    const displayElement = document.getElementById('display');
    const currentValue = displayElement.value;
    
    try {
        const result = Math.sin(eval(currentValue*Math.PI/180));
        displayElement.value = result;
    } catch (error) {
        displayElement.value = 'Error';
    }
   
}
function calculateTan() {
    const displayElement = document.getElementById('display');
    const currentValue = displayElement.value;
    
    try {
        const result = Math.tan(eval(currentValue));
        displayElement.value = result;
    } catch (error) {
        displayElement.value = 'Error';
    }
   
}
function calculateCos() {
    const displayElement = document.getElementById('display');
    const currentValue = displayElement.value;
    
    try {
        const result = Math.cos(eval(currentValue));
        displayElement.value = result;
    } catch (error) {
        displayElement.value = 'Error';
    }
   
}
function calculatepow2() {
    const displayElement = document.getElementById('display');
    const currentValue = displayElement.value;

    
    const numberValue = parseFloat(currentValue);
    if (!isNaN(numberValue)) {
        try {
            
            const result = Math.pow(numberValue, 2);

            
            displayElement.value = result;
        } catch (error) {
           
            displayElement.value = 'Error';
        }
    } else {
       
        displayElement.value = 'Error';
    }
}
function  calculatesqrt(){
    const displayElement = document.getElementById('display');
    const currentValue = displayElement.value;

    
    const numberValue = parseFloat(currentValue);
    if (!isNaN(numberValue)) {
        try {
            
            const result = Math.sqrt(numberValue);

            
            displayElement.value = result;
        } catch (error) {
           
            displayElement.value = 'Error';
        }
    } else {
       
        displayElement.value = 'Error';
    }
}
function calculatecub3() {
    const displayElement = document.getElementById('display');
    const currentValue = displayElement.value;

    
    const numberValue = parseFloat(currentValue);
    if (!isNaN(numberValue)) {
        try {
            
            const result = Math.cbrt(numberValue);

            
            displayElement.value = result;
        } catch (error) {
           
            displayElement.value = 'Error';
        }
    } else {
       
        displayElement.value = 'Error';
    }
}
function calculateLog2() {
    const displayElement = document.getElementById('display');
    const currentValue = displayElement.value;

    
    const numberValue = parseFloat(currentValue);
    if (!isNaN(numberValue)) {
        try {
            
            const result = Math.log2(numberValue);

            
            displayElement.value = result;
        } catch (error) {
           
            displayElement.value = 'Error';
        }
    } else {
       
        displayElement.value = 'Error';
    }
}
function usingPI(value) {
    
    const displayElement = document.getElementById('display');
    displayElement.value += value;
    const newPIValue = parseFloat(displayElement.value) * Math.PI;
    displayElement.value = newPIValue;
}
