const $btnGroup = document.querySelectorAll('.btn-group')[0];
const $quizBtnGroup = document.querySelectorAll('.btn-group')[1];

const $classbtns = $btnGroup.querySelectorAll('.btn');
const $quizbtns = $quizBtnGroup.querySelectorAll('.btn');
var index = 0;
var selected = document.querySelectorAll('.active');
var qselected = selected[1];
var cselected = selected[0];

$quizbtns.forEach(($btn)=>{
    $btn.addEventListener('click', (event)=>{
        qselected.classList.remove("active");
        event.target.classList.add("active");
        qselected = event.target;
    });
});

$classbtns.forEach(($btn)=>{
    $btn.addEventListener('click', (event)=>{
        cselected.classList.remove("active");
        event.target.classList.add("active");
        cselected = event.target;
    });
});