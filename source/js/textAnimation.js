const header = document.querySelector('.header');
const menu = document.querySelector('.header__menu');
const header_title = document.querySelector('.header__title h2');
const header_sub = document.querySelector('.header__sub h2');




window.onload = function () {

    header.classList.add('_onload__header')
    menu.classList.add('_onload__menu')
    header_title.classList.add('_onload__title')
    header_sub.classList.add('_onload__sub')

    setTimeout(() => { header.style.transition = '0.5s' }, 1500);
    imageReplacer();

}

document.querySelector('.burger__close').addEventListener('click',burger)

function burger(){
    document.querySelector('.wrapper').classList.toggle('header__transform');
    document.querySelector('.burger__main__menu').classList.toggle('opacity');

    document.querySelector('.header__nav').style.display = 'none';

    document.querySelector('.header__title h2').classList.toggle('_disp')
    document.querySelector('.header__sub h2').classList.toggle('_disp')


    document.querySelector('.line_top').classList.toggle('line_top_active')
    document.querySelector('.line_middle').classList.toggle('line_middle_active')
    document.querySelector('.line_bottom').classList.toggle('line_bottom_active')
}



window.addEventListener('scroll', function () {

    //effect block
    const elem = document.querySelector('.effects__text article');
    const img = document.querySelector('.effects__photo')
    const mark = document.querySelector('._mark');

    let block = elem.getBoundingClientRect().top; 
    let userWindowHeight = window.innerHeight;
    let rate = 1.2;
    let rateSec = 1.5
    let userWindow = userWindowHeight / rate;
    let userWidth = window.innerWidth;

    let elemHeight = elem.offsetHeight;

    let addi_text = userWindow - (elemHeight * rateSec);

    if (userWidth < 700) {
        rate = 1.6;
        userWindow = window.innerHeight * rate;
    } else if (userWidth < 600) {
        userWindow = window.innerHeight / 0.6;
    }


    if (block <= userWindow) {
        elem.classList.add('_transform')
        img.classList.add('_transform')
    } else {
        elem.classList.remove('_transform')
        img.classList.remove('_transform')
    }

    if (block < addi_text) {
        mark.classList.add('_transform')
    } else {
        mark.classList.remove('_transform')
    }


    //Advantage block
    const advantage = document.querySelector('.advantage__list-floor');
    const allFloorItems = document.querySelectorAll('.floor__item');

    let advantageRect = advantage.getBoundingClientRect().top;
    let userWindowMobileMini = userWindowHeight - 200;
    let advantageDistanceMobile = userWindowHeight / 0.9



    if (advantageRect < userWindowMobileMini) {
        let counter = 0;
        allFloorItems.forEach((item, index) => {
            counter = counter + 0.3;
            item.style.cssText = `transition-delay: ${counter}s`
            item.classList.add('mod_opacity');
        });
    } else if (advantageRect >= advantageDistanceMobile) {
        allFloorItems.forEach(item => {
            item.style.cssText = `transition-delay: 0s`
            item.classList.remove('mod_opacity')
        });
    }


    //Problems video block
    const pro_video = document.querySelector('.problems__video'),
        pro_text = document.querySelector('.problems__info'),
        pro_main = document.querySelector('.problems'),
        pro_video_video = document.querySelector('.pro_video'),
        pro_gif = document.querySelector('.gif-mobile');

    let distanceToMainBlock = pro_main.getBoundingClientRect().top;
    let placewhereAnimItWork = userWindowHeight / 3;

    let gifInstedVideo = document.createElement('img');
    gifInstedVideo.src = './img/person/image.gif';
    gifInstedVideo.classList.add('_gif-display')

    if (userWidth < 700) {
        pro_video_video.style.display = 'none'
        pro_gif.classList.add('_gif-display')
    } else {
        pro_video_video.style.display = 'block'
        pro_gif.classList.remove('_gif-display')
    }


    if (distanceToMainBlock < placewhereAnimItWork) {
        pro_video.classList.add('_problems__transform')
        pro_text.classList.add('_problems__transform')
    } else if (distanceToMainBlock >= userWindowHeight) {
        pro_video.classList.remove('_problems__transform')
        pro_text.classList.remove('_problems__transform')
    }


    //Personal block

    const personal = document.querySelector('.person__info'),
        pers_title = document.querySelector('.brief_title-tr'),
        pers_sub = document.querySelector('.person__brief_list'),
        pers_img = document.querySelector('.person__block-img');

    let distanceToPersonal = personal.getBoundingClientRect().top;
    let distanceToSub = pers_sub.getBoundingClientRect().top;
    let animStartPlace = userWindowHeight / 1.2;
    let animStartPlaceSub = userWindowHeight / 1.8;

    if (userWidth < 700) {
        animStartPlaceSub = userWindowHeight / 1.4;
    }

    if (distanceToPersonal < animStartPlace) {
        pers_title.classList.add('_pers__transform');
    } else {
        pers_title.classList.remove('_pers__transform');
    }

    if (distanceToSub < animStartPlaceSub) {
        pers_sub.classList.add('_pers__transform');
        pers_img.classList.add('_pers__transform');
    } else {
        pers_sub.classList.remove('_pers__transform');
        pers_img.classList.remove('_pers__transform');
    }


    //Process
    const process_iframe = document.querySelector('.iframe');

    let distanceToFrame = process_iframe.getBoundingClientRect().top;
    let frameStartAnim = userWindowHeight / 0.8;

    if(userWidth > 1500){
        frameStartAnim = userWindowHeight / 0.7
    }

    if(distanceToFrame < frameStartAnim){
        process_iframe.classList.add('_process_transform')
    }else{
        process_iframe.classList.remove('_process_transform')
    }

    //Price
    const price_block = document.querySelector('.price');
    const distanceToPrice = price_block.getBoundingClientRect().top;

    let frameStartAnimTabs = userWindowHeight / 2;

    let tab_ul = document.querySelector('.tabs__ul') ;   
    let tab_flex = document.querySelector('.price__flex');

    if(distanceToPrice < frameStartAnimTabs){
        tab_ul.classList.add('tabs__ul_transform')
        tab_flex.classList.add('price__flex-opacity')
    } else{
        tab_ul.classList.remove('tabs__ul_transform')
        tab_flex.classList.remove('price__flex-opacity')
    }


    //Form
    const form_block = document.querySelector('.form_feed');
    const form_animItem = document.querySelector('.form_wrapper');
    const distanceToForm = form_block.getBoundingClientRect().top;

    if(distanceToForm < frameStartAnimTabs){
        form_animItem.classList.add('form_wrapper__opacity');
    }else{
        form_animItem.classList.remove('form_wrapper__opacity');
    }

    //Tabs

    

    //Shares
    const share_container = document.querySelector('.shares');
    const share_item_0 = document.querySelector('.shares__item_0');
    const share_item_1 = document.querySelector('.shares__item_1');
    const share_item_2 = document.querySelector('.shares__item_2');

    const distanceToShares = share_container.getBoundingClientRect().top;
    
    let shareStartAnim = userWindowHeight / 2;

    if(userWidth < 700){
        shareStartAnim = userWindowHeight / 5;
    }

    if(distanceToShares < shareStartAnim){
        share_item_0.style.transform = `translate(0)`
        setTimeout(() => share_item_1.style.transform = `translate(0)`, 500)
        setTimeout(() => share_item_2.style.transform = `translate(0)`, 1000)
    }
    if(distanceToShares > frameStartAnim){
        share_item_0.removeAttribute('style');
        share_item_1.removeAttribute('style');
        share_item_2.removeAttribute('style');
    }



})



