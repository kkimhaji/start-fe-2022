document.querySelectorAll('.btn-group').forEach((original) => {
    const $btns = original.querySelectorAll('.btn');
    $btns.forEach(($btn)=>{
        $btn.addEventListener('click', (event)=>{
            for (let i = 0; i < $btns.length; i++) {
                $btns[i].classList.remove("active");
            }
            event.target.classList.add("active");
        });
    });
})