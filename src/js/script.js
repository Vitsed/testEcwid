'use strict'

let count = 0;

function handleImg() {
    count++;
    if(count >= 5) {
        document.querySelector('img').style.visibility = 'hidden';
        document.querySelector("h1").innerHTML = "Вы собрали автомобиль!";
    }
    // console.log(count);
}


function createTable() {
    const table = document.createElement('table');
    return table;
}

function createThead() {
    const thead = document.createElement('thead');
    return thead;
}

function createTbody() {
    const tbody = document.createElement('tbody');
    return tbody;
}

function createTr() {
    const tr = document.createElement('tr');
    return tr;
}

function createTh() {
    const th = document.createElement('th');
    return th;
}

function createTd() {
    const td = document.createElement('td');
    return td;
}

function addNewRow() {
    let date = document.getElementById('date');
    let company = document.getElementById('company');
    let cost = document.getElementById('cost');

    const hasTable = document.querySelector('table');
    
    if(hasTable == null) {
        const table = createTable();
        table.setAttribute('id','table');
        const thead = createThead();
        const tbody = createTbody();
        table.appendChild(thead);
        const tr = createTr();
        tr.appendChild(createTh()).innerHTML = 'Дата';
        tr.appendChild(createTh()).innerHTML = 'Компания';
        tr.appendChild(createTh()).innerHTML = "Стоимость";
        thead.appendChild(tr);
        table.appendChild(tbody);
        const body = document.getElementsByTagName('body')[0].prepend(table);
        console.log(body);
    } else {
        const getTbody = document.querySelector('table > tbody');
        console.log("Table inside " + getTbody);
        let setDate = createTd();
        let setCompany = createTd();
        let setCost = createTd();


    }
    
    console.log("Body shows up: "+document.getElementsByTagName('body')[0]);
}