document.getElementById('calc-triangle').addEventListener('click', function(){
    const triangleBase = getInputValue('triangle-base');
    const triangleHeight = getInputValue('triangle-height');
    if(checkValidNum(triangleBase) || checkValidNum(triangleHeight)){
        alert('Please provide a valid number');
        return;
    }
    const area = 0.5 * triangleBase * triangleHeight;
    setResult("Triangle" , area);
})

document.getElementById('calc-rectangle').addEventListener('click', function(){
    const rectangleWidth = getInputValue('rectangle-width');
    const rectangleLength = getInputValue('rectangle-length');
    if(checkValidNum(rectangleWidth) || checkValidNum(rectangleLength)){
        alert('Please provide a valid number');
        return;
    }
    const area = rectangleWidth * rectangleLength;
    setResult("Rectangle", area);
})

document.getElementById('calc-parallelogram').addEventListener('click', function(){
    const parallelogramBase = getInputValue('parallelogram-base');
    const parallelogramHeight = getInputValue('parallelogram-height');
    if(checkValidNum(parallelogramBase) || checkValidNum(parallelogramHeight)){
        alert('Please provide a valid number');
        return;
    }
    const area = parallelogramBase * parallelogramHeight;
    setResult("Parallelogram", area);
})

document.getElementById('calc-rhombus').addEventListener('click', function(){
    const rhombusD1 = getInputValue('rhombus-d1');
    const rhombusD2 = getInputValue('rhombus-d2');
    if(checkValidNum(rhombusD1) || checkValidNum(rhombusD2)){
        alert('Please provide a valid number');
        return;
    }
    const area = 0.5 * rhombusD1 * rhombusD2;
    setResult("Rhombus", area);
})

document.getElementById('calc-pentagon').addEventListener('click', function(){
    const pentagonP = getInputValue('pentagon-p');
    const pentagonA = getInputValue('pentagon-a');
    if(checkValidNum(pentagonP) || checkValidNum(pentagonA)){
        alert('Please provide a valid number');
        return;
    }
    const area = 0.5 * pentagonP * pentagonA;
    setResult("Pentagon", area);
})

document.getElementById('calc-ellipse').addEventListener('click', function(){
    const ellipseA = getInputValue('ellipse-a');
    const ellipseB = getInputValue('ellipse-a');
    if(checkValidNum(ellipseA) || checkValidNum(ellipseB)){
        alert('Please provide a valid number');
        return;
    }
    const area = (Math.PI * ellipseA * ellipseB).toFixed(4);
    setResult("Ellipse", area);
})

function checkValidNum(n){
    if(n <= 0 || isNaN(n)){
        return true;
    }
}

function getInputValue(id){
    const idText = document.getElementById(id);
    const idValue = parseFloat(idText.value);
    return idValue;
}

function setResult(shape ,value){
    const resultContainer = document.getElementById('result-container');
    const p = document.createElement('p');
    p.innerHTML = shape + " = " + value + " cm" + "<sup>2</sup>";
    resultContainer.prepend(p);
    const paragraphs = resultContainer.querySelectorAll('p');
    if(paragraphs.length > 34){
        resultContainer.removeChild(paragraphs[paragraphs.length - 1]);
    }
}