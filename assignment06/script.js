/*Heather Sleyster
sleyster_assignment05b
Thoedel
INFO 2134
4/9/2020
*/

//This is my event listener for the load event on the window.
window.addEventListener('load', function() {
/*These statements assign the element with the id values of userInput and
convertFromHolder to the variables with the same name.    
*/
const userInput = document.getElementById('userInput');
const convertFromHolder = document.getElementById('convertFromHolder');
    /*This is the event listener for the change in the userInput field it has
     a callback function onChange.
    */
userInput.addEventListener('change', onChange);
    /*This is the onChange callback function. It checks the userInput and populates
    the errors array if the change is empty or not a number with an error message.
    It then itterates through the errors array and if an error is thrown creates a li
    element in the errorHolder ul and adds the error message from the errors array to 
    the li as a text node. If there are errors in the errors array the hidden class is 
    removed from the errorHolder element and the class list of visible is added. If there
    are no errors in the errors array the class of hidden is removed from the convertFromHolder
    element and the class if visible is added.
    */
    function onChange(){
        const errors = [];
        const errorHolder = document.getElementById('errorHolder');
        const errorList = document.getElementById('errorList');

        if (userInput.value == ""){
        errors.push('Error: You must enter something');
        }
        if (isNaN(parseInt(userInput.value))){
        errors.push('Error: You must enter a number');
        }

        for (error of errors){
        const errorText = document.createTextNode(error);
        const li = document.createElement('li');
        li.value = errorText;
        li.innerHTML = errorText;
        li.appendChild(errorText);
        errorHolder.appendChild(li);
        }

        if (errors.length > 0){
        errorHolder.classList.remove('hidden');
        errorHolder.classList.add('visible');
        }
            else {
            convertFromHolder.classList.remove('hidden');
            convertFromHolder.classList.add('visible');
            }       
        }
/*This statements assign the element with the id of convertFrom  
to a variable with the same name.
*/
const convertFrom = document.getElementById('convertFrom');
/*This is the event listenter for the select event on the option
element it has a callback function onSelect.
*/
convertFrom.addEventListener('change', onSelect);
/*This is the callback function onSelect it checks the value of the option
element selected and creates option elements based on what has been selected
in the option elements in the convertFrom field assigns them a value and appends
them to the convertTo element.
*/
    function onSelect(){
        const convertToHolder = document.getElementById('convertToHolder');
        const convertTo = document.getElementById('convertTo');

        if(!convertFrom.value == ''){
        convertToHolder.classList.remove('hidden');
        convertToHolder.classList.add('visible');
        } 
        if(convertFrom.value.toLowerCase() == 'meters'){
        let option1 = document.createElement('option');
        option1.value = 'feet';
        option1.innerHTML = 'Feet';            
        let option2 = document.createElement('option');
        option2.value = 'miles';
        option2.innerHTML = 'Miles';
        convertTo.appendChild(option1);
        convertTo.appendChild(option2);
        }
        if (convertFrom.value.toLowerCase() == 'liters'){
        let option3 = document.createElement('option');
        option3.value = 'gallons';
        option3.innerHTML = 'Gallons';
        let option4 = document.createElement('option');
        option4.value = 'quarts';
        option4.innerHTML = 'Quarts';
        convertTo.appendChild(option3);
        convertTo.appendChild(option4);
        }
        if (convertFrom.value.toLowerCase() == 'kilos'){
        let option5 = document.createElement('option');
        option5.value = 'pounds';
        option5.innerHTML = 'Pounds';
        convertTo.appendChild(option5);
        }
        if  (convertFrom.value.toLowerCase() == 'celsius'){
        let option6 = document.createElement('option');
        option6.value = 'fahrenheit';
        option6.innerHTML = 'Fahrenheit';
        convertTo.appendChild(option6);
        }
            else {
                convertTo.removeChild;
                }
            }
    //This statement assigns the element with the id of action to a variable action.
const action = document.getElementById('action');
    /*This is the event listener for the click event it has a callback function of
    afterClick. First the resultHolder element is assigned to a variable resultHolder.
    Then any children of the result hoder are removed.
    */
action.addEventListener('click', afterClick);
    const resultHolder = document.getElementById('resultHolder');
    resultHolder.removeChild;
    /*This is the afterClick callback function. It checks the id selected and calculates
    the conversion required using the userInput and selected options. Then the results
    are put in a variable and an element is created and appended to the resultHolder and 
    the results are put in a text node that is then appended to the created element and 
    displayed to the user. 
    */
        function afterClick(){
        resultHolder.classList.add('visible');
        const h = document.createElement('h2');
        const result = new MetricToImperial(userInput.value);
        if(convertFrom.value == 'meters' && convertTo.value == 'feet'){
        result.convertMetersToFeet();
        result.ToDecimalPlaces(result);
        const resultText = document.createTextNode(`${userInput.value} meters is ${result} feet`);
        h.value = resultText;
        h.innerHTML = resultText;
        resultHolder.appendChild(h);
        h.appendChild(resultText);
        }
        if(convertFrom.value == 'meters' && convertTo.value == 'miles'){
        result.convertMetersToMiles();
        result.ToDecimalPlaces(result);
        resultHolder.appendChild(h);
        const resultText = document.createTextNode(`${userInput.value} meters is ${result} miles`);
        h.value = resultText; 
        h.innerHTML = resultText;
        h.appendChild(resultText);        
        }
        if(convertFrom.value == 'liters' && convertTo.value == 'gallons'){
        result.convertLitersToGallons();
        result.ToDecimalPlaces(result);
        h = document.createElement('h2');
        resultHolder.appendChild(h);
        const resultText = document.createTextNode(`${userInput.value} liters is ${result} gallons`);
        h.value = resultText;
        h.innerHTML = resultText;
        h.appendChild(resultText);
        }
        if(convertFrom.value == 'liters' && convertTo.value == 'quarts'){
        result.convertLitersToQuarts();
        result.ToDecimalPlaces(result);
        h = document.createElement('h2');
        resultHolder.appendChild(h);
        const resultText = document.createTextNode(`${userInput.value} liters is ${result} quarts`);
        h.value = resultText;
        h.innerHTML = resultText;
        h.appendChild(resultText);
        }
        if(convertFrom.value == 'kilos' && convertTo.value == 'pounds'){
        result.convertKilosToPounds();
        result.ToDecimalPlaces(result);
        h = document.createElement('h2');
        resultHolder.appendChild(h);
        const resultText = document.createTextNode(`${userInput.value} kilos is ${result} pounds`);
        h.value = resultText;
        h.innerHTML = resultText;
        h.appendChild(resultText);
        }
        if(convertFrom.value == 'celsius' && convertTo.value == 'fahrenheit'){
        result.convertCelsiusToFahrenheit();
        result.ToDecimalPlaces(result);
        h = document.createElement('h2');
        resultHolder.appendChild(h);
        const resultText = document.createTextNode(`${userInput.value} cesius is ${result} fahrenheit`);
        h.value = resultText;
        h.innerHTML = resultText;
        h.appendChild(resultText);
        }

            }
        });