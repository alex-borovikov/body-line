const tabs = document.querySelectorAll('.price__our');
const tabsItem = document.querySelectorAll('.tabs__item');
const tabDiv = document.querySelectorAll('.tabs__item div');

function itemHandler(event){
    let item = event.target;
    let target = item.className;
    let getNumber = Number(target.slice(-1));
    
    tabDiv.forEach(i => i.removeAttribute('style'))
    item.style.cssText = `background-color: #093f4f; color: white;`
    
    tabs.forEach( item => {
        item.classList.remove('price__our_active');

        if(item.classList.contains(`tab_${getNumber}`) ) item.classList.add('price__our_active');
    })

}

tabsItem.forEach(item => {
    item.addEventListener('click',itemHandler)
})


//Replacer
const imageDefaultPosition = document.querySelectorAll('.price__flex');
const allReplacedItems = document.querySelectorAll('.price__content_img');
const allReplacedTitles = document.querySelectorAll('.price__content_title'); 

function imageReplacer(){
    let user_window = Math.max(document.documentElement.clientWidth || window.innerWidth);

    if(user_window <= 768){
        allReplacedTitles.forEach((item,index) => {
            item.after(allReplacedItems[index] )
        })
    }else{
        imageDefaultPosition.forEach((item,index) => {
            item.prepend(allReplacedItems[index] )
        })
    }
}
window.addEventListener('resize', imageReplacer)














