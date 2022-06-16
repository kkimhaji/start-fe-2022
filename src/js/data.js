let classData;
let quizData;

function getClassData(){
    const result = fetch("class.json");
    var index = 1;
    result.json.array.forEach(data => {
        classData.add({
            week: inex+1,
            title: data.title,
            doUrl:data.doUrl,
            links:data.links,
            gitUrl: data.gitUrl,
            date: data.datas
        });
    });
    return classData;
}

function getQuizData(){
    const result=fetch("quiz.json");
    quizData = result.json();
}


