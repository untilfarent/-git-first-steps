const input = document.getElementById('num-input');

enterNumber = (n) => {
    if (input.value === '0') {
        input.value = n;
    } else {
        input.value = input.value + n;
    }

};

const numButtons = document.getElementsByClassName('num-button');
for (let i = 0; i < numButtons.length; i++) {
    const button = numButtons[i];
    button.onclick = () => {
        enterNumber(button.textContent)
    }
}

const backspaceButton = document.getElementById('backspace-button');
backspaceButton.onclick = () => {
    if (input.value.length === 1) {
        input.value = '0';
    } else {
        input.value = input.value.slice(0, -1);
    }
};

const dotbutton = document.getElementById('dot-button');
dotbutton.onclick = () => {
    const n = input.value.length ;
    for (let i = 0; i < n; i += 1) {
        if (input.value[i]=== '.') {
            return;
        }
    }
    input.value+= '.'
};

let num =null;
let op =null;
const plusButton = document. getElementById('plusButton');
plusButton.onclick = () => {
    if (num == null) {
        op = '+';
        console.log('+');
        return
    }
};



//DOM - Doc
// ument Objetct Model
//BOM - Browser Oblects Model

