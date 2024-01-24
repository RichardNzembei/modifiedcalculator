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

    // Convert the input value to a number
    const numberValue = parseFloat(currentValue);

    // Check if the conversion is successful and the input is a valid number
    if (!isNaN(numberValue)) {
        try {
            // Calculate the square (power of 2) of the number
            const result = Math.pow(numberValue, 2);

            // Update the display with the calculated result
            displayElement.value = result;
        } catch (error) {
            // If an error occurs during calculation, set the display to 'Error'
            displayElement.value = 'Error';
        }
    } else {
        // If the input is not a valid number, set the display to 'Error'
        displayElement.value = 'Error';
    }
}
