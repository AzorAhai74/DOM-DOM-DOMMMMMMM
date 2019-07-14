window.addEventListener('DOMContentLoaded', function() {
    let buttonOne = document.createElement('button');
    let buttonOneText = document.createTextNode('Add Square');
    buttonOne.appendChild(buttonOneText);
    document.body.appendChild(buttonOne);

    let flexContainer = document.createElement('div');
    flexContainer.className = 'flex-container';
    document.body.appendChild(flexContainer);

    let newSquare = 1;

    buttonOne.addEventListener('click', function() {
    let div = document.createElement('div');
    div.ClassName = 'squares';
    let div1 = document.getElementsByClassName('squares');
    div.class = div1;
    div.id = (newSquare);
    
    document.body.appendChild(div);    
    div.classList.add('squares');
    div.style.cssFloat = 'right';
    divSquareListeners(div);
    
    newSquare++;
        
    });

    function divSquareListeners(div) {
        div.addEventListener('mouseover', function(){
            
        })
    }


    
    
    
});