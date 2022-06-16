import * as drawing from './draw';

document.querySelectorAll('.btn-group').forEach((original, i) => {
    const $btns = original.querySelectorAll('.btn');
    $btns.forEach(($btn)=>{
        $btn.addEventListener('click', (event)=>{
            if(i==0) drawing.drawClassTable(event.target.innerText);
            if(i==1) drawing.drawQuizTable(event.target.innerText);
            for (let i = 0; i < $btns.length; i++) {
                $btns[i].classList.remove("active");
            }
            event.target.classList.add("active");
        });
    });
})