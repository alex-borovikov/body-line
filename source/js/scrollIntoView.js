const menuMain = document.querySelector('.main__menu');
const menuBurger = document.querySelector('.burger__main__menu');
const headerButton = document.querySelector('.sign__btn');
const up = document.querySelector('.up');

window.addEventListener('scroll', function(){
    
    if(window.scrollY > 1000){
        up.style.display = 'block'
    }else{
        up.style.display = 'none'
    }
})

function orderhandler(event){
    let targetClassname = event.target.className;

    if(targetClassname !== 'order') return;
    clickHandler(event)
}

function clickHandler(event){
    event.preventDefault();

    let target = event.target.getAttribute('data-type');
    let element = document.getElementById(`anchor-${target}`)

    element.scrollIntoView({
        block: "start",
        behavior: "smooth"
    })
}

menuMain.addEventListener('click', clickHandler)
headerButton.addEventListener('click', clickHandler)
up.addEventListener('click', clickHandler)
menuBurger.addEventListener('click', function(event){
    clickHandler(event);
    setTimeout(() => burger(), 600 )
})
