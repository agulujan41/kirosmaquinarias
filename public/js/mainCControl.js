const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
     });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>observer.observe(el));

var menuActivated = false;
var menu_icon_button = document.getElementById('menu_icon_button');
var navbar_box = document.getElementById('navbar_box');
loadMENU();
menu_icon_button.onclick = function onClickedButton(){
    menuActivated= !menuActivated
    if (menuActivated){
        navbar_box.style = 'display:flex;'
    }
    else{
        navbar_box.style = 'display:none';
    }
}

window.addEventListener('resize', function(event) {
    if (this.window.innerWidth<1000){
        menuActivated = false;
        navbar_box.style = 'display:none';
    }
    else{
        navbar_box.style = 'display:flex;'
    }
}, true);

function loadMENU(){
    if (window.innerWidth<1000){
        menuActivated = false;
        navbar_box.style = 'display:none';
    }
    else{
        navbar_box.style = 'display:flex;'
    }
}