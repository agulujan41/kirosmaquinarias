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

const observer2 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show2');
        }
        else{
            entry.target.classList.remove('show2');
        }
     });
});

const hiddenElements2 = document.querySelectorAll('.hidden2');
hiddenElements2.forEach((el)=>observer2.observe(el));


var menuActivated = false;
var menu_icon_button = document.getElementById('menu_icon_button');
var navbar_box = document.getElementById('navbar_box');
loadMENU();
menu_icon_button.onclick = onClickedButton

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


var btnX=document.getElementById('btnX');
btnX.onclick = function onClickedX(){
    onClickedButton();   
}
function onClickedButton(){
    menuActivated= !menuActivated
    if (menuActivated){
        navbar_box.style = 'display:flex;transform:translateX(100%);transition:all 0.8s;'
        navbar_box.style = 'transform:translateX(0%);transition:all 2s'
    }
    else{
        navbar_box.style = 'display:none';
    }
}

var lis = document.getElementsByTagName("li");
for (let i=0;i<lis.length;i++){
    lis[i].onclick = function(){
        if (window.innerWidth <1000){
            menuActivated = false;
            navbar_box.style = 'display:none';
            var a = lis[i].getElementsByTagName("a");
            a[0].click();
        }
       
        
    }

}

cards = document.getElementsByClassName("card");
for (let i=0;i<cards.length;i++){
    let p = cards[i].getElementsByTagName("p");
    let a = cards[i].getElementsByTagName("a");
    cards[i].onmouseover=function(){
        p[0].style = 'color:white;'
        a[0].style = 'color:white;outline: 1px dashed white;'
    }
    cards[i].onmouseleave=function(){
        p[0].style = 'color:transparent;'
        a[0].style = 'color:transparent;outline: 1px dashed transparent;'
    }
}
