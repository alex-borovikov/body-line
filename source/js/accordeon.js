const section = document.querySelector('.questions');
const accordionBodys = document.querySelectorAll('.accordeon-text');
const accordionBodyWrap = document.querySelectorAll('.accordeon__body');
const accordionTitles = document.querySelectorAll('.accordeon__title');
const accordionParagraph = document.querySelectorAll('.accordeon__title p');
const accordionImage = document.querySelectorAll('.accordeon__title img');


accordionBodys.forEach((item,index) => {
    item.classList.add(`accordeon-text_${index}`)
})
accordionBodyWrap.forEach((item,index) => item.setAttribute('data-number', `accordion_${index}`));
accordionParagraph.forEach((item,index) => {
    item.setAttribute('data-number', `accordion_${index}`);
})
accordionImage.forEach((item,index) => {
    item.setAttribute('data-number', `accordion_${index}`);
    item.classList.add(`acc-transform-${index}`)
})
accordionTitles.forEach((item,index) => {
    item.setAttribute('data-number', `accordion_${index}`);
})

section.addEventListener('click', function(event){
    let eventSection = event.target;
    
    let getNumberForAccordion = eventSection.getAttribute('data-number').slice(-1);

    let findElemAcc = document.querySelector(`.accordeon-text_${getNumberForAccordion}`);
    let findAccImg = document.querySelector(`.acc-transform-${getNumberForAccordion}`);
    
    findElemAcc.classList.toggle('opened')
    findAccImg.classList.toggle('acc-opened')
    
})