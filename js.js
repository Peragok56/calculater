var inputCalc = document.querySelector('.vvod')
var resultCalc = document.querySelector('.result')

function input(i) {
    inputCalc.value = inputCalc.value + i
}

function result(){
    if (eval(inputCalc.value) === undefined) {
        inputCalc.value = '0.00';
        resultCalc.value = '0.00';
    };
    if (eval(inputCalc.value) === Infinity){
        inputCalc.value = 'Ага, щяс';
        resultCalc.value = 'Ага, щяс';
    };
    if (eval(inputCalc.value) === -Infinity){
        inputCalc.value = 'Ага, щяс';
        resultCalc.value = 'Ага, щяс';
    }
    inputCalc.value = eval(inputCalc.value);
    resultCalc.value = eval(inputCalc.value);
}

function backspace(){
    inputCalc.value = inputCalc.value.slice(0, -1);
}

function reset(){
    inputCalc.value = '';
    resultCalc.value = '0.00';
}

function koren(){
    inputCalc.value = Math.sqrt(inputCalc.value)
}

function kvad(){
    inputCalc.value = Math.pow(inputCalc.value, 2)
}

function delNaX(){
    inputCalc.value = 1/inputCalc.value
}