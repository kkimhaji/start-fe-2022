
const $ac = document.querySelectorAll('.active');

const cf = $ac[0].innerText;
const qf = $ac[1].innerText;

async function getClassData(){
    const response = await fetch("./class.json");
    let i = 1;
    let classData = [];
    for(const cd of await response.json()){
        classData.push({
            week: i++, //번호 필요
            title: cd.title,
            docUrl: cd.docUrl,
            links:cd.links,
            gitUrl: cd.gitUrl,
            date: cd.date
        });
    }
    return classData;
}

async function getQuizData(){
    const result= await fetch("./quiz.json");
    return await result.json(); //json과 출력에 필요한 내용이 같음
}



async function filterCD(cf){

    let classD = await getClassData();
    
    switch(cf) {
        case '모두':
            break;
        case '도움링크':
            classD=classD.filter(cd =>cd.links.length>0);
            console.log("link", classD);
            break;
        case '최신순':
            classD=classD.sort((a, b) => {
                if(a.date < b.date) return 1;
                if(a.date > b.date) return -1;
            });
            break;
        case 'git':
            classD=classD.filter(cd => cd.gitUrl.length>0);
            console.log(classD);
            break;
    }
    return classD;
}

async function filterQD(qf){
    let quizD = await getQuizData();
    switch(qf){
        case 'git':
            quizD=quizD.filter(qd => qd.gitUrl.length>0);
            break;
        case '모두': break;
    }
    return quizD;
}


export {getClassData, getQuizData, filterCD, filterQD}