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
function mathPI()