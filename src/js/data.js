let classData = [];

async function getClassData(){
    const response = await fetch("./class.json");
    let i = 1;
    for(const cd of await response.json()){
        classData.push({
            week: i++,
            title: cd.title,
            doUrl: cd.doUrl,
            links:cd.links,
            gitUrl: cd.gitUrl,
            date: cd.date
        });
    }
    return classData;
}

async function getQuizData(){
    const result= await fetch("./quiz.json");
    return result.json(); //json과 출력에 필요한 내용이 같음
}



export {getClassData, getQuizData}