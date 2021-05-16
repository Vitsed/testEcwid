'use strict'
// music to help you create code
// хоп хей ла ла лей
// save your tears for another day
let count = 0;

function handleImg() {
    count++;
    if(count >= 5) {
        document.querySelector('img').style.visibility = 'hidden';
        document.querySelector("h1").innerHTML = "Вы собрали автомобиль!";
    }
    // console.log(count);
}

// functions to create table and its inner elements
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
    const date = document.getElementById('date');
    const company = document.getElementById('company');
    const cost = document.getElementById('cost');

    const hasTable = document.querySelector('table');
    
    // create table if it not exist and add new elements of table with data 
    if(hasTable == null) {
        const table = createTable();
        table.setAttribute('id','table');
        const thead = createThead();
        const tbody = createTbody();
        table.appendChild(thead);
        const tr = createTr();
        // adding table's elements with column's names
        tr.appendChild(createTh()).innerHTML = 'Дата';
        tr.appendChild(createTh()).innerHTML = 'Компания';
        tr.appendChild(createTh()).innerHTML = "Стоимость";
        thead.appendChild(tr);
        table.appendChild(tbody);
        // just checking that elements being added
        const body = document.getElementsByTagName('body')[0].prepend(table);
        console.log(body);
    } else {
        const getTbody = document.getElementsByTagName('tbody')[0];
        //console.log(getTbody);
        const tr = createTr();
        let setDate = createTd();
        let setCompany = createTd();
        let setCost = createTd();

        // getting values from user form to table
        setDate.innerHTML = date.value;
        setCompany.innerHTML = company.value;
        setCost.innerHTML = cost.value;

        // clear fields 
        company.value = "";
        cost.value = "";

        tr.appendChild(setDate);
        tr.appendChild(setCompany);
        tr.appendChild(setCost);

        getTbody.appendChild(tr);

    }
    
    //console.log("Body shows up: "+document.getElementsByTagName('body')[0]);
}