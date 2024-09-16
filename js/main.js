'use strict';

//задание 1
console.log(document.body.firstElementChild);
console.log(document.body.children[1]);
console.log(document.body.children[1].lastElementChild);

//задание 2
let elems = document.querySelectorAll('li');
for(let elem of elems){
    elem.classList.add('list-item');
}
console.log(elems);


//задание 3
let a = prompt('Введите количество блоков');

for(let i = 1;i <= a; i++){
    let div = document.createElement('div');
    div.className = 'block';
    div.innerHTML = `${i}-ый блок`;
    document.body.append(div);
}

//задание 4
let form = document.createElement('form');
let inp = document.createElement('input')
let inp2 = document.createElement('input')
let btn = document.createElement('button');
btn.className = 'btn';

document.body.append(form);
document.body.lastElementChild.append(inp, inp2, btn);
btn.innerHTML = 'Отправить';
inp.placeholder = 'Имя';
inp2.placeholder = 'Email';

