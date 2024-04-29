export default function decorate(block){
    const freeflowContainer = document.querySelector(".freeflow-container");
    freeflowContainer.classList.add('freeflowhtml', 'aem-GridColumn', 'aem-GridColumn--default--12');

    freeflowContainer.innerHTML = '';

    const sectionElement = document.createElement('section');

    const wraperDiv = document.createElement('div');
    wraperDiv.classList.add('home-bussness-heading-wraper');

    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container');

    const sliderContainer = document.createElement('div');
    sliderContainer.classList.add('sliderContainer');

    const slickSlider = document.createElement('div');
    slickSlider.classList.add('slider', 'single-item', 'slick-initialized', 'slick-slider');

    freeflowContainer.appendChild(sectionElement);
    sectionElement.appendChild(wraperDiv);
    wraperDiv.appendChild(containerDiv);

    [...block.children].forEach((row,r)=>{
        if(r==0){
            const h1Element = document.createElement('h1');
            h1Element.textContent = row.textContent.trim();
            containerDiv.appendChild(h1Element);
        } else{

        }
    })
}