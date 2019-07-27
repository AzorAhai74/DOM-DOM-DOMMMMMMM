window.addEventListener('DOMContentLoaded', function() {
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

    function divSquareListeners(div) {
        div.addEventListener('mouseover', function(){
            let textId = document.createTextNode(div.id.toString());
            div.appendChild(textId); 
        });

        div.addEventListener('mouseout', function(){
            div.removeChild(div.firstChild);
        });

        div.addEventListener('click', function() {
            div.style.backgroundColor = randomColors();
        });

    }


    
    
    
});