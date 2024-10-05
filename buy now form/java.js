const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY> 0);
})

// search box

const searchBox = document.querySelector('.search')
const searchBtn = document.querySelector('.search')
const search = document.querySelector('.search')
const closeBtn = document.querySelector('.close')

searchBtn.addEventListener('click',function(){
    console.log(search.classList.contains('active'))
    if(search.classList.contains('active')){
        searchBox.value =''
    }
    else{
        search.classList.add('active');
        searchBox.focus();
    }
})
closeBtn.addEventListener('clice', function(){
    search.classList.remove('active');
    searchBox.value = '';
})