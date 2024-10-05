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
};


// description
// const imgs = document.querySelectorAll('.img-select a');
// const imgBtns = [...imgs];
// let imgId = 1;

// imgBtns.forEach((imgItem) => {
//     imgItem.addEventListener('click', (event) => {
//         event.preventDefault();
//         imgId = imgItem.dataset.id;
//         slideImage();
//     });
// });

// function slideImage(){
//     const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

//     document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
// }

// window.addEventListener('resize', slideImage);