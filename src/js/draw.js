import * as jsonData from './data';


const $classTable = document.querySelector('tbody')[0];
const $quizTable = document.querySelector('tbody')[1];

drawClassTable();

function makeClassTable(classData){
    return `
    <tr>
        <td>${classData.week}</td>
        <td>
            <a href = "${classData.docUrl}" class="badge bg-secondary">보기</a>
        </td>
        <td>
            ${classData.links.forEach((link, i)=>{
                return `<a href="${link}" class="badge bg-secondary">${i++}</a>`
            })}
        </td>
        <td>${classData.date}</td>
        <td>
            <a href = "${classData.gitUrl}">git</a>
        </td>
    </tr>
    `
}

async function drawClassTable(){
    const classData = await jsonData.getClassData();
    $classTable.innerHTML =  makeClassTable(classData);
}