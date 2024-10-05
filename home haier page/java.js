const allfilteritems = document.querySelectorAll('.filter-item');
const allfilterBtns = document.querySelectorAll('.filter-btn');

allfilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        showfilteredcontent(btn);
    });
});


function showfilteredcontent(btn){
    allfilteritems.forEach((item) =>{
        if(item.classList.contains(btn.id)){
            resetActivebtn();
            btn.classList.add('active-btn');
            item.style.display="block";
        }
        else{
            item.style.display="none";
        }
    })
}

function resetActivebtn(){
    allfilterBtns.forEach ((btn) => {
        btn.classList.remove('active-btn');
    })
}