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