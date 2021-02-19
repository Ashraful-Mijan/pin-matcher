document.getElementById('generateBtn').addEventListener('click', ()=>{
    console.log('click')
    var pin = Math.floor(Math.random()*10000);
    console.log(pin)
    const pinLength = pin.toString().length;

    if (pinLength === 4) {
        document.getElementById('displayPin').value = pin;
    } 
})


const digit = (event) => {
    const getValue = event.target.innerText;
    if (isNaN(getValue)) {
        if (getValue === "C") {
            document.getElementById('displayTypedPin').value = '';
        }
        if (getValue === "<") {
            const type = document.getElementById('displayTypedPin').value;
            const currentType = type.slice(0, -1);
            document.getElementById('displayTypedPin').value = currentType;
        }
    }
    else{
        document.getElementById('displayTypedPin').value += getValue
    }
}

document.getElementById('submit').addEventListener('click', () => {
    const displayTypedPin = document.getElementById('displayTypedPin').value;
    const displayPin = document.getElementById('displayPin').value;
    const disMatch = document.getElementById('Match');
    const disnoMatch = document.getElementById('noMatch');
    if (displayTypedPin === displayPin) {
        disMatch.style.display = 'block';
        disnoMatch.style.display = 'none';
        document.getElementById('displayTypedPin').value ='';
    }
    else{
        disnoMatch.style.display = 'block';
        disMatch.style.display = 'none';

        let leftTry = document.getElementById('leftTry');
        let leftTryNum = parseInt(leftTry.innerText);
        leftTryNum--;
        if (leftTryNum <0) {
            alert('you lost your three time');
        }
        else {
            leftTry.innerText = leftTryNum;
        }
        document.getElementById('displayTypedPin').value ='';    
    }
    // displayTypedPin.value = ''
})