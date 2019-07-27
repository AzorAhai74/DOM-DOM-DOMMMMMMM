window.addEventListener('DOMContentLoaded', function() {
    //When the browser first loads, use the DOM to create and insert a button labeled `Add Square` into the body
    //When the button is clicked, a new `div` should be added to the page
    //The `div` should be a black square
    //The squares should flow horizontally across the page  
    
    let buttonOne = document.createElement('button');
    let buttonOneText = document.createTextNode('Add Square');
    buttonOne.appendChild(buttonOneText);
    document.body.appendChild(buttonOne);

    let flexContainer = document.createElement('div');
    flexContainer.className = 'flex-container';
    document.body.appendChild(flexContainer);

    let newSquare = 1;

    let colors = ['blue', 'red', 'green', 'yellow', 'orange', 'brown', 'purple', 'pink'];

    buttonOne.addEventListener('click', function() {
    let div = document.createElement('div');
    div.ClassName = 'squares';
    let div1 = document.getElementsByClassName('squares');
    div.class = div1;
    div.id = (newSquare);
    
    document.body.appendChild(div);    
    div.classList.add('squares');
    div.style.cssFloat = 'right';
    div.style.textAlign = 'center';
    div.style.height = '100px';
    div.style.lineHeight = '100px';
    div.style.webkitTextFillColor = 'white';
    divSquareListeners(div);

    newSquare++;

    
    });

    function randomColors() {
        let randomColor1 = colors[Math.floor(Math.random() * 7) + 1];
        let randomColor2 = colors[Math.floor(Math.random() * 7) + 1];
        let randomColor3 = colors[Math.floor(Math.random() * 7) + 1];
        let randomColor4 = colors[Math.floor(Math.random() * 7) + 1];
        let randomColor5 = colors[Math.floor(Math.random() * 7) + 1];
        let randomColor6 = colors[Math.floor(Math.random() * 7) + 1];
        let randomColor7 = colors[Math.floor(Math.random() * 7) + 1];
        let randomColor8 = colors[Math.floor(Math.random() * 7) + 1];

        let randomColors = '(' + randomColor1 + ',' + randomColor2 + ',' + randomColor3 + ',' + randomColor4 + ',' + randomColor5 + ',' + randomColor6 + ',' + randomColor7 + ',' + randomColor8 + ')';
        console.log(randomColors);
        return randomColors;        
    }

    //When hovering over a square, the value of the square's `id`
    //should display centered in the square 

    function divSquareListeners(div) {
        div.addEventListener('mouseover', function(){
            let textId = document.createTextNode(div.id.toString());
            div.appendChild(textId); 
        });

    //and disappear when the cursor is no longer over the square

        div.addEventListener('mouseout', function(){
            div.removeChild(div.firstChild);
        });

    //When a square is clicked, it should change to a random background color
    //(You can randomly choose from a set of colors you predefine if you wish)*See line 18 and 41-53*

        div.addEventListener('click', function() {
            div.style.backgroundColor = randomColors();
        });

    //When a square is double clicked, the following should occur:
    //If the `id` of the square is even:
    //The square after the clicked square should be removed from the page
    //If there isn't a square after the clicked square, display an alert indicating so
    //If the `id` of the square is odd:
    //The square before the clicked square should be removed from the page
    //If there isn't a square before the clicked square, display an alert indicating so

        div.addEventListener('dblclick', function() {
            let squareLength = document.getElementsByClassName('squares').length;
            let squareAfter = document.getElementById(div.id).nextElementSibling;
            let squareBefore = document.getElementById(div.id).previousElementSibling;

            if (div.id % 2 == 0) {
                if (div.id >= squareLength) {
                    alert('There are no squares after this');
                } else {
                    squareAfter.parentNode.removeChild(squareAfter);
                }
            } else {
                if (squareBefore == null) {
                    alert('There are no squares before this');
                } else {
                    squareBefore.parentNode.removeChild(squareBefore);
                }
            }
        });

    };  
    
    
});