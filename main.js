const add = document.querySelector('#add');
const tfoot = document.querySelector('#tfoot');
const courseCode = document.querySelector('#course-code');
const unitLoad = document.querySelector('#unit-load');
const grade = document.querySelector('#grade');
const table = document.querySelector('#table');
const tbody = document.querySelector('#tbody');
let gpArry = [];

const calcGp = document.querySelector('#calc-gp');
const Clear = document.querySelector('#clear');

add.addEventListener('click', () => {
    if (courseCode.value === '' || unitLoad.value === '0' || grade.selectedIndex === '0') {
        alert('No, or incomplete Input given')
    } else {
        const tr = document.createElement('tr');
    const tdCourseCode = document.createElement('td');  
    tdCourseCode.innerHTML = courseCode.value;
    const tdunitLoad = document.createElement('td');
    tdunitLoad.innerHTML = unitLoad.value;
    const tdGrade = document.createElement('td');
    tdGrade.innerHTML = grade.options[grade.selectedIndex].text
    tr.appendChild(tdCourseCode);
    tr.appendChild(tdunitLoad);
    tr.appendChild(tdGrade);
    tbody.appendChild(tr);
    table.classList.remove('display-none');
    calcGp.classList.remove('display-none');
    Clear.classList.remove('display-none');
    gpArry.push({'unitLoad':unitLoad.value,'grade':grade.options[grade.selectedIndex].value})
    courseCode.value = '';
    unitLoad.value = '';
    grade.selectedIndex = '0';

    }
})

calcGp.addEventListener('click', () => {
    let unitLoads = 0, productsOfUnitLoadsAndGrades = 0,
    sumOfProductsOfUnitLoadsAndGrades = 0;
    gpArry.forEach(result =>{
        unitLoads += parseInt(result.unitLoad);
        productsOfUnitLoadsAndGrades = parseInt(result.unitLoad) * parseInt(result.grade);
        sumOfProductsOfUnitLoadsAndGrades += productsOfUnitLoadsAndGrades;
    });

    const tr = document.createElement('tr');

    tdTotalUnitLoad = document.createElement('td');
    tdTotalUnitLoad.innerHTML = `Your total unit load is ${unitLoads}`
    tdGpa = document.createElement('td');
    tdGpa.setAttribute('colspan','2');
    tdGpa.innerHTML = `Your GPA is ${(sumOfProductsOfUnitLoadsAndGrades/unitLoads).toFixed(2)}`;

    tr.appendChild(tdTotalUnitLoad);
    tr.appendChild(tdGpa);
    if (tfoot.querySelector('tr') !== null) {
        tfoot.querySelector('tr').remove();   
        }
    tfoot.appendChild(tr);
})

Clear.addEventListener('click',() => {
    gpArry = [];
    tbody.querySelectorAll('*').forEach(child => child.remove());
    if (tfoot.querySelector('tr') !== null) {
    tfoot.querySelector('tr').remove();   
    }
    table.classList.add('display-none');
    calcGp.classList.add('display-none');
    Clear.classList.add('display-none');
})