window.addEventListener('DOMContentLoaded', function() {
    let buttonOne = document.createElement('button');
    let buttonOneText = document.createTextNode('Add Square');
    buttonOne.appendChild(buttonOneText);
    document.body.appendChild(buttonOne);
    

    buttonOne.addEventListener('click', function() {
    let div = document.createElement('div');
    div.ClassName = 'squares';
    let div1 = document.getElementsByClassName('squares');
    div.class = div1;
    div.id = 'newSquareId';
        
    document.body.appendChild(div);    
    div.classList.add('squares');

    });
    
    
});