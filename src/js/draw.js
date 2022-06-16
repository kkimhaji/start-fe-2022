import * as jsonData from './data';


const $classTable = document.querySelectorAll('tbody')[0];
const $quizTable = document.querySelectorAll('tbody')[1];
const $loading = document.querySelectorAll('.spinner-border');

setTimeout(drawClassTable, 500);
setTimeout(drawQuizTable, 500);

function makeClassTable(classData){
    return `
    <tr>
        <th scope="row">${classData.week}</th>
        <td>${classData.title}</td>
        <td>
            <a href = "${classData.docUrl}" class="badge bg-secondary">보기</a>
        </td>
        <td>
            ${classData.links.map((link, i)=>{
               return `<a href="${link}" class="badge bg-secondary">${i+1}</a>`
            }).join(" ")}
        </td>
        <td>${classData.date}</td>
        <td>
            <a href = "${classData.gitUrl}">git</a>
        </td>
    </tr>
    `
}

async function drawClassTable(){
    $classTable.innerHTML="";
    const classData = await jsonData.getClassData();
    classData.forEach(item => {
        $classTable.innerHTML += makeClassTable(item);
    })
    
}

function makeQuizTable(quizData){
    return `
    <tr>
        <td>${quizData.title}</td>
        <td>
            <a class="badge bg-secondary" href="${quizData.docUrl}">문서</a>
        </td>
        <td>
            <a href="${quizData.previewUrl}">보기</a>
        </td>
        <td>
            <a href="${quizData.gitUrl}">git</a>
        </td>
    </tr>
    `
}


async function drawQuizTable(){
    $quizTable.innerHTML="";
    const quizData = await jsonData.getQuizData();
    quizData.forEach(item => {
        console.log(makeQuizTable(item));
        $quizTable.innerHTML += makeQuizTable(item);
    })
}