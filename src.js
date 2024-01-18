const input = document.querySelector('input');
const button = document.querySelector('button');
const ul = document.getElementsByTagName('ul')[0];
let arrayValue = [];

button.addEventListener('click', showData);

function showData() {
    arrayValue.push(input.value);
    for(let i = 0; i < arrayValue.length; i++) {
        let valueP = document.createTextNode(arrayValue[i]);
        const li = document.createElement('li');
        li.appendChild(valueP);
        ul.appendChild(li);
        li.innerHTML = input.value;
        input.value = "";
        break;
    }
}

